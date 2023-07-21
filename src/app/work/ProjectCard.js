import Link from "next/link"
import { BsGithub,  } from "react-icons/bs"
import { VscPlay } from "react-icons/vsc"
import { useSelector } from "react-redux"


const ProjectCard = (props) => {
  

  const currentMode = useSelector((state) => state.darkMode)

  const {title,description,image_url,github_link,live_link , tag,id} = props
  
  return (
    <div  key={id} className={`mt-2 p-1 relative rounded-lg ${currentMode ? 'text-gray-200 bg-indigo-950': 'text-purple-500 bg-sky-200 '} w-80 shadow-lg flex flex-col justify-center items-center `}>
<div className="img-github">
  <img src={image_url} alt={title} className="rounded-2xl w-80 h-72 p-2 "  />

  <Link href={live_link} className="absolute top-6 left-6 text-center" ><VscPlay className="bg-orange-500 animate-bounce text-white shadow-lg rounded-full p-1 text-4xl " /></Link>

<Link href={github_link} className="absolute top-6 right-6" ><BsGithub className="bg-orange-500 text-white animate-bounce shadow-lg rounded-full text-4xl  ml-0.5  " /></Link>

</div>

<div className="text p-2 ">

<h1 className="title text-3xl sm:text-2xl font-bold font-nunito text-transparent  bg-gradient-to-r bg-clip-text from-orange-500 to-green-400 ">{title}</h1>
<p className="text-[16px] font-nunito mt-2  text-start leading-tight tracking-wide text-purple-500 "> {description}
 </p>

<div className="tag flex gap-2 ">{tag.map((item,i)=>{return <li  key={i} className=" p-1 text-transparent    bg-gradient-to-r bg-clip-text from-pink-500 via-red-400 to-orange-400 "> {item+" "}</li>})}</div>
</div>





    </div>
  )
}
export default ProjectCard