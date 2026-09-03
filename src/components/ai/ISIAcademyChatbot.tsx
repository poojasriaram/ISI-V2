import React, { useState, useRef, useEffect } from 'react';
import { 
  X, 
  Minus, 
  Send, 
  Sparkles, 
  GraduationCap, 
  BookOpen, 
  Briefcase, 
  ShieldCheck, 
  Users, 
  CheckCircle2, 
  BotMessageSquare,
  Building2,
  ArrowRight
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { submitChatbotLead } from '@/services/formService';
import { toast } from 'sonner';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  options?: string[];
  timestamp: string;
}

type LeadStep = 'idle' | 'name' | 'email' | 'phone' | 'organization' | 'interest' | 'completed';

export const ISIAcademyChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [leadStep, setLeadStep] = useState<LeadStep>('idle');
  const [leadData, setLeadData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    interest: ''
  });

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const initialMessage: Message = {
    id: '1',
    sender: 'bot',
    text: "Welcome to ISI Academy. I'm your Academy AI Advisor. How can I help you today?",
    options: [
      "Explore Programs",
      "Find the Right Course",
      "Certification Details",
      "Corporate Training",
      "Security Training",
      "Career Guidance",
      "Talk to an Academy Advisor"
    ],
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  };

  const [messages, setMessages] = useState<Message[]>([initialMessage]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen && !isMinimized) {
      scrollToBottom();
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [messages, isOpen, isMinimized]);

  const toggleChat = () => {
    if (!isOpen) {
      setIsOpen(true);
      setIsMinimized(false);
    } else {
      setIsOpen(false);
    }
  };

  const toggleMinimize = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMinimized(!isMinimized);
  };

  const isAcademyQuery = (query: string): boolean => {
    const keywords = [
      'academy', 'course', 'program', 'learn', 'train', 'certif', 'residency',
      'cdac', 'c-dac', 'ieee', 'cyber', 'soc', 'guard', 'supervisor', 'manager',
      'leadership', 'campus', 'chennai', 'coimbatore', 'madurai', 'hosur', 'salem',
      'sivagangai', 'advisor', 'corporate', 'workforce', 'enroll', 'fees', 'duration',
      'career', 'upskill', 'ai', 'video analytics', 'electronic security', 'risk', 'compliance'
    ];
    const q = query.toLowerCase();
    return keywords.some(k => q.includes(k));
  };

  const isLeadIntent = (query: string): boolean => {
    const leadKeywords = [
      'talk to an academy advisor', 'talk to advisor', 'advisor', 'enroll', 'enrollment',
      'register', 'join', 'corporate training', 'enterprise training', 'consultation',
      'course consultation', 'contact advisor', 'certification enquiry', 'apply'
    ];
    const q = query.toLowerCase();
    return leadKeywords.some(k => q.includes(k));
  };

  const handleSend = async (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query) return;

    if (!textToSend) {
      setInput('');
    }

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setIsTyping(true);

    // If we are currently in progressive lead capture mode
    if (leadStep !== 'idle' && leadStep !== 'completed') {
      await processLeadStep(query);
      return;
    }

    // Check if user intends to request advisor / lead capture
    if (isLeadIntent(query)) {
      setTimeout(() => {
        setLeadStep('name');
        const botMsg: Message = {
          id: (Date.now() + 1).toString(),
          sender: 'bot',
          text: "I'd be glad to connect you with an ISI Academy Advisor! Let's get a few quick details.\n\nFirst, what is your **Full Name**?",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages(prev => [...prev, botMsg]);
        setIsTyping(false);
      }, 600);
      return;
    }

    // Standard Query Evaluation
    setTimeout(() => {
      let botResponseText = "";
      let options: string[] | undefined = undefined;

      if (!isAcademyQuery(query)) {
        botResponseText = "I'm the ISI Academy AI Advisor. I can help with Academy programs, training, certifications, learning paths and workforce development.";
        options = ["Explore Programs", "Talk to an Academy Advisor", "Corporate Training"];
      } else {
        const q = query.toLowerCase();
        if (q.includes('explore programs') || q.includes('programs') || q.includes('courses') || q.includes('find the right course')) {
          botResponseText = "ISI Academy offers specialized learning programs across 7 key security domains:\n\n1. **Security Operations** (SOC Analysis, Control Room Ops)\n2. **Electronic & Integrated Security** (CCTV, Access Control, VMS)\n3. **Security Technology** (IoT Security, Sensor Systems, Edge Tech)\n4. **Risk & Compliance** (ISO 27001, PSARA, Site Audits)\n5. **Corporate Security** (Asset & Executive Protection, Loss Prevention)\n6. **Security Leadership** (Team Command, Crisis Management)\n7. **AI & Video Analytics** (Computer Vision, Automated Anomaly Detection)\n\nAll programs combine lab practice with our mandatory **3-Month Industry Residency**.";
          options = ["Certification Details", "Corporate Training", "Career Guidance", "Talk to an Academy Advisor"];
        } else if (q.includes('certif') || q.includes('accreditation')) {
          botResponseText = "ISI Academy certifications validate practical operational competency rather than just theoretical attendance. Programs feature:\n\n• Rigorous practical lab evaluation\n• CDAC & IEEE Blended Learning pathways where applicable\n• Real-world scenario testing in cyber ranges & physical labs\n• Verifiable industry workforce credentials";
          options = ["Explore Programs", "Career Guidance", "Talk to an Academy Advisor"];
        } else if (q.includes('corporate') || q.includes('enterprise') || q.includes('workforce')) {
          botResponseText = "For Enterprise Organizations, ISI Academy delivers tailored workforce capability building:\n\n• **Workforce Assessment** — Evaluate current team baseline\n• **Customized Curriculum** — Targeted to your operational SOPs\n• **Hands-on Skill Development** — Live simulation & threat triaging\n• **Continuous Capability** — Benchmark & certify operational readiness";
          options = ["Talk to an Academy Advisor", "Explore Programs"];
        } else if (q.includes('career') || q.includes('guidance') || q.includes('job') || q.includes('path')) {
          botResponseText = "ISI Academy structures clear progression pathways for:\n\n• **Security Professionals & Guards** — Upskill to technology operators\n• **Supervisors & Shift Leads** — Master incident management & VMS\n• **Security Managers** — Risk governance, crisis command & budgeting\n• **Tech Aspirants & Engineers** — Electronic security & AI surveillance integration";
          options = ["Explore Programs", "Talk to an Academy Advisor"];
        } else {
          botResponseText = "ISI Academy operates on a **LEARN → PRACTICE → CERTIFY → DEPLOY → GROW** framework. Every scholar completes hands-on practical lab training across 6 regional campuses in Tamil Nadu and a mandatory 3-Month Industry Residency in live operational environments.";
          options = ["Explore Programs", "Find the Right Course", "Talk to an Academy Advisor"];
        }
      }

      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: botResponseText,
        options,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 700);
  };

  const processLeadStep = async (userAnswer: string) => {
    let nextStep: LeadStep = 'idle';
    let promptText = "";
    let updatedData = { ...leadData };

    if (leadStep === 'name') {
      updatedData.name = userAnswer;
      nextStep = 'email';
      promptText = `Nice to meet you, **${userAnswer}**! What is your **Email Address**?`;
    } else if (leadStep === 'email') {
      updatedData.email = userAnswer;
      nextStep = 'phone';
      promptText = `Got it. Could you share your **Mobile / Phone Number** so an advisor can reach you?`;
    } else if (leadStep === 'phone') {
      updatedData.phone = userAnswer;
      nextStep = 'organization';
      promptText = `Thank you! What **Organization / Company** do you represent (or write 'Student' / 'Individual')?`;
    } else if (leadStep === 'organization') {
      updatedData.organization = userAnswer;
      nextStep = 'interest';
      promptText = `Great! Lastly, what is your primary **Area of Interest** or program (e.g. Security Operations, Cyber Range, Corporate Training)?`;
    } else if (leadStep === 'interest') {
      updatedData.interest = userAnswer;
      nextStep = 'completed';
    }

    setLeadData(updatedData);

    if (nextStep === 'completed') {
      // Submit lead
      try {
        await submitChatbotLead(
          updatedData.name,
          updatedData.phone,
          updatedData.email,
          `ISI Academy Inquiry: ${updatedData.interest} (Org: ${updatedData.organization})`,
          'No',
          'ISI Academy'
        );

        toast.success("Academy Inquiry Submitted!", {
          description: "An ISI Academy Advisor will contact you shortly."
        });

        setTimeout(() => {
          const finalMsg: Message = {
            id: (Date.now() + 1).toString(),
            sender: 'bot',
            text: `Thank you, **${updatedData.name}**! Your inquiry has been submitted to our Academic Advisory team.\n\nAn advisor will reach out to you at **${updatedData.email}** / **${updatedData.phone}** shortly.`,
            options: ["Explore Programs", "Back to Academy Overview"],
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          };
          setMessages(prev => [...prev, finalMsg]);
          setIsTyping(false);
          setLeadStep('idle');
        }, 800);
      } catch (err) {
        setTimeout(() => {
          const errMsg: Message = {
            id: (Date.now() + 1).toString(),
            sender: 'bot',
            text: `Thank you, **${updatedData.name}**! We have logged your request. You can also reach our academic desk at academy@isisecurity.in.`,
            options: ["Explore Programs"],
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          };
          setMessages(prev => [...prev, errMsg]);
          setIsTyping(false);
          setLeadStep('idle');
        }, 800);
      }
      return;
    }

    setLeadStep(nextStep);
    setTimeout(() => {
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: promptText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end pointer-events-none">
      {/* 🚀 CHAT WINDOW */}
      <div 
        className={cn(
          "bg-white border border-slate-200/80 shadow-2xl rounded-[2.2rem] overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] origin-bottom-right mb-4 flex flex-col pointer-events-auto relative dark:bg-slate-900 dark:border-slate-800",
          isOpen && !isMinimized 
            ? "w-[92vw] sm:w-[420px] h-[620px] max-h-[82vh] opacity-100 scale-100 translate-y-0" 
            : isOpen && isMinimized 
              ? "w-[300px] h-[64px] opacity-100 scale-100 translate-y-0 overflow-hidden"
              : "w-0 h-0 opacity-0 scale-95 translate-y-20 p-0"
        )}
      >
        {/* HEADER - DISTINCT ACADEMY BRANDING */}
        <div className="px-5 py-4 bg-slate-950 text-white relative overflow-hidden flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3 relative z-10">
            <div className="relative">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center shadow-lg shadow-blue-500/20 border border-blue-400/30 text-white">
                <GraduationCap size={22} />
              </div>
              <span className="absolute -bottom-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border-2 border-slate-950"></span>
              </span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-white text-base leading-tight tracking-wide">
                  ISI Academy AI Advisor
                </h3>
                <span className="bg-blue-500/20 text-blue-300 text-[10px] font-extrabold px-2 py-0.5 rounded-full border border-blue-400/20">
                  OFFICIAL
                </span>
              </div>
              <p className="text-[10px] text-slate-400 font-medium tracking-wider mt-0.5">
                Security Workforce & Education Platform
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1 relative z-10">
            <Button
              aria-label="Minimize Chat"
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-full hover:bg-white/10 text-slate-300 transition-colors"
              onClick={toggleMinimize}
            >
              <Minus size={18} />
            </Button>
            <Button
              aria-label="Close Chat"
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-full hover:bg-white/10 text-slate-300 transition-colors"
              onClick={toggleChat}
            >
              <X size={18} />
            </Button>
          </div>
        </div>

        {/* MINIMIZED PREVIEW HEADER CONTENT */}
        {!isMinimized && (
          <>
            {/* MESSAGES FEED */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 bg-slate-50/70 dark:bg-slate-900/50">
              {messages.map((msg) => (
                <div key={msg.id} className={cn("flex flex-col space-y-2", msg.sender === 'user' ? "items-end" : "items-start")}>
                  <div 
                    className={cn(
                      "max-w-[85%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed shadow-sm",
                      msg.sender === 'user'
                        ? "bg-blue-600 text-white rounded-br-none font-medium"
                        : "bg-white text-slate-800 border border-slate-200/80 rounded-bl-none dark:bg-slate-800 dark:text-slate-100 dark:border-slate-700/60"
                    )}
                  >
                    {msg.text.split('\n').map((line, idx) => (
                      <p key={idx} className={idx > 0 ? "mt-1.5" : ""}>
                        {line.split('**').map((chunk, cIdx) => 
                          cIdx % 2 === 1 ? <strong key={cIdx} className="font-semibold text-blue-600 dark:text-blue-400">{chunk}</strong> : chunk
                        )}
                      </p>
                    ))}
                  </div>

                  <span className="text-[10px] text-slate-400 px-1 font-medium">
                    {msg.timestamp}
                  </span>

                  {/* QUICK OPTIONS CHIPS */}
                  {msg.options && msg.options.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-2 max-w-[95%]">
                      {msg.options.map((opt, oIdx) => (
                        <button
                          key={oIdx}
                          onClick={() => handleSend(opt)}
                          className="px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-[11px] font-semibold hover:bg-blue-600 hover:text-white transition-all shadow-xs flex items-center gap-1.5 dark:bg-blue-950/50 dark:border-blue-800 dark:text-blue-300 dark:hover:bg-blue-600 dark:hover:text-white"
                        >
                          <span>{opt}</span>
                          <ArrowRight className="w-3 h-3 opacity-60" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {isTyping && (
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 p-3 bg-white rounded-2xl border border-slate-200 w-fit animate-pulse dark:bg-slate-800 dark:border-slate-700">
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce" />
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce [animation-delay:0.2s]" />
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce [animation-delay:0.4s]" />
                  </div>
                  Academy AI Advisor is thinking...
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* INPUT AREA */}
            <div className="p-3 bg-white border-t border-slate-200/80 dark:bg-slate-950 dark:border-slate-800">
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex items-center gap-2"
              >
                <input
                  ref={inputRef}
                  type="text"
                  placeholder={
                    leadStep === 'name' ? "Enter your Full Name..." :
                    leadStep === 'email' ? "Enter your Email Address..." :
                    leadStep === 'phone' ? "Enter your Phone Number..." :
                    leadStep === 'organization' ? "Enter Company / Organization..." :
                    leadStep === 'interest' ? "Enter Program of Interest..." :
                    "Ask about Academy programs, courses, certifications..."
                  }
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-1 px-4 py-2.5 rounded-xl bg-slate-100 border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-blue-600 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-100 transition-all"
                />
                <Button
                  type="submit"
                  disabled={!input.trim() || isTyping}
                  size="icon"
                  className="h-10 w-10 rounded-xl bg-blue-600 hover:bg-blue-700 text-white shrink-0 shadow-md shadow-blue-500/20"
                >
                  <Send size={16} />
                </Button>
              </form>
              <p className="mt-2 text-[10px] text-slate-400 font-medium text-center tracking-wide">
                ISI Academy • Industry-Led Security Workforce Development
              </p>
            </div>
          </>
        )}
      </div>

      {/* 🔘 TOGGLE BUTTON */}
      <button
        aria-label={isOpen ? "Close Academy AI Advisor" : "Open Academy AI Advisor"}
        onClick={toggleChat}
        className={cn(
          "h-16 w-16 rounded-[1.6rem] shadow-2xl flex items-center justify-center transition-all duration-300 active:scale-95 group relative overflow-hidden pointer-events-auto border border-blue-400/20",
          isOpen
            ? "bg-slate-950 text-white"
            : "bg-gradient-to-tr from-slate-900 via-blue-950 to-blue-900 text-white shadow-blue-900/30 hover:shadow-blue-600/40"
        )}
      >
        {isOpen ? (
          <X size={26} />
        ) : (
          <div className="relative flex items-center justify-center">
            <GraduationCap size={28} className="text-blue-400 group-hover:scale-110 transition-transform" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full border-2 border-slate-950 animate-pulse"></span>
          </div>
        )}
      </button>
    </div>
  );
};
