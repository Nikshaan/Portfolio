import { Link } from "react-router-dom";
import repo from "../assets/icons8-github-50.png";
import live from "../assets/icons8-live-50.png";


export const ProjectSlide = ({img, heading, desc, stack, github, demo}) => {
  return (
    <div className="bg-white w-full h-full flex flex-col xl:flex-row gap-10 2xl:gap-20 items-center justify-between p-3 md:p-6 xl:py-4 xl:px-8 2xl:px-14 rounded-3xl">
            <div className="w-full xl:w-1/2 xl:h-5/6 h-40 md:h-80 lg:h-full">
                <img src={img} alt="image" className="w-full h-full rounded-xl border-2 border-black"/>
            </div>
            <div className="flex-1 flex flex-col justify-between py-10 h-full w-full 2xl:py-16">
                <div className="flex flex-col xl:py-9 justify-center items-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl 2xl:text-8xl -mt-5 md:-mt-12 font-Raleway font-bold">
                        {heading}
                    </h1>
                    <h3 className="text-base text-center md:text-xl lg:text-2xl 2xl:text-3xl my-2 font-medium text-gray-900 font-IBM">{desc}</h3>
                    <h4 className="text-sm text-center md:text-base lg:text-xl 2xl:text-2xl my-2 font-Raleway">Tech Stack: {stack}</h4>
                </div>
                <div className="flex gap-2 w-full justify-center items-center 2xl:p-3 mt-10">
                    <Link to={github} alt="image" className="flex rounded-lg items-center md:text-lg lg:text-2xl 2xl:text-3xl justify-center gap-2 border-2 font-Raleway border-black py-1 px-2 text-white bg-[#222831]">
                        <p>GitHub</p>
                        <img src={repo} alt="repo" className="w-8 bg-white rounded-full"/>
                    </Link>
                    <Link to={demo} className="flex rounded-lg items-center md:text-lg lg:text-2xl 2xl:text-3xl justify-center gap-2 border-2 font-Raleway border-black py-1 px-2 text-white bg-[#222831]">
                        <p>Demo</p>
                        <img src={live} alt="demo" className="w-8 bg-white rounded-full"/>
                    </Link>
                </div>
            </div>
    </div>
  )
}
