

import "./app.scss"
import About from "./components/about/About";

import Hero from "./components/hero/Hero";
import { Navbar } from "./components/navbar/Navbar";
import Skill from "./components/skills/Skill";
import Skill2 from "./components/skills/Skill2";
import Contact from "./contact/Contact";
import Education from "./education/Education";
import Experience from "./internship/Experience";
import Time from "./internship/Time";
import Project from "./projects/Project";
import Project1 from "./projects/Project1";
const App = () => {
  return <div>
    
    
    <section id="HomePage">
    <Navbar/> 
    <Hero/>
    </section>
    
    
    
    <section id="About"><About/></section>
    <section id="Skills"><Skill/></section>
    <section id="Skills"><Skill2/></section>

    <section id="InternShip"><Time/></section>
    <section id="Education"><Education/></section>
    <section id="project"><Project1/></section>
    <section id="Project"><Project/></section>
    <section id="Project"></section>
    <section id="Project"></section>
    
    
    {/* <section id="Courses/Certificates">Courses/Certificates</section> */}
    <section id="Contact"><Contact/></section>  

    {/* <Test/>  */}
  </div>;
};

export default App;
