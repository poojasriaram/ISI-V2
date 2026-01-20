import { Briefcase, GraduationCap, TrendingUp, Users2 } from "lucide-react";

export const benefits = [
    { icon: TrendingUp, title: "Growth", desc: "Clear career paths" },
    { icon: GraduationCap, title: "Learning", desc: "Continuous L&D" },
    { icon: Users2, title: "Culture", desc: "Inclusive workplace" },
    { icon: Briefcase, title: "Perks", desc: "Best-in-class benefits" },
];

export const officeLocations = [
    {
        id: "chennai",
        title: "Corporate Office",
        city: "Chennai",
        region: "south",
        lat: 13.0350,
        lng: 80.2131,
        address: ["No. 9, First Floor, Kamarajar Salai, Ashok Nagar", "Chennai – 600 083"],
        phone: "+91 77088 87878",
        email: "info@isisecurity.in"
    },
    {
        id: "madurai",
        title: "Administrative Office",
        city: "Madurai",
        region: "south",
        lat: 9.9252,
        lng: 78.1198,
        address: ["12-9, Santhosh Raj Plaza, Gandhi Nagar", "Madurai – 625 020"],
        phone: "+91 98949 99955 / 95009 59004",
        email: "mdu@isisecurity.in"
    },
    {
        id: "delhi",
        title: "Delhi Branch",
        city: "Noida",
        region: "north",
        lat: 28.5714,
        lng: 77.3820,
        address: ["Flat no. B-702, Grand Ajnara Heritage, Sector-74", "Noida, New Delhi"],
        phone: "+91 96555 99988",
        email: "info@isisecurity.in"
    },
    {
        id: "ap",
        title: "Andhra Pradesh Branch",
        city: "Chittoor",
        region: "south",
        lat: 13.3150,
        lng: 79.5854,
        address: ["No 2 Akn Layout, Chennai – Tirupathi Bye Pass Road", "Bharath Petrol Bunk Side, Nagari, Chittoor – 517590"],
        phone: "+91 95919 08593",
        email: "info@isisecurity.in"
    },
    {
        id: "bangalore",
        title: "Karnataka Branch",
        city: "Bengaluru",
        region: "south",
        lat: 12.9060,
        lng: 77.6253,
        address: ["No. 36, First Main Road, Kodichikkanahalli Main Road", "Bangalore – 560 076"],
        phone: "+91 73388 55588",
        email: "info@isisecurity.in"
    },
    {
        id: "hyderabad",
        title: "Telangana Branch",
        city: "Hyderabad",
        region: "south",
        lat: 17.3457,
        lng: 78.5522,
        address: ["H.No. B-1228, NGO Colony, Vanasthalipuram", "Hyderabad – 500 070"],
        phone: "+91 95919 08593",
        email: "info@isisecurity.in"
    },
    {
        id: "kerala",
        title: "Kerala Branch",
        city: "Kannur",
        region: "south",
        lat: 11.8745,
        lng: 75.3704,
        address: ["No.12/498, K.V. Building, Kannur post", "Kannur – 670 005"],
        phone: "+91 78789 95500",
        email: "info@isisecurity.in"
    },
    {
        id: "coimbatore",
        title: "Coimbatore Branch",
        city: "Coimbatore",
        region: "south",
        lat: 11.0018,
        lng: 77.0270,
        address: ["No: 5, Kakkan Nagar, 4th street, Singanallur", "Coimbatore – 641005"],
        phone: "+91 99944 88855",
        email: "info@isisecurity.in"
    },
    {
        id: "puducherry",
        title: "Puducherry Branch",
        city: "Karaikal",
        region: "south",
        lat: 10.9254,
        lng: 79.8380,
        address: ["No. 43, Ambuthital Thirupattinam, Polagam, Karaikal", "Puducherry – 609606"],
        phone: "+91 96555 99988",
        email: "info@isisecurity.in"
    },
    {
        id: "odisha",
        title: "Odisha Branch",
        city: "Bhubaneswar",
        region: "east",
        lat: 20.2961,
        lng: 85.8245,
        address: ["Plot no - 3761, URJA BHAWAN, GGP Enclave", "Rasulgarh, Bhubaneshwar - 751025"],
        phone: "+91 95919 08593",
        email: "info@isisecurity.in"
    },
    {
        id: "andaman",
        title: "Andaman and Nicobar Islands Branch",
        city: "Sri Vijaya Puram",
        region: "islands",
        lat: 11.6234,
        lng: 92.7265,
        address: ["Survey no 1364, RNK water supply, Kamraj nagar", "Sri Vijaya puram - 744105"],
        phone: "+91 96555 99988",
        email: "info@isisecurity.in"
    }
];

export interface JobOpening {
    id: number;
    title: string;
    location: string;
    department: string;
    experience: string;
    urgent: boolean;
    type: string;
    openings: number;
    workingDays?: string;
    workingHours?: string;
    gender?: string;
    description: string;
    responsibilities: string[];
    requirements: string[];
    salary: string;
    benefits?: string[];
    applicationEmail: string;
    applicationSubject: string;
}

export const openings: JobOpening[] = [
    {
        id: 1,
        title: "Tele Caller – Operations, Client Coordination & Recruitment",
        location: "Chinmaya Nagar Stage I, Chennai",
        department: "Operations",
        experience: "0-2 Years",
        urgent: false,
        type: "Full-time",
        openings: 4,
        workingDays: "Monday–Saturday",
        workingHours: "9:30 am–6:30 pm",
        description: "Industrial Security & Intelligence (India) Pvt Ltd is a leading security and manpower services provider based in Chennai, serving reputed clients with disciplined manpower, reliable operations, and strong compliance. The company is looking for a Tele Caller – Operations & Client Coordination to strengthen its client servicing, recruitment support, and back-office operations.",
        responsibilities: [
            "Coordinate with field officers and site supervisors over phone and WhatsApp to collect timesheets, share invoices and statutory documents, and obtain invoice acknowledgments",
            "Call guarding and housekeeping personnel for recruitment, interview scheduling, joining follow-up, and deployment to client sites as per manpower requirements",
            "Ensure timesheets and attendance are accurate; follow up for corrections before invoice preparation",
            "Send invoices to clients (email / WhatsApp / hard copy), track delivery, and secure acknowledgments",
            "Call clients to confirm invoice details, clarify basic queries, and record their feedback or service issues",
            "Discuss and record payment commitments and due dates with clients; follow up on pending payments and update trackers",
            "Track client tickets/complaints and coordinate with operations for timely resolution, keeping the client informed",
            "Maintain Excel-based trackers for timesheets, invoices, acknowledgments, recruitment status, feedback, and payment status"
        ],
        requirements: [
            "Minimum qualification: 12th Pass",
            "Experience: 0–2 years in tele-calling/customer service/operations coordination",
            "Tamil – mandatory",
            "English – preference for candidates who can communicate confidently with clients",
            "Good telephone etiquette, clear communication, and client-handling skills",
            "Basic knowledge of Excel and comfort with WhatsApp and email",
            "Strong follow-up habits, ownership, and willingness to coordinate with both clients, internal teams, and field staff"
        ],
        salary: "CTC starting from Rs. 1.5 lakhs per annum, higher salary based on current emoluments and relevant experience",
        benefits: [
            "Opportunity to learn operations, billing, recruitment, and client relationship management in a growing security services organization"
        ],
        applicationEmail: "careers@isisecurity.in",
        applicationSubject: "Application – Tele Caller (Operations & Client Coordination)"
    },
    {
        id: 2,
        title: "Checking Officer (Field Operations – Security & Housekeeping)",
        location: "Chennai Region – OMR IT corridor, Chennai South, Oragadam & Guduvanchery",
        department: "Operations",
        experience: "0-2 Years",
        urgent: true,
        type: "Full-time",
        openings: 2,
        workingDays: "Monday–Saturday",
        workingHours: "Full-time Field Role",
        description: "Industrial Security & Intelligence (India) Pvt Ltd is looking for energetic Trainee – Checking Officers to support field operations for our security and housekeeping services. As the first point of contact for clients in your region, you will ensure proper deployment of guards, service quality at sites, and accurate uniform and attendance control, working closely with our tele-caller and operations teams.",
        responsibilities: [
            "Visit client sites in your allocated area (OMR IT corridor region, Chennai South, Oragadam and Guduvanchery) to check security guards/housekeeping staff, attendance, grooming, and discipline",
            "Ensure required manpower strength in all shifts; coordinate with tele-callers and supervisors for replacements and new deployments",
            "Act as the first point of contact for clients, collect feedback/complaints, and ensure timely resolution with the support of the operations team",
            "Issue uniforms and accessories to guards, maintain proper records, and share updated uniform details with the inventory team",
            "Verify use of correct uniform, ID cards, and post instructions compliance during site checks",
            "Support accurate timesheets and attendance by verifying site records and coordinating corrections",
            "Carry out at least two-night checks per month in the assigned region to ensure night-shift readiness and presence of guards",
            "Prepare simple visit/checking reports for each site and submit them to the Operations Manager"
        ],
        requirements: [
            "Education: Minimum 12th Pass",
            "Experience: 0–2 years (security/manual guarding/housekeeping/field work preferred; freshers can apply)",
            "Two-wheeler with valid license is mandatory and willingness to travel across assigned Chennai locations",
            "Tamil speaking is mandatory; basic English will be an added advantage",
            "Smart appearance, good interpersonal skills, and ability to handle client interactions confidently",
            "Basic familiarity with WhatsApp and mobile apps; willingness to learn simple Excel/email reporting",
            "Ready to perform night rounds twice a month and work in a disciplined, process-driven environment"
        ],
        salary: "Rs. 2.5 lakhs per annum",
        applicationEmail: "careers@isisecurity.in",
        applicationSubject: "Application – Trainee: Checking Officer (Chennai Region)"
    },
    {
        id: 3,
        title: "Control Room Operator – Command Centre",
        location: "Chennai (Central Command Centre)",
        department: "Operations",
        experience: "0-5 Years",
        urgent: true,
        type: "Full-time",
        openings: 3,
        workingDays: "Rotational (24/7 Operations)",
        workingHours: "Rotational Shifts",
        gender: "Male",
        description: "The Control Room Operator – Command Centre plays a critical role in remotely monitoring client sites through CCTV and other systems, checking the alertness of field teams, and escalating incidents to the right personnel in real time. The position is part of a 24/7 command centre supporting security and housekeeping operations across multiple locations.",
        responsibilities: [
            "Monitor CCTV, alarms, GPS/guard-patrol systems, and other control room applications to detect unusual activity, safety issues, or security breaches at client sites",
            "Remotely call and check 'critical units' between 11:00 pm and 4:00 am to confirm guard alertness, headcount, and site status, and record their responses in the log",
            "Immediately alert the concerned field officer, checking officer, or client contact in case of incidents, abnormal behavior, absenteeism, or system alarms, and follow escalation procedures",
            "Maintain accurate occurrence books/logs of all calls, alerts, incidents, system faults, and actions taken during the shift",
            "Coordinate with tele callers and operations team to relay site information, deployment issues, and any client feedback received through the command Centre",
            "Ensure all cameras and monitoring systems are functioning; report and follow up on any technical issues with the IT/CCTV vendor or internal team",
            "Follow standard operating procedures (SOPs) during emergencies such as theft, fire, medical incidents, or access violations, and support field teams by providing real-time information",
            "Handover shift reports properly to the next operator, highlighting open incidents, vulnerable sites, and pending actions"
        ],
        requirements: [
            "Education: Minimum 12th Pass",
            "Experience: 0–5 years in security control room/CCTV monitoring/command Centre or related roles; freshers with good aptitude for monitoring work may also apply",
            "Gender: Male candidates only (24/7 shift and night-round focused role)",
            "Comfortable working in rotational shifts including nights, weekends, and holidays in a 24/7 environment",
            "Basic computer literacy; ability to work with CCTV software, monitoring dashboards, Excel, WhatsApp, and email (training will be provided)",
            "Good Tamil communication; basic English understanding to read instructions and communicate simple updates",
            "Strong concentration, patience, and attention to detail; ability to stay alert for long monitoring periods",
            "Calm under pressure, disciplined, and willing to strictly follow SOPs and escalation protocols"
        ],
        salary: "CTC: Around Rs. 2 lakhs per annum, higher salary based on current emoluments and relevant experience",
        benefits: [
            "Exposure to modern command-Centre operations and career growth opportunities into field supervision or senior control room positions"
        ],
        applicationEmail: "careers@isisecurity.in",
        applicationSubject: "Application – Control Room Operator (Command Centre)"
    },
    {
        id: 4,
        title: "Management Trainee – Special Projects of Governance",
        location: "Chennai (Corporate Office – Head Office)",
        department: "Management",
        experience: "0-2 Years",
        urgent: false,
        type: "Full-time",
        openings: 2,
        workingDays: "Monday–Saturday",
        workingHours: "9:30 am–6:30 pm",
        description: "The Management Trainee – Special Project on Governance will play a key analytical and coordination role supporting the company's governance initiatives. This project focuses on strengthening management decision-making through structured data reporting, business analysis, and governance process monitoring. The role provides exposure to corporate strategy, project bidding governance, investment cashflow analysis, and inventory management health checks.",
        responsibilities: [
            "Assist in the design, monitoring, and reporting of business governance metrics and review frameworks",
            "Conduct detailed data analysis using Excel to support management reviews, including cost-to-profit analysis, investment tracking, and project feasibility",
            "Develop and maintain dashboards and MIS reports for ongoing projects, highlighting key performance indicators and deviations",
            "Work with cross-functional teams to gather business requirements, validate data, and prepare executive summaries for decision-making",
            "Support the management team in evaluating project bids, cost models, and return-on-investment (ROI) assessments",
            "Analyze inventory movement, utilization trends, and financial health metrics to ensure governance compliance",
            "Automate recurrent reports and enable data-driven insights through advanced Excel functions and data tools",
            "Present consolidated findings and governance reports to management during review meetings"
        ],
        requirements: [
            "Education: MBA (Finance/Operations/General Management) from a reputed Tier II Business School",
            "Experience: 0–2 years (fresh MBA graduates or those with internship/project exposure in analytics, MIS, or finance are encouraged to apply)",
            "Advanced Excel proficiency including use of MATCH, INDEX, GOAL SEEK, PIVOT TABLES, SUMIFS, COUNTIFS, CHARTS, DATE FUNCTIONS, and preferably BASIC MACROS",
            "Good knowledge of business analytics and financial interpretation",
            "Ability to synthesize large data sets into meaningful analysis and dashboards",
            "Strong analytical thinking and attention to detail",
            "Excellent written and verbal communication skills",
            "Adaptable, self-driven, and motivated to work on governance and strategic projects",
            "High ethical standards and a structured approach to problem-solving"
        ],
        salary: "CTC: Around ₹3–4.2 lakhs per annum based on academic record and interview performance",
        benefits: [
            "Mentorship from company leadership and exposure to real-time decision-making processes",
            "Strong career growth opportunity into Business Analytics, Operations Management, or Financial Governance roles"
        ],
        applicationEmail: "careers@isisecurity.in",
        applicationSubject: "Application – Management Trainee (Special Project on Governance)"
    },
    {
        id: 5,
        title: "Data Entry Operator – Tally & Inventory Management",
        location: "Chinmaya Nagar Stage I, Chennai",
        department: "Finance",
        experience: "1-3 Years",
        urgent: false,
        type: "Full-time",
        openings: 2,
        workingDays: "Monday–Saturday",
        workingHours: "9:30 am–6:30 pm",
        gender: "Male",
        description: "The Data Entry Operator (Tally & Inventory Management) supports the Accounts and Administration departments by maintaining accurate entries in Tally Prime and Excel-based stock registers. The position ensures all accounting and inventory records are updated daily, including receipts, payments, sales, journal entries, and stock movement (issues and receipts). The role demands precision, speed, and accountability in handling both digital data entry and physical verification of goods in coordination with the admin and store functions.",
        responsibilities: [
            "Enter day-to-day accounting transactions in Tally Prime such as receipts, payments, sales, purchase, and journal vouchers",
            "Maintain inventory records in both system and physical formats — including stock issue registers, material receipts, and goods movement logs",
            "Reconcile data between Tally and Excel registers to ensure accuracy and timely updating of balances",
            "Assist the accounts team in verifying ledger balances, supporting documents, and monthly summaries",
            "Update and maintain internal MIS sheets for stock and cash flow monitoring",
            "Support stock verification activities in the field or stores along with the audit or operational teams",
            "Ensure filing and documentation of vouchers, delivery challans, and material receipt notes",
            "Coordinate with store, operations, and finance teams for clarifications or discrepancy resolution"
        ],
        requirements: [
            "Education: Any degree with working knowledge of accounting and inventory documentation",
            "Experience: 1–3 years in Tally data entry and inventory management roles",
            "Proficient in Tally Prime data entry and voucher management",
            "Strong working knowledge of MS Excel — formulas, sorting, filters, SUMIFS, COUNTIFS, and basic data formatting",
            "Exposure to accounting concepts such as voucher types, ledger classification, balancing, and reconciliations (GST knowledge not required)",
            "Good communication in Tamil and basic understanding of English",
            "Detail-oriented and systematic in maintaining records",
            "Willing to handle physical stock registers and site/store visits as part of inventory checks",
            "Dependable, disciplined, and cooperative team player"
        ],
        salary: "CTC: Around ₹1.8 lakhs per annum (not a constraint for the right candidate; final offer based on current emoluments)",
        benefits: [
            "Opportunity to gain exposure to management reporting systems and inventory governance practices",
            "Growth prospects to senior roles in Accounts, Inventory Control, or MIS operations"
        ],
        applicationEmail: "careers@isisecurity.in",
        applicationSubject: "Application – Data Entry Operator (Tally & Inventory Management)"
    },
    {
        id: 6,
        title: "Accounts Manager – Internal Audit",
        location: "Chinmaya Nagar Stage I, Chennai",
        department: "Finance",
        experience: "5-10 Years",
        urgent: true,
        type: "Full-time",
        openings: 1,
        workingDays: "Monday–Saturday",
        workingHours: "9:30 am–6:30 pm",
        description: "The Accounts Manager – Internal Audit plays a vital role in ensuring that all receipts, payments, and accounting entries align with system data and statutory requirements. The position is responsible for conducting regular reconciliations across wages, vendor, and statutory payments, verifying accuracy, and ensuring timely closure of audit observations. This is a hands-on role requiring strong analytical skills, financial discipline, and the ability to identify variances and resolve them independently.",
        responsibilities: [
            "Perform internal audit of receipts and payments for wages, vendor bills, and statutory liabilities (PF, ESI, TDS, GST) to ensure accuracy and compliance",
            "Reconcile receipts against invoices to verify correctness and identify shortages or pending adjustments",
            "Scrutinize TDS deductions on payments and sales, verify accurate ledger posting, and ensure timely remittance to relevant authorities",
            "Reconfirm statutory entries in Tally Prime with documentation and supporting approvals before payment release",
            "Maintain audit trails and generate exception reports highlighting delays, deviations, or inconsistencies",
            "Prepare and present governance reports summarizing key reconciliation results and track open points until closure",
            "Supervise and guide the accounts team in day-to-day audit tasks, ensuring adherence to company policies and internal controls",
            "Coordinate with internal stakeholders and management for audit clarifications and compliance follow-ups",
            "Support senior management with periodic MIS dashboards using Excel (VLOOKUP, PIVOT, and numeric validations) for decision making"
        ],
        requirements: [
            "Education: B.Com / M.Com (Finance / Accounting specialization preferred)",
            "Experience: 5–10 years of experience in internal audit, accounts reconciliation, or payment control functions",
            "Proficient in Tally Prime and MS Excel (Pivot Tables, VLOOKUP, data validation, and reconciliation formulas)",
            "Good understanding of accounting principles, ledger control, TDS deduction & remittance, and statutory bookkeeping",
            "Strong analytical and reconciliation abilities with a high sense of accountability",
            "Ability to work independently and ensure accuracy under timelines",
            "Effective in guiding and mentoring junior staff",
            "Disciplined, integrity-driven, and well-organized in documentation practices"
        ],
        salary: "CTC: Commensurate with experience and current package",
        benefits: [
            "Stable, growth-oriented environment with exposure to governance and internal control systems",
            "Opportunity to participate in financial process improvement and compliance initiatives"
        ],
        applicationEmail: "careers@isisecurity.in",
        applicationSubject: "Application – Accounts Manager (Internal Audit)"
    }
];
