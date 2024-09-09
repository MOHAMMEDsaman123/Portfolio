import { animate, stagger } from "framer-motion"
import "./contact.scss"
import {motion} from "framer-motion"
const variants={
    initial:{
        y:500,
        opacity:0
    },
    animate:{
        y:0,
        opacity:1,
        transition:{
            duration:0.7,
        staggerChildren:0.1
    },

    },
};
const Contact = () => {
  return (
    <motion.div className="contact" variants={variants} initial="initial" whileInView="animate">
        <motion.div className="textContainer" variants={variants} >
            <motion.h1 variants={variants}>Let`s Work Together </motion.h1>
            <motion.div className="item" variants={variants}>
                <h2 >Mail</h2>
                <span>mohammedsaman4444@gmail.com</span>
            </motion.div>
            <motion.div className="item" variants={variants}>
                <h2>Address</h2>
                <span>Santhosh Nagar Ambagillu,Kunjibettu Post, Udupi</span>
            </motion.div>
            <motion.div className="item" variants={variants}>
                <h2>Phone</h2>
                <span>+917760684651</span>
            </motion.div>

        </motion.div>
        <div className="formContainer">
            <form action="https://formspree.io/f/mleqdege" method="POST" >
              <input type="text" placeholder="Name" name="name" required/>
              <input type="email" placeholder="Email" name="email" required />
              <textarea rows={8} placeholder="Message" name="message" required></textarea>  
              <button value="send">Submit</button>
            </form>
        </div>
    </motion.div>
    
  )
}

export default Contact