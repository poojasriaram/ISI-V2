
import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import { Phone, Mail } from "lucide-react";
// Leaflet CSS is loaded in index.html via CDN to avoid bundler issues

// Fix for default Leaflet markers in React
import icon from "../assets/marker-icon.png";
import iconShadow from "../assets/marker-shadow.png";

interface Location {
    id: string;
    title: string;
    city: string;
    region: string;
    lat: number;
    lng: number;
    address: string[];
    phone?: string;
    email?: string;
}

interface JobMapProps {
    activeCity?: string | null;
    locations?: Location[];
}

// Component to handle map movement
const RecenterMap = ({ lat, lng }: { lat: number; lng: number }) => {
    const map = useMap();
    useEffect(() => {
        map.flyTo([lat, lng], 10, {
            duration: 1.5,
        });
    }, [lat, lng, map]);
    return null;
};

const JobMapInner = ({ activeCity, locations }: JobMapProps) => {
    // Determine center based on activeCity or default to India center
    const activeLocation = (locations || []).find((loc) => loc.city === activeCity);

    // Default center (India roughly)
    const defaultCenter: [number, number] = [20.5937, 78.9629];
    const defaultZoom = 5;

    useEffect(() => {
        // Safe fix for Leaflet icons in React
        // We only run this once on mount
        const DefaultIcon = L.icon({
            iconUrl: icon,
            shadowUrl: iconShadow,
            iconSize: [25, 41],
            iconAnchor: [12, 41],
        });
        L.Marker.prototype.options.icon = DefaultIcon;
    }, []);

    return (
        <div className="w-full h-full relative z-0">
            <MapContainer
                center={defaultCenter}
                zoom={defaultZoom}
                style={{ height: "100%", width: "100%" }}
                scrollWheelZoom={false}
                className="w-full h-full"
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                />

                {(locations || []).map((loc) => (
                    <Marker key={loc.id} position={[loc.lat, loc.lng]}>
                        <Popup className="min-w-[200px]">
                            <div className="p-2">
                                <h3 className="font-bold text-base mb-1">{loc.title}</h3>
                                <p className="text-xs uppercase font-semibold text-primary mb-2">{loc.city}</p>
                                <div className="text-xs text-muted-foreground mb-2" style={{ lineHeight: '1' }}>
                                    {loc.address.map((line, i) => (
                                        <span key={i}>
                                            {line}
                                            {i < loc.address.length - 1 && <br />}
                                        </span>
                                    ))}
                                </div>
                                {(loc.phone || loc.email) && (
                                    <div className="border-t border-border/50 pt-2 mt-2 space-y-1.5">
                                        {loc.phone && (
                                            <div className="flex items-center gap-1.5 text-xs">
                                                <Phone className="w-3 h-3 text-primary flex-shrink-0" />
                                                <span className="font-medium text-foreground">{loc.phone}</span>
                                            </div>
                                        )}
                                        {loc.email && (
                                            <div className="flex items-center gap-1.5 text-xs">
                                                <Mail className="w-3 h-3 text-primary flex-shrink-0" />
                                                <span className="font-medium text-foreground">{loc.email}</span>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        </Popup>
                    </Marker>
                ))}

                {/* Recenter effect if active city is selected */}
                {activeLocation ? (
                    <RecenterMap lat={activeLocation.lat} lng={activeLocation.lng} />
                ) : null}
            </MapContainer>
        </div>
    );
};

export default JobMapInner;
