import { motion, spring } from "framer-motion";
import photo1 from "../assets/photo1.jpg";
import photo2 from "../assets/photo2.jpg";
import photo3 from "../assets/photo3.jpg";
import photo4 from "../assets/photo4.jpg";
import photo5 from "../assets/photo5.jpg";
import photo6 from "../assets/photo6.jpg";
import photo7 from "../assets/photo7.jpg";
import photo8 from "../assets/photo8.jpg";
import photo9 from "../assets/photo9.jpg";
import photo10 from "../assets/photo10.jpg";
import photo11 from "../assets/photo11.jpg";
import photo12 from "../assets/photo12.jpg";
import photo13 from "../assets/photo13.jpg";
import photo14 from "../assets/photo14.jpg";
import photo15 from "../assets/photo15.jpg";
import photo16 from "../assets/photo16.jpg";
import photo17 from "../assets/photo17.jpg";
import photo18 from "../assets/photo18.jpg";
import photo19 from "../assets/photo19.jpg";
import photo20 from "../assets/photo20.jpg";
import photo21 from "../assets/photo21.jpg";
import photo22 from "../assets/photo22.jpg";
import photo23 from "../assets/photo23.jpg";
import photo24 from "../assets/photo24.jpg";
import photo25 from "../assets/photo25.jpg";
import photo26 from "../assets/photo26.jpg";
import photo27 from "../assets/photo27.jpg";
import photo28 from "../assets/photo28.jpg";
import photo29 from "../assets/photo29.jpg";
import photo30 from "../assets/photo30.jpg";
import photo31 from "../assets/photo31.jpg";
import photo32 from "../assets/photo32.jpg";
import photo33 from "../assets/photo33.jpg";
import photo34 from "../assets/photo34.jpg";
import photo35 from "../assets/photo35.jpg";
import photo36 from "../assets/photo36.jpg";
import photo37 from "../assets/photo37.jpg";
import photo38 from "../assets/photo38.jpg";
import photo39 from "../assets/photo39.jpg";
import photo40 from "../assets/photo40.jpg";
import photo41 from "../assets/photo41.jpg";
import photo42 from "../assets/photo42.jpg";
import photo43 from "../assets/photo43.jpg";
import photo44 from "../assets/photo44.jpg";
import photo45 from "../assets/photo45.jpg";
import photo46 from "../assets/photo46.jpg";
import photo47 from "../assets/photo47.jpg";
import photo48 from "../assets/photo48.jpg";
import photo49 from "../assets/photo49.jpg";
import photo50 from "../assets/photo50.jpg";
import photo51 from "../assets/photo51.jpg";
import photo52 from "../assets/photo52.jpg";
import photo53 from "../assets/photo53.jpg";
import photo54 from "../assets/photo54.jpg";
import photo55 from "../assets/photo55.jpg";
import photo56 from "../assets/photo56.jpg";
import photo57 from "../assets/photo57.jpg";
import photo58 from "../assets/photo58.jpg";
import photo59 from "../assets/photo59.jpg";
import photo60 from "../assets/photo60.jpg";
import photo61 from "../assets/photo61.jpg";
import photo62 from "../assets/photo62.jpg";
import photo63 from "../assets/photo63.jpg";
import photo64 from "../assets/photo64.jpg";
import photo65 from "../assets/photo65.jpg";
import photo66 from "../assets/photo66.jpg";
import photo67 from "../assets/photo67.jpg";
import photo68 from "../assets/photo68.jpg";
import photo69 from "../assets/photo69.jpg";
import photo70 from "../assets/photo70.jpg";
import photo71 from "../assets/photo71.jpg";
import photo72 from "../assets/photo72.jpg";
import photo73 from "../assets/photo73.jpg";
import photo74 from "../assets/photo74.jpg";
import photo75 from "../assets/photo75.jpg";
import photo76 from "../assets/photo76.jpg";
import photo77 from "../assets/photo77.jpeg";
import photo78 from "../assets/photo78.jpeg";
import photo79 from "../assets/photo79.jpeg";
import photo80 from "../assets/photo80.jpeg";
import photo81 from "../assets/photo81.jpeg";
import photo82 from "../assets/photo82.jpeg";
import photo83 from "../assets/photo83.jpeg";
import photo84 from "../assets/photo84.jpeg";
import photo85 from "../assets/photo85.jpeg"
import photo86 from "../assets/photo86.jpeg";
import photo87 from "../assets/photo87.jpeg";
import photo88 from "../assets/photo88.jpeg";
import photo89 from "../assets/photo89.jpeg";
import photo90 from "../assets/photo90.jpeg";
import photo91 from "../assets/photo91.jpeg";
import photo92 from "../assets/photo92.jpeg";
import photo93 from "../assets/photo93.jpeg";
import photo94 from "../assets/photo94.jpeg";
import photo95 from "../assets/photo95.jpeg"
import photo96 from "../assets/photo96.jpeg";
import photo97 from "../assets/photo97.jpeg";
import photo98 from "../assets/photo98.jpeg";
import photo99 from "../assets/photo99.jpeg";
import photo100 from "../assets/photo100.jpeg";
import photo101 from "../assets/photo101.jpeg";
import photo102 from "../assets/photo102.jpeg";
import photo103 from "../assets/photo103.jpeg";
import { useState } from "react";
import arrow from "../assets/arrow.png";
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
  photo59, photo60, photo61, photo62, photo63, photo64, photo65, photo66, photo67, photo68, photo69, photo70,
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
            className="w-full flex justify-center items-center my-4 shadow-black shadow-md" key={index}>
                <LazyLoad once offset={100}>
                  <img src={photo} alt="image" className="w-full"/>
                </LazyLoad>
            </motion.div>
          ))
        }
      </div>
      <div className={`fixed z-20 p-2 rounded-full  bottom-0.5 right-0.5 lg:bottom-3 lg:right-3 xl:bottom-5 xl:right-5 ${showArrow?'block':'hidden'}`}>
        <img className="cursor-pointer h-10 bg-white p-2 rounded-full border-2 border-black" alt="arrow" onClick={() => {window.scrollTo({top: 0, behavior: 'smooth'});}} src={arrow} />
      </div>
    </div>
  )
}

export default Clicks