import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import linkedin from "../assets/linkedin.webp";
import github from "../assets/icons8-github-50.webp";
import instagram from "../assets/icons8-instagram-50.webp";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Squash as Hamburger } from 'hamburger-react';
import { Tooltip } from 'react-tooltip'

const underline = {
    initial: {width : 0},
    animate: {width : '100%'}
}

const Navbar = () => {

    const [isOpen, setOpen] = useState(false);

  return (
    <motion.div className = "flex items-center min-w-[320px] justify-around bg-[#222831] py-5 sm:px-10 h-16 pt-10">

        <NavLink to = "/">
        <div className="text-[#76ABAE]">
            <p className="text-4xl 2xl:text-5xl font-Raleway font-extrabold">Ns.</p>
        </div>
        </NavLink>

        <ul className = "hidden sm:flex flex-1 items-center justify-center gap-10 w-full text-white">
            <motion.div 
            initial = "initial"
            whileHover = "animate"
            >
            <NavLink to = "/">
                <p className="font-Raleway sm:text-2xl 2xl:text-3xl">Home</p>
                <motion.div variants = {underline} className = "border-t-4 border-[#76ABAE] transition-all duration-100 ease-out"/>
            </NavLink>
            </motion.div>

            <motion.div 
            initial = "initial"
            whileHover = "animate"
            >
            <NavLink to = "/projects">
                <p className="font-Raleway sm:text-2xl 2xl:text-3xl">Projects</p>
                <motion.div variants = {underline} className = "border-t-4 border-[#76ABAE] transition-all duration-100 ease-out" />
            </NavLink>
            </motion.div>

            <motion.div 
            initial = "initial"
            whileHover = "animate"
            >
            <NavLink to = "/clicks">
                <p className="font-Raleway sm:text-2xl 2xl:text-3xl">Clicks</p>
                <motion.div variants = {underline} className = "border-t-4 border-[#76ABAE] transition-all duration-100 ease-out" />
            </NavLink>
            </motion.div>
        </ul>

        <div className="flex items-center justify-center gap-1">
            <Link to = "https://github.com/Nikshaan">
                <img data-tooltip-id="my-tooltip" data-tooltip-content="github" src = {github} alt="github" className="h-9 2xl:h-10 bg-white rounded-full mx-2"/>
            </Link>
            <Link to = "https://www.linkedin.com/in/nikshaan-shetty-951026293/">
                <img data-tooltip-id="my-tooltip" data-tooltip-content="linkedIn" src = {linkedin} alt="linkedin" className="h-9 2xl:h-10 bg-white rounded-full mx-2"/>
            </Link>
            <Link to= "https://www.instagram.com/nik.shaan/">
                <img data-tooltip-id="my-tooltip" data-tooltip-content="instagram" src = {instagram} alt="instagram" className="h-9 2xl:h-10 bg-white rounded-full mx-2"/>
            </Link>
            <Tooltip id="my-tooltip" />
        </div>

        <div className="sm:hidden relative text-white">
            <Hamburger toggled={isOpen} toggle={setOpen} />
            <div>
            {
                isOpen && 
                <div className="px-10 py-5 font-medium overflow-hidden flex flex-col justify-center items-center border-2 border-[#222831] rounded-xl gap-3 right-6 my-2 -mx-9 absolute bg-[#76ABAE] z-10">
                    <motion.div
                    initial = {{opacity: 0, x: '-20vh'}}
                    animate = {{opacity: 1, x: 0}}
                    transition={{duration: 0.6}}
                    >
                        <NavLink to = "/" onClick={() => setOpen(false)}>
                            <p className="font-Raleway text-xl ">Home</p>
                        </NavLink>
                    </motion.div>

                    <motion.div
                    initial = {{opacity: 0, x: '-20vh'}}
                    animate = {{opacity: 1, x: 0}}
                    transition={{duration: 0.8}}
                    >
                        <NavLink to = "/projects" onClick={() => setOpen(false)}>
                            <p className="font-Raleway text-xl">Projects</p>
                        </NavLink>
                    </motion.div>

                    <motion.div
                    initial = {{opacity: 0, x: '-20vh'}}
                    animate = {{opacity: 1, x: 0}}
                    transition={{duration: 1}}
                    >
                        <NavLink to = "/clicks" onClick={() => setOpen(false)}>
                            <p className="font-Raleway text-xl">Clicks</p>
                        </NavLink>
                    </motion.div>
                </div>
            }
            </div>
        </div>
        
    </motion.div>
  )
}

export default Navbar