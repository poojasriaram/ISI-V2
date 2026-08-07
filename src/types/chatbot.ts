export interface ChatAttachment {
    url: string;
    type: 'image' | 'video' | 'file';
    name: string;
}

export interface ChatMessage {
    id: string;
    type: 'user' | 'bot';
    content: string;
    timestamp: Date;
    actions?: ChatAction[];
    attachments?: ChatAttachment[];
}

export interface ChatAction {
    label: string;
    value: string;
    type: 'quickReply' | 'link' | 'scroll' | 'contact';
}

export interface IntentRule {
    triggers: string[];
    domain: string;
    acknowledgment: string;
    targetServiceId: string;
    quickReplies: ChatAction[];
}

export interface KnowledgeBase {
    company: {
        founded: string;
        founder: string;
        deployments: string;
        offices: string;
        workforce: string;
        mission: string;
        name?: string;
        description?: string;
    };
    services: ServiceInfo[];
    rules: IntentRule[];
    verticals: { id: string; name: string; description: string }[];
    capabilities: { name: string; description: string }[];
    locations: LocationInfo[];
    faqs: { question: string; answer: string }[];
    intents: Record<string, IntentHandler>;
    salesScripts: SalesScripts;
}

export interface SalesScripts {
    followUps: Record<string, string>;
    objectionHandlers: Record<string, string>;
    openers?: string[];
    closers?: string[];
}

export interface ServiceInfo {
    id: string;
    name: string;
    description: string;
    keywords: string[];
}

export interface LocationInfo {
    city: string;
    state: string;
    type: string;
}

export interface IntentHandler {
    keywords: string[];
    response: (context?: any  ) => string;
    actions?: ChatAction[];
}
