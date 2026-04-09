import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ChatMessage, ChatAction, ChatAttachment } from '../types/chatbot';
import { isiKnowledgeBase } from '../data/chatbot/knowledge-base';
import { useAnalytics } from './useAnalytics';
import { submitChatbotLead } from '../services/formService';

interface Greeting {
    text: string;
    actions: ChatAction[];
}

const PAGE_SPECIFIC_GREETINGS: Record<string, Greeting> = {
    '/': {
        text: "Hi, Welcome to ISI India! I'm Arya, a senior security consultant here. What sort of security requirements are you exploring today?",
        actions: [
            { label: "Request a Callback", value: "callback", type: "contact" },
            { label: "Our Services", value: "services", type: "quickReply" },
            { label: "About ISI", value: "about", type: "quickReply" }
        ]
    },
    '/about': {
        text: "Hi! I see you're looking into our history. ISI has been a trusted leader in security since Mr. S. Vijayakumar started it back in 1994. Is there a specific part of our 500+ successful deployments you're curious about?",
        actions: [
            { label: "Leadership Team", value: "leadership", type: "quickReply" },
            { label: "Our Mission", value: "mission", type: "quickReply" },
            { label: "Contact Us", value: "tel:+917708887878", type: "link" }
        ]
    },
    '/services/manned-guarding': {
        text: "Hi! Since you're looking into our guarding services, I'd love to help you understand how we train our personnel to the highest standards. Would you like to discuss a site assessment?",
        actions: [
            { label: "Book a Site Assessment", value: "site survey", type: "contact" },
            { label: "Training Standards", value: "guard training", type: "quickReply" },
            { label: "Speak with us", value: "tel:+917708887878", type: "link" }
        ]
    },
    '/services/electronic-security': {
        text: "It looks like you're interested in our technical security solutions. We specialize in creating custom CCTV and access control systems—shall I connect you with one of our systems architects?",
        actions: [
            { label: "Speak with an Architect", value: "callback", type: "contact" },
            { label: "Technical Specs", value: "electronic security", type: "quickReply" },
            { label: "Security Audit", value: "site survey", type: "contact" }
        ]
    },
    '/school-safety': {
        text: "Ensuring school safety is something we take very personally here at ISI. Would you like to see how our 'Child-First' framework can protect your institution?",
        actions: [
            { label: "Request Safety Roadmap", value: "safety audit", type: "contact" },
            { label: "View Module Details", value: "school safety", type: "quickReply" }
        ]
    },
    '/school-safety-v2': {
        text: "Welcome to our upgraded School Safety hub. I can guide you through our 36-month transformation journey or explain our four ethical pillars. Where should we start?",
        actions: [
            { label: "Transformation Journey", value: "roadmap", type: "quickReply" },
            { label: "The 4 Pillars", value: "pillars", type: "quickReply" },
            { label: "Request Consultation", value: "callback", type: "contact" }
        ]
    },
    // Adding the specific logic for the new pages here as well
    '/secure-value-logistics': {
        text: "Welcome to Secure Value Logistics. We offer armored transit and high-value asset protection. How can we secure your assets today?",
        actions: [
            { label: "Transit Quote", value: "quote", type: "contact" },
            { label: "View Fleet", value: "fleet", type: "quickReply" },
            { label: " Speak with us", value: "tel:+917708887878", type: "link" }
        ]
    },
    '/career': {
        text: "Interested in joining the ISI family? We're always looking for dedicated security professionals. Would you like to see our current openings or speak to HR?",
        actions: [
            { label: "View Openings", value: "jobs", type: "quickReply" },
            { label: "HR Inquiry", value: "hr contact", type: "quickReply" }
        ]
    },
    '/contact': {
        text: "I'm here to help you get started. You can call us directly, or I can arrange for a senior consultant to call you back today. Which do you prefer?",
        actions: [
            { label: "Request Callback", value: "callback", type: "contact" },
            { label: "Call Now", value: "tel:+917708887878", type: "link" }
        ]
    },
    '/capabilities': {
        text: "Our capabilities span across 18 states and 500+ sites. Is there a specific regional capability or technical service you're looking for?",
        actions: [
            { label: "Our Reach", value: "reach", type: "quickReply" },
            { label: "Command Center", value: "command center", type: "quickReply" },
            { label: "Book Audit", value: "site survey", type: "contact" }
        ]
    },
    '/verticals': {
        text: "Hi! Our security solutions are tailored to specific industries. Are you looking to secure a commercial property, a campus, or perhaps an industrial facility?",
        actions: [
            { label: "Request a Callback", value: "callback", type: "contact" },
            { label: "Explore Solutions", value: "/solutions", type: "link" }
        ]
    },
    '/offerings': {
        text: "Welcome! We offer a full spectrum of services from manned guarding to AI-driven command centers. What security challenge can we help you solve today?",
        actions: [
            { label: "Speak to Expert", value: "callback", type: "contact" },
            { label: "AI Surveillance", value: "electronic security", type: "quickReply" }
        ]
    },
    '/solutions': {
        text: "Hi there! Our comprehensive solutions integrate technology and manpower seamlessly. Are you interested in upgrading your current setup or starting from scratch?",
        actions: [
            { label: "Upgrade Setup", value: "site survey", type: "contact" },
            { label: "Start Fresh", value: "consultation", type: "contact" }
        ]
    },
    '/customers': {
        text: "Hello! We've had the privilege of securing some of India's most prestigious organizations. Shall I share some case studies relevant to your industry?",
        actions: [
            { label: "View Case Studies", value: "case studies", type: "quickReply" },
            { label: "Request Credentials", value: "callback", type: "contact" }
        ]
    },
    '/partners': {
        text: "Hi! At ISI, we value strong partnerships. Are you exploring technology integration partnerships or looking to collaborate on joint security deployments?",
        actions: [
            { label: "Tech Partnership", value: "tech partner", type: "quickReply" },
            { label: "Joint Deployment", value: "deployment partner", type: "quickReply" }
        ]
    },
    '/campus-safety': {
        text: "Ensuring student and faculty safety is paramount. Would you like to see how our campus safety frameworks create secure but welcoming environments?",
        actions: [
            { label: "Campus Audit", value: "safety audit", type: "contact" },
            { label: "View Framework", value: "roadmap", type: "quickReply" }
        ]
    },
    '/cash-logistics': {
        text: "Welcome. Secure cash management requires absolute precision. Are you looking for cash-in-transit or ATM replenishment services?",
        actions: [
            { label: "Cash-in-Transit", value: "cash guarding", type: "quickReply" },
            { label: "Request Quote", value: "quote", type: "contact" }
        ]
    },
    '/command-center': {
        text: "Hi! Our 24/7 Command Center is the nerve center of our operations. Would you like to see a demo of our remote monitoring and AI threat detection?",
        actions: [
            { label: "Book Demo", value: "callback", type: "contact" },
            { label: "Tech Specs", value: "command center specs", type: "quickReply" }
        ]
    },
    '/sitemap': {
        text: "Lost? No worries, I can help you find exactly what you're looking for. Just tell me what you need!",
        actions: [
            { label: "Speak to Arya", value: "callback", type: "contact" }
        ]
    }
};

const LEGAL_PAGES = ['/privacy-policy', '/terms-of-service', '/cookie-policy', '/copyright-policy'];

const INITIAL_MESSAGE: ChatMessage = {
    id: '1',
    type: 'bot',
    content: "Hi there! I'm Arya, a senior consultant here at ISI India. I saw you browsing and just wanted to see if I could lend some of my 25+ years of experience to help with your security planning today?",
    timestamp: new Date(),
    actions: [
        { label: "Request a Callback", value: "callback", type: "contact" },
        { label: "Manned Guarding", value: "manned guarding", type: "quickReply" },
        { label: "Technical Security", value: "cyber security", type: "quickReply" },
        { label: "Emergency Contact", value: "tel:+917708887878", type: "link" }
    ]
};


export const useChatBot = () => {
    const location = useLocation();
    const { trackFormSubmission } = useAnalytics();
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_MESSAGE]);
    const [isTyping, setIsTyping] = useState(false);
    const [hasUnread, setHasUnread] = useState(true);

    // Context State for Lead Capture and Flow
    const [context, setContext] = useState<{
        topic: string | null;
        stage: 'discovery' | 'pitch' | 'closing' | 'captured';
        leadData: { name?: string; isExisting?: string; lookingFor?: string; phone?: string; email?: string };
        isReturnVisitor: boolean;
    }>({
        topic: null,
        stage: 'discovery',
        leadData: {},
        isReturnVisitor: false
    });

    // Handle Proactive Trigger & Visitor Status
    useEffect(() => {
        const visitCount = parseInt(localStorage.getItem('isi_visit_count') || '0');
        const isReturn = visitCount > 0;

        if (!isReturn) {
            localStorage.setItem('isi_visit_count', '1');
        } else {
            setContext(prev => ({ ...prev, isReturnVisitor: true }));
        }

        const currentPath = location.pathname;
        const pageKey = `chat_triggered_${currentPath}`;
        const hasTriggeredOnThisPage = sessionStorage.getItem(pageKey);
        const hasInteractedInSession = sessionStorage.getItem('chat_interacted');

        if (!hasTriggeredOnThisPage && !hasInteractedInSession && !isOpen) {
            const timer = setTimeout(() => {
                setIsOpen(true);
                setHasUnread(false);
                sessionStorage.setItem(pageKey, 'true');

                if (isReturn) {
                    const returnMsg: ChatMessage = {
                        id: 'welcome-back',
                        type: 'bot',
                        content: "Good to see you again! Shall we pick up where we left off with your security requirements?",
                        timestamp: new Date(),
                        actions: [
                            { label: "Check Services", value: "services", type: "quickReply" },
                            { label: "Book Audit", value: "callback", type: "contact" }
                        ]
                    };
                    setMessages(prev => [...prev, returnMsg]);
                }
            }, 15000); // 15-second trigger

            return () => clearTimeout(timer);
        }
    }, [location.pathname, isOpen]);

    // Update greeting based on page context (Optimized to prevent re-renders)
    useEffect(() => {
        setMessages(prev => {
            // Only update the message if they haven't interacted yet (length === 1)
            if (prev.length === 1 && prev[0].type === 'bot') {
                const currentPath = location.pathname;
                let greeting = PAGE_SPECIFIC_GREETINGS[currentPath];

                if (!greeting) {
                    if (currentPath.startsWith('/verticals/')) {
                        greeting = {
                            text: "Hello! I see you're exploring our vertical-specific solutions. Every industry has unique risks—would you like to discuss a custom security roadmap for your sector?",
                            actions: [{ label: "Discuss Roadmap", value: "callback", type: "contact" }, { label: "View Solutions", value: "/solutions", type: "link" }]
                        };
                    } else if (currentPath.startsWith('/services/')) {
                        const parts = currentPath.split('/');
                        const serviceName = parts[parts.length - 1].split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

                        greeting = {
                            text: `Hi! Since you're looking into our ${serviceName} capabilities, I'd love to help answer any specific technical questions you hold. Would you like to discuss your requirements with a specialist?`,
                            actions: [{ label: "Request Callback", value: "callback", type: "contact" }, { label: "Tech Specs", value: serviceName.toLowerCase(), type: "quickReply" }]
                        };
                    } else if (LEGAL_PAGES.includes(currentPath)) {
                        greeting = {
                            text: "Hi! I see you're reviewing our policies. Let me know if you need any clarification on how we handle data and privacy securely.",
                            actions: [{ label: "Talk to Human", value: "callback", type: "contact" }]
                        };
                    }
                }

                if (greeting) {
                    // Prevent memory-loop re-renders
                    if (prev[0].content === greeting.text) return prev;
                    return [{
                        ...INITIAL_MESSAGE,
                        content: greeting.text,
                        actions: greeting.actions,
                        timestamp: new Date()
                    }];
                } else {
                    if (prev[0].content === INITIAL_MESSAGE.content) return prev;
                    return [{ ...INITIAL_MESSAGE, timestamp: new Date() }];
                }
            }
            return prev;
        });
    }, [location.pathname]);


    const toggleChat = () => {
        setIsOpen(prev => !prev);
        if (!isOpen) {
            setHasUnread(false);
            sessionStorage.setItem('chat_interacted', 'true');
        }
    };

    const findResponse = (input: string): { text: string; actions?: ChatAction[] } => {
        const lowerInput = input.toLowerCase();

        // --- STAGE 1: LEAD CAPTURE ---
        if (context.stage === 'closing') {
            if (!context.leadData.name) {
                setContext(prev => ({ ...prev, leadData: { ...prev.leadData, name: input } }));
                return {
                    text: `Nice to meet you, ${input}. Before we proceed, are you an existing customer with ISI?`,
                    actions: [
                        { label: "Yes, I am", value: "Yes", type: "quickReply" },
                        { label: "No, I'm new", value: "No", type: "quickReply" }
                    ]
                };
            } else if (!context.leadData.isExisting) {
                // Handle the existing customer answer, and then ask what they are looking for
                const isExistingStr = lowerInput.includes('yes') ? 'Yes' : 'No';
                
                // If the context topic is already known via previous conversation, we might pre-fill. 
                // However, to ensure accurate segregation as requested, we ask explicitly if we aren't absolutely sure.
                setContext(prev => ({ ...prev, leadData: { ...prev.leadData, isExisting: isExistingStr } }));
                
                // Determine if we already know what they are looking for based on conversation topic
                if (context.topic) {
                     setContext(prev => ({ ...prev, leadData: { ...prev.leadData, lookingFor: 'Services', isExisting: isExistingStr } }));
                     return {
                          text: `Got it. So we can reach you regarding your inquiry, what's your phone number?`,
                          actions: []
                     };
                }

                return {
                    text: `Got it. And what exactly are you looking for today?`,
                    actions: [
                        { label: "Looking for Services", value: "Services", type: "quickReply" },
                        { label: "Interested in Job", value: "Job", type: "quickReply" },
                        { label: "Business Leads", value: "Business Leads", type: "quickReply" }
                    ]
                };
            } else if (!context.leadData.lookingFor) {
                let category = 'Services';
                if (lowerInput.includes('job') || lowerInput.includes('career')) category = 'Job';
                else if (lowerInput.includes('business') || lowerInput.includes('lead')) category = 'Business Leads';
                
                setContext(prev => ({ ...prev, leadData: { ...prev.leadData, lookingFor: category } }));
                return {
                    text: `Thank you. What's the best phone number for us to reach you at?`,
                    actions: []
                };
            } else if (!context.leadData.phone) {
                setContext(prev => ({ ...prev, leadData: { ...prev.leadData, phone: input } }));
                return {
                    text: `Thanks. And what's your best email address the team can send details to?`,
                    actions: []
                };
            } else if (!context.leadData.email) {
                setContext(prev => ({ ...prev, stage: 'captured', leadData: { ...prev.leadData, email: input } }));

                // Send Lead via Node.js Server
                fetch('http://localhost:5000/api/chatbot-leads', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        name: context.leadData.name || 'Anonymous',
                        phone: context.leadData.phone || 'No Phone',
                        email: input,
                        message: `Existing Customer: ${context.leadData.isExisting || 'N/A'}\nCategory: ${context.leadData.lookingFor || 'N/A'}\nTopic: ${context.topic || 'General Inquiry'}`
                    })
                }).catch(err => console.error("Chatbot lead capture err:", err));

                // Send Lead directly to Google Sheets Integration
                submitChatbotLead(
                    context.leadData.name || 'Anonymous',
                    context.leadData.phone || 'No Phone',
                    input,
                    context.topic || 'General Inquiry',
                    context.leadData.isExisting,
                    context.leadData.lookingFor
                ).catch(err => console.error("Sheets Lead capture err:", err));

                return {
                    text: `Perfect. I've shared your details with our team. We've categorized your inquiry under '${context.leadData.lookingFor || 'Services'}'. A specialist will contact you shortly. Is there anything else you want to ask me in the meantime?`,
                    actions: [{ label: "That's all for now", value: "close", type: "quickReply" }]
                };
            }
        }

        // --- STAGE 2: INTENT ANALYSIS (New Rule Engine) ---
        const matchedRule = isiKnowledgeBase.rules.find(rule => 
            rule.triggers.some(trigger => lowerInput.includes(trigger))
        );

        if (matchedRule) {
            setContext(prev => ({ ...prev, topic: matchedRule.domain, stage: 'pitch' }));
            return {
                text: `${matchedRule.acknowledgment}\n\nShall I connect you with our ${matchedRule.domain} specialist?`,
                actions: matchedRule.quickReplies
            };
        }

        // --- STAGE 3: RULE-BASED FALLBACK (Original Logic) ---
        const objectionKey = Object.keys(isiKnowledgeBase.salesScripts.objectionHandlers).find(key => lowerInput.includes(key));
        if (objectionKey) {
            return {
                text: isiKnowledgeBase.salesScripts.objectionHandlers[objectionKey as keyof typeof isiKnowledgeBase.salesScripts.objectionHandlers],
                actions: [{ label: "Schedule Call", value: "quote", type: "contact" }]
            };
        }

        // --- Check Company Facts ---
        if (lowerInput.includes('founded') || lowerInput.includes('history') || lowerInput.includes('who owns') || lowerInput.includes('founder')) {
            return {
                text: `ISI India was founded in ${isiKnowledgeBase.company.founded} by ${isiKnowledgeBase.company.founder}. ${isiKnowledgeBase.company.mission}`,
                actions: [{ label: "Our Services", value: "services", type: "quickReply" }]
            };
        }

        // --- Check Verticals ---
        if (isiKnowledgeBase.verticals) {
            const matchedVertical = isiKnowledgeBase.verticals.find(v =>
                lowerInput.includes(v.name.toLowerCase()) || lowerInput.includes(v.id.toLowerCase())
            );
            if (matchedVertical) {
                setContext(prev => ({ ...prev, topic: matchedVertical.name, stage: 'pitch' }));
                return {
                    text: `${matchedVertical.description} Would you like to consult our industry specialists for a tailored roadmap?`,
                    actions: [{ label: "Consult Specialist", value: "yes book", type: "quickReply" }]
                };
            }
        }

        // --- Check Capabilities ---
        if (isiKnowledgeBase.capabilities) {
            const matchedCapability = isiKnowledgeBase.capabilities.find(c =>
                lowerInput.includes(c.name.toLowerCase())
            );
            if (matchedCapability) {
                setContext(prev => ({ ...prev, topic: matchedCapability.name, stage: 'pitch' }));
                return {
                    text: `${matchedCapability.description} Would you like a technical consultation on deploying this capability?`,
                    actions: [{ label: "Request Callback", value: "callback", type: "contact" }]
                };
            }
        }

        const matchedService = isiKnowledgeBase.services.find(s =>
            s.keywords.some(k => lowerInput.includes(k)) || lowerInput.includes(s.name.toLowerCase())
        );

        if (matchedService) {
            setContext(prev => ({ ...prev, topic: matchedService.name, stage: 'pitch' }));
            const serviceId = matchedService.id as keyof typeof isiKnowledgeBase.salesScripts.followUps;
            const followUp = isiKnowledgeBase.salesScripts.followUps[serviceId] || isiKnowledgeBase.salesScripts.followUps['general'];

            return {
                text: `${matchedService.description}\n\n${followUp}`,
                actions: [
                    { label: "Book Consultation", value: "yes book", type: "quickReply" },
                    { label: "Tell me more", value: `more about ${matchedService.name}`, type: "quickReply" }
                ]
            };
        }

        if (lowerInput.includes('yes') || lowerInput.includes('call') || lowerInput.includes('interested') || lowerInput.includes('quote') || lowerInput.includes('pricing')) {
            setContext(prev => ({ ...prev, stage: 'closing' }));
            return {
                text: "Honestly, for a project of this scale, a 5-minute chat with one of our specialists would be much more helpful than me typing here. Can I get your first name?",
                actions: [
                    { label: "Call Me Instead", value: "tel:+917708887878", type: "link" }
                ]
            };
        }

        if (lowerInput.includes('location') || lowerInput.includes('office') || lowerInput.includes('where')) {
            return {
                text: "We have 12 offices across India including Chennai, Bangalore, Delhi NCR, and Hyderabad. Which city is closest to you?",
                actions: isiKnowledgeBase.locations.slice(0, 4).map(l => ({
                    label: l.city,
                    value: l.city,
                    type: "quickReply"
                }))
            };
        }

        // --- FINAL FALLBACK ---
        return {
            text: "That's a great point. I want to make sure I give you the exact technical specs on that—shall I have a colleague in our technical department give you a quick call with those details?",
            actions: [
                { label: "Request Callback", value: "callback", type: "contact" },
                { label: "Manned Guarding", value: "manned guarding", type: "quickReply" },
                { label: "Electronic Security", value: "electronic security", type: "quickReply" }
            ]
        };
    };

    const streamResponse = (text: string, actions?: ChatAction[]) => {
        setIsTyping(true);
        const botMsgId = Date.now().toString();

        setMessages(prev => [...prev, {
            id: botMsgId,
            type: 'bot',
            content: '',
            timestamp: new Date()
        }]);

        let currentIndex = 0;
        const textLength = text.length;

        const intervalId = setInterval(() => {
            currentIndex++;

            setMessages(prev => prev.map(msg => {
                if (msg.id === botMsgId) {
                    return { ...msg, content: text.substring(0, currentIndex) };
                }
                return msg;
            }));

            if (currentIndex >= textLength) {
                clearInterval(intervalId);
                setIsTyping(false);

                if (actions && actions.length > 0) {
                    setMessages(prev => prev.map(msg =>
                        msg.id === botMsgId ? { ...msg, actions } : msg
                    ));
                }
            }
        }, 20);
    };

    const handleSendMessage = (content: string, attachments?: ChatAttachment[]) => {
        sessionStorage.setItem('chat_interacted', 'true');

        if (content.trim() === '/testairtable') {
            try {
                trackFormSubmission('ChatbotLeads', {
                    name: 'TEST_USER',
                    phone: '9999999999',
                    email: 'test@example.com',
                    message: 'Inquired about: General Inquiry'
                });
                setMessages(prev => [...prev, { id: Date.now().toString(), type: 'bot', content: '✅ System Check Passed: Lead backend is active.', timestamp: new Date() }]);
            } catch (err) {
                const error = err as Error;
                setMessages(prev => [...prev, { id: Date.now().toString(), type: 'bot', content: '❌ System Check Failed: ' + error.message, timestamp: new Date() }]);
            }
            return;
        }

        setMessages(prev => [...prev, { id: Date.now().toString(), type: 'user', content, attachments, timestamp: new Date() }]);
        setIsTyping(true);

        // Instantly fallback to the local logic (No Gemini Call)
        setTimeout(() => {
            const response = findResponse(content);
            streamResponse(response.text, response.actions);
        }, 600); // 600ms delay to make it feel natural
    };

    const handleAction = (action: ChatAction) => {
        if (action.type === 'quickReply') {
            if (action.value === 'close') {
                setIsOpen(false);
            } else if (action.value === 'details') {
                setContext(prev => ({ ...prev, stage: 'closing', leadData: { name: undefined } }));
                streamResponse("Great! Let's get you connected. What is your full name?");
            } else {
                handleSendMessage(action.value);
            }
        } else if (action.type === 'link') {
            if (action.value.startsWith('/')) {
                window.location.href = action.value;
            } else {
                window.open(action.value, '_blank');
            }
        } else if (action.type === 'contact') {
            setContext(prev => ({ ...prev, stage: 'closing' }));
            streamResponse("Honestly, for a project of this scale, a 5-minute chat with one of our specialists would be much more helpful than me typing here. Can I get your first name?");
        }
    };

    return {
        isOpen,
        toggleChat,
        messages,
        isTyping,
        hasUnread,
        handleSendMessage,
        handleAction
    };
};
