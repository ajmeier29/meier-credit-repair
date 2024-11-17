'use client'

import { SetStateAction, useState } from "react";
import myscoreIqImage from '../../public/images/myscoreiq.png';
import creditAnalysis1 from '../../public/images/creditAnalysis1.png';
import permissibleImage from '../../public/images/permissiblePletter.png'
import successImage1 from '../../public/images/successImage1.png'
import disputeBureausImage from '../../public/images/disputeBureaus.webp';
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
                className="h-[700px] md:h-[750px] w-full -mt-20 md:-mt-24 overscroll-none hero-border-radius bg-hero-gradient-background mb-[2700px] md:mb-[3000px] lg:mb-[4000px] ">
                <section
                    className=" z-10 overflow-hidden max-sm:ml-5 max-sm:mr-5 dark:bg-dark pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] mb-20"
                >
                    <div className="container mx-auto">
                        <div className="-mx-4 flex flex-wrap">
                            <div className="w-full px-4">
                                <div className="mx-auto mb-6 md:mb-[60px] max-w-[510px] text-center">
                                    <h2
                                        className="mb-3 text-white text-3xl max-sm:mt-4 mt-8 leading-[1.208] font-bold text-dark sm:text-4xl md:text-[40px]"
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


                    <div className='mb:gradient-shadow rounded-lg container mx-auto'>
                        <div className="bg-white rounded-lg pt-7">
                            <ul className=" m-5 lg:m-8 timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
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
                                        <TimelineIcon />
                                    </div>
                                    <div className="timeline-end mb-10">
                                        <time className="font-mono italic">Step 2</time>
                                        <div className="text-lg font-black">Your Detailed Credit Analysis</div>
                                        You will receive an emailed analysis of your credit along with information to help you
                                        raise your credit score as we start the disputing process on our end.
                                    </div>
                                    <hr />
                                </li>
                                <li>
                                    <div className="timeline-end">
                                        <Image
                                            src={creditAnalysis1}
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
                                        <TimelineIcon />
                                    </div>
                                    <div className="timeline-start mb-10 md:text-end">
                                        <time className="font-mono italic">Round 1</time>
                                        <div className="text-lg font-black">First Round of Letters</div>
                                        We will be sending out disputes on your behalf to all 3 bureaus, loan companies, creditors, and more.
                                        Throughout this first round, we will be, 1) Updating your information across the 3 bureaus to ensure all your personal info is accurate.
                                        2) Removing all Hard Inquiries not tied to any open accounts.
                                        3) First round disputing all negative accounts.
                                    </div>
                                    <hr />
                                </li>
                                <li>
                                    <div className="timeline-start">
                                        <Image
                                            src={permissibleImage}
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
                                        <TimelineIcon />
                                    </div>
                                    <div className="timeline-end mb-10">
                                        <time className="font-mono italic">After Round 1</time>
                                        <div className="text-lg font-black">Reimport Credit Report</div>
                                        After the round 1 dispute is complete, we import your updated credit report to analzye and assess
                                        which accounts were removed, and which ones need a round 2 (or more) dispute.
                                    </div>
                                    <hr />
                                </li>
                                <li>
                                    <div className="timeline-end">
                                        <Image
                                            src={successImage1}
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
                                        <TimelineIcon />
                                    </div>
                                    <div className="timeline-start mb-10 md:text-end">
                                        <time className="font-mono italic">Round 2</time>
                                        <div className="text-lg font-black">Second Round of Letters</div>
                                        After the first round is completed, any left over negative items and hard inquries will be disputed
                                        and set out to all 3 bureaus. Typically, after 2+ rounds then we can expect more things to fall off
                                        of your report. (although not guaranteed)
                                    </div>
                                </li>
                                <li>
                                    <div className="timeline-start">
                                        <Image
                                            src={disputeBureausImage}
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
                                        <TimelineIcon />
                                    </div>
                                    <div className="timeline-end mb-10">
                                        <time className="font-mono italic">After Round 2</time>
                                        <div className="text-lg font-black">Reimport Credit Report</div>
                                        After the round 2 dispute is complete, we import your updated credit report to analzye and assess
                                        which accounts were removed, and which ones need a round 3 (or more) dispute.
                                    </div>
                                    <hr />
                                </li>
                                <li>
                                    <div className="timeline-end">
                                        <Image
                                            src={successImage1}
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
                                        <TimelineIcon />
                                    </div>
                                    <div className="timeline-start mb-10 md:text-end">
                                        <time className="font-mono italic">Round 3,4,etc</time>
                                        <div className="text-lg font-black">Subsequent letters</div>
                                        We will continue to dispute month after month until we can remove as many negative items as possible!
                                    </div>
                                </li>
                                <li>
                                    <div className="timeline-start">
                                        <Image
                                            src={disputeBureausImage}
                                            alt=''
                                            height={500}
                                            width={600}
                                        />
                                    </div>
                                    <hr />
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