import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

export default function HeroGlow({ children }: Props) {
    return (
        <>
            <div className="min-h-screen items-center justify-center px-4 md:px-16">
                <div className="relative w-full">
                    {/* <div className="absolute top-0 left-96 w-72 h-72 bg-[#687EFF] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                            <div className="absolute top-0 right-96 w-72 h-72 bg-[#B6FFFA] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-[#80B3FF] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-5000"></div> */}
                    <div className="absolute top-9 md:top-0 left-0 md:left-[25%] w-56 md:w-72 h-56 md:h-72 bg-[#687EFF] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                    <div className="absolute top-20 md:top-0 right-[30%] w-56 md:w-72 h-56 md:h-72 bg-[#B6FFFA] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                    <div className="absolute bottom-20 md:bottom-32 left-[25%] md:left-[35%] w-56 md:w-72 h-56 md:h-72 bg-[#80B3FF] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                    <div className="relative space-y-4">
                        {children}
                    </div>
                </div>
            </div>

        </>
    )
}