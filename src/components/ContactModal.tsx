'use client'
import React, { useEffect } from "react";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { SubmitHandler, useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
import ToastMessage, { ToastPosition } from "./ToastMessage";


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

    //useEffect(() => emailjs.init(emailPubKey), []);

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
            message: string
        }

    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>()

    const onSubmit: SubmitHandler<FormData> = async (data) => {
        if (!captchaPass) {

        } else {
            try {
                setLoading(true);
                await emailjs.send(emailServiceId, emailTemplateId, {
                    from_name: data.name,
                    email: data.email,
                    message: data.message,
                }).then(() => {
                    console.log('sentQ!!!Q')
                    setShowSentMessage(true);
                    reset();
                    setCaptchaPass(false);
                    recaptcha?.current?.reset();
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
                        </h1>
                        <div>
                            <form className="grid grid-cols-1 gap-2 justify-items-center mt-5" onSubmit={handleSubmit(onSubmit)}>
                                <input type="text"
                                    {...register("name", {
                                        required: true
                                    })}
                                    className={`w-3/4 md:w-[80%] px-3 py-2 outline-none cardShadow rounded-lg h-[51px] z-0 ${errors.name ? 'placeholder-red-400' : ''}`}
                                    placeholder={`${errors.email ? 'Full name is required' : 'Enter your full name'}`}
                                />
                                <input type="text"
                                    {...register("email",
                                        {
                                            required: true
                                        })}
                                    className={`w-3/4 md:w-[80%] px-3 py-2 outline-none cardShadow rounded-lg h-[51px] z-0 ${errors.email ? 'placeholder-red-400' : ''}`}
                                    placeholder={`${errors.email ? 'Email is required' : 'Enter your email'}`} />
                                <textarea
                                    {...register("message", {
                                        required: true
                                    })}
                                    className={`w-3/4 md:w-[80%] px-3 py-2 outline-none cardShadow rounded-lg z-0 h-28 ${errors.message ? 'placeholder-red-400' : ''}`}
                                    placeholder={`${errors.message ? 'Message is required' : 'What are you inquiring about?'}`}
                                />
                                <ReCAPTCHA
                                    ref={recaptcha}
                                    sitekey={captchaKey}
                                    onChange={onChange}
                                    data-size={'normal'}
                                />
                                <button type="submit" className="px-3 py-2 bg-button-primary-disabled bg-primary hover:bg-pink-600 text-slate-800 rounded-md">
                                    <div className="flex flex-row justify-center items-center p-3 hover:text-white">
                                        {loading ? (
                                            <>
                                                <LoadingCircles />
                                                <div className="text-button-primary-txt-disabled">Submitting</div>
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
                    {showSentMessage ?
                        (
                            <ToastMessage position={ToastPosition.Bottom} message="Message Sent!" />
                        ) :
                        (<></>)}
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