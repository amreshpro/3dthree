"use client"
import { useSelector } from 'react-redux'
import SkillCard from './SkillCard'
import skills from '@/constant/skills'
// import Avtar from '../canvas/Avtar'




const page = () => {

  const currentMode = useSelector((state) => state.darkMode)

  return (
    <div className={`px-4 ${currentMode ? 'bg-skill-dark': 'bg-skill' } pt-16 `}>

<h1 className="text-center font-bold font-nunito text-3xl text-indigo-900 py-3">Skills</h1>
{/* 
<section className="avtar z-10   absolute sm:left-0  ">
<Avtar/>
</section> */}
<div className="skill flex flex-wrap relative justify-center items-center">

<section className="skill-text z-20 ">
  {
  skills.map((item)=>{
    return(
      <SkillCard skill={item.name} key={item.id}/>
      )
      
    })
}
</section>




    </div>



    </div>
  )
}

export default page