
import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import { Phone, Mail } from "lucide-react";
// Leaflet CSS is loaded in index.html via CDN to avoid bundler issues

// Fix for default Leaflet markers in React
import icon from "../assets/marker-icon.webp";
import iconShadow from "../assets/marker-shadow.webp";

interface Location {
    id: string;
    title: string;
    city: string;
    state: string;
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

    // Active marker (default blue)
    const activeIcon = L.icon({
        iconUrl: icon,
        shadowUrl: iconShadow,
        iconSize: [25, 41],
        iconAnchor: [12, 41],
    });

    // Coming Soon marker — greyscale via CSS filter trick using a div icon
    const comingSoonIcon = L.divIcon({
        className: '',
        html: `<div style="
            width:25px;height:41px;
            background:url('${icon}') no-repeat center/contain;
            filter: grayscale(1) opacity(0.45);
        "></div>`,
        iconSize: [25, 41],
        iconAnchor: [12, 41],
    });

    useEffect(() => {
        L.Marker.prototype.options.icon = activeIcon;
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
                    url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.webp"
                />

                {(locations || []).map((loc) => {
                    const isComingSoon = loc.address.some(line => line.includes('Coming Soon'));
                    return (
                        <Marker
                            key={loc.id}
                            position={[loc.lat, loc.lng]}
                            icon={isComingSoon ? comingSoonIcon : activeIcon}
                            title={loc.title}
                            alt={loc.title}
                        >
                            <Popup className="min-w-[200px]">
                                <div className="p-2">
                                    <div className="flex items-center justify-between mb-1 gap-2">
                                        <h3 className="font-bold text-base">{loc.title}</h3>
                                        {isComingSoon && (
                                            <span style={{
                                                fontSize: '9px',
                                                fontWeight: 700,
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.08em',
                                                background: '#FEF3C7',
                                                color: '#92400E',
                                                borderRadius: '999px',
                                                padding: '2px 8px',
                                                whiteSpace: 'nowrap',
                                                border: '1px solid #FDE68A'
                                            }}>Coming Soon</span>
                                        )}
                                    </div>
                                    <p className="text-xs uppercase font-semibold text-primary mb-2">{loc.city}, {loc.state}</p>
                                    {isComingSoon ? (
                                        <p className="text-xs text-muted-foreground italic">
                                            This office is part of our upcoming expansion. Stay tuned!
                                        </p>
                                    ) : (
                                        <>
                                            <div className="text-xs text-muted-foreground mb-2" style={{ lineHeight: '1.5' }}>
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
                                        </>
                                    )}
                                </div>
                            </Popup>
                        </Marker>
                    );
                })}

                {/* Recenter effect if active city is selected */}
                {activeLocation ? (
                    <RecenterMap lat={activeLocation.lat} lng={activeLocation.lng} />
                ) : null}
            </MapContainer>
        </div>
    );
};

export default JobMapInner;
