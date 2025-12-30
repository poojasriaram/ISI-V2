import { OfferingHero } from "./offering-stack/OfferingHero";
import { CoreSecurity } from "./offering-stack/CoreSecurity";
import { FacilityEvolution } from "./offering-stack/FacilityEvolution";
import { DCIM } from "./offering-stack/DCIM";

export const OfferingStack = () => {
    return (
        <div className="bg-background relative overflow-hidden">
            <OfferingHero />
            <CoreSecurity />
            <FacilityEvolution />
            <DCIM />
        </div>
    );
};
