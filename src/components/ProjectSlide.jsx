import { Link } from "react-router-dom";
import repo from "../assets/icons8-github-50.webp";
import live from "../assets/icons8-live-50.webp";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from 'embla-carousel-autoplay';

export const ProjectSlide = ({img1, img2, img3, img4, heading, desc, stack, github, demo}) => {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])
  return (
    <div className="bg-white lg:border-2 lg:border-[#76ABAE] w-full h-full flex flex-col lg:gap-2 2xl:gap-10 items-center justify-between sm:py- shadow-sm hover:shadow-md hover:shadow-[#aefbff] shadow-[#aefbff] hover:scale-105 duration-500">
        <div className="embla" ref={emblaRef}>
            <div className="embla__container w-full">
                <div className="embla__slide w-full">
                    <img loading="lazy" src={img1} alt="image" className="w-full lg:border-2 lg:border-[#76ABAE] h-full sm:min-h-64 md:h-full border-2 border-[#76ABAE]"/>
                </div>
                <div className="embla__slide">
                    <img loading="lazy" src={img2} alt="image" className="w-full h-full sm:min-h-64 md:h-full border-2 lg:border-2 border-[#76ABAE]"/>
                </div>
                <div className="embla__slide">
                    <img loading="lazy" src={img3} alt="image" className="w-full h-full sm:min-h-64 md:h-full border-2 lg:border-2 border-[#76ABAE]"/>
                </div>
                <div className="embla__slide">
                    <img loading="lazy" src={img4} alt="image" className="w-full h-full sm:min-h-64 md:h-full border-2 lg:border-2 border-[#76ABAE]"/>
                </div>
            </div>
        </div>
        <div className="flex-1 flex flex-col justify-between lg:justify-center py-5 h-full w-full lg:border-0">
            <div className="flex flex-col justify-center px-4">
                <h1 className="text-4xl font-Raleway font-bold">
                    {heading}
                </h1>
                <h3 className="text-base  my-2 font-medium text-gray-900 font-Raleway">{desc}</h3>
                <h4 className="text-sm  my-2 font-IBM">Tech Stack: {stack}</h4>
            </div>
            <div className="flex gap-2 w-full justify-end items-center mt-5 px-4">
                <Link to={github} alt="image" className="flex rounded-lg items-center text-sm justify-center gap-2 border-2 font-Raleway border-black py-1 px-2 text-white bg-[#222831]">
                    <p>GitHub</p>
                    <img loading="lazy" src={repo} alt="repo" className="w-6 bg-white rounded-full"/>
                </Link>
                {
                    demo?
                        <div>
                            <Link to={demo} className="flex rounded-lg items-center text-sm  justify-center gap-2 border-2 font-Raleway border-black py-1 px-2 text-white bg-[#222831]">
                                <p>Demo</p>
                                <img loading="lazy" src={live} alt="demo" className="w-6 bg-white rounded-full"/>
                            </Link>
                        </div>
                    :null
                }
            </div>
        </div>
    </div>
  )
}
