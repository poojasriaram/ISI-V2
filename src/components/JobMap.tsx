
import { Suspense, lazy } from 'react';

// Lazy load the actual map component
// This prevents Leaflet imports from crashing the entire app bundle if they fail
const JobMapInner = lazy(() => import('./JobMapInner'));

interface Location {
    id: string;
    title: string;
    city: string;
    state: string;
    region: string;
    lat: number;
    lng: number;
    address: string[];
}

interface JobMapProps {
    activeCity?: string | null;
    locations?: Location[];
}

export const JobMap = (props: JobMapProps) => {
    return (
        <Suspense fallback={
            <div className="w-full h-full flex items-center justify-center bg-muted text-muted-foreground">
                <div className="flex flex-col items-center gap-2">
                    <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                    <span>Loading Map...</span>
                </div>
            </div>
        }>
            <JobMapInner activeCity={props.activeCity ?? null} locations={props.locations ?? []} />
        </Suspense>
    );
};
