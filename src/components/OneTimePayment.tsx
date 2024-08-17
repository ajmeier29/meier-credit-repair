import DisplayButtons from "./DisplayButtons";


export default function OneTimePayment() {
    const standardPayLink: string = (process.env.NEXT_PUBLIC_STANDARD_PAY_LINK as string);

    return (
        <>

            <div className="-mx-4 flex flex-wrap justify-center">
                <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                    <div
                        className="relative z-10 mb-10 overflow-hidden rounded-[10px] border-2 border-stroke  bg-white  py-10 px-8 shadow-pricing sm:p-12 lg:py-10 lg:px-6 xl:p-[50px]"
                    >
                        <span className="mb-3 block text-lg font-semibold">
                            Standard <span className="text-sm">(5 Disputes)</span>
                        </span>
                        <h2 className="mb-5 text-[42px] font-bold text-dark">
                            <span>$99 &nbsp;</span>
                            <span className="text-base font-medium text-body-color ">
                                Enrollment Fee
                            </span>

                            <br />
                            <span>$685 &nbsp;</span>
                            <span className="text-base font-medium text-body-color ">
                                One Time Payment
                            </span>
                        </h2>
                        <p
                            className="mb-8 border-b border-stroke  pb-8 text-base text-body-color "
                        >
                            Perfect for disputing late payments, collections, hard inquiries, and more.
                        </p>
                        <div className="mb-9 flex flex-col gap-[14px]">
                            <p className="text-base text-body-color ">
                                Personal information updated on all Bureaus
                            </p>
                            <p className="text-base text-body-color ">
                                Client Portal for tracking progress on disputes.
                            </p>
                            <p className="text-base text-body-color ">
                                Breakdown of Credit Report
                            </p>
                            <p className="text-base text-body-color ">
                                Information on Increasing Credit
                            </p>
                            <p className="text-base text-body-color ">
                                Money Back Guarantee
                            </p>
                            <s className="text-base text-body-color ">
                                Unlimited Disputes
                            </s>
                            <s className="text-base text-body-color ">
                                30 to 60min Zoom call each month to discuss our progress and check in on your credit habits.
                            </s>
                        </div>
                        <a
                            href="javascript:void(0)"
                            className="block w-full rounded-md border border-stroke dark:border-dark-3 bg-transparent p-3 text-center text-base font-medium transition hover:border-primary hover:bg-primary"
                        >
                            Choose Standard
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
                            <DisplayButtons color='#4ec662' />
                        </div>
                    </div>
                </div>
                <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                    <div
                        className="relative z-10 mb-10 overflow-hidden rounded-[10px] border-2 border-stroke dark:border-dark-3 bg-white dark:bg-dark-2 py-10 px-8 shadow-pricing sm:p-12 lg:py-10 lg:px-6 xl:p-[50px]"
                    >
                        <span className="mb-3 block text-lg font-semibold">
                            Premium
                        </span>
                        <h2 className="mb-5 text-[42px] font-bold text-dark">
                            <span>$129 &nbsp;</span>
                            <span className="text-base font-medium text-body-color ">
                                Enrollment Fee
                            </span>

                            <br />
                            <span>$99 &nbsp;</span>
                            <span className="text-base font-medium text-body-color ">
                                / month after
                            </span>
                        </h2>
                        <p
                            className="mb-8 border-b border-stroke dark:border-dark-3 pb-8 text-base text-body-color "
                        >
                            Perfect for clients who have bankruptcies and/or alot of items to dispute.
                        </p>
                        <div className="mb-9 flex flex-col gap-[14px]">
                            <p className="text-base text-body-color ">
                                Personal information updated on all Bureaus
                            </p>
                            <p className="text-base text-body-color ">
                                Client Portal for tracking progress on disputes.
                            </p>
                            <p className="text-base text-body-color ">
                                Breakdown of Credit Report
                            </p>
                            <p className="text-base text-body-color ">
                                Information on Increasing Credit
                            </p>
                            <p className="text-base text-body-color ">
                                Money Back Guarantee
                            </p>
                            <p className="text-base text-body-color ">
                                Unlimited Disputes
                            </p>
                            <s className="text-base text-body-color ">
                                30 to 60min Zoom call each month to discuss our progress and check in on your credit habits.
                            </s>
                        </div>
                        <a
                            href={standardPayLink}
                            className="block w-full rounded-md border border-primary bg-primary-green p-3 text-center text-base font-medium transition hover:bg-opacity-90"
                        >
                            Choose Premium
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
                            <DisplayButtons color='#4ec662' />
                        </div>
                    </div>
                </div>
                <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                    <div
                        className="relative z-10 mb-10 overflow-hidden rounded-[10px] border-2 border-stroke dark:border-dark-3 bg-white dark:bg-dark-2 py-10 px-8 shadow-pricing sm:p-12 lg:py-10 lg:px-6 xl:p-[50px]"
                    >
                        <span className="mb-3 block text-lg font-semibold">
                            Premium +
                        </span>
                        <h2 className="mb-5 text-[42px] font-bold text-dark ">
                            <span>$149 &nbsp;</span>
                            <span className="text-base font-medium text-body-color ">
                                Enrollment Fee
                            </span>

                            <br />
                            <span>$129 &nbsp;</span>
                            <span className="text-base font-medium text-body-color ">
                                / month after
                            </span>
                        </h2>
                        <p
                            className="mb-8 border-b border-stroke dark:border-dark-3 pb-8 text-base text-body-color "
                        >
                            Ideal for clients with many negative items who want monthly progress meetings.
                        </p>
                        <div className="mb-9 flex flex-col gap-[14px]">
                            <p className="text-base text-body-color ">
                                Personal information updated on all Bureaus
                            </p>
                            <p className="text-base text-body-color ">
                                Client Portal for tracking progress on disputes.
                            </p>
                            <p className="text-base text-body-color ">
                                Breakdown of Credit Report
                            </p>
                            <p className="text-base text-body-color ">
                                Information on Increasing Credit
                            </p>
                            <p className="text-base text-body-color ">
                                Money Back Guarantee
                            </p>
                            <p className="text-base text-body-color ">
                                Unlimited Disputes
                            </p>
                            <p className="text-base text-body-color ">
                                30 to 60min Zoom call each month to discuss our progress and check in on your credit habits.
                            </p>
                        </div>
                        <a
                            href="javascript:void(0)"
                            className="block w-full rounded-md border border-stroke dark:border-dark-3 bg-transparent p-3 text-center text-base font-medium transition hover:border-primary hover:bg-primary"
                        >
                            Choose Premium +
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
                            <DisplayButtons color='#4ec662' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}