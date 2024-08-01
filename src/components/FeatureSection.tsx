import Image, { StaticImageData } from 'next/image';
import Check from './Check';

type FeatureSectionProps =
    {
        image: StaticImageData;
        heading: string;
        description: string;
        feature1: string;
        feature2: string;
        feature3: string;
    }

export default function FeatureSection({ image, heading, description, feature1, feature2, feature3 }: FeatureSectionProps) {

    // The speed of a website is crucial for several reasons.First, it directly impacts user experience: visitors expect quick load times, and slow sites frustrate them,
    // leading to higher bounce rates.Second, website speed affects SEO rankings—Google favors well - optimized, fast - loading sites.
    // Finally, faster load speeds contribute to higher conversion rates.For instance, every 1 - second delay in page load decreases
    // customer satisfaction by 16 %, page views by 11 %, and conversion rates by 7 % .So, optimizing your website’s speed is essential for
    // business success!

    return (
        <>
            <div
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="500"
                className="w-full grid grid-cols-1 lg:grid-cols-2 px-11 place-items-center place-content-center  border-red-500">
                <div className='gradient-shadow rounded-lg'>
                    <div className='rounded-lg overflow-hidden'>
                        <Image
                            src={image}
                            alt=''
                            height={600}
                            width={700}
                        />
                    </div>
                </div>
                <div className='md:pl-24 md:pr-24 lg:p-10 max-lg:mt-10 top-0 align-text-top'>
                    <div className='text-2xl text-start text-black pb-2'>
                        {heading}
                    </div>
                    <div className='text-sm lg:text-md text-black '>
                        {description}
                        <ul className='mt-2'>
                            <li className='mt-2'>
                                <Check
                                    hHeight='6'
                                    wWidth='6'
                                    color='primary-check inline'
                                />
                                <div className='ml-4 inline'>
                                    {feature1}
                                </div>
                            </li>
                            <li className='mt-2'>
                                <Check
                                    hHeight='6'
                                    wWidth='6'
                                    color='primary-check inline'
                                />
                                <div className='ml-4 inline'>
                                    {feature2}
                                </div>
                            </li>
                            <li className='mt-2'>
                                <Check
                                    hHeight='6'
                                    wWidth='6'
                                    color='primary-check inline'
                                />
                                <div className='ml-4 inline'>
                                    {/* Every website I build scores above a 90/100 in every category.
                                    Check out the speed of your current website <span className='text-blue-700'> <Link href={'https://pagespeed.web.dev/'}>here.</Link></span> */}
                                    {feature3}
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}