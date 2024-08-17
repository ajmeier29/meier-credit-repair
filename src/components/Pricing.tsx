'use client'

import { SetStateAction, useState } from "react";
import Monthly from "./Monthly";
import OneTimePayment from "./OneTimePayment";


export default function Pricing() {
    const [hovered, setHovered] = useState(false);
    const [indicatorPosition, setIndicatorPosition] = useState('2px');
    const [tabOneHoverTesxtColor, settabOneHoverTesxtColor] = useState("text-white");
    const [tabTwoHoverTesxtColor, settabTwoHoverTesxtColor] = useState("text-black");
    const [isMonthly, setIsMonthly] = useState(true);

    const handleMouseOver = (position: SetStateAction<string>) => {
        setHovered(true);
        setIndicatorPosition(position);
        console.log(`Text color is: ${tabOneHoverTesxtColor}`)
        if (tabOneHoverTesxtColor === 'text-black') {
            settabOneHoverTesxtColor('text-white')
            setIsMonthly(true);
        } else if (tabOneHoverTesxtColor === 'text-white') {
            settabOneHoverTesxtColor('text-black')
        }

        if (tabTwoHoverTesxtColor === 'text-black') {
            settabTwoHoverTesxtColor('text-white')
            setIsMonthly(false);
        } else if (tabTwoHoverTesxtColor === 'text-white') {
            settabTwoHoverTesxtColor('text-black')
        }

    };

    return (
        <>

            <div
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="500"
                className="h-[700px] md:h-[750px] w-full -mt-20 md:-mt-24 overscroll-none hero-border-radius bg-hero-gradient-background mb-[2200px] md:mb-[1350px] lg:mb-[400px] ">
                <section
                    className=" z-10 overflow-hidden max-sm:ml-5 max-sm:mr-5 dark:bg-dark pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] mb-20"
                >
                    <div className="container mx-auto">
                        <div className="-mx-4 flex flex-wrap">
                            <div className="w-full px-4">
                                <div className="mx-auto mb-6 md:mb-[60px] max-w-[510px] text-center">
                                    <h2
                                        className="mb-3 text-white text-3xl max-sm:mt-4 leading-[1.208] font-bold text-dark sm:text-4xl md:text-[40px]"
                                    >
                                        Our Pricing Plans
                                    </h2>
                                    <p className="text-base text-body-color text-white">
                                        Explore our carefully crafted plans designed to meet various credit repair needs, offering comprehensive support and strategies to start improving your credit today.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="tab-container mb-8 md:w-1/2 mx-auto">
                        <div
                            className={`tab tab--1 ${tabOneHoverTesxtColor}`}
                            onMouseOver={() => handleMouseOver('2px')}
                        >
                            Monthly
                        </div>
                        <div
                            className={`tab tab--2 ${tabTwoHoverTesxtColor}`}
                            onMouseOver={() => handleMouseOver('calc(50% - 2px)')}
                        >
                            One Time Payment
                        </div>
                        <div className="indicator" style={{ left: indicatorPosition }}></div>
                    </div>
                    <div className="md:mx-16">
                        {isMonthly ?
                            (
                                <Monthly />
                            ) :
                            (
                                <OneTimePayment />
                            )

                        }
                    </div>

                </section>

            </div >
        </>
    )
}

