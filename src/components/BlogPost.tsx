import { BlogPostData } from "@/data/data"
import PreloadImage from "./PreloadImage"

export const BlogPostPage: React.FC<{ post: BlogPostData }> = ({ post: blogPostData }) => {
    return (
        <>
            <div
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="500"
            >
                <div className="grid grid-cols-1 place-items-center relative m-2 rounded-lg overflow-hidden ">
                    <PreloadImage imgSrc={blogPostData?.imageUrl} styleProps="h-[200px] md:h-[600px] w-11/12 md:w-9/12 shadow-lg mb-5 object-cover object-bottom rounded-lg overflow-hidden" />
                    {/* <div className="absolute bottom-6 md:bottom-9 z-40 w-8/12 md:w-7/12 text-center bg-black/60 p-5 overflow-hidden backdrop-blur-sm">
                    <h2 className='text-md sm:text-3xl lg-text-[40px] font-normal text-primary inline drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>
                        {blogPostData.title}&nbsp;
                    </h2>
                    <h5 className='text-sm font-normal text-primary block drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>
                        {GetFormattedDate(blogPostData?.publish_date)}
                    </h5>
                </div> */}
                </div>
                {/* <div className="ml-10 mr-10 md:ml-32 md:mr-32 lg:ml-52 lg:mr-52">  */}
                <div className="ml-10 mr-10 md:flex md:justify-center">
                    <article className="prose">
                        {blogPostData?.content}
                    </article>
                </div>
            </div>
        </>
    )
}