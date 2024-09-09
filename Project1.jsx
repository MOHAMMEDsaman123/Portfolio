import React from 'react'
import "./project.scss"
import {motion,useScroll,useTransform} from "framer-motion"
import { useRef } from "react"
const Project1 = ({type}) => {
    const ref=useRef()
    const {scrollYProgress}=useScroll({
        target:ref,
        offset:["start start","end start"]
    });
    const yText=useTransform(scrollYProgress,[0,1],["0%","10%"]);
    const yBg=useTransform(scrollYProgress,[0,1],["0%","10%"]);
  return (
    <div className="skill"
    style={{
        background:
        type==="Skill"
        ?"linear-gradient(188deg,#111132,#0c0c1d)"
        :"linear-gradient(180deg,#111132,black)",
    }}>
        <motion.h1 style={{y:yText}}>My Projects</motion.h1>
        <motion.div className="mountains">
            <motion.div className="stars" style={{x:yBg}}>
                <motion.div className="planets" style={{y:yBg}}></motion.div>
            </motion.div>
        </motion.div>
    </div>
  )
}
export default Project1