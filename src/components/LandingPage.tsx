'use client';

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import CalendlyModal from "@/components/CalendlyEmbedded";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { track } from "@vercel/analytics";

export default function LandingPageContent() {
    const searchParams = useSearchParams();
    const [source, setSource] = useState<string | null>(null);

    useEffect(() => {
        const sourceParam = searchParams.get("source");
        if (sourceParam) {
            setSource(sourceParam); // Set the source to state for rendering
            trackCustomEvent(sourceParam); // Track the custom event
        }
    }, [searchParams]);

    const trackCustomEvent = (source: string) => {
        track("qr_scan", {
            source: source,
        });
    };

    return (
        <>
            <div className="p-4 text-center mb-[1000px]">
                {source ? (
                    <p className="text-lg font-semibold text-white">
                        Scanned from source: <span className="text-orange-400">{source}</span>
                    </p>
                ) : (
                    <p className="text-lg">No source detected</p>
                )}
            </div>
        </>
    );
}
