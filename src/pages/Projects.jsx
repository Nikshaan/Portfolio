import { ProjectSlide } from "../components/ProjectSlide";
import { motion } from "framer-motion";
import cinverse1 from "../assets/cineverse1.png";
import cinverse2 from "../assets/cineverse2.png";
import cinverse3 from "../assets/cineverse3.png";
import cinverse4 from "../assets/cineverse4.png";
import floraghar1 from "../assets/floraghar1.png";
import floraghar2 from "../assets/floraghar2.png";
import floraghar3 from "../assets/floraghar3.png";
import floraghar4 from "../assets/floraghar4.png";
import pokedex1 from "../assets/pokedex1.png";
import pokedex2 from "../assets/pokedex2.png";
import pokedex3 from "../assets/pokedex3.png";
import pokedex4 from "../assets/pokedex4.png";

const projectAnimation = {
  hidden: { x : '-100vw', opacity: 0 },
  visible: { x : 0, opacity: 1 },
}

const Projects = () => {

  return (
    <div className="h-full flex flex-col overflow-auto min-w-[320px]">

      <div className="flex flex-col justify-center items-center w-full bg-[#222831] p-6 mt-4">
        <div className="w-full flex justify-start items-center px-4 pb-5 lg:pt-10">
          <h1 className="text-4xl md:text-5xl 2xl:text-6xl text-[#76ABAE] mb-10 underline-offset-8 underline font-Raleway">PROJECTS</h1>
        </div>
        <div className="grid w-5/6 row-span-3 gap-12 xl:gap-16 2xl:gap-20">

        <motion.div
          variants={projectAnimation}
          initial = "hidden"
          animate = "visible"
          transition = {{ delay: 0.2, duration: 1.5}}>
            <ProjectSlide img1 = {pokedex1} img2={pokedex2} img3={pokedex3} img4={pokedex4} heading = {'Pokedex'} desc  = {'A simple Pokedex built with PokeAPI.'} stack = {'React.js, Tailwind CSS & Framer Motion'} github = {'https://github.com/Nikshaan/Pokedex'} demo = {'https://nikshaan.github.io/Pokedex/'}/>
          </motion.div>

          <motion.div
          variants={projectAnimation}
          initial = "hidden"
          animate = "visible"
          transition = {{ delay: 0.4, duration: 1.5}}>
            <ProjectSlide img1 = {cinverse1} img2={cinverse2} img3={cinverse3} img4={cinverse4} heading = {'Cineverse'} desc  = {'A movie info app built with OMDb API.'} stack = {'React.js, Tailwind CSS & Redux'} github = {'https://github.com/Nikshaan/Cineverse'} demo = {'https://nikshaan.github.io/Cineverse/'}/>
          </motion.div>

          <motion.div
          variants={projectAnimation}
          initial = "hidden"
          animate = "visible"
          transition = {{ delay: 0.6, duration: 1.5}}>
            <ProjectSlide img1 = {floraghar1} img2={floraghar2} img3={floraghar3} img4={floraghar4} heading = {'Floraghar'} desc  = {'A responsive plant nursery website.'} stack = {'React.js & Tailwind CSS'} github = {'https://github.com/Nikshaan/FloraGhar'} demo = {'https://nikshaan.github.io/FloraGhar/'}/>
          </motion.div>

        </div>
      </div>

    </div>
  )
}

export default Projects