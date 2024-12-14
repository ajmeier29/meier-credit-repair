'use client'
// Images
import fairScoreImage from '../../public/images/fair_credit_score.png';
import educationImage from '../../public/images/graduation.png';
import investigateImage from '../../public/images/searcher.png';
import planImage from '../../public/images/roadmap.png';
import disputeImage from '../../public/images/fight-man.png';
import ficoCalcImage from '../../public/images/fico_calc.webp';
import ficoEducationImage from '../../public/images/fico_education.webp';
import creditAnalysisImage from '../../public/images/credit-report-analysis.webp';
import personalizedPlanImage from '../../public/images/disputeLetters.webp';
import disputeBureausImage from '../../public/images/disputeBureaus.webp';
import ongoingEducationImage from '../../public/images/creditEducation.webp';


// libs
import { PreloadStaticImage } from "./PreloadImage";
// import ContactModal from "./ContactModal";
import Typed from 'typed.js';
import { MutableRefObject, useEffect, useRef } from 'react';
import { StaticImageData } from "next/image";
import FeatureSection from "./FeatureSection";
import CalendlyModal from "./CalendlyEmbedded";
import ContactForm from './ContactForm';


export default function HomePage() {
    // const { showModal, setShowModal, showSuccessMessage } = useContext(SubscribeContext)
    // const openModal = () => setShowModal(true);
    // const closeModal = () => setShowModal(false);
    const featuresRef = useRef<HTMLDivElement | null>(null);
    const analysisref = useRef<HTMLDivElement | null>(null);
    const disputeref = useRef<HTMLDivElement | null>(null);
    const disputBureaueref = useRef<HTMLDivElement | null>(null);
    const educationRef = useRef<HTMLDivElement | null>(null);
    const typedRef = useRef(null);

    useEffect(() => {
        const typed = new Typed(typedRef.current, {
            strings: ['charge offs', 'collections', 'late payments', 'inquiries', 'bankruptcies', 'negative items.'],
            startDelay: 50,
            typeSpeed: 50,
            backSpeed: 50,
            backDelay: 100
        });

        // Destropying
        return () => {
            typed.destroy();
        };
    }, []);
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            {/* <ContactModal /> */}
            <div className="relative justify-center items-center -mt-12 md:-mt-32 drop-shadow-1xl block">
                {/* <PreloadStaticImage imgSrc={mainWorkoutImage} styleProps={'h-[700px] w-full diagonal-cut-mobile  relative'} /> */}
                <div className="grid grid-cols-1 h-full mt-10">
                    <div className="absolute h-[700px] md:h-[750px] w-full -mt-20 overscroll-none hero-border-radius bg-hero-gradient-background "></div>
                    <div className="relative top-0 z-20 mx-auto md:mt-24 max-w-3xl md:px-4 text-center">
                        <div className="grid grid-cols-1 text-white place-content-center justify-items-center w-full">
                            <h1 className="text-[25px] md:text-4xl font-bold mt-10 mb-6 max-sm:px-5">I will dispute and remove <br /> <span ref={typedRef} /></h1>
                            <p className="px-4 text-lg md:w-3/4 leading-relaxed">
                                The credit bureaus are incentivized to keep your credit score low. Take control of your credit score today! Contact me and lets set up a consultation to understand how I can help raise your score in 30 to 60 days.
                            </p>

                            {/* <div className="mt-4">
                                <button
                                    aria-label="Contact Me"
                                    onClick={() => {
                                        if (document) {
                                            (document.getElementById('contact_modal') as HTMLFormElement).showModal();
                                        }
                                    }} className="inline-block py-4 px-8 leading-none bg-primary-blue hover:bg-primary-blue-hover text-white bg-opacity-85 rounded shadow text-sm font-bold"
                                >Contact Me</button>
                            </div> */}
                            <div className='mt-3 w-11/12 mb:w-2/3'>
                                <ContactForm />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center w-3/4 md:w-[90%] lg:w-[130%] text-black gap-4 mt-6">
                                <div
                                    data-aos="fade-up"
                                    data-aos-delay="50"
                                    data-aos-duration="500"
                                    className="bg-white p-5 h-72 rounded-lg border shadow-md grid grid-cols-1 md:gap-3 lg:gap-1 place-items-center">
                                    <PreloadStaticImage imgSrc={investigateImage} styleProps={'w-10 h-10'} />
                                    <h2 className="text-xl">
                                        Deep Credit Analysis
                                    </h2>
                                    <p className="text-sm h-28 font-light">
                                        I will review your credit reports from the three major bureaus to find negative or questionable items affecting your score.
                                    </p>
                                    <button
                                        onClick={() => {
                                            analysisref.current?.scrollIntoView({
                                                behavior: 'smooth'
                                            });
                                        }}
                                        className="inline text-left">Learn More
                                        <svg className="h-5 w-5 inline" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <line x1="5" y1="12" x2="19" y2="12" />  <line x1="15" y1="16" x2="19" y2="12" />  <line x1="15" y1="8" x2="19" y2="12" /></svg>
                                    </button>
                                </div>
                                <div
                                    data-aos="fade-up"
                                    data-aos-delay="50"
                                    data-aos-duration="500"
                                    className="bg-white p-5 h-72 rounded-lg border shadow-md grid grid-cols-1 md:gap-3 lg:gap-1 place-items-center">
                                    <PreloadStaticImage imgSrc={planImage} styleProps={'w-10 h-10'} />
                                    <h2 className="text-xl">
                                        Personalized Plan
                                    </h2>
                                    <p className="text-sm h-28 font-light">
                                        Based on the credit analysis, I&apos;ll create a personalized plan to challenge and remove negative items from your credit reports.
                                    </p>
                                    <button
                                        onClick={() => {
                                            disputeref.current?.scrollIntoView({
                                                behavior: 'smooth'
                                            });
                                        }}
                                        className="inline text-left">Learn More
                                        <svg className="h-5 w-5 inline" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <line x1="5" y1="12" x2="19" y2="12" />  <line x1="15" y1="16" x2="19" y2="12" />  <line x1="15" y1="8" x2="19" y2="12" /></svg>
                                    </button>
                                </div>
                                <div
                                    data-aos="fade-up"
                                    data-aos-delay="50"
                                    data-aos-duration="500"
                                    className="bg-white p-5 h-72 rounded-lg border shadow-md grid grid-cols-1 md:gap-3 lg:gap-1 place-items-center">
                                    <PreloadStaticImage imgSrc={disputeImage} styleProps={'w-10 h-10'} />
                                    <h2 className="text-xl">
                                        Dispute The Bureaus
                                    </h2>
                                    <p className="text-sm h-28 font-light">
                                        I will use the FCRA law to dispute all negative items on your credit record. I will dispute public info, as well as negative items.
                                    </p>
                                    <button
                                        onClick={() => {
                                            disputBureaueref.current?.scrollIntoView({
                                                behavior: 'smooth'
                                            });
                                        }}
                                        className="inline text-left">Learn More
                                        <svg className="h-5 w-5 inline" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <line x1="5" y1="12" x2="19" y2="12" />  <line x1="15" y1="16" x2="19" y2="12" />  <line x1="15" y1="8" x2="19" y2="12" /></svg>
                                    </button>
                                </div>
                                <div
                                    data-aos="fade-up"
                                    data-aos-delay="50"
                                    data-aos-duration="500"
                                    className="bg-white p-5 h-72 rounded-lg border shadow-md grid grid-cols-1 md:gap-3 lg:gap-1 place-items-center">
                                    <PreloadStaticImage imgSrc={educationImage} styleProps={'w-10 h-10'} />
                                    <h2 className="text-xl">
                                        Ongoing Education
                                    </h2>
                                    <p className="text-sm h-28 font-light">
                                        I will educate you as to how to help raise your score immediately along side with my servcies.
                                    </p>
                                    <button
                                        onClick={() => {
                                            educationRef.current?.scrollIntoView({
                                                behavior: 'smooth'
                                            });
                                        }}
                                        className="inline text-left">Learn More
                                        <svg className="h-5 w-5 inline" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <line x1="5" y1="12" x2="19" y2="12" />  <line x1="15" y1="16" x2="19" y2="12" />  <line x1="15" y1="8" x2="19" y2="12" /></svg>
                                    </button>
                                </div>
                            </div>
                            {/* <div className="text-black mt-6">
                                More Information
                            </div> */}
                            <button onClick={() => {
                                featuresRef.current?.scrollIntoView({
                                    behavior: 'smooth'
                                });
                            }} className="mt-10">
                                <svg className="h-8 w-8 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <polyline points="6 9 12 15 18 9" /></svg>
                            </button>
                        </div>

                    </div>

                    <div
                        ref={featuresRef}
                        className="grid grid-cols-1 gap-12 text-white mt-12 place-content-center justify-items-center w-full">
                        <div ref={analysisref}></div>
                        <FeatureSection
                            image={creditAnalysisImage}
                            heading="Deep Credit Report Analysis"
                            description="I will review your credit reports from the three major bureaus to find negative or questionable items affecting your score. This comprehensive analysis will help identify areas of improvement and pave the way for a stronger credit profile. Here&apos;s what you&apos;ll get:"
                            feature1="Identification of Negative Items: Pinpoint any negative entries such as late payments, collections, or charge-offs that are impacting your credit score."
                            feature2="Verification of Accuracy: Examine the accuracy of your credit reports, ensuring that all information is correct and up-to-date. If discrepancies are found, you&apos;ll receive guidance on how to dispute these errors effectively."
                            feature3="Personalized Improvement Plan: Receive a tailored plan to address and resolve the negative items on your credit reports, helping you to improve your credit score over time."
                        />
                        <div ref={disputeref}></div>
                        <FeatureSection
                            image={personalizedPlanImage}
                            heading="Develop a Personalized Plan"
                            description="Based on the credit analysis, I&apos;ll create a personalized plan to challenge and remove negative items from your credit reports. This service includes:"
                            feature1="Customized Dispute Letters: I will build tailored dispute letters to send to credit bureaus for challenging inaccuracies."
                            feature2="Step-by-Step Communication: I will communicate with you every step of the way with what is being disputed as well as the results."
                            feature3="Ongoing Support: Get continuous support and updates to track progress and make adjustments as needed."
                        />
                        <div ref={disputBureaueref}></div>
                        <FeatureSection
                            image={disputeBureausImage}
                            heading="Dispute The Bureaus"
                            description="Did you know every Bankruptcy is falsey reported? I will use the FCRA law to dispute all negative items on your credit record. This includes public information such as bankruptcies and liens, as well as other negative items like late payments and collections. I&apos;ll ensure that all disputes are handled professionally and efficiently, helping to improve your credit profile. Here&apos;s what you&apos;ll get:"
                            feature1="Customized Dispute Letters: I will build tailored dispute letters to send to credit bureaus for challenging inaccuracies."
                            feature2="Step-by-Step Communication: I will communicate with you every step of the way with what is being disputed as well as the results."
                            feature3="Ongoing Support: Get continuous support and updates to track progress and make adjustments as needed."
                        />
                        <div ref={educationRef}></div>
                        <FeatureSection
                            image={ongoingEducationImage}
                            heading="Ongoing Education"
                            description="I will educate you on how to raise your score immediately, alongside my services. This includes personalized advice and strategies to maintain and improve your credit score in the long term. Here&apos;s what you&apos;ll get:"
                            feature1="Immediate Strategies: Learn actionable steps you can take right away to start improving your credit score, such as optimizing credit card usage and paying down debts strategically."
                            feature2="Continuous Support: Benefit from ongoing support and check-ins to answer any questions and adjust strategies as needed to ensure continued progress."
                            feature3="Personalized Advice: Receive tailored recommendations based on your unique financial situation, ensuring that you are focusing on the most effective methods for credit improvement."
                        />
                        <FeatureSection
                            image={ficoEducationImage}
                            heading="Why a good credit score is important"
                            description="A strong credit score is key to unlocking financial opportunities and stability. It affects everything from loan approvals to interest rates, and even job prospects. Here's why maintaining a good credit score matters:"
                            feature1="Legal Expertise: Leverage the Fair Credit Reporting Act (FCRA) to challenge inaccuracies on your credit report, ensuring your rights are protected."
                            feature2="Comprehensive Disputes: Address both public records and other negative items, such as bankruptcies, late payments, collections, and charge-offs, to ensure a thorough cleanup of your credit report."
                            feature3="Professional Handling: Receive expert assistance in preparing and submitting disputes to the credit bureaus, with follow-up on each dispute to ensure timely resolution."
                        />
                        <FeatureSection
                            image={fairScoreImage}
                            heading="What I will dispute"
                            description="Choosing the right partner for your credit repair journey is crucial. I bring a personalized approach and deep expertise to help you navigate the complexities of credit disputes. Here's why partnering with me is your best choice."
                            feature1="Expert Analysis: In-depth review to spot inaccuracies and negative items."
                            feature2="Tailored Strategies: Custom plans to challenge and remove harmful items."
                            feature3="Proven Results: A successful track record of boosting credit scores."
                        />
                        <FeatureSection
                            image={ficoCalcImage}
                            heading="Education on credit scoring"
                            description="Understanding your credit score is essential for financial health. I offer comprehensive education on credit scoring to empower you with the knowledge needed to manage and improve your credit. Here's how I can help:"
                            feature1="Clear Explanations: Break down complex credit concepts into easy-to-understand information."
                            feature2="Practical Tips: Provide actionable advice for maintaining and boosting your credit score."
                            feature3="Ongoing Support: Continuous guidance to keep you informed and on track with your credit goals."
                        />
                    </div>
                </div>
                <CalendlyModal url="https://calendly.com/ajmeier29/initial-consultation" />
            </div >
        </>
    )
}
type InfoCardProps =
    {
        image: StaticImageData;
        title: string;
        description: string;
        ref: MutableRefObject<HTMLDivElement | null>;
    }
const InfoCard = ({ image, title, description, ref }: InfoCardProps) => {
    return (
        <>
            <div
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="500"
                className="bg-white p-5 h-72 rounded-lg border shadow-md grid grid-cols-1 md:gap-3 lg:gap-1 place-items-center">
                <PreloadStaticImage imgSrc={image} styleProps={'w-10 h-10'} />
                <h2 className="text-xl">
                    {title}
                </h2>
                <p className="text-sm h-28 font-light">
                    {description}
                </p>
                <button
                    onClick={() => {
                        ref.current?.scrollIntoView({
                            behavior: 'smooth'
                        });
                    }}
                    className="inline text-left">Learn More
                    <svg className="h-5 w-5 inline" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <line x1="5" y1="12" x2="19" y2="12" />  <line x1="15" y1="16" x2="19" y2="12" />  <line x1="15" y1="8" x2="19" y2="12" /></svg>
                </button>
            </div>
        </>
    )
}