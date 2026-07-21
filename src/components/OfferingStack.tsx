import { OfferingHero } from "./offering-stack/OfferingHero";
import { ServiceHub } from "./offering-stack/ServiceHub";
import { CoreSecurity } from "./offering-stack/CoreSecurity";
import { FacilityEvolution } from "./offering-stack/FacilityEvolution";
import { DCIM } from "./offering-stack/DCIM";
import { ModernLiving } from "./offering-stack/ModernLiving";

export const OfferingStack = () => {
    return (
        <div className="bg-background relative overflow-hidden">
            <OfferingHero />
            <ServiceHub />
            <CoreSecurity />
            <FacilityEvolution />
            <DCIM />
            <ModernLiving />
        </div>
    );
};
