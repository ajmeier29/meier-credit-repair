'use client'

import andrewAndMilo from '../../public/images/andrewAndMilo.jpg';
import Image, { StaticImageData } from 'next/image';


export default function AboutPage() {

    return (
        <>

            <div
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="500"
                className="h-[700px] md:h-[750px] w-full -mt-20 md:-mt-24 overscroll-none hero-border-radius bg-hero-gradient-background mb-[900px] md:mb-[250px]">
                <section
                    className=" z-10 overflow-hidden dark:bg-dark pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] mb-20"
                >
                    <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8">
                        <div className="bg-white md:gradient-shadow max-w-4xl mx-auto shadow-lg rounded-lg">
                            <div className="p-6 sm:p-10">
                                {/* Header Section */}
                                <div className="text-center">
                                    <h1 className="text-3xl font-extrabold text-gray-800">About Me</h1>
                                    <p className="mt-2 text-gray-600 text-lg">
                                        Discover the story and mission behind The Money Mentor.
                                    </p>
                                </div>

                                {/* Content Section */}
                                <div className="mt-8 flex flex-col sm:flex-row">
                                    {/* Photo */}
                                    <div className="sm:w-1/3 mb-6 sm:mb-0 ">
                                        {/* <img
                                            src="https://via.placeholder.com/250"
                                            alt="Andy"
                                            className="w-48 h-48 mx-auto sm:mx-0 rounded-full shadow-md"
                                        /> */}
                                        <div className='w-48 lg:w-72 h-48 lg:h-72 mx-auto sm:mx-0 rounded-full shadow-md overflow-hidden'>
                                            <Image
                                                src={andrewAndMilo}
                                                alt=''
                                                height={600}
                                                width={700}
                                            />

                                        </div>
                                    </div>

                                    {/* Text */}
                                    <div className="sm:w-2/3 sm:pl-8">
                                        <h2 className="text-2xl font-semibold text-gray-800">
                                            My Story
                                        </h2>
                                        <p className="mt-4 text-gray-700 leading-relaxed">
                                            Hello, I'm Andy! For the past 15 years, I&#39;ve worked as a software
                                            developer, solving complex problems and building systems that
                                            make lives easier. Along the way, I realized that one of the
                                            biggest challenges people face isn&#39;t technological—it&#39;s
                                            financial. Specifically, the credit system.
                                        </p>
                                        <p className="mt-4 text-gray-700 leading-relaxed">
                                            I greatly dislike how predatory the credit system can be,
                                            especially for those with subprime credit. That&#39;s why I&#39;m
                                            committed to using my skills and knowledge to help others
                                            improve their credit scores and regain control of their
                                            financial futures.
                                        </p>
                                    </div>
                                </div>

                                {/* Motivations Section */}
                                <div className="mt-10">
                                    <h2 className="text-2xl font-semibold text-gray-800">
                                        Why I Do This
                                    </h2>
                                    <p className="mt-4 text-gray-700 leading-relaxed">
                                        The credit system often preys on the vulnerable, locking people
                                        out of opportunities and charging them more for the same
                                        services. I believe everyone deserves a fair chance to succeed,
                                        and I want to help level the playing field by empowering others to
                                        take control of their credit and financial futures.
                                    </p>
                                </div>

                                {/* Mission Section */}
                                <div className="mt-10 bg-blue-50 p-6 rounded-lg shadow-sm">
                                    <h2 className="text-2xl font-semibold text-gray-800 text-center">
                                        My Mission
                                    </h2>
                                    <p className="mt-4 text-gray-700 leading-relaxed text-center">
                                        At The Money Mentor, my mission is to empower individuals to take
                                        control of their credit, unlock financial opportunities, and push
                                        back against the inequities of the credit system.
                                    </p>
                                    <p className="mt-2 text-gray-700 leading-relaxed text-center">
                                        I strive to provide clear, actionable guidance and support to help
                                        you achieve your financial goals and reclaim your power.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>


                </section>

            </div >
        </>
    )
}

