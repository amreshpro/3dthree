"use client"
import { useEffect } from "react"
import ProjectCard from "./ProjectCard"
import axios from "axios"

const page = () => {
  function fetchData(){
useEffect(async()=>{

const res = await axios.post("/api/socialLinks")
 
const data = await res.json()
console.log(data)
return data
})



}

fetchData()

  return (
    <div className="flex flex-wrap items-center justify-center">
<ProjectCard/>

    </div>
  )
}
export default page