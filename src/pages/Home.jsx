import bee from "../assets/bee.webp";
import { useMotionTemplate, useMotionValue, animate, motion } from "framer-motion";
import { useEffect } from "react";
import { useTypewriter, Cursor} from "react-simple-typewriter";
import Navbar from "../components/Navbar";

const Home = () => {

    const [text] = useTypewriter({
        words: ['Normal Person.', 'Gamer.', 'Tech enthusiast.','Music Lover.'],
        loop: {},
        typeSpeed: 120,
        deleteSpeed: 80,
        delaySpeed: 2500,
    });
    
  return (
        <motion.div className="flex flex-col min-h-[100svh] relative min-w-[320px]">

            <div className="absolute top-0 w-full">
                <Navbar />
            </div>

            <div className="bg-[#222831] w-full h-full min-h-[100svh] flex flex-col lg:flex-row justify-center gap-8 items-center">
                <div className="w-1/2 mt-10 h-full flex flex-col justify-center items-center relative lg:pl-24 xl:pl-0">
                    <h1 className="text-center text-7xl md:text-8xl lg:text-9xl font-thin font-Raleway text-[#76ABAE] cursor-pointer m-10 mb-4">
                        {"Nikshaan Shetty".split("").map((letter, index) =>
                            (
                                <span className = "hoverText" key={index}>
                                    {letter}
                                </span>
                            )
                        )}
                    </h1>
                    <h1 className="">
                        <span className="text-2xl md:text-3xl lg:text-4xl font-cursive text-[#EEEEEE]">
                            {text}
                        </span>
                        <span className="text-[#EEEEEE] text-2xl md:text-2xl">
                            <Cursor/>
                        </span>
                    </h1>
                </div>
                <div className="flex xl:w-1/2 justify-center items-center">
                    <motion.img loading="lazy"
                    initial = {{opacity : 0}}
                    animate = {{opacity : 1}}
                    transition = {{duration : 2, delay : 1}}
                    src={bee} alt="bee" className="w-80 md:w-3/5 lg:w-3/5 xl:w-4/6 mb-5"/>
                </div>
            </div>
            
        </motion.div>
  )
}

export default Home