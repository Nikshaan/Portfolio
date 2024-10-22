import Navbar from "../components/Navbar";
import bee from "../assets/bee.png";
import { useMotionTemplate, useMotionValue, animate, motion } from "framer-motion";
import { useEffect } from "react";
import { useTypewriter, Cursor} from "react-simple-typewriter";

const colors = ["#0079FF", "#00DFA2", "#F6FA70", "#FF0060"];

const Home = () => {

    const [text] = useTypewriter({
        words: ['Normal Person.', 'Gamer.', 'Tech enthusiast.','Weeb.'],
        loop: {},
        typeSpeed: 120,
        deleteSpeed: 80,
        delaySpeed: 2500,
    });

    const color = useMotionValue(colors[0]);
    const backgroundImage = useMotionTemplate`radial-gradient(100% 100% at 50% 0%, #222831 50%, ${color})`;

    useEffect(() => {
        animate(color, colors, {
            ease: "easeInOut",
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror",
        });
    }, []);

  return (
        <motion.div className="flex flex-col h-screen relative min-w-[320px] min-h-[740px] md:min-h-[1084px] lg:min-h-[548px] xl:min-h-[692px] 2xl:min-h-[950px]">

            <Navbar />

            <div className="bg-[#222831] w-full h-full flex flex-col lg:flex-row justify-center gap-8 items-center py-10 overflow-hidden">
                <div className="w-1/2 h-full flex flex-col justify-center items-center relative lg:pl-24 xl:pl-0">
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
                    <motion.img
                    initial = {{opacity : 0}}
                    animate = {{opacity : 1}}
                    transition = {{duration : 2, delay : 1}}
                    src={bee} alt="bee" className="w-80 md:w-3/5 lg:w-3/5 xl:w-4/6 mb-5"/>
                </div>
            </div>
            
            <motion.section className="relative grid place-content-center overflow-hidden  bg-[#222831] h-32" style={{backgroundImage,}} />
            
        </motion.div>
  )
}

export default Home