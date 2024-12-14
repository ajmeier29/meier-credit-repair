// components/GoogleAdsConversionTracker.tsx
import { useEffect } from "react";

interface GoogleAdsConversionTrackerProps {
    eventId: string;
    value: number;
    currency: string;
}

const GoogleAdsConversionTracker: React.FC<GoogleAdsConversionTrackerProps> = ({ eventId, value, currency }) => {
    useEffect(() => {
        if (typeof window.gtag === "function") {
            window.gtag("event", "conversion", {
                send_to: `AW-11493364200/${eventId}`, // Ensure this is the correct conversion ID
                value: value,
                currency: currency,
            });
        } else {
            console.error("Google Analytics gtag function not found.");
        }
    }, [eventId, value, currency]);

    return null; // This component doesn't need to render anything
};

export default GoogleAdsConversionTracker;
