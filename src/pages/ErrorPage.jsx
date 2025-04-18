import { NavLink } from "react-router-dom";
import pepe from "../assets/pepe.webp";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[100svh] p-20 gap-10 min-w-[320px]  min-h-[930px]">
      <div className="w-full h-1/2 flex-grow flex items-center justify-center">
        <img src={pepe} alt="pepe" className="min-w-[233px] h-3/4 xl:h-full"/>
      </div>
      <div className="h-1/2 flex flex-col justify-start items-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl 2xl:text-7xl text-nowrap mb-4 text-white font-cursive">PAGE NOT FOUND</h1>
        <NavLink to='/'>
          <button className="text-lg sm:text-2xl md:text-3xl 2xl:text-4xl text-nowrap p-2 text-[#222831] bg-white border-2 border-black font-Raleway rounded-full shadow-lg shadow-black px-5">GO BACK TO HOME</button>
        </NavLink>
      </div>
    </div>
  )
}

export default ErrorPage