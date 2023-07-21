"use client"

import { useSelector } from "react-redux"
import City2 from "../canvas/City2"
import ProjectCard from "./ProjectCard"
import { clones , othersContribution } from "@/constant/project"

const page = () => {
  const currentMode = useSelector((state) => state.darkMode)


  return (
    <>
    <div className={` ${currentMode ? 'bg-work-dark':'bg-work'} absolute w-[100vw] h-[100vh]  `}>

<City2/>
    </div>
    <h1 className="text-4xl font-nunito pt-16 text-center font-bold text-sky-200 ">Work</h1>
 
 <div className="flex flex-wrap gap-4 justify-center ">


{
  clones.map((item)=>{
    return <section key={item.id}>
      <ProjectCard {...item} />
    </section>
  })
}

{
  othersContribution.map((item)=>{
    return <section key={item.id}>
      <ProjectCard {...item} />
    </section>
  })
}



 </div>
    </>
  )
}
export default page