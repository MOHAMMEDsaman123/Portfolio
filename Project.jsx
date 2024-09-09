import "./project.scss"

import {useRef} from "react";
import {motion,useScroll,useSpring, useTransform} from "framer-motion"
const items=[
    {
        id:1,
        title:"Online Job Portal",
        img:"https://www.sourcecodester.com/sites/default/files/images/janobe/2019-12-24.png",
        desc:"This project is an online job portal built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It features separate dashboards for users and admins. Users can register, search for jobs by state or country, and apply directly through the portal. Admins can post job listings, track user applications, and manage user profiles. The portal employs secure authentication using JWT and bcrypt for password hashing. The database schema is designed to efficiently handle users, jobs, and applications, ensuring a seamless experience for both job seekers and employers. This project exemplifies a robust full-stack web application with real-time data handling and management capabilities."

    },
    {
        id:2,
        title:"CTF Flag",
        img:"https://static.wixstatic.com/media/257b26_4be196a59da84afa90938600d1e1344b~mv2.jpg/v1/fill/w_640,h_362,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/257b26_4be196a59da84afa90938600d1e1344b~mv2.jpg",
        desc:"During a one-month internship, I developed a Capture the Flag (CTF) website using HTML5, CSS, and JavaScript. The site included five interactive levels, each requiring users to find hidden flags to progress: 1. Quiz: Answer questions to reveal the flag. 2. Memory Game: Match pairs to uncover the flag. 3. Password Cracker: Solve puzzles to crack passwords and find the flag. 4. Notepad Flag Finding: Discover flags hidden in a simulated notepad. 5. Error Debugging: Debug code snippets to expose the flag. This project enhanced my skills in front-end web development and user engagement"
    },
    {
        id:3,
        title:"Lifestyle Store",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpP6WQ5YT2RwK8z49A42X4ae8Hypr3MS0QoWWtFCbHDA&s",
        desc:"During my cybersecurity internship, I gained expertise in Information Security, Computer Networking, and Web Development. My learning encompassed Information Gathering and Vulnerability Assessment and Penetration Testing (VAPT) of critical vulnerabilities in the OWASP Top 10, as well as automating VAPT processes and documenting and reporting vulnerabilities. My project involved gathering information and performing SQL injection attacks on the Lifestyle Store website to identify and exploit potential security weaknesses. This hands-on experience honed my skills in identifying, testing, and reporting web application vulnerabilities, crucial for securing digital assets against cyber threats."
    }
    
];
const Single=({item})=>{
    const ref=useRef();
    
    const {scrollYProgress} = useScroll({target:ref, 
    });

    const y=useTransform(scrollYProgress,[0,1],["0%","0%"])
    return (
        
        <section >
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                <img src={item.img} alt="" />
                </div>
                <motion.div className="textContainer"
                style={{y}}
                >
                    <h2>
                        {item.title}
                        
                    </h2>
                    <p>{item.desc}</p>
                    {/* <button>See Demo</button> */}
                </motion.div>
            </div>
            </div>
        </section>
    )
}
const Project = () => {
    const ref= useRef()
    const {scrollYProgress} = useScroll({target:ref, offset:["end end","start start"],});
    const scaleX=useSpring(scrollYProgress,{
        stiffness:100,
        damping:30,
    });
  return (
    <div className="project" ref={ref}>
        <h1>My Projects</h1>
        <div className="progress">
       
            <motion.div style={{scaleX}}className="progressBar"></motion.div>

        </div>
        {items.map(item=>(
            <Single item={item} key={item.id}/>
        ))}
    </div>
  )
}

export default Project