import { BlogPostsDisplay } from "@/components/BlogPostsDisplay";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { PreloadStaticImage } from "@/components/PreloadImage";
import { BlogPostData, GetAllBlogPostData } from "@/data/data";

export default async function Index() {

    var blogs: BlogPostData[] = [];
    await GetAllBlogPostData()
        .then((blogData) => {
            blogs = blogData;
        })
        .catch((error) => {
            //console.log(`Error: ${error}`)
        });

    return (
        <>
            <Header />
            <div className="absolute h-[550px] md:h-[550px] w-full -mt-20 md:-mt-24 overscroll-none hero-border-radius bg-hero-gradient-background "></div>
            <div className="relative justify-center items-center mx-2 mt-2 lg:mx-40 drop-shadow-1xl">
                <div className="container mx-auto">
                    <div className="-mx-4 flex flex-wrap">
                        <div className="w-full px-4">
                            <div className="mx-auto mb-6 md:mb-[60px] max-w-[75%] text-center">
                                <h2
                                    className="mb-3 text-white text-3xl leading-[1.208] font-bold text-dark sm:text-4xl md:text-[40px]"
                                >
                                    The Money Blog
                                </h2>
                                <p className="text-base text-body-color text-white">
                                    Welcome to our Credit and Finance Blog, your go-to source for expert advice and practical tips on improving your credit, managing debt, and making informed financial decisions. We provide valuable insights and updates to help you achieve financial wellness and reach your goals. Join us and take control of your financial future today!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="relative bg-hero-image-mobile bg-cover bg-bottom h-[400px] w-full rounded-lg overflow-hidden slideUpFromBottomFast">
                    <Hero subscribe={false} />
                </div> */}
                <div>
                    <BlogPostsDisplay blogPosts={blogs} />
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        </>
    )
}

