/**
 * Career Intent Detection Engine for ISI Chatbots
 * 
 * Implements 100 Reserved Career Keywords, multi-stage message normalization,
 * spelling error correction, and context-weighted intent scoring.
 * 
 * Prevents false positives on single generic words (e.g., "What is your role in AI?")
 * and strictly ensures Career applications never pollute Sales Lead pipelines or Jira.
 */

// ==========================================
// 100 RESERVED CAREER KEYWORDS (6 CATEGORIES)
// ==========================================
export const RESERVED_CAREER_KEYWORDS = {
  // 1. Job / Employment (20 Keywords)
  jobEmployment: [
    'job',
    'jobs',
    'job opening',
    'job openings',
    'employment',
    'employments',
    'employed',
    'employer',
    'employment opportunity',
    'employment opportunities',
    'work',
    'working',
    'workplace',
    'career',
    'careers',
    'career opportunity',
    'career opportunities',
    'profession',
    'professional opportunity',
    'work opportunity'
  ],

  // 2. Position / Role (15 Keywords)
  positionRole: [
    'position',
    'positions',
    'open position',
    'open positions',
    'vacant position',
    'vacancies',
    'vacancy',
    'role',
    'roles',
    'open role',
    'available role',
    'available position',
    'current position',
    'hiring position',
    'job role'
  ],

  // 3. Hiring / Recruitment (15 Keywords)
  hiringRecruitment: [
    'hiring',
    'hired',
    'recruitment',
    'recruit',
    'recruiting',
    'recruiter',
    'recruitment process',
    'hiring process',
    'hiring now',
    'actively hiring',
    'recruitment drive',
    'hiring drive',
    'campus hiring',
    'mass hiring',
    'talent acquisition'
  ],

  // 4. Application / Applying (20 Keywords)
  applicationApplying: [
    'apply',
    'applying',
    'applied',
    'application',
    'applications',
    'job application',
    'job applications',
    'apply for job',
    'apply for a job',
    'submit application',
    'submit my application',
    'application form',
    'career application',
    'employment application',
    'job enquiry',
    'job inquiry',
    'application status',
    'application process',
    'application submission',
    'submit resume'
  ],

  // 5. Resume / CV / Profile (10 Keywords)
  resumeCvProfile: [
    'resume',
    'resumes',
    'résumé',
    'cv',
    'curriculum vitae',
    'upload resume',
    'upload cv',
    'send resume',
    'send cv',
    'resume submission'
  ],

  // 6. Candidate / Interview / Selection (20 Keywords)
  candidateInterviewSelection: [
    'candidate',
    'candidates',
    'applicant',
    'applicants',
    'interview',
    'interviews',
    'interview process',
    'interview schedule',
    'interview opportunity',
    'selection',
    'selected',
    'shortlisted',
    'shortlisting',
    'recruitment interview',
    'candidate profile',
    'candidate application',
    'joining',
    'joining date',
    'internship',
    'intern'
  ]
};

// Flattened list of all 100 keywords for reference
export const ALL_100_CAREER_KEYWORDS: string[] = [
  ...RESERVED_CAREER_KEYWORDS.jobEmployment,
  ...RESERVED_CAREER_KEYWORDS.positionRole,
  ...RESERVED_CAREER_KEYWORDS.hiringRecruitment,
  ...RESERVED_CAREER_KEYWORDS.applicationApplying,
  ...RESERVED_CAREER_KEYWORDS.resumeCvProfile,
  ...RESERVED_CAREER_KEYWORDS.candidateInterviewSelection
];

// Common spelling variations dictionary
const SPELLING_CORRECTIONS: Record<string, string> = {
  'employement': 'employment',
  'employmnt': 'employment',
  'vacany': 'vacancy',
  'vacancys': 'vacancies',
  'oppurtunity': 'opportunity',
  'opurtunity': 'opportunity',
  'oppurtunities': 'opportunities',
  'aplication': 'application',
  'applcation': 'application',
  'applicaton': 'application',
  'aplications': 'applications',
  'intervew': 'interview',
  'intrview': 'interview',
  'interviews': 'interview',
  'resumee': 'resume',
  'rezume': 'resume',
  'resum': 'resume',
  'positiom': 'position',
  'posishun': 'position',
  'recuritment': 'recruitment',
  'recrutment': 'recruitment',
  'recuitment': 'recruitment',
  'carrer': 'career',
  'carear': 'career',
  'craeer': 'career',
  'carreer': 'career',
  'aply': 'apply',
  'applyy': 'apply',
  'aplying': 'applying',
  'hireing': 'hiring',
  'internshp': 'internship',
  'candidat': 'candidate',
  'canidate': 'candidate',
  'intrested': 'interested',
  'curriculam': 'curriculum',
  'fresher': 'freshers',
  'opening': 'openings'
};

/**
 * Normalizes input message:
 * - Lowercase & trimmed
 * - Collapses repeated letters (e.g. "jobsss" -> "jobs", "careeeer" -> "career")
 * - Replaces common typos/variations with standardized tokens
 */
export function normalizeCareerMessage(rawMessage: string): string {
  if (!rawMessage) return '';

  let normalized = rawMessage
    .toLowerCase()
    .trim()
    .replace(/[^\w\s\+]/g, ' ') // Replace punctuation with space
    .replace(/\s+/g, ' ');

  // Collapse 2 or more repeated trailing letters (e.g. "jobsss" -> "jobs", "plsss" -> "pls", "careeeer" -> "career")
  normalized = normalized.replace(/([a-z])\1{2,}/g, '$1');
  // Specifically clean "jobss" -> "jobs", "careerss" -> "careers"
  normalized = normalized.replace(/\bjobss+\b/g, 'jobs');
  normalized = normalized.replace(/\bcareerss+\b/g, 'careers');

  // Apply word-by-word spelling corrections
  const words = normalized.split(' ');
  const correctedWords = words.map(w => {
    // Strip trailing 's' if doubled like 'jobss'
    const cleanWord = w.replace(/ss+$/, 's');
    return SPELLING_CORRECTIONS[cleanWord] || SPELLING_CORRECTIONS[w] || cleanWord;
  });
  normalized = correctedWords.join(' ');

  return normalized;
}

export interface CareerIntentResult {
  score: number;
  intent: 'CAREER' | 'CLARIFICATION' | 'NORMAL';
  matchedKeywords: string[];
  matchedPhrases: string[];
  roleDetected?: string;
  explanation: string;
}

/**
 * Evaluates career intent with context scoring:
 * - Score >= 70: Confirmed Career Intent (Classify Intent = CAREER, Stop Sales Lead flow, Route to Career flow)
 * - Score 40-69: Ambiguous Intent (Ask user for clarification)
 * - Score < 40: Non-Career / Normal flow (Sales, Services, Academy)
 */
export function detectCareerIntent(rawMessage: string): CareerIntentResult {
  const normalized = normalizeCareerMessage(rawMessage);
  if (!normalized) {
    return {
      score: 0,
      intent: 'NORMAL',
      matchedKeywords: [],
      matchedPhrases: [],
      explanation: 'Empty message'
    };
  }

  let score = 0;
  const matchedKeywords: string[] = [];
  const matchedPhrases: string[] = [];

  // 1. High-Confidence Career Phrases (Weight: +70 to +85)
  const highConfidencePhrases = [
    'looking for a job',
    'looking for job',
    'looking for work',
    'looking for career',
    'looking for employment',
    'want a job',
    'want to work at',
    'want to join isi',
    'need a job',
    'searching for a job',
    'find a job',
    'job opening',
    'job openings',
    'job opportunity',
    'job opportunities',
    'open position',
    'open positions',
    'vacant position',
    'available position',
    'available role',
    'available vacancies',
    'current position',
    'hiring position',
    'job role',
    'career opportunity',
    'career opportunities',
    'professional opportunity',
    'work opportunity',
    'apply for job',
    'apply for a job',
    'apply for position',
    'apply for a position',
    'apply for role',
    'submit application',
    'submit my application',
    'career application',
    'employment application',
    'application form',
    'job enquiry',
    'job inquiry',
    'application status',
    'application process',
    'application submission',
    'submit resume',
    'upload resume',
    'send resume',
    'resume submission',
    'upload cv',
    'send cv',
    'curriculum vitae',
    'recruitment process',
    'hiring process',
    'hiring now',
    'actively hiring',
    'recruitment drive',
    'hiring drive',
    'campus hiring',
    'mass hiring',
    'talent acquisition',
    'interview process',
    'interview schedule',
    'interview opportunity',
    'recruitment interview',
    'candidate profile',
    'candidate application',
    'joining date',
    'internship opportunity',
    'internship',
    'openings for',
    'opening for',
    'vacancy for',
    'vacancies for',
    'fresher job',
    'experienced job',
    'fresher vacancy',
    'jobs in',
    'job in',
    'careers in',
    'openings in',
    'vacancies in'
  ];

  for (const phrase of highConfidencePhrases) {
    if (normalized.includes(phrase)) {
      score += 75;
      matchedPhrases.push(phrase);
    }
  }

  // 2. High-Intent Action + Target Combinations (Weight: +75 to +85)
  const hasApplyAction = /\b(apply|applying|applied|submit|submitting|send|sending|upload|uploading|attach)\b/.test(normalized);
  const hasCareerTarget = /\b(job|jobs|position|positions|role|roles|vacancy|vacancies|resume|cv|application|profile|internship|post|opening|openings)\b/.test(normalized);
  
  if (hasApplyAction && hasCareerTarget) {
    score += 80;
    matchedPhrases.push('apply + career_target');
  }

  const hasSeekingAction = /\b(looking for|seeking|searching for|want to get|need|interested in|are you hiring|is isi hiring|any openings|any vacancy|any vacancies)\b/.test(normalized);
  const hasWorkTarget = /\b(job|jobs|work|employment|career|careers|position|role|vacancy|vacancies|opening|openings|internship|freshers|candidate|technician|engineer|guard|supervisor|manager|staff)\b/.test(normalized);

  if (hasSeekingAction && hasWorkTarget) {
    score += 80;
    matchedPhrases.push('seeking + work_target');
  }

  // Direct "hiring" with role or target (e.g. "hiring freshers", "hiring for CCTV", "hiring security guards")
  if (/\bhiring\s+(for|freshers?|experienced|staff|guards?|technicians?|engineers?|roles?|positions?)\b/.test(normalized)) {
    score += 75;
    matchedPhrases.push('hiring + target');
  }

  // 3. Strong Standalone Career Indicators (Weight: +50 to +60)
  const strongKeywords = [
    'resume', 'resumes', 'résumé', 'cv', 'interview', 'interviews', 
    'shortlisted', 'shortlisting', 'vacancies', 'recruiter', 'recruitment', 
    'internship', 'intern', 'applicant', 'applicants'
  ];

  for (const kw of strongKeywords) {
    const regex = new RegExp(`\\b${kw}\\b`, 'i');
    if (regex.test(normalized)) {
      score += 55;
      matchedKeywords.push(kw);
    }
  }

  // 4. Moderate Career Keywords (Weight: +35 to +40)
  const moderateKeywords = [
    'job', 'jobs', 'career', 'careers', 'hiring', 'vacancy', 'employment'
  ];

  for (const kw of moderateKeywords) {
    const regex = new RegExp(`\\b${kw}\\b`, 'i');
    if (regex.test(normalized)) {
      score += 40;
      matchedKeywords.push(kw);
    }
  }

  // 5. Context-Sensitive / Ambiguous Keywords (Weight: +10 to +15 ONLY)
  // E.g. "role", "work", "position", "candidate", "profession", "selection", "joining"
  // If unaccompanied by career phrases or apply actions, these will stay < 40 and won't trigger Career false positive.
  const ambiguousKeywords = [
    'role', 'roles', 'position', 'positions', 'work', 'working', 
    'workplace', 'profession', 'candidate', 'candidates', 'selection', 'joining'
  ];

  for (const kw of ambiguousKeywords) {
    const regex = new RegExp(`\\b${kw}\\b`, 'i');
    if (regex.test(normalized) && !matchedKeywords.includes(kw)) {
      // Check for business inquiries like "what is your role in..." or "how does this system work"
      const isBusinessContext = /role\s+in|work\s+with\s+our\s+system|how\s+does\s+it\s+work|our\s+workplace|market\s+position/i.test(normalized);
      if (!isBusinessContext) {
        score += 15;
      }
      matchedKeywords.push(kw);
    }
  }

  // Deduct score if explicit sales/enterprise keywords dominate
  if (/\b(rfq|tender|quote|pricing|cost for site|hire security guards for my|commercial contract|vendor)\b/i.test(normalized)) {
    if (!hasApplyAction && !normalized.includes('resume') && !normalized.includes('cv')) {
      score = Math.max(0, score - 50);
    }
  }

  // Extract Mentioned Role if any
  let roleDetected: string | undefined;
  const rolePatterns = [
    /(?:openings?|jobs?|position|role|vacancy|vacancies|hiring)\s+(?:for|as)?\s+([a-z0-9\s\-]+?)(?:\?|$|\.|\band\b)/i,
    /(?:apply\s+(?:for|as))\s+([a-z0-9\s\-]+?)(?:\?|$|\.|\band\b)/i
  ];

  for (const pattern of rolePatterns) {
    const match = normalized.match(pattern);
    if (match && match[1]) {
      const candidateRole = match[1].trim();
      if (candidateRole.length > 2 && candidateRole.length < 40 && !['a', 'the', 'any', 'some'].includes(candidateRole)) {
        roleDetected = candidateRole.charAt(0).toUpperCase() + candidateRole.slice(1);
        break;
      }
    }
  }

  // Threshold Decision Logic
  let intent: 'CAREER' | 'CLARIFICATION' | 'NORMAL';
  let explanation = '';

  if (score >= 70) {
    intent = 'CAREER';
    explanation = `High career intent score (${score}). Matches: ${[...matchedPhrases, ...matchedKeywords].join(', ')}`;
  } else if (score >= 40) {
    intent = 'CLARIFICATION';
    explanation = `Moderate career intent score (${score}). Requires user clarification between Career vs Services.`;
  } else {
    intent = 'NORMAL';
    explanation = `Low career intent score (${score}). Proceeding with standard chatbot sales/service flow.`;
  }

  return {
    score,
    intent,
    matchedKeywords: Array.from(new Set(matchedKeywords)),
    matchedPhrases: Array.from(new Set(matchedPhrases)),
    roleDetected,
    explanation
  };
}

/**
 * Standard ISI Career Opportunities Data for Chatbot display
 */
export const CURRENT_CAREER_OPPORTUNITIES = [
  {
    id: 'sec-guard',
    title: 'Security Officer / Armed & Unarmed Guard',
    location: 'Chennai, Coimbatore, Hosur, Bangalore & Multiple Pan-India Sites',
    experience: '0 - 5 Years (Ex-servicemen / PSARA preferred)',
    department: 'Manned Guarding & Field Operations'
  },
  {
    id: 'c4i-analyst',
    title: 'Command Center (C4i) & AI Video Analyst',
    location: 'Chennai Central SOC',
    experience: '1 - 4 Years (VMS, CCTV & Incident Triaging)',
    department: 'Electronic Security & Technology'
  },
  {
    id: 'ops-supervisor',
    title: 'Field Operations Supervisor / Shift Lead',
    location: 'Madurai, Salem, Tiruchirappalli, Sivagangai',
    experience: '2 - 6 Years in Industrial / Commercial Security',
    department: 'Operations & Site Governance'
  },
  {
    id: 'facility-tech',
    title: 'Facility & MEP Technician (HVAC, BMS, Electrical)',
    location: 'Chennai & Bangalore Tech Parks',
    experience: '1 - 5 Years in Hard FM / Technical Services',
    department: 'Integrated Facility Management'
  },
  {
    id: 'ai-dev',
    title: 'AI / Software Engineer (Edge Analytics & Security Platforms)',
    location: 'Chennai HQ / Hybrid',
    experience: '2 - 5 Years (Python, Computer Vision, React, Cloud)',
    department: 'Technology & Product Engineering'
  }
];

/**
 * Generates the standardized Bot Response for Career Intent
 */
export function getCareerIntentResponse(roleDetected?: string): {
  text: string;
  actions: Array<{ label: string; value: string; type: 'link' | 'quickReply' | 'contact' }>;
} {
  const roleText = roleDetected ? ` for **${roleDetected}**` : '';

  const text = `We have a dedicated **Careers & Talent Portal** for employment opportunities, job openings, and applications${roleText}!\n\n` +
    `**Current Active Openings:**\n` +
    CURRENT_CAREER_OPPORTUNITIES.map(job => `• **${job.title}** (${job.location})`).join('\n') +
    `\n\nWould you like to submit an instant career application here in chat, or browse our full Careers portal?`;

  return {
    text,
    actions: [
      { label: "Apply in Chatbot", value: "apply_career_chat", type: "quickReply" },
      { label: "View Careers Page", value: "/career", type: "link" },
      { label: "Submit CV / Resume", value: "apply_career_chat", type: "quickReply" },
      { label: "HR Department", value: "hr_contact_info", type: "quickReply" }
    ]
  };
}

/**
 * Generates the Clarification Bot Response for moderate scores (40-69)
 */
export function getCareerClarificationResponse(): {
  text: string;
  actions: Array<{ label: string; value: string; type: 'quickReply' }>;
} {
  return {
    text: "To make sure I guide you to the right department, could you please clarify your inquiry?\n\nAre you looking for **Career & Job Opportunities** to join ISI, or are you exploring our **Enterprise Security & Facility Services** for your organization?",
    actions: [
      { label: "💼 Career & Job Opportunities", value: "i am looking for a job", type: "quickReply" },
      { label: "🛡️ Enterprise Security Services", value: "explore security services", type: "quickReply" }
    ]
  };
}
