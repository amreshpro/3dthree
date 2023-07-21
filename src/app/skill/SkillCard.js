"use client"



const SkillCard = ({skill}) => {
  return (
    <div className="p-0 mx-3 flex  w-fit ">
      <span className="bg-indigo-900 rounded-full"></span>
      <div className="line-text">
        <div className="flex items-center justify-center">
        <div className="line h-[90px] w-[10px] sm:w-[4px] bg-indigo-900 "></div>
       
        <div className="line h-[4px] w-[98px] sm:h-[2px] bg-indigo-900"></div>
       <div className="animate-spin w-[20px] h-fit sm:w-[12px] mr-2 bg-indigo-900 rounded-full flex items-center justify-center px-3 py-1 pb-2 text-white text-3xl ">&#9673;</div>
        <h1 className="font-bold font-nunito text-indigo-900 text-2xl sm:text-lg mx-1">{skill}</h1>
        
            </div>
        
      </div>
    </div>
  )
}

export default SkillCard