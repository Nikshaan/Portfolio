import { ProjectSlide } from "../components/ProjectSlide";
import { motion } from "framer-motion";
import cinverse1 from "../assets/cineverse1.webp";
import cinverse2 from "../assets/cineverse2.webp";
import cinverse3 from "../assets/cineverse3.webp";
import cinverse4 from "../assets/cineverse4.webp";
import floraghar1 from "../assets/floraghar1.webp";
import floraghar2 from "../assets/floraghar2.webp";
import floraghar3 from "../assets/floraghar3.webp";
import floraghar4 from "../assets/floraghar4.webp";
import pokedex1 from "../assets/pokedex1.webp";
import pokedex2 from "../assets/pokedex2.webp";
import pokedex3 from "../assets/pokedex3.webp";
import pokedex4 from "../assets/pokedex4.webp";
import Navbar from "../components/Navbar";
import blogeez1 from "../assets/blogeez1.webp";
import blogeez2 from "../assets/blogeez2.webp";
import blogeez3 from "../assets/blogeez3.webp";
import blogeez4 from "../assets/blogeez4.webp";
import valorant1 from "../assets/valorant1.webp";
import valorant2 from "../assets/valorant2.webp";
import valorant3 from "../assets/valorant3.webp";
import valorant4 from "../assets/valorant4.webp";


const projectAnimation = {
  hidden: { x : '-100vw', opacity: 0 },
  visible: { x : 0, opacity: 1 },
}

const Projects = () => {

  return (
    <div className="h-full relative flex flex-col overflow-auto min-w-[320px] md:max-h-[100svh] pb-20">

      <div className="absolute top-0 w-full">
        <Navbar />
      </div>

      <div className="flex flex-col justify-center items-center w-full bg-[#222831] pt-14">
        <div className="flex justify-start items-center pt-8 w-[70%] sm:w-[90%] md:w-[85%] lg:w-[75%] xl:w-[85%]">
          <h1 className="text-4xl 2xl:text-5xl text-[#76ABAE] mb-10 mt-2 underline-offset-8 underline font-Raleway">PROJECTS</h1>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8 w-[70%] sm:w-[90%] md:w-[85%] lg:w-[75%] xl:w-[90%]">

        <motion.div
          variants={projectAnimation}
          initial = "hidden"
          animate = "visible"
          transition = {{duration: 0.6}}>
            <ProjectSlide img1 = {pokedex1} img2={pokedex2} img3={pokedex3} img4={pokedex4} heading = {'Pokedex'} desc  = {'A simple Pokedex built with PokeAPI.'} stack = {'React.js, Tailwind CSS & Framer Motion'} github = {'https://github.com/Nikshaan/Pokedex'} demo = {'https://nikshaan.github.io/Pokedex/'}/>
          </motion.div>

          <motion.div
          variants={projectAnimation}
          initial = "hidden"
          animate = "visible"
          transition = {{duration: 0.8}}>
            <ProjectSlide img1 = {cinverse1} img2={cinverse2} img3={cinverse3} img4={cinverse4} heading = {'Cineverse'} desc  = {'A movie info app built with OMDb API.'} stack = {'React.js, Tailwind CSS & Redux'} github = {'https://github.com/Nikshaan/Cineverse'} demo = {'https://nikshaan.github.io/Cineverse/'} />
          </motion.div>

          <motion.div
          variants={projectAnimation}
          initial = "hidden"
          animate = "visible"
          transition = {{duration: 1}}>
            <ProjectSlide img1 = {floraghar1} img2={floraghar2} img3={floraghar3} img4={floraghar4} heading = {'Floraghar'} desc  = {'A responsive plant nursery website.'} stack = {'React.js & Tailwind CSS'} github = {'https://github.com/Nikshaan/FloraGhar'} demo = {'https://nikshaan.github.io/FloraGhar/'} />
          </motion.div>

          <motion.div
          variants={projectAnimation}
          initial = "hidden"
          animate = "visible"
          transition = {{duration: 1.2}}>
            <ProjectSlide img1 = {blogeez1} img2={blogeez2} img3={blogeez3} img4={blogeez4} heading = {'BLOGeez'} desc  = {'A blog uploading & reading website.'} stack = {'React.js, Redux, TailwindCSS, Node, Express & MongoDB'} github = {'https://github.com/Nikshaan/Blogeez-backend'} />
          </motion.div>

          <motion.div
          variants={projectAnimation}
          initial = "hidden"
          animate = "visible"
          transition = {{duration: 1.4}}>
            <ProjectSlide img1 = {valorant1} img2={valorant2} img3={valorant3} img4={valorant4} heading = {'valorant-tracker'} desc  = {'Track valorant performance and see detailed match stats.'} stack = {'TypeScript, React.js, TailwindCSS, Axios, Chart.js'} github = {'https://github.com/Nikshaan/valorant-tracker'} demo = {'https://valorant-tracker-alpha.vercel.app/'} />
          </motion.div>

        </div>
      </div>

    </div>
  )
}

export default Projects