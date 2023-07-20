"use client";


import City from "../canvas/City";
import { useSelector } from "react-redux";


const Hero = () => {

  const currentMode = useSelector((state) => state.darkMode)
  

  return (
    <div className=" w-[100vw] h-[100vh] ">
    
      {/* <div className="sword absolute">
        <Sword/>
      </div> */}
      <div className={`city absolute ${currentMode ?'bg-black' : 'bg-hero'} `}>
<City/>
</div>
    <div className="mb-2 absolute top-0 mt-24 px-4 font-nunito flex flex-col gap-4  sm:-z-10">
    <h1 className=" sm:text-4xl xsm:text-2xl font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-purple-700 to-pink-800 ">Hii, I Am Amresh Maurya</h1>
    <p className={`  ${currentMode ? 'text-green-400' :  'text-slate-900' } font-semibold pb-5 sm:text-lg   text-xl`}>I code beautifully simple things.I enjoy creating things that live on internet and I love what I do. </p>


</div>
   </div>
  
  )
}
export default Hero