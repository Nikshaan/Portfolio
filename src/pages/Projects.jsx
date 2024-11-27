import Navbar from "../components/Navbar";
import { ProjectSlide } from "../components/ProjectSlide";
import { motion } from "framer-motion";
import cinverse from "../assets/cineverse.png";
import floraghar from "../assets/floraghar.png";
import pokedex from "../assets/pokedex.png";

const projectAnimation = {
  hidden: { x : '-100vw', opacity: 0 },
  visible: { x : 0, opacity: 1 },
}

const Projects = () => {

  return (
    <div className="h-full flex flex-col overflow-auto pb-5 min-w-[320px]">

      <Navbar />

      <div className="flex flex-col justify-center items-center w-full bg-[#222831] p-6 mt-4">
        <div className="w-full flex justify-start items-center px-4 lg:pt-10 lg:pb-5">
          <h1 className="text-4xl md:text-5xl 2xl:text-6xl text-[#76ABAE] mb-10 underline-offset-8 underline font-Raleway">PROJECTS</h1>
        </div>
        <div className="grid w-5/6 row-span-3 gap-12">

        <motion.div
          variants={projectAnimation}
          initial = "hidden"
          animate = "visible"
          transition = {{ delay: 0.2, duration: 1.5}}>
            <ProjectSlide img = {pokedex} heading = {'Pokedex'} desc  = {'A simple Pokedex built with PokeAPI.'} stack = {'React.js, Tailwind CSS & Framer Motion'} github = {'https://github.com/Nikshaan/Pokedex'} demo = {'https://nikshaan.github.io/Pokedex/'}/>
          </motion.div>

          <motion.div
          variants={projectAnimation}
          initial = "hidden"
          animate = "visible"
          transition = {{ delay: 0.4, duration: 1.5}}>
            <ProjectSlide img = {cinverse} heading = {'Cineverse'} desc  = {'A movie info app built with OMDb API.'} stack = {'React.js, Tailwind CSS & Redux'} github = {'https://github.com/Nikshaan/Cineverse'} demo = {'https://nikshaan.github.io/Cineverse/'}/>
          </motion.div>

          <motion.div
          variants={projectAnimation}
          initial = "hidden"
          animate = "visible"
          transition = {{ delay: 0.6, duration: 1.5}}>
            <ProjectSlide img = {floraghar} heading = {'Floraghar'} desc  = {'A responsive plant nursery website.'} stack = {'React.js & Tailwind CSS'} github = {'https://github.com/Nikshaan/FloraGhar'} demo = {'https://nikshaan.github.io/FloraGhar/'}/>
          </motion.div>

        </div>
      </div>

    </div>
  )
}

export default Projects