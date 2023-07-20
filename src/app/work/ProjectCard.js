import Link from "next/link"
import { BsGithub, BsPlayBtnFill } from "react-icons/bs"
import { VscPlay } from "react-icons/vsc"


const ProjectCard = () => {
  return (
    <div className="mt-2 p-1 relative rounded-lg text-white bg-purple-950 w-80 shadow-lg flex flex-col justify-center items-center ">
<div className="img-github">
  <img src="https://i.imgur.com/EoDLDMr.png" alt="" className="rounded-2xl w-80 p-2 "  />

  <Link href="" className="absolute top-6 left-6   text-center" ><VscPlay className="bg-black text-white shadow-lg rounded-full p-1 text-4xl " /></Link>

<Link href="" className="absolute top-6 right-6" ><BsGithub className="bg-black text-white shadow-lg rounded-full text-4xl " /></Link>

</div>

<div className="text p-2 ">

<h1 className="title text-3xl font-bold font-nunito text-transparent  bg-gradient-to-r bg-clip-text from-orange-500 to-sky-400 ">Project Title</h1>
<p className="text-[16px] font-nunito   text-start leading-tight tracking-wide text-gray-200 ">Lorem ipsum dolor sit amet consectetur,
   adipisicing elit. Repellat adipisci eaque
    aperiam dolore odio sapiente autem consectetur
     perferendis! Amet nulla cupiditate odio hic 
     doloremque eveniet corrupti pariatur
   quae libero quasi, quia aliquid ipsa.</p>

<p className="tag">Tag1 Tag2 Tag3</p>
</div>





    </div>
  )
}
export default ProjectCard