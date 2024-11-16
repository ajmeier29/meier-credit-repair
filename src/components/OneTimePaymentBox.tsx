import { title } from "process";
import DisplayButtons from "./DisplayButtons";


type MonthlyPricingBoxProps =
    {
        title: string
        description: string;
        oneTimePayment: string;
        amountOfDisputes: string;
        isCarRepo: boolean;
        isBankruptcy: boolean;
        buttonColor: string;
        hoverColor: string;
        url: string;
        monthsSupport: string;
    }

export default function OneTimePricingBox({ title, description, oneTimePayment, amountOfDisputes, isCarRepo, isBankruptcy, url, hoverColor, buttonColor, monthsSupport }: MonthlyPricingBoxProps) {
    return (
        <>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                <div
                    className="relative z-10 mb-10 max-sm:h-[850px] h-[800px] overflow-hidden rounded-[10px] border-2 border-stroke  bg-white  py-10 px-8 shadow-pricing sm:p-12 lg:py-10 lg:px-6 xl:p-[50px]"
                >
                    <span className="mb-3 block text-lg font-semibold">
                        {title}
                    </span>
                    <h2 className="mb-5 text-[42px] font-bold text-dark">
                        <span>${oneTimePayment} &nbsp;</span>
                        <span className="text-base font-medium text-body-color ">
                            One Time Payment
                        </span>
                    </h2>
                    <p
                        className="mb-8 border-b border-stroke  pb-8 text-base text-body-color "
                    >
                        {description}
                    </p>
                    <div className="mb-9 flex flex-col gap-[14px]">
                        <p className="text-base text-body-color ">
                            {monthsSupport} months of support.
                        </p>
                        <p className="text-base text-body-color ">
                            Dispute All Hard Inquiries
                        </p>
                        <p className="text-base text-body-color ">
                            {amountOfDisputes} Collection Dispute&#40;s&#41;
                        </p>
                        {isCarRepo ?
                            (
                                <p className="text-base text-body-color ">
                                    Car Repositions
                                </p>
                            ) :
                            (
                                <s className="text-base text-body-color ">
                                    Car Repositions
                                </s>
                            )
                        }
                        {isBankruptcy ?
                            (
                                <p className="text-base text-body-color ">
                                    Bankruptcies
                                </p>
                            ) :
                            (
                                <s className="text-base text-body-color ">
                                    Bankruptcies
                                </s>
                            )
                        }
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
                            30 to 60min Zoom call each month to discuss our progress and check in on your credit habits.
                        </p>
                    </div>
                    <div className={`absolute bottom-4 w-10/12 ${hoverColor} transition overflow-hidden rounded-md`}>
                        <a
                            href={url}
                            className={`block w-full rounded-md border border-primary bg-${buttonColor} p-3 text-center text-base font-medium transition`}
                        >
                            Choose {title}
                        </a>
                    </div>
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
        </>
    )
}