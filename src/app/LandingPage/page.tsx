'use client';

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import CalendlyModal from "@/components/CalendlyEmbedded";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { track } from "@vercel/analytics";
import LandingPageContent from "@/components/LandingPage";
import dynamic from "next/dynamic";


export default function Page() {

    // Dynamically import the page content (using client-side hooks)
    const LandingPageContent = dynamic(() => import('../../components/LandingPage'), {
        ssr: false, // Disable server-side rendering for this component
    });

    return (
        <>
            <div className="grid grid-cols-1 h-[700px] md:h-[750px] w-full overscroll-none hero-border-radius bg-hero-gradient-background mb-[900px] md:mb-[250px]">
                <Header />
                <Suspense fallback={<div>Loading...</div>}>
                    <LandingPageContent />
                </Suspense>
                <Footer />
            </div>
            <CalendlyModal url="https://calendly.com/ajmeier29/initial-consultation" />
        </>
    );
}
