import Sidebar from "../sidebar/Sidebar"
import "./navbar.scss"

import {motion} from "framer-motion"
export const Navbar = () => {
  return (
    <div className="navbar">
        {/* {Sidebar} */}
        <Sidebar/>
        <div className="wrapper">
        <motion.span 
        initial={{opacity:0.5,scale:0.5}}
        animate={{opacity:1,scale:0.5}}
        transition={{duration:1}}
        whileInView={{opacity:1,scale:1}}
        >Saman Mohammed Sherif</motion.span>
            <div className="social">
                <a href="#"><img src="/facebook.png" alt=""></img></a>
                <a href="#"><img src="/instagram.png" alt=""></img></a>
                <a href="#"><img src="/images.png" alt=""></img></a>
                <a href="#"><img src="/youtube.png" alt=""></img></a>
            </div>
        </div>
        </div>
  )
}
