import React from "react";
import { motion } from "framer-motion";
import aboutpic from "../assets/about.jpg"
import { bios } from '../assets/data';

type Props = {};

function About({}: Props) {
  return (
    <div className="container">
      <motion.div 
      initial={{ opacity: 0}}
      whileInView={{ opacity: 1}}
      transition={{ duration: 1.5}}
      className="title">
        <p>who am I?</p>
        <h1>About Me</h1>
      </motion.div>


      <div className="about_container">
        <motion.div
            initial={{ x: -250, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 2 }}
            className="about_left">
          <motion.img
            initial={{
                x: -250,
                opacity: 0
            }}
            transition={{
              duration: 1,
            }}
            whileInView={{
                x: 0,
                opacity: 1,
            }}
            viewport={{ once:true }}
            src= {aboutpic.src}
            alt="picture"
          />
        </motion.div>

        <motion.div className="about_right"
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae at rem, tenetur ad ipsa sequi, optio eius laudantium vero minus maxime laborum est et nemo consequatur nostrum distinctio sed, nulla doloribus officiis ea eligendi explicabo.</p>
          {bios.map(bio => {
            return (
              <div className="bio" key={bio.id}>
                <span className='bioKey'>{bio.icon}{bio.key}</span>
                <span className='bioValue'>{bio.value}</span>
              </div>
            )
          })}
          <motion.a href='#' download=""
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            Download Resume
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
