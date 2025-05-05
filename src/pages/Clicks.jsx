import { motion, spring } from "framer-motion";
import photo1 from "../assets/photo1.webp";
import photo2 from "../assets/photo2.webp";
import photo3 from "../assets/photo3.webp";
import photo4 from "../assets/photo4.webp";
import photo5 from "../assets/photo5.webp";
import photo6 from "../assets/photo6.webp";
import photo7 from "../assets/photo7.webp";
import photo8 from "../assets/photo8.webp";
import photo9 from "../assets/photo9.webp";
import photo10 from "../assets/photo10.webp";
import photo11 from "../assets/photo11.webp";
import photo12 from "../assets/photo12.webp";
import photo13 from "../assets/photo13.webp";
import photo14 from "../assets/photo14.webp";
import photo15 from "../assets/photo15.webp";
import photo16 from "../assets/photo16.webp";
import photo17 from "../assets/photo17.webp";
import photo18 from "../assets/photo18.webp";
import photo19 from "../assets/photo19.webp";
import photo20 from "../assets/photo20.webp";
import photo21 from "../assets/photo21.webp";
import photo22 from "../assets/photo22.webp";
import photo23 from "../assets/photo23.webp";
import photo24 from "../assets/photo24.webp";
import photo25 from "../assets/photo25.webp";
import photo26 from "../assets/photo26.webp";
import photo27 from "../assets/photo27.webp";
import photo28 from "../assets/photo28.webp";
import photo29 from "../assets/photo29.webp";
import photo30 from "../assets/photo30.webp";
import photo31 from "../assets/photo31.webp";
import photo32 from "../assets/photo32.webp";
import photo33 from "../assets/photo33.webp";
import photo34 from "../assets/photo34.webp";
import photo35 from "../assets/photo35.webp";
import photo36 from "../assets/photo36.webp";
import photo37 from "../assets/photo37.webp";
import photo38 from "../assets/photo38.webp";
import photo39 from "../assets/photo39.webp";
import photo40 from "../assets/photo40.webp";
import photo41 from "../assets/photo41.webp";
import photo42 from "../assets/photo42.webp";
import photo43 from "../assets/photo43.webp";
import photo44 from "../assets/photo44.webp";
import photo45 from "../assets/photo45.webp";
import photo46 from "../assets/photo46.webp";
import photo47 from "../assets/photo47.webp";
import photo48 from "../assets/photo48.webp";
import photo49 from "../assets/photo49.webp";
import photo50 from "../assets/photo50.webp";
import photo51 from "../assets/photo51.webp";
import photo52 from "../assets/photo52.webp";
import photo53 from "../assets/photo53.webp";
import photo54 from "../assets/photo54.webp";
import photo55 from "../assets/photo55.webp";
import photo56 from "../assets/photo56.webp";
import photo57 from "../assets/photo57.webp";
import photo58 from "../assets/photo58.webp";
import photo59 from "../assets/photo59.webp";
import photo60 from "../assets/photo60.webp";
import photo61 from "../assets/photo61.webp";
import photo62 from "../assets/photo62.webp";
import photo63 from "../assets/photo63.webp";
import photo64 from "../assets/photo64.webp";
import photo66 from "../assets/photo66.webp";
import photo67 from "../assets/photo67.webp";
import photo68 from "../assets/photo68.webp";
import photo69 from "../assets/photo69.webp";
import photo70 from "../assets/photo70.webp";
import photo71 from "../assets/photo71.webp";
import photo72 from "../assets/photo72.webp";
import photo73 from "../assets/photo73.webp";
import photo74 from "../assets/photo74.webp";
import photo75 from "../assets/photo75.webp";
import photo76 from "../assets/photo76.webp";
import photo77 from "../assets/photo77.webp";
import photo78 from "../assets/photo78.webp";
import photo79 from "../assets/photo79.webp";
import photo80 from "../assets/photo80.webp";
import photo81 from "../assets/photo81.webp";
import photo82 from "../assets/photo82.webp";
import photo83 from "../assets/photo83.webp";
import photo84 from "../assets/photo84.webp";
import photo85 from "../assets/photo85.webp";
import photo86 from "../assets/photo86.webp";
import photo87 from "../assets/photo87.webp";
import photo88 from "../assets/photo88.webp";
import photo89 from "../assets/photo89.webp";
import photo90 from "../assets/photo90.webp";
import photo91 from "../assets/photo91.webp";
import photo92 from "../assets/photo92.webp";
import photo93 from "../assets/photo93.webp";
import photo94 from "../assets/photo94.webp";
import photo95 from "../assets/photo95.webp";
import photo96 from "../assets/photo96.webp";
import photo97 from "../assets/photo97.webp";
import photo98 from "../assets/photo98.webp";
import photo99 from "../assets/photo99.webp";
import photo100 from "../assets/photo100.webp";
import photo101 from "../assets/photo101.webp";
import photo102 from "../assets/photo102.webp";
import photo103 from "../assets/photo103.webp";
import { useState } from "react";
import arrow from "../assets/arrow.webp";
import LazyLoad from 'react-lazyload';
import Navbar from "../components/Navbar";

const photos = [photo77, photo78, photo79, photo80, photo81, photo82, photo83, photo84, 
  photo85, photo86, photo87, photo88, photo89, photo90, photo91, photo92, photo93, photo94, photo95, photo96, 
  photo97, photo98, photo99, photo100, photo101, photo102, photo103,
  photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9, photo10,
  photo11, photo12, photo13, photo14, photo15, photo16, photo17, photo18, photo19, photo20, photo21, photo22,
  photo23, photo24, photo25, photo26, photo27, photo28, photo29, photo30, photo31, photo32, photo33, photo34,
  photo35, photo36, photo37, photo38, photo39, photo40, photo41, photo42, photo43, photo44, photo45, photo46,
  photo47, photo48, photo49, photo50, photo51, photo52, photo53, photo54, photo55, photo56, photo57, photo58,
  photo59, photo60, photo61, photo62, photo63, photo64, photo66, photo67, photo68, photo69, photo70,
  photo71, photo72, photo73, photo74, photo75, photo76]

const Clicks = () => {

  const [showArrow, setShowArrow] = useState(false);

  const scrollFunc = () => {
    let y = window.scrollY;
    if(y>=1000){
        setShowArrow(true)
    }
    else{
        setShowArrow(false)
    }
  };

  window.addEventListener("scroll", scrollFunc);

  return (
    <div className="relative flex flex-col justify-center items-center w-full pb-20">
      <div className="absolute top-0 w-full">
        <Navbar />
      </div>
      <div className="w-[90%] lg:w-[80%] 2xl:w-[60%] px-10 flex justify-start items-center pt-14 min-w-[320px]">
          <h1 className="text-4xl 2xl:text-5xl text-[#76ABAE] mt-10 -mb-4 underline-offset-8 underline font-Raleway">CLICKS</h1>
      </div>
      <div className="p-10 min-w-[320px] w-[90%] lg:w-[80%] 2xl:w-[60%] columns-1 sm:columns-2 md:columns-3">
      {
          photos.map((photo, index) => (
            <motion.div
            initial = {{opacity: 0}}
            animate = {{opacity: 1}}
            transition = {{ delay: 0.2, duration: 1.5}}
            className="w-full flex justify-center items-center my-4" key={index}>
                <LazyLoad once offset={100}>
                  <img src={photo} alt="image" loading="lazy" className="w-full"/>
                </LazyLoad>
            </motion.div>
          ))
        }
      </div>
      <div className={`fixed z-20 p-2 rounded-full  bottom-0.5 right-0.5 lg:bottom-3 lg:right-3 xl:bottom-5 xl:right-5 ${showArrow?'block':'hidden'}`}>
        <img loading="lazy" className="cursor-pointer h-10 bg-white p-2 rounded-full border-2 border-black" alt="arrow" onClick={() => {window.scrollTo({top: 0, behavior: 'smooth'});}} src={arrow} />
      </div>
    </div>
  )
}

export default Clicks