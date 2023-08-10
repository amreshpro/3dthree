"use client";
import { useEffect, useState } from 'react'
import { LuMenu } from 'react-icons/lu'
import { VscChromeClose } from 'react-icons/vsc'
import { BsMoonStarsFill } from 'react-icons/bs'
import { LuSunMoon } from 'react-icons/lu'
import {FaMusic} from 'react-icons/fa'
import {TbMusicOff} from 'react-icons/tb'
import { motion } from 'framer-motion'
import { useSelector, useDispatch } from 'react-redux'
import { changeColorMode } from '@/redux/darkModeSlice';
import Link from 'next/link';
import { changePlayMode } from '@/redux/playMusicSlice';
import ReactAudioPlayer from 'react-audio-player';



const Navbar = () => {

    const [isMenuOpen, setIsMenuOpenOpen] = useState(false)
    const [isDarkMode, setIsDarkMode] = useState(false)
    // const [isPlayMode, setPlayMode] = useState(true)


    const currentMode = useSelector((state) => state.darkMode)
    // const musicMode = useSelector((state) => state.playMode)


    const dispatch = useDispatch()
    

    const toggleDarkModeHandler = () => {

        dispatch(changeColorMode(currentMode))
        setIsDarkMode((prev) => {
            return prev ? false : true
        })

       
    }



    
    
    // const music = new Audio("/music.mp3")
 
    // musicMode ? music.pause() : music.play()



    // const toggleMusicModeHandler = () => {

    //     dispatch(changePlayMode())
    //     setPlayMode((prev) => {
    //         return prev ? false : true
    //     })


    //     // musicMode ? music.pause() : music.play()

       
    // }











    return (

        <div className={`z-50 ${isDarkMode ? "bg-transparent":'' } w-[100vw]  fixed `}>


            <nav className={`${isDarkMode ? 'text-green-300':'text-blue-900' }  flex justify-between  px-8 py-4 z-50`}>
                <div className="logo flex gap-2 ">




                    <h1 className={` ${isDarkMode ? 'text-green-300' : 'text-blue-900' }  text-2xl font-nunito font-bold `}>Amresh</h1>
                    <button onClick={toggleDarkModeHandler} >{isDarkMode ? <LuSunMoon className="mb-4 text-3xl font-bold  text-orange-300" /> : <BsMoonStarsFill className="text-2xl mt-0.5 ml-1 font-bold  mb-4 text-blue-900" />}</button>
                    {/* <button onClick={toggleMusicModeHandler} >{isPlayMode ? <FaMusic className="mb-4 text-2xl font-bold  text-pink-500" /> : <TbMusicOff className="text-2xl mt-0.5 ml-1 font-bold  mb-4 text-blue-900" />}</button> */}
              
                </div>




                <ul className="flex flex-row gap-4 pt-2 pr-2 sm:hidden text-lg font-nunito font-bold">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/">Work</Link></li>
                    <li><Link href="/">Skills</Link></li>
                    <li><Link href="/">Contact</Link></li>



                </ul>



            </nav>



            <div onClick={() => setIsMenuOpenOpen((prev) => {

                return prev === true ? false : true;
            })}> {isMenuOpen ? <VscChromeClose className="mt-5 mr-5 text-blue-900 text-2xl absolute top-0 right-1 invisible sm:visible" /> : <LuMenu className="mt-5 mr-5   text-3xl absolute top-0 right-1 invisible text-blue-900 sm:visible" />}</div>



            {
                isMenuOpen &&
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ rotate: 360, scale: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20
                    }}
                className='z-50'
                >

                    <ul className={` z-50 ${ currentMode ? 'text-green-300' : 'text-indigo-400'} font-nunito font-bold justify-center px-4 bg-purple-900 h-[100vh] w-[100vw] flex flex-col gap-12 text-2xl items-center ease-linear duration-1000`}>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/work">Work</Link></li>
                        <li><Link href="/skill">Skills</Link></li>
                        <li><Link href="/contact">Contact</Link></li>



                    </ul>

                </motion.div>

            }
        </div>
    )
}




export default   Navbar

   