import { VerticalTimeline, VerticalTimelineElement }  from "react-vertical-timeline-component";
import {motion} from "framer-motion"
import 'react-vertical-timeline-component/style.min.css';
import "./ex.scss"
import Experiences from "./Experiences"

const textVariants={
    initial:{
    x:-500,
    opacity:0,
},
animate:{
    x:0,
    opacity:1,
    transition:{
        duration:1,
        staggerChildren:0.1,
    },
},
};
const ExperienceCard=({experience})=>(
    <VerticalTimeline
    contentStyle={{background:'#1d1836',color:'#fff'}}
    contentArrowStyle={{borderRight:'7px solid #232631'}}
    date={Experiences.date}
    iconStyle={{background:Experiences.iconBg}}
    icon={
      <div>
          <img
          src={Experiences.icon}
          alt={Experiences.company_name}
          className="w-[60%] h-[60%] object-contain"

          />
      </div>
    }>
      <div>
          <h3 className="text-white text-[24px]">
             {experience.title} 
          </h3>
      </div>


  </VerticalTimeline>
)
const Experience = () => {
  return (
    <motion.div variants={textVariants} className="exp">

        <h1>InternShip Experience</h1>

        <div className="mt-20 flex flex-col">
          <VerticalTimeline>
            {Experiences.map((experience,index)=>(
                <ExperienceCard
                key={index}
                experience={experience}
                />
            ))}
          </VerticalTimeline>
        </div>
    </motion.div>
    
    
  )
}

export default Experience