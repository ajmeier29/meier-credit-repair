import Image from "next/image";

type ServiceProp =
    {
        src: any;
        title: string;
        description: string;
    }

export default function HomePageService({ src, title, description }: ServiceProp) {
    return (
        <>
            <div className="flex max-sm:flex-wrap">
                <div className="card space-y-14 bg-base-300 rounded-box w-full md:w-1/3 h-48 md:h-32 overflow-hidden">
                    <Image
                        alt=''
                        fill
                        sizes={"(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
                        src={src}
                        style={{
                            objectFit: 'cover'
                        }}
                    />
                </div>
                <div className="card sm:mx-5 rounded-box h-56 md:h-20 w-full">
                    <h2 className="text-2xl max-sm:mt-2 md:text-lg max-sm:text-center md:font-bold block">
                        {title}
                    </h2>
                    <div className="">
                        {description}
                    </div>
                </div>
            </div>
        </>
    )
}

export type { ServiceProp };

