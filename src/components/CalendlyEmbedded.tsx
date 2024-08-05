'use client'
import React, { useEffect, useState } from "react";

interface CalendlyModalProps {
    url: string;
}

const CalendlyModal: React.FC<CalendlyModalProps> = ({ url }) => {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if (showModal) {
            const head = document.querySelector("head");
            const script = document.createElement("script");
            script.setAttribute("src", "https://assets.calendly.com/assets/external/widget.js");
            head?.appendChild(script);
        }
    }, [showModal]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            <div className="z-50 grid grid-cols-1">
                <div className="fixed bottom-24 right-7 md:right-24 w-full flex justify-end z-50">
                    <button className="bg-slate-200 p-2 rounded-lg" onClick={scrollToTop}>
                        <svg className="h-8 w-8 text-primary-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <polyline points="18 15 12 9 6 15" /></svg>
                    </button>
                </div>
                <div className="fixed bottom-10 w-full flex justify-end z-50">
                    <button className="btn max-sm:text-xs - bg-primary-blue hover:bg-primary-blue-hover text-white mr-4 md:mr-24" onClick={() => setShowModal(true)}>
                        Schedule a Consultation!
                    </button>
                </div>

                {showModal && (
                    <div className="realtive modal modal-open h-full">
                        <div className="relative modal-box h-full">
                            <button className="btn btn-sm btn-circle absolute right-2 top-2" onClick={() => setShowModal(false)}>✕</button>
                            <div
                                className="calendly-inline-widget h-full mt-4"
                                data-url={url}
                                style={{ minHeight: "650px", width: "100%" }}
                            ></div>
                        </div>
                        <div className="modal-backdrop" onClick={() => setShowModal(false)}></div>
                    </div>
                )}
            </div>
        </>
    );
};

export default CalendlyModal;
