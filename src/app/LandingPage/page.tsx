'use client';

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import CalendlyModal from "@/components/CalendlyEmbedded";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { track } from "@vercel/analytics";

// Mark the page as dynamic to prevent build-time prerendering
export const dynamic = "force-dynamic";

export default function Page() {
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
            <div className="grid grid-cols-1 h-[700px] md:h-[750px] w-full overscroll-none hero-border-radius bg-hero-gradient-background mb-[900px] md:mb-[250px]">
                <Header />
                <div className="p-4 text-center mb-[1000px]">
                    {source ? (
                        <p className="text-lg font-semibold text-white">
                            Scanned from source: <span className="text-orange-400">{source}</span>
                        </p>
                    ) : (
                        <p className="text-lg">No source detected</p>
                    )}
                </div>
                <Footer />
            </div>
            <CalendlyModal url="https://calendly.com/ajmeier29/initial-consultation" />
        </>
    );
}
