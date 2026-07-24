import { OfferingHero } from "./offering-stack/OfferingHero";
import { ServiceHub } from "./offering-stack/ServiceHub";
import { CoreSecurity } from "./offering-stack/CoreSecurity";
import { FacilityEvolution } from "./offering-stack/FacilityEvolution";
import { DCIM } from "./offering-stack/DCIM";
import { ModernLiving } from "./offering-stack/ModernLiving";
import { GoldOfferings } from "./offering-stack/GoldOfferings";

export const OfferingStack = () => {
    return (
        <div className="bg-background relative overflow-hidden">
            <OfferingHero />
            <ServiceHub />
            <CoreSecurity />
            <FacilityEvolution />
            <DCIM />
            <ModernLiving />
            <GoldOfferings />
        </div>
    );
};

