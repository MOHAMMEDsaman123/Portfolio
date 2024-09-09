
import "./about.scss"
import {motion} from "framer-motion"

const About = () => {
    return (
      
     <div className="about">
        <div className="about-title">
            <h1>About <span className="glowText">Me</span></h1>
            <img className="img2"  src="about.jpg" alt="" />
            
        </div>
        <div className="about-sections">
            <div className="about-left">
            <motion.img className="image" src="sam.jpg" alt="" initial={{opacity:0.5,scale:0.5}}
        animate={{opacity:1,scale:0.5}}
        transition={{duration:1}}
        whileInView={{opacity:1,scale:1}}/>
            </div>
            <div className="about-right">
                <motion.div className="about-para" initial={{opacity:0.5,scale:0.5}}
        animate={{opacity:1,scale:0.5}}
        transition={{duration:1}}
        whileInView={{opacity:1,scale:1}}>
                   <p>
                   As a third-year engineering student at Mangalore Institute of Technology and Engineering (MITE), I am passionate about leveraging my academic background and practical experience to solve complex engineering challenges. Throughout my studies, I have completed three internships that have provided me with hands-on experience in various engineering domains, enhancing my technical skills and understanding of real-world applications. My role as a team leader in a mini project has honed my leadership, project management, and collaborative abilities, allowing me to effectively guide my team to successful project completion. Mostly dedicated to continuous learning and innovation, aiming to contribute effectively to future engineering projects. Gained strong analytical skills, combined with my proactive approach and ability to work under pressure, make`s me a valuable asset to any team.

 
                    <br /><br />

                    ~let's connect and share insights on this exciting journey!
                   </p>
                </motion.div>
                
            </div>
        </div>
     </div>
    )
  }
  
  export default About