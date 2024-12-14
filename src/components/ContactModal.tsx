'use client'
import React, { useEffect } from "react";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { SubmitHandler, useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
import ToastMessage, { ToastPosition } from "./ToastMessage";
import { track } from '@vercel/analytics';
import GoogleAdsConversionTrackerProps from "./GoogleAdsConversionTrackerProps";


export default function ContactModal() {
    const [showSentMessage, setShowSentMessage] = useState(false)
    const captchaKey: string = (process.env.NEXT_PUBLIC_CAPTCA_CHECKBOX_PUB_KEY as string);
    const verifyUrl: string = (process.env.NEXT_PUBLIC_VERIFY_CHECKBOX_URL as string);
    const emailPubKey: string = (process.env.NEXT_PUBLIC_EMAIL_PUB_KEY as string);
    const emailServiceId: string = (process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID as string);
    const emailTemplateId: string = (process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID as string);
    const recaptcha = React.useRef<ReCAPTCHA>(null);
    const [loading, setLoading] = useState(false);
    const [captchaPass, setCaptchaPass] = useState<boolean>();

    useEffect(() => emailjs.init(emailPubKey), []);

    async function onChange(value: any) {
        // verify captcha
        const captchaValue = recaptcha?.current?.getValue()
        if (!captchaValue) {
            // Create toast message
        } else {
            // make form submission
            try {
                const res = await fetch(verifyUrl, {
                    method: 'POST',
                    body: JSON.stringify({ captchaValue }),
                    mode: 'cors',
                    headers: {
                        'content-type': 'application/json',
                    },
                })
                const data = await res.json()
                if (data.success) {
                    setCaptchaPass(data.success)
                } else {
                    //console.log(`reCAPTCHA validation failed!: ${JSON.stringify(data)}`)
                }
            } catch (e) {
                //console.log(`Exception from verify: ${e}`);
            }
        }
    }
    // The form data type
    type FormData =
        {
            name: string,
            email: string,
            message: string,
            creditScore: string;
        }

    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        defaultValues: {
            creditScore: "", // Default to the placeholder option
        },
    });

    const onSubmit: SubmitHandler<FormData> = async (data) => {
        if (!captchaPass) {

        } else {
            try {
                console.log(`Sending... ${emailServiceId} | ${emailTemplateId} | ${data.message}`)
                track('contact_modal_submit');
                setLoading(true);
                await emailjs.send(emailServiceId, emailTemplateId, {
                    from_name: data.name,
                    email: data.email,
                    message: data.message,
                    creditScore: data.creditScore
                }).then(() => {
                    console.log('sent!!!')
                    setShowSentMessage(true);
                    reset();
                    setCaptchaPass(false);
                    recaptcha?.current?.reset();

                    <GoogleAdsConversionTrackerProps currency="USD" eventId="CwP0CPe0y_cZEOiju-gq" value={1.0} />

                    // Close the modal
                    const modal = document.getElementById('contact_modal') as HTMLDialogElement;
                    modal?.close();
                });
            } catch (error) {
                //console.log(error);
            } finally {
                setLoading(false);
            }
        }
    }

    return (
        <>
            <dialog id="contact_modal" className="ralative modal">
                <div className="modal-box max-sm:w-11/12">
                    <div className="relative grid grid-cols-1 content-center rounded-lg overflow-hidden">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <h1 className="text-2xl text-center mt-10">
                            Contact Me for <br />a Free Consultation
                            <br />
                            Text: <a href="tel:6103905742" className="text-lg">610-390-5742</a>
                            <br />
                            <a href="mailto:andrew.meier@themoneymentor.app" className="text-lg">andrew.meier@themoneymentor.app</a>
                        </h1>
                        <div>
                            <form className="grid grid-cols-1 gap-2 justify-items-center mt-5" onSubmit={handleSubmit(onSubmit)}>
                                <input type="text"
                                    {...register("name", {
                                        required: true
                                    })}
                                    className={`w-11/12 md:w-[80%] px-3 py-2 outline-none cardShadow rounded-lg h-[51px] z-0 ${errors.name ? 'placeholder-red-400' : ''}`}
                                    placeholder={`${errors.email ? 'Full name is required' : 'Enter your full name'}`}
                                />
                                <div className="w-11/12 md:w-[80%]">
                                    <input
                                        type="text"
                                        {...register("email", {
                                            required: "Email is required",
                                            pattern: {
                                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                                message: "Not a valid email",
                                            },
                                        })}
                                        className={`px-3 py-2 outline-none cardShadow rounded-lg h-[51px] z-0 w-full ${errors.email ? 'placeholder-red-400 border-red-400' : ''
                                            }`}
                                        placeholder="Enter your email"
                                    />
                                    {errors.email && errors.email.type === "required" && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {errors.email.message} {/* Shows "Email is required" */}
                                        </p>
                                    )}
                                    {errors.email && errors.email.type === "pattern" && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {errors.email.message} {/* Shows "Not a valid email" */}
                                        </p>
                                    )}
                                </div>

                                {/* Current Credit Score */}
                                <div className="mb-4 w-11/12 md:w-[80%]">
                                    <label htmlFor="creditScore" className="block text-sm font-medium text-gray-700">
                                        Select Your Current Credit Score
                                    </label>
                                    <select
                                        id="creditScore"
                                        {...register("creditScore", { required: "Credit score is required" })}
                                        className="select select-bordered w-full mt-1"
                                    >
                                        <option value="" disabled>Select your credit score range</option>
                                        <option value="not-sure">I&apos;m Not Sure.</option>
                                        <option value="300-499">300-499 (Poor)</option>
                                        <option value="500-599">500-599 (Bad)</option>
                                        <option value="600-649">600-649 (Fair)</option>
                                        <option value="650-699">650-699 (Good)</option>
                                        <option value="700-749">700-749 (Very Good)</option>
                                        <option value="750-850">750-850 (Excellent)</option>
                                    </select>
                                    {errors.creditScore && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {errors.creditScore.message}
                                        </p>
                                    )}
                                </div>

                                <textarea
                                    {...register("message", {
                                        required: true
                                    })}
                                    className={`w-11/12 md:w-[80%] px-3 py-2 outline-none cardShadow rounded-lg z-0 h-28 ${errors.message ? 'placeholder-red-400' : ''}`}
                                    placeholder={`${errors.message ? 'Message is required' : 'What are you inquiring about?'}`}
                                />
                                <ReCAPTCHA
                                    ref={recaptcha}
                                    sitekey={captchaKey}
                                    onChange={onChange}
                                    data-size={'normal'}
                                />
                                <button type="submit" className="px-3 py-2 bg-button-primary-disabled bg-primary-blue hover:bg-primary-blue-hover text-white rounded-md">
                                    <div className="flex flex-row justify-center items-center p-3 hover:text-white">
                                        {loading ? (
                                            <>
                                                <LoadingCircles />
                                                <div className="text-button-primary-txt-disabled">...Submitting</div>
                                            </>
                                        ) : (
                                            <div className="">
                                                Submit
                                                <svg className="inline h-5 w-5" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <polyline points="9 6 15 12 9 18" /></svg>
                                            </div>
                                        )}
                                    </div>
                                </button>

                            </form>
                        </div>
                    </div>
                    {showSentMessage && (
                        <ToastMessage position={ToastPosition.Bottom} message="Message Sent!" />
                    )}
                </div>
            </dialog>
        </>
    )
}

const LoadingCircles = () => {
    return (
        <>
            <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full animate-pulse bg-button-primary-txt-disabled"></div>
                <div className="w-2 h-2 rounded-full animate-pulse bg-button-primary-txt-disabled"></div>
                <div className="w-2 h-2 rounded-full animate-pulse bg-button-primary-txt-disabled mr-2"></div>
            </div>
        </>
    )
}