import Footer from "@/components/Footer";
import Header from "@/components/Header";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Pricing',
};

export default async function Page() {
    return (
        <>
            <Header />
            <div className="h-[700px] md:h-[750px] w-full -mt-20 overscroll-none hero-border-radius bg-hero-gradient-background mb-[300px] ">
                <section
                    className="relative z-10 overflow-hidden dark:bg-dark pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] mb-20"
                >
                    <div className="container mx-auto">
                        <div className="-mx-4 flex flex-wrap">
                            <div className="w-full px-4">
                                <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                                    <span className="mb-2 block text-lg font-semibold text-white">
                                        Pricing Table
                                    </span>
                                    <h2
                                        className="mb-3 text-white text-3xl leading-[1.208] font-bold text-dark sm:text-4xl md:text-[40px]"
                                    >
                                        Our Pricing Plan
                                    </h2>
                                    <p className="text-base text-body-color text-white">
                                        There are many variations of passages of Lorem Ipsum available
                                        but the majority have suffered alteration in some form.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="-mx-4 flex flex-wrap justify-center">
                            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                                <div
                                    className="relative z-10 mb-10 overflow-hidden rounded-[10px] border-2 border-stroke  bg-white  py-10 px-8 shadow-pricing sm:p-12 lg:py-10 lg:px-6 xl:p-[50px]"
                                >
                                    <span className="mb-3 block text-lg font-semibold">
                                        Personal
                                    </span>
                                    <h2 className="mb-5 text-[42px] font-bold text-dark">
                                        <span>$59</span>
                                        <span className="text-base font-medium text-body-color ">
                                            / year
                                        </span>
                                    </h2>
                                    <p
                                        className="mb-8 border-b border-stroke  pb-8 text-base text-body-color "
                                    >
                                        Perfect for using in a personal website or a client project.
                                    </p>
                                    <div className="mb-9 flex flex-col gap-[14px]">
                                        <p className="text-base text-body-color ">
                                            1 User
                                        </p>
                                        <p className="text-base text-body-color ">
                                            All UI components
                                        </p>
                                        <p className="text-base text-body-color ">
                                            Lifetime access
                                        </p>
                                        <p className="text-base text-body-color ">
                                            Free updates
                                        </p>
                                        <p className="text-base text-body-color ">
                                            Use on 1 (one) project
                                        </p>
                                        <p className="text-base text-body-color ">
                                            3 Months support
                                        </p>
                                    </div>
                                    <a
                                        href="javascript:void(0)"
                                        className="block w-full rounded-md border border-stroke dark:border-dark-3 bg-transparent p-3 text-center text-base font-medium transition hover:border-primary hover:bg-primary hover:text-white"
                                    >
                                        Choose Personal
                                    </a>
                                    <div>
                                        <span className="absolute right-0 top-7 z-[-1]">
                                            <svg
                                                width="77"
                                                height="172"
                                                viewBox="0 0 77 172"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <circle cx="86" cy="86" r="86" fill="url(#paint0_linear)" />
                                                <defs>
                                                    <linearGradient
                                                        id="paint0_linear"
                                                        x1="86"
                                                        y1="0"
                                                        x2="86"
                                                        y2="172"
                                                        gradientUnits="userSpaceOnUse"
                                                    >
                                                        <stop stop-color="#3056D3" stop-opacity="0.09" />
                                                        <stop
                                                            offset="1"
                                                            stop-color="#C4C4C4"
                                                            stop-opacity="0"
                                                        />
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                        </span>
                                        <span className="absolute right-4 top-4 z-[-1]">
                                            <svg
                                                width="41"
                                                height="89"
                                                viewBox="0 0 41 89"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <circle
                                                    cx="38.9138"
                                                    cy="87.4849"
                                                    r="1.42021"
                                                    transform="rotate(180 38.9138 87.4849)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="38.9138"
                                                    cy="74.9871"
                                                    r="1.42021"
                                                    transform="rotate(180 38.9138 74.9871)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="38.9138"
                                                    cy="62.4892"
                                                    r="1.42021"
                                                    transform="rotate(180 38.9138 62.4892)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="38.9138"
                                                    cy="38.3457"
                                                    r="1.42021"
                                                    transform="rotate(180 38.9138 38.3457)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="38.9138"
                                                    cy="13.634"
                                                    r="1.42021"
                                                    transform="rotate(180 38.9138 13.634)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="38.9138"
                                                    cy="50.2754"
                                                    r="1.42021"
                                                    transform="rotate(180 38.9138 50.2754)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="38.9138"
                                                    cy="26.1319"
                                                    r="1.42021"
                                                    transform="rotate(180 38.9138 26.1319)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="38.9138"
                                                    cy="1.42021"
                                                    r="1.42021"
                                                    transform="rotate(180 38.9138 1.42021)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="26.4157"
                                                    cy="87.4849"
                                                    r="1.42021"
                                                    transform="rotate(180 26.4157 87.4849)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="26.4157"
                                                    cy="74.9871"
                                                    r="1.42021"
                                                    transform="rotate(180 26.4157 74.9871)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="26.4157"
                                                    cy="62.4892"
                                                    r="1.42021"
                                                    transform="rotate(180 26.4157 62.4892)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="26.4157"
                                                    cy="38.3457"
                                                    r="1.42021"
                                                    transform="rotate(180 26.4157 38.3457)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="26.4157"
                                                    cy="13.634"
                                                    r="1.42021"
                                                    transform="rotate(180 26.4157 13.634)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="26.4157"
                                                    cy="50.2754"
                                                    r="1.42021"
                                                    transform="rotate(180 26.4157 50.2754)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="26.4157"
                                                    cy="26.1319"
                                                    r="1.42021"
                                                    transform="rotate(180 26.4157 26.1319)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="26.4157"
                                                    cy="1.4202"
                                                    r="1.42021"
                                                    transform="rotate(180 26.4157 1.4202)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="13.9177"
                                                    cy="87.4849"
                                                    r="1.42021"
                                                    transform="rotate(180 13.9177 87.4849)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="13.9177"
                                                    cy="74.9871"
                                                    r="1.42021"
                                                    transform="rotate(180 13.9177 74.9871)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="13.9177"
                                                    cy="62.4892"
                                                    r="1.42021"
                                                    transform="rotate(180 13.9177 62.4892)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="13.9177"
                                                    cy="38.3457"
                                                    r="1.42021"
                                                    transform="rotate(180 13.9177 38.3457)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="13.9177"
                                                    cy="13.634"
                                                    r="1.42021"
                                                    transform="rotate(180 13.9177 13.634)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="13.9177"
                                                    cy="50.2754"
                                                    r="1.42021"
                                                    transform="rotate(180 13.9177 50.2754)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="13.9177"
                                                    cy="26.1319"
                                                    r="1.42021"
                                                    transform="rotate(180 13.9177 26.1319)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="13.9177"
                                                    cy="1.42019"
                                                    r="1.42021"
                                                    transform="rotate(180 13.9177 1.42019)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="1.41963"
                                                    cy="87.4849"
                                                    r="1.42021"
                                                    transform="rotate(180 1.41963 87.4849)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="1.41963"
                                                    cy="74.9871"
                                                    r="1.42021"
                                                    transform="rotate(180 1.41963 74.9871)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="1.41963"
                                                    cy="62.4892"
                                                    r="1.42021"
                                                    transform="rotate(180 1.41963 62.4892)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="1.41963"
                                                    cy="38.3457"
                                                    r="1.42021"
                                                    transform="rotate(180 1.41963 38.3457)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="1.41963"
                                                    cy="13.634"
                                                    r="1.42021"
                                                    transform="rotate(180 1.41963 13.634)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="1.41963"
                                                    cy="50.2754"
                                                    r="1.42021"
                                                    transform="rotate(180 1.41963 50.2754)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="1.41963"
                                                    cy="26.1319"
                                                    r="1.42021"
                                                    transform="rotate(180 1.41963 26.1319)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="1.41963"
                                                    cy="1.4202"
                                                    r="1.42021"
                                                    transform="rotate(180 1.41963 1.4202)"
                                                    fill="#3056D3"
                                                />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                                <div
                                    className="relative z-10 mb-10 overflow-hidden rounded-[10px] border-2 border-stroke dark:border-dark-3 bg-white dark:bg-dark-2 py-10 px-8 shadow-pricing sm:p-12 lg:py-10 lg:px-6 xl:p-[50px]"
                                >
                                    <span className="mb-3 block text-lg font-semibold">
                                        Business
                                    </span>
                                    <h2 className="mb-5 text-[42px] font-bold text-dark">
                                        <span>$199</span>
                                        <span className="text-base font-medium text-body-color ">
                                            / year
                                        </span>
                                    </h2>
                                    <p
                                        className="mb-8 border-b border-stroke dark:border-dark-3 pb-8 text-base text-body-color "
                                    >
                                        Perfect for using in a Business website or a client project.
                                    </p>
                                    <div className="mb-9 flex flex-col gap-[14px]">
                                        <p className="text-base text-body-color ">
                                            5 Users
                                        </p>
                                        <p className="text-base text-body-color ">
                                            All UI components
                                        </p>
                                        <p className="text-base text-body-color ">
                                            Lifetime access
                                        </p>
                                        <p className="text-base text-body-color ">
                                            Free updates
                                        </p>
                                        <p className="text-base text-body-color ">
                                            Use on 3 (Three) project
                                        </p>
                                        <p className="text-base text-body-color ">
                                            4 Months support
                                        </p>
                                    </div>
                                    <a
                                        href="javascript:void(0)"
                                        className="block w-full rounded-md border border-primary bg-[#4ec662] p-3 text-center text-base font-medium transition hover:bg-opacity-90"
                                    >
                                        Choose Business
                                    </a>
                                    <div>
                                        <span className="absolute right-0 top-7 z-[-1]">
                                            <svg
                                                width="77"
                                                height="172"
                                                viewBox="0 0 77 172"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <circle cx="86" cy="86" r="86" fill="url(#paint0_linear)" />
                                                <defs>
                                                    <linearGradient
                                                        id="paint0_linear"
                                                        x1="86"
                                                        y1="0"
                                                        x2="86"
                                                        y2="172"
                                                        gradientUnits="userSpaceOnUse"
                                                    >
                                                        <stop stop-color="#3056D3" stop-opacity="0.09" />
                                                        <stop
                                                            offset="1"
                                                            stop-color="#C4C4C4"
                                                            stop-opacity="0"
                                                        />
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                        </span>
                                        <span className="absolute right-4 top-4 z-[-1]">
                                            <svg
                                                width="41"
                                                height="89"
                                                viewBox="0 0 41 89"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <circle
                                                    cx="38.9138"
                                                    cy="87.4849"
                                                    r="1.42021"
                                                    transform="rotate(180 38.9138 87.4849)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="38.9138"
                                                    cy="74.9871"
                                                    r="1.42021"
                                                    transform="rotate(180 38.9138 74.9871)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="38.9138"
                                                    cy="62.4892"
                                                    r="1.42021"
                                                    transform="rotate(180 38.9138 62.4892)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="38.9138"
                                                    cy="38.3457"
                                                    r="1.42021"
                                                    transform="rotate(180 38.9138 38.3457)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="38.9138"
                                                    cy="13.634"
                                                    r="1.42021"
                                                    transform="rotate(180 38.9138 13.634)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="38.9138"
                                                    cy="50.2754"
                                                    r="1.42021"
                                                    transform="rotate(180 38.9138 50.2754)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="38.9138"
                                                    cy="26.1319"
                                                    r="1.42021"
                                                    transform="rotate(180 38.9138 26.1319)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="38.9138"
                                                    cy="1.42021"
                                                    r="1.42021"
                                                    transform="rotate(180 38.9138 1.42021)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="26.4157"
                                                    cy="87.4849"
                                                    r="1.42021"
                                                    transform="rotate(180 26.4157 87.4849)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="26.4157"
                                                    cy="74.9871"
                                                    r="1.42021"
                                                    transform="rotate(180 26.4157 74.9871)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="26.4157"
                                                    cy="62.4892"
                                                    r="1.42021"
                                                    transform="rotate(180 26.4157 62.4892)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="26.4157"
                                                    cy="38.3457"
                                                    r="1.42021"
                                                    transform="rotate(180 26.4157 38.3457)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="26.4157"
                                                    cy="13.634"
                                                    r="1.42021"
                                                    transform="rotate(180 26.4157 13.634)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="26.4157"
                                                    cy="50.2754"
                                                    r="1.42021"
                                                    transform="rotate(180 26.4157 50.2754)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="26.4157"
                                                    cy="26.1319"
                                                    r="1.42021"
                                                    transform="rotate(180 26.4157 26.1319)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="26.4157"
                                                    cy="1.4202"
                                                    r="1.42021"
                                                    transform="rotate(180 26.4157 1.4202)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="13.9177"
                                                    cy="87.4849"
                                                    r="1.42021"
                                                    transform="rotate(180 13.9177 87.4849)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="13.9177"
                                                    cy="74.9871"
                                                    r="1.42021"
                                                    transform="rotate(180 13.9177 74.9871)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="13.9177"
                                                    cy="62.4892"
                                                    r="1.42021"
                                                    transform="rotate(180 13.9177 62.4892)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="13.9177"
                                                    cy="38.3457"
                                                    r="1.42021"
                                                    transform="rotate(180 13.9177 38.3457)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="13.9177"
                                                    cy="13.634"
                                                    r="1.42021"
                                                    transform="rotate(180 13.9177 13.634)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="13.9177"
                                                    cy="50.2754"
                                                    r="1.42021"
                                                    transform="rotate(180 13.9177 50.2754)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="13.9177"
                                                    cy="26.1319"
                                                    r="1.42021"
                                                    transform="rotate(180 13.9177 26.1319)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="13.9177"
                                                    cy="1.42019"
                                                    r="1.42021"
                                                    transform="rotate(180 13.9177 1.42019)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="1.41963"
                                                    cy="87.4849"
                                                    r="1.42021"
                                                    transform="rotate(180 1.41963 87.4849)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="1.41963"
                                                    cy="74.9871"
                                                    r="1.42021"
                                                    transform="rotate(180 1.41963 74.9871)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="1.41963"
                                                    cy="62.4892"
                                                    r="1.42021"
                                                    transform="rotate(180 1.41963 62.4892)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="1.41963"
                                                    cy="38.3457"
                                                    r="1.42021"
                                                    transform="rotate(180 1.41963 38.3457)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="1.41963"
                                                    cy="13.634"
                                                    r="1.42021"
                                                    transform="rotate(180 1.41963 13.634)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="1.41963"
                                                    cy="50.2754"
                                                    r="1.42021"
                                                    transform="rotate(180 1.41963 50.2754)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="1.41963"
                                                    cy="26.1319"
                                                    r="1.42021"
                                                    transform="rotate(180 1.41963 26.1319)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="1.41963"
                                                    cy="1.4202"
                                                    r="1.42021"
                                                    transform="rotate(180 1.41963 1.4202)"
                                                    fill="#3056D3"
                                                />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                                <div
                                    className="relative z-10 mb-10 overflow-hidden rounded-[10px] border-2 border-stroke dark:border-dark-3 bg-white dark:bg-dark-2 py-10 px-8 shadow-pricing sm:p-12 lg:py-10 lg:px-6 xl:p-[50px]"
                                >
                                    <span className="mb-3 block text-lg font-semibold">
                                        Professional
                                    </span>
                                    <h2 className="mb-5 text-[42px] font-bold text-dark ">
                                        <span>$256</span>
                                        <span className="text-base font-medium text-body-color ">
                                            / year
                                        </span>
                                    </h2>
                                    <p
                                        className="mb-8 border-b border-stroke dark:border-dark-3 pb-8 text-base text-body-color "
                                    >
                                        Perfect for using in a Professional website or a client project.
                                    </p>
                                    <div className="mb-9 flex flex-col gap-[14px]">
                                        <p className="text-base text-body-color ">
                                            Unlimited Users
                                        </p>
                                        <p className="text-base text-body-color ">
                                            All UI components
                                        </p>
                                        <p className="text-base text-body-color ">
                                            Lifetime access
                                        </p>
                                        <p className="text-base text-body-color ">
                                            Free updates
                                        </p>
                                        <p className="text-base text-body-color ">
                                            Use on Unlimited project
                                        </p>
                                        <p className="text-base text-body-color ">
                                            12 Months support
                                        </p>
                                    </div>
                                    <a
                                        href="javascript:void(0)"
                                        className="block w-full rounded-md border border-stroke dark:border-dark-3 bg-transparent p-3 text-center text-base font-medium transition hover:border-primary hover:bg-primary hover:text-white"
                                    >
                                        Choose Professional
                                    </a>
                                    <div>
                                        <span className="absolute right-0 top-7 z-[-1]">
                                            <svg
                                                width="77"
                                                height="172"
                                                viewBox="0 0 77 172"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <circle cx="86" cy="86" r="86" fill="url(#paint0_linear)" />
                                                <defs>
                                                    <linearGradient
                                                        id="paint0_linear"
                                                        x1="86"
                                                        y1="0"
                                                        x2="86"
                                                        y2="172"
                                                        gradientUnits="userSpaceOnUse"
                                                    >
                                                        <stop stop-color="#3056D3" stop-opacity="0.09" />
                                                        <stop
                                                            offset="1"
                                                            stop-color="#C4C4C4"
                                                            stop-opacity="0"
                                                        />
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                        </span>
                                        <span className="absolute right-4 top-4 z-[-1]">
                                            <svg
                                                width="41"
                                                height="89"
                                                viewBox="0 0 41 89"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <circle
                                                    cx="38.9138"
                                                    cy="87.4849"
                                                    r="1.42021"
                                                    transform="rotate(180 38.9138 87.4849)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="38.9138"
                                                    cy="74.9871"
                                                    r="1.42021"
                                                    transform="rotate(180 38.9138 74.9871)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="38.9138"
                                                    cy="62.4892"
                                                    r="1.42021"
                                                    transform="rotate(180 38.9138 62.4892)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="38.9138"
                                                    cy="38.3457"
                                                    r="1.42021"
                                                    transform="rotate(180 38.9138 38.3457)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="38.9138"
                                                    cy="13.634"
                                                    r="1.42021"
                                                    transform="rotate(180 38.9138 13.634)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="38.9138"
                                                    cy="50.2754"
                                                    r="1.42021"
                                                    transform="rotate(180 38.9138 50.2754)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="38.9138"
                                                    cy="26.1319"
                                                    r="1.42021"
                                                    transform="rotate(180 38.9138 26.1319)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="38.9138"
                                                    cy="1.42021"
                                                    r="1.42021"
                                                    transform="rotate(180 38.9138 1.42021)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="26.4157"
                                                    cy="87.4849"
                                                    r="1.42021"
                                                    transform="rotate(180 26.4157 87.4849)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="26.4157"
                                                    cy="74.9871"
                                                    r="1.42021"
                                                    transform="rotate(180 26.4157 74.9871)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="26.4157"
                                                    cy="62.4892"
                                                    r="1.42021"
                                                    transform="rotate(180 26.4157 62.4892)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="26.4157"
                                                    cy="38.3457"
                                                    r="1.42021"
                                                    transform="rotate(180 26.4157 38.3457)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="26.4157"
                                                    cy="13.634"
                                                    r="1.42021"
                                                    transform="rotate(180 26.4157 13.634)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="26.4157"
                                                    cy="50.2754"
                                                    r="1.42021"
                                                    transform="rotate(180 26.4157 50.2754)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="26.4157"
                                                    cy="26.1319"
                                                    r="1.42021"
                                                    transform="rotate(180 26.4157 26.1319)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="26.4157"
                                                    cy="1.4202"
                                                    r="1.42021"
                                                    transform="rotate(180 26.4157 1.4202)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="13.9177"
                                                    cy="87.4849"
                                                    r="1.42021"
                                                    transform="rotate(180 13.9177 87.4849)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="13.9177"
                                                    cy="74.9871"
                                                    r="1.42021"
                                                    transform="rotate(180 13.9177 74.9871)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="13.9177"
                                                    cy="62.4892"
                                                    r="1.42021"
                                                    transform="rotate(180 13.9177 62.4892)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="13.9177"
                                                    cy="38.3457"
                                                    r="1.42021"
                                                    transform="rotate(180 13.9177 38.3457)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="13.9177"
                                                    cy="13.634"
                                                    r="1.42021"
                                                    transform="rotate(180 13.9177 13.634)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="13.9177"
                                                    cy="50.2754"
                                                    r="1.42021"
                                                    transform="rotate(180 13.9177 50.2754)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="13.9177"
                                                    cy="26.1319"
                                                    r="1.42021"
                                                    transform="rotate(180 13.9177 26.1319)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="13.9177"
                                                    cy="1.42019"
                                                    r="1.42021"
                                                    transform="rotate(180 13.9177 1.42019)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="1.41963"
                                                    cy="87.4849"
                                                    r="1.42021"
                                                    transform="rotate(180 1.41963 87.4849)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="1.41963"
                                                    cy="74.9871"
                                                    r="1.42021"
                                                    transform="rotate(180 1.41963 74.9871)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="1.41963"
                                                    cy="62.4892"
                                                    r="1.42021"
                                                    transform="rotate(180 1.41963 62.4892)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="1.41963"
                                                    cy="38.3457"
                                                    r="1.42021"
                                                    transform="rotate(180 1.41963 38.3457)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="1.41963"
                                                    cy="13.634"
                                                    r="1.42021"
                                                    transform="rotate(180 1.41963 13.634)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="1.41963"
                                                    cy="50.2754"
                                                    r="1.42021"
                                                    transform="rotate(180 1.41963 50.2754)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="1.41963"
                                                    cy="26.1319"
                                                    r="1.42021"
                                                    transform="rotate(180 1.41963 26.1319)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="1.41963"
                                                    cy="1.4202"
                                                    r="1.42021"
                                                    transform="rotate(180 1.41963 1.4202)"
                                                    fill="#3056D3"
                                                />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div >
            <Footer />
        </>
    )
}