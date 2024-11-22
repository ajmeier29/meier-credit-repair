'use client';

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { track } from "@vercel/analytics";
import HomePage from "./HomePage";

export default function LandingPage() {
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
            <HomePage />
        </>
    );
}
