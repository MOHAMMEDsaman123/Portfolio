import { VerticalTimeline, VerticalTimelineElement }  from "react-vertical-timeline-component";
import {motion} from "framer-motion"
import 'react-vertical-timeline-component/style.min.css';
import "./education.scss"
const Education = () => {
  return (
    <div className="edu">
        <h1>Education</h1>

        <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'black', color: '#fff',border:'4px solid white',borderRadius:'30px'}}
    contentArrowStyle={{ borderRight: '20px solid  white' }}
    date="2019"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<img src="./clg.jpeg" alt="Coding Key LLP" style={{ width: '100%', height: '100%', borderRadius: '50%' }} />}
  >
    <h3 className="vertical-timeline-element-title">Milagres English Medium School</h3>
    <h4 className="vertical-timeline-element-subtitle">X</h4>
    <p>
    Attended Milagres English Medium School, scored 77% in 10th grade.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    contentStyle={{ background: 'black', color: '#fff',border:'4px solid white',borderRadius:'30px'}}
    contentArrowStyle={{ borderRight: '20px solid  white' }}
    className="vertical-timeline-element--work"
    date="2021"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<img src="./clg.jpeg" alt="Coding Key LLP" style={{ width: '100%', height: '100%', borderRadius: '50%' }} />}
  >
    <h3 className="vertical-timeline-element-title">Milagres PU College</h3>
    <h4 className="vertical-timeline-element-subtitle">XII</h4>
    <p>
    Attended Milagres PUC College, scored 86% in 12th grade.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    contentStyle={{ background: 'black', color: '#fff',border:'4px solid white',borderRadius:'30px'}}
    contentArrowStyle={{ borderRight: '20px solid  white' }}
    className="vertical-timeline-element--work"
    date="Current - 2025 "
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<img src="./mite.jpg" alt="Coding Key LLP" style={{ width: '100%', height: '100%', borderRadius: '50%' }} />}
  >
    <h3 className="vertical-timeline-element-title">Mite</h3>
    <h4 className="vertical-timeline-element-subtitle">Under Graduation</h4>
    <p>
    Currently pursuing undergraduate engineering at MITE College with a CGPA of 8.7.
    </p>
  
    
  </VerticalTimelineElement>
  
</VerticalTimeline>
    </div>
  )
}

export default Education