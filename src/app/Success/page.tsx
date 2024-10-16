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

                <div
                    data-aos="fade-up"
                    data-aos-delay="50"
                    data-aos-duration="500"
                    className="flex justify-center h-[700px] md:h-[750px] w-full -mt-20 md:-mt-24 overscroll-none hero-border-radius bg-hero-gradient-background mb-[2200px] md:mb-[400px] ">
                    <section
                        className="mt-20 z-10 overflow-hidden max-sm:ml-5 max-sm:mr-5 dark:bg-dark pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] mb-20"
                    >

                        <div className="container justify-center">
                            <div className="bg-white p-6 rounded-2xl overflow-hidden">
                                <svg viewBox="0 0 24 24" className="text-green-600 w-16 h-16 mx-auto my-6">
                                    <path fill="currentColor"
                                        d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z">
                                    </path>
                                </svg>
                                <div className="text-center">
                                    <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">Payment Done!</h3>
                                    <p className="text-gray-600 my-2">Thank you for completing your secure online payment.</p>
                                    <p>Please feel free to contact me at any time!</p>
                                    <div className="py-10 text-center">
                                        <a href="/" className="px-12 bg-primary-blue rounded-lg hover:bg-indigo-500 text-white font-semibold py-3">
                                            GO HOME
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                </div >
                <Footer />
            </div>
            {/* <CalendlyModal url="https://calendly.com/ajmeier29/initial-consultation" /> */}
        </>
    )
}

type ButtonsProps =
    {
        color: string
    }
const Buttons = ({ color }: ButtonsProps) => {

    return (
        <>
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
                        fill={color}
                    />
                    <circle
                        cx="38.9138"
                        cy="74.9871"
                        r="1.42021"
                        transform="rotate(180 38.9138 74.9871)"
                        fill={color}
                    />
                    <circle
                        cx="38.9138"
                        cy="62.4892"
                        r="1.42021"
                        transform="rotate(180 38.9138 62.4892)"
                        fill={color}
                    />
                    <circle
                        cx="38.9138"
                        cy="38.3457"
                        r="1.42021"
                        transform="rotate(180 38.9138 38.3457)"
                        fill={color}
                    />
                    <circle
                        cx="38.9138"
                        cy="13.634"
                        r="1.42021"
                        transform="rotate(180 38.9138 13.634)"
                        fill={color}
                    />
                    <circle
                        cx="38.9138"
                        cy="50.2754"
                        r="1.42021"
                        transform="rotate(180 38.9138 50.2754)"
                        fill={color}
                    />
                    <circle
                        cx="38.9138"
                        cy="26.1319"
                        r="1.42021"
                        transform="rotate(180 38.9138 26.1319)"
                        fill={color}
                    />
                    <circle
                        cx="38.9138"
                        cy="1.42021"
                        r="1.42021"
                        transform="rotate(180 38.9138 1.42021)"
                        fill={color}
                    />
                    <circle
                        cx="26.4157"
                        cy="87.4849"
                        r="1.42021"
                        transform="rotate(180 26.4157 87.4849)"
                        fill={color}
                    />
                    <circle
                        cx="26.4157"
                        cy="74.9871"
                        r="1.42021"
                        transform="rotate(180 26.4157 74.9871)"
                        fill={color}
                    />
                    <circle
                        cx="26.4157"
                        cy="62.4892"
                        r="1.42021"
                        transform="rotate(180 26.4157 62.4892)"
                        fill={color}
                    />
                    <circle
                        cx="26.4157"
                        cy="38.3457"
                        r="1.42021"
                        transform="rotate(180 26.4157 38.3457)"
                        fill={color}
                    />
                    <circle
                        cx="26.4157"
                        cy="13.634"
                        r="1.42021"
                        transform="rotate(180 26.4157 13.634)"
                        fill={color}
                    />
                    <circle
                        cx="26.4157"
                        cy="50.2754"
                        r="1.42021"
                        transform="rotate(180 26.4157 50.2754)"
                        fill={color}
                    />
                    <circle
                        cx="26.4157"
                        cy="26.1319"
                        r="1.42021"
                        transform="rotate(180 26.4157 26.1319)"
                        fill={color}
                    />
                    <circle
                        cx="26.4157"
                        cy="1.4202"
                        r="1.42021"
                        transform="rotate(180 26.4157 1.4202)"
                        fill={color}
                    />
                    <circle
                        cx="13.9177"
                        cy="87.4849"
                        r="1.42021"
                        transform="rotate(180 13.9177 87.4849)"
                        fill={color}
                    />
                    <circle
                        cx="13.9177"
                        cy="74.9871"
                        r="1.42021"
                        transform="rotate(180 13.9177 74.9871)"
                        fill={color}
                    />
                    <circle
                        cx="13.9177"
                        cy="62.4892"
                        r="1.42021"
                        transform="rotate(180 13.9177 62.4892)"
                        fill={color}
                    />
                    <circle
                        cx="13.9177"
                        cy="38.3457"
                        r="1.42021"
                        transform="rotate(180 13.9177 38.3457)"
                        fill={color}
                    />
                    <circle
                        cx="13.9177"
                        cy="13.634"
                        r="1.42021"
                        transform="rotate(180 13.9177 13.634)"
                        fill={color}
                    />
                    <circle
                        cx="13.9177"
                        cy="50.2754"
                        r="1.42021"
                        transform="rotate(180 13.9177 50.2754)"
                        fill={color}
                    />
                    <circle
                        cx="13.9177"
                        cy="26.1319"
                        r="1.42021"
                        transform="rotate(180 13.9177 26.1319)"
                        fill={color}
                    />
                    <circle
                        cx="13.9177"
                        cy="1.42019"
                        r="1.42021"
                        transform="rotate(180 13.9177 1.42019)"
                        fill={color}
                    />
                    <circle
                        cx="1.41963"
                        cy="87.4849"
                        r="1.42021"
                        transform="rotate(180 1.41963 87.4849)"
                        fill={color}
                    />
                    <circle
                        cx="1.41963"
                        cy="74.9871"
                        r="1.42021"
                        transform="rotate(180 1.41963 74.9871)"
                        fill={color}
                    />
                    <circle
                        cx="1.41963"
                        cy="62.4892"
                        r="1.42021"
                        transform="rotate(180 1.41963 62.4892)"
                        fill={color}
                    />
                    <circle
                        cx="1.41963"
                        cy="38.3457"
                        r="1.42021"
                        transform="rotate(180 1.41963 38.3457)"
                        fill={color}
                    />
                    <circle
                        cx="1.41963"
                        cy="13.634"
                        r="1.42021"
                        transform="rotate(180 1.41963 13.634)"
                        fill={color}
                    />
                    <circle
                        cx="1.41963"
                        cy="50.2754"
                        r="1.42021"
                        transform="rotate(180 1.41963 50.2754)"
                        fill={color}
                    />
                    <circle
                        cx="1.41963"
                        cy="26.1319"
                        r="1.42021"
                        transform="rotate(180 1.41963 26.1319)"
                        fill={color}
                    />
                    <circle
                        cx="1.41963"
                        cy="1.4202"
                        r="1.42021"
                        transform="rotate(180 1.41963 1.4202)"
                        fill={color}
                    />
                </svg>
            </span>
        </>
    )
}