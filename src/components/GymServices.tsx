import Image, { StaticImageData } from 'next/image';

type GymServicesProps =
    {
        title: string;
        image: StaticImageData;
        height?: number;
        width?: number;
        description: string;
    }

export const GymService: React.FC<{ services: GymServicesProps[] }> = ({ services }) => {
    return (
        <>
            {services ? (
                <>
                    {services.map(({ title, description, image, height = 50, width = 50 }) => {
                        return (
                            <>
                                <div className='grid grid-cols-1 rounded-lg p-9 w-full ease-out duration-1000 delay-1000 cardShadow border-slate-700'>
                                    <div className='flex place-content-center'>
                                        <Image
                                            src={image}
                                            alt=''
                                            height={height}
                                            width={width}
                                        />
                                    </div>
                                    <div className='text-center text-2xl mb-2'>
                                        {title}
                                    </div>
                                    <div className='text-center'>
                                        {description}
                                    </div>
                                </div>
                            </>
                        )
                    })}
                </>
            ) :
                (
                    <>
                        <div>
                            Uh Oh!
                        </div>
                    </>
                )}
        </>
    )
}

export type { GymServicesProps };