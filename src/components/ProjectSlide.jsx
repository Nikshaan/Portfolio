import { Link } from "react-router-dom";
import repo from "../assets/icons8-github-50.png";
import live from "../assets/icons8-live-50.png";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from 'embla-carousel-autoplay';

export const ProjectSlide = ({img1, img2, img3, img4, heading, desc, stack, github, demo}) => {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])
  return (
    <div className="bg-white lg:border-2 lg:border-[#76ABAE] w-full h-full flex flex-col lg:flex-row lg:gap-2 2xl:gap-10 items-center justify-between sm:py- shadow-md hover:shadow-lg hover:shadow-[#aefbff] shadow-[#aefbff] hover:scale-105 duration-500">
        <div className="embla lg:w-7/12 lg:m-1" ref={emblaRef}>
            <div className="embla__container w-full lg:h-full  2xl:h-full min-h-48 md:h-80">
                <div className="embla__slide w-full">
                    <img src={img1} alt="image" className="w-full lg:border-2 lg:border-[#76ABAE] h-full sm:min-h-64 md:h-full border-2 border-[#76ABAE]"/>
                </div>
                <div className="embla__slide">
                    <img src={img2} alt="image" className="w-full h-full sm:min-h-64 md:h-full border-2 lg:border-2 border-[#76ABAE]"/>
                </div>
                <div className="embla__slide">
                    <img src={img3} alt="image" className="w-full h-full sm:min-h-64 md:h-full border-2 lg:border-2 border-[#76ABAE]"/>
                </div>
                <div className="embla__slide">
                    <img src={img4} alt="image" className="w-full h-full sm:min-h-64 md:h-full border-2 lg:border-2 border-[#76ABAE]"/>
                </div>
            </div>
        </div>
        <div className="flex-1 lg:pr-4 flex flex-col justify-between lg:justify-center py-10 h-full w-full 2xl:py-16 lg:border-0">
            <div className="flex flex-col  justify-center items-center px-4">
                <h1 className="text-4xl sm:text-5xl md:text-5xl xl:text-6xl 2xl:text-7xl pt-4 -mt-8 md:-mt-10 font-Raleway font-bold">
                    {heading}
                </h1>
                <h3 className="text-base text-center sm:text-xl md:text-xl xl:text-2xl 2xl:text-3xl my-2 font-medium text-gray-900 font-IBM">{desc}</h3>
                <h4 className="text-sm text-center sm:text-base md:text-xl xl:text-2xl 2xl:text-2xl my-2 font-Raleway">Tech Stack: {stack}</h4>
            </div>
            <div className="flex gap-2 w-full justify-center items-center 2xl:p-3 mt-10">
                <Link to={github} alt="image" className="flex rounded-lg items-center text-sm sm:text-base md:text-2xl 2xl:text-3xl justify-center gap-2 border-2 font-Raleway border-black py-1 px-2 text-white bg-[#222831]">
                    <p>GitHub</p>
                    <img src={repo} alt="repo" className="w-6 sm:w-8 bg-white rounded-full"/>
                </Link>
                <Link to={demo} className="flex rounded-lg items-center text-sm sm:text-base  md:text-2xl 2xl:text-3xl justify-center gap-2 border-2 font-Raleway border-black py-1 px-2 text-white bg-[#222831]">
                    <p>Demo</p>
                    <img src={live} alt="demo" className="w-6 sm:w-8 bg-white rounded-full"/>
                </Link>
            </div>
        </div>
    </div>
  )
}
