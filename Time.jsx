import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion"
import 'react-vertical-timeline-component/style.min.css';
import "./ex.scss"

// Import your icons (example, adjust paths as needed)
// import smartKnowerIcon from './youtube.png'; 
// import miteIcon from './stars.png'; 
// import codingKeyIcon from './facebook.png'; 

const Time = () => {
  return (
    <div className='exp'>
      <h1>Internship Experience</h1>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'black', color: '#fff', border: '4px solid white', borderRadius: '30px' }}
          contentArrowStyle={{ borderRight: '20px solid white' }}
          date="1/6/2022 - 31/7/2022"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<img src="./smart.png" alt="Smart Knower" style={{ width: '100%', height: '100%', borderRadius: '50%' }} />}
        >
          <h3 className="vertical-timeline-element-title">Smart Knower</h3>
          <h4 className="vertical-timeline-element-subtitle">Cyber Security</h4>
          <p>
          Cybersecurity internship: learned VAPT, networking, web development, automation, reporting.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={{ background: 'black', color: '#fff', border: '4px solid white', borderRadius: '30px' }}
          contentArrowStyle={{ borderRight: '20px solid white' }}
          className="vertical-timeline-element--work"
          date="2023"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<img src="./mite.jpg" alt="Mite" style={{ width: '100%', height: '100%', borderRadius: '50%' }} />}
        >
          <h3 className="vertical-timeline-element-title">Mite</h3>
          <h4 className="vertical-timeline-element-subtitle">WordPress</h4>
          <p>
          One-month WordPress internship: developed music app project, gained WordPress skills.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={{ background: 'black', color: '#fff', border: '4px solid white', borderRadius: '30px' }}
          contentArrowStyle={{ borderRight: '20px solid white' }}
          className="vertical-timeline-element--work"
          date="24/11/2023 - 24/12/2023"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<img src="./coding.jpeg" alt="Coding Key LLP" style={{ width: '100%', height: '100%', borderRadius: '50%' }} />}
        >
          <h3 className="vertical-timeline-element-title">Coding Key LLP</h3>
          <h4 className="vertical-timeline-element-subtitle">Digital Forensics</h4>
          <p>
          One-month internship at Coding Key LLP: Acquired HTML, CSS, JS skills; created CTF flag website.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Time;
