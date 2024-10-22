import Navbar from "../components/Navbar";
import { ProjectSlide } from "../components/ProjectSlide";
import { motion } from "framer-motion";
import tictactoe from "../assets/tictactoe.png";
import floraghar from "../assets/floraghar.png";
import wordle from "../assets/wordle.png";

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
          <h1 className="text-4xl md:text-5xl text-[#76ABAE] mb-10 underline-offset-8 underline font-Raleway">PROJECTS</h1>
        </div>
        <div className="grid w-5/6 row-span-3 gap-12">

          <motion.div
          variants={projectAnimation}
          initial = "hidden"
          animate = "visible"
          transition = {{ delay: 0.2, duration: 1.5}}
          >
            <ProjectSlide img = {floraghar} heading = {'Floraghar'} desc  = {'A Responsive Plant Nursery Website.'} stack = {'React.js & Tailwind CSS'} github = {'https://github.com/Nikshaan/FloraGhar'} demo = {'https://nikshaan.github.io/FloraGhar/'}/>

          </motion.div>

          <motion.div
          variants={projectAnimation}
          initial = "hidden"
          animate = "visible"
          transition = {{ delay: 0.4, duration: 1.5}}
          >
            <ProjectSlide img = {wordle} heading = {'Wordle'} desc  = {'Get 6 chances to guess a 5-letter word.'} stack = {'HTML, CSS & JavaScript'} github = {'https://github.com/Nikshaan/wordle'} demo = {'https://nikshaan.github.io/wordle/'}/>

          </motion.div>

          <motion.div
          variants={projectAnimation}
          initial = "hidden"
          animate = "visible"
          transition = {{ delay: 0.6, duration: 1.5}}
          >
            <ProjectSlide img = {tictactoe} heading = {'Tic-Tac-Toe'} desc  = {'The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row is the winner.'} stack = {'HTML, CSS & JavaScript'} github = {'https://github.com/Nikshaan/Tic-Tac-Toe'} demo = {'https://nikshaan.github.io/Tic-Tac-Toe/'}/>

          </motion.div>
        </div>
      </div>

    </div>
  )
}

export default Projects