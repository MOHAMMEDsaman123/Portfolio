import { useState } from "react"
import "./sidebar.scss"
import Links from "./links/Links"
import ToggleButton from "./toggleButton/ToggleButton"
import {delay, motion, transform} from "framer-motion"

const Sidebar = () => {
    const [open,setOpen]=useState(false)
    const variants={
        open:{
            clipPath:"circle(1200px at 50px 50px)",
            transition:{
                type:"spring",
                stiffness:20,
            }
        },
        closed:{
            clipPath:"circle(30px at 50px 50px)",
            transition:{
            delay:1,
                type:"spring",
                stiffness:400,
                damping:30,
            }
        }
    }
  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
        <motion.div className="bg" variants={variants}>
            <Links/>
        </motion.div>
        <ToggleButton setOpen={setOpen}/>
    </motion.div>
  )
}

export default Sidebar