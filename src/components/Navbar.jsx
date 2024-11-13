import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import linkedin from "../assets/linkedin.png";
import github from "../assets/icons8-github-50.png";
import instagram from "../assets/icons8-instagram-50.png";
import { Link } from "react-router-dom";
import menu from "../assets/icons8-menu.png";
import { useState } from "react";

const underline = {
    initial: {width : 0},
    animate: {width : '100%'}
}

const Navbar = () => {

    const [menuDisplay, setMenuDisplay] = useState(false);

  return (
    <motion.div className = "flex items-center min-w-[320px] justify-around bg-[#222831] py-5 sm:px-10">

        <NavLink to = "/">
        <div className="text-[#76ABAE]">
            <p className="text-4xl lg:text-5xl font-Raleway font-extrabold">Ns.</p>
        </div>
        </NavLink>

        <ul className = "hidden sm:flex flex-1 items-center justify-center gap-10 w-full text-white">
            <motion.div 
            initial = "initial"
            whileHover = "animate"
            >
            <NavLink to = "/">
                <p className="font-Raleway sm:text-2xl lg:text-3xl">Home</p>
                <motion.div variants = {underline} className = "border-t-4 border-[#76ABAE] transition-all duration-100 ease-out"/>
            </NavLink>
            </motion.div>

            <motion.div 
            initial = "initial"
            whileHover = "animate"
            >
            <NavLink to = "/projects">
                <p className="font-Raleway sm:text-2xl lg:text-3xl">Projects</p>
                <motion.div variants = {underline} className = "border-t-4 border-[#76ABAE] transition-all duration-100 ease-out" />
            </NavLink>
            </motion.div>

            <motion.div 
            initial = "initial"
            whileHover = "animate"
            >
            <NavLink to = "/clicks">
                <p className="font-Raleway sm:text-2xl lg:text-3xl">Clicks</p>
                <motion.div variants = {underline} className = "border-t-4 border-[#76ABAE] transition-all duration-100 ease-out" />
            </NavLink>
            </motion.div>
        </ul>

        <div className="flex items-center justify-center gap-1">
            <Link to = "https://github.com/Nikshaan">
                <img src = {github} alt="github" className="h-9 md:h-10 lg:h-12 bg-white rounded-full mx-2"/>
            </Link>
            <Link to = "https://www.linkedin.com/in/nikshaan-shetty-951026293/">
                <img src = {linkedin} alt="linkedin" className="h-9 md:h-10 lg:h-12 bg-white rounded-full mx-2"/>
            </Link>
            <Link to= "https://www.instagram.com/nik.shaan/">
                <img src = {instagram} alt="instagram" className="h-9 md:h-10 lg:h-12 bg-white rounded-full mx-2"/>
            </Link>
        </div>

        <div className="sm:hidden relative">
            <img src={menu} alt="menu" className="w-10" onClick={() => setMenuDisplay(!menuDisplay)}/>
            {
                menuDisplay && 
                <div className="px-4 py-3 flex flex-col justify-center items-center border-2 border-[#76ABAE] gap-2 right-6 my-2 -mx-9 absolute bg-[#31363F] z-10 text-white">
                    <div>
                        <NavLink to = "/">
                            <p className="font-Raleway text-xl">Home</p>
                        </NavLink>
                    </div>

                    <div>
                        <NavLink to = "/projects">
                            <p className="font-Raleway text-xl">Projects</p>
                        </NavLink>
                    </div>

                    <div>
                        <NavLink to = "/clicks">
                            <p className="font-Raleway text-xl">Clicks</p>
                        </NavLink>
                    </div>
                </div>
            }
        </div>
        
    </motion.div>
  )
}

export default Navbar