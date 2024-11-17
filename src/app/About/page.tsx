import AboutPage from "@/components/About";
import CalendlyModal from "@/components/CalendlyEmbedded";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Success',
};

export default async function Page() {
    return (
        <>
            <div className="grid grid-cols-1">
                <Header />
                <AboutPage />
                <Footer />
            </div>
            <CalendlyModal url="https://calendly.com/ajmeier29/initial-consultation" />
        </>
    )
}
