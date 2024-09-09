import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./hero.scss";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 1,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-200%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const sliderVariants2 = {
  initial: {
    x: 0,
  },
  animate: {
    x: "38%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 10,
    },
  },
};

const Hero = () => {
  const [index, setIndex] = useState(0);
  const roles = ["Student", "Freelancer","FullStack Web Developer"];

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 1500); // Change the word every 3 seconds
    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
          <motion.h2 variants={textVariants}>Saman Mohammed Sherif</motion.h2>
          <motion.h1 variants={textVariants} className="typewriter">
            {roles[index]}
          </motion.h1>
          <motion.div className="buttons" variants={textVariants}>
            <motion.button variants={textVariants}>Resume</motion.button>
            <motion.button variants={textVariants}>Contact Me</motion.button>
          </motion.div>
          <motion.img src="./scroll.png" alt="" variants={textVariants} animate="scrollButton" />
        </motion.div>
      </div>
      <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
        Web Developer
      </motion.div>
      <motion.div className="imageContainer" variants={sliderVariants2} initial="initial" animate="animate" >
        <img src="anime.jpg" alt="" />
      </motion.div>
    </div>
  );
};

export default Hero;
