export interface TenderTier {
    tier: string;
    specs: { component: string; spec: string }[];
}

export interface TenderItem {
    id: string;
    title: string;
    type: "RFQ" | "EOI" | "Partnership EOI" | "Consultant EOI";
    ref: string;
    closingDate: string;
    submissionFormat: string;
    description: string;
    scopeOfWork: string[];
    technicalSpecifications?: string;
    tiers?: TenderTier[];
    requirements: string[];
    status: "Open" | "Closed";
}

export const tenderData: TenderItem[] = [];
