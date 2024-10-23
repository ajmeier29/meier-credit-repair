'use client'

import { SetStateAction, useState } from "react";
import myscoreIqImage from '../../public/images/myscoreiq.png';
import Image, { StaticImageData } from 'next/image';


export default function Process() {
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
                className="h-[700px] md:h-[750px] w-full -mt-20 md:-mt-24 overscroll-none hero-border-radius bg-hero-gradient-background mb-[2200px] md:mb-[1350px] lg:mb-[1500px] ">
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
                                        The Credit Disputing Process
                                    </h2>
                                    <p className="text-base text-body-color text-white">
                                        Below you will find an overview of our Credit Reparing Process. It takes time, persistence, and determination on our end to ensure we remove as man negative items as possible.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>


                    <div className='gradient-shadow rounded-lg container mx-auto'>
                        <div className="bg-white rounded-lg pt-7">
                            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                                <li>
                                    <div className="timeline-middle">
                                        <TimelineIcon />
                                    </div>
                                    <div className="timeline-start mb-10 md:text-end block">
                                        <time className="font-mono italic">Step 1</time>
                                        <div className="text-lg font-black">Sign up for MyScoreIQ</div>
                                        Once you sign up for MyScoreIQ I can then get your credit report and provide you with
                                        your free Credit Repair Analysis. I will be able to give you a gameplan of what we can do for you,
                                        as well as information to help you raise your credit yourself along the way.
                                    </div>
                                    <hr />
                                </li>
                                <li>
                                    <div className="timeline-start">
                                        <Image
                                            src={myscoreIqImage}
                                            alt=''
                                            height={500}
                                            width={600}
                                        />
                                    </div>
                                    <hr />
                                </li>
                                <li>
                                    <hr />
                                    <div className="timeline-middle">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            className="h-5 w-5">
                                            <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                                clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div className="timeline-end mb-10">
                                        <time className="font-mono italic">1998</time>
                                        <div className="text-lg font-black">iMac</div>
                                        iMac is a family of all-in-one Mac desktop computers designed and built by Apple Inc. It has
                                        been the primary part of Apple's consumer desktop offerings since its debut in August 1998,
                                        and has evolved through seven distinct forms
                                    </div>
                                    <hr />
                                </li>
                                <li>
                                    <hr />
                                    <div className="timeline-middle">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            className="h-5 w-5">
                                            <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                                clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div className="timeline-start mb-10 md:text-end">
                                        <time className="font-mono italic">2001</time>
                                        <div className="text-lg font-black">iPod</div>
                                        The iPod is a discontinued series of portable media players and multi-purpose mobile devices
                                        designed and marketed by Apple Inc. The first version was released on October 23, 2001, about
                                        8+1⁄2 months after the Macintosh version of iTunes was released. Apple sold an estimated 450
                                        million iPod products as of 2022. Apple discontinued the iPod product line on May 10, 2022. At
                                        over 20 years, the iPod brand is the oldest to be discontinued by Apple
                                    </div>
                                    <hr />
                                </li>
                                <li>
                                    <hr />
                                    <div className="timeline-middle">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            className="h-5 w-5">
                                            <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                                clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div className="timeline-end mb-10">
                                        <time className="font-mono italic">2007</time>
                                        <div className="text-lg font-black">iPhone</div>
                                        iPhone is a line of smartphones produced by Apple Inc. that use Apple's own iOS mobile
                                        operating system. The first-generation iPhone was announced by then-Apple CEO Steve Jobs on
                                        January 9, 2007. Since then, Apple has annually released new iPhone models and iOS updates. As
                                        of November 1, 2018, more than 2.2 billion iPhones had been sold. As of 2022, the iPhone
                                        accounts for 15.6% of global smartphone market share
                                    </div>
                                    <hr />
                                </li>
                                <li>
                                    <hr />
                                    <div className="timeline-middle">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            className="h-5 w-5">
                                            <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                                clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div className="timeline-start mb-10 md:text-end">
                                        <time className="font-mono italic">2015</time>
                                        <div className="text-lg font-black">Apple Watch</div>
                                        The Apple Watch is a line of smartwatches produced by Apple Inc. It incorporates fitness
                                        tracking, health-oriented capabilities, and wireless telecommunication, and integrates with
                                        iOS and other Apple products and services
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                </section>

            </div >
        </>
    )
}


const TimelineIcon = () => {
    return (
        <>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5">
                <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd" />
            </svg>
        </>
    );
};