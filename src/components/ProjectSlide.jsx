import { Link } from "react-router-dom";
import repo from "../assets/icons8-github-50.png";
import live from "../assets/icons8-live-50.png";


export const ProjectSlide = ({img, heading, desc, stack, github, demo}) => {
  return (
    <div className="bg-white w-full h-full flex flex-col lg:flex-row gap-10 2xl:gap-20 items-center justify-between p-4 sm:py-0 md:pl-3  rounded-3xl">
            <div className="w-full sm:mt-2 lg:mt-0 lg:w-1/2 sm:p-3 lg:p-0 lg:pl-2 lg:h-5/6 2xl:h-full 2xl:py-8 h-40 md:h-80">
                <img src={img} alt="image" className="w-full h-full min-h-48 sm:min-h-64 md:h-full rounded-xl border-2 border-black"/>
            </div>
            <div className="flex-1 lg:pt-14 lg:pr-4 flex flex-col justify-between py-10 h-full w-full 2xl:py-16">
                <div className="flex flex-col lg:py-4 justify-center items-center">
                    <h1 className="text-4xl lg:pt-12 sm:text-5xl md:text-5xl xl:text-6xl 2xl:text-8xl pt-4 sm:mt-8 -mt-8 md:-mt-20 font-Raleway font-bold">
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
