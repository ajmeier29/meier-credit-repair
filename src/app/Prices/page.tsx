import CalendlyModal from "@/components/CalendlyEmbedded";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Pricing from "@/components/Pricing";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Pricing',
};

export default async function Page() {
    const standardPayLink: string = (process.env.NEXT_PUBLIC_STANDARD_PAY_LINK as string);

    return (
        <>
            <div className="grid grid-cols-1">
                <Header />
                <Pricing />
                <Footer />
            </div>
            <CalendlyModal url="https://calendly.com/ajmeier29/initial-consultation" />
        </>
    )
}
