import React, { useState } from 'react'
import { motion } from "framer-motion";
import { icons } from '../assets/data';
import { experiences } from '../assets/data';
import { finishes } from '../assets/data';

type Props = {}
function Experience({}: Props) {
  const [active, setActive] = useState(1)
  return (
    <div className="container" id="skillexp">
      <motion.div
        initial={{opacity: 0}}
        whileInView={{y: [-50, 0], opacity: 1}}  
        className="title"
      >
        <span>What I Expert?</span>
        <h1>Skills And Experience</h1>
      </motion.div>
      <motion.div
        initial={{opacity: 0}}
        whileInView={{y: [-50, 0], opacity: 1}}
        className="select"
      >
        <button
          onClick={() => setActive(1)}
          className={active === 1 ? "active" : "inactive"}>Skills</button>
        <button
          onClick={() => setActive(2)}
          className={active === 2 ? "active" : "inactive"}
        >Experiences</button>
      </motion.div>
      <motion.div
        initial={{opacity: 0}}
        whileInView={{y: [-50, 0], opacity: 1}}
        className="skills"
      >
        {active === 1 && icons.map((icon, index) => {
          return (
            <div key={index} className="tools" >
              {icon}
            </div>
          )
        })}
      </motion.div>
      <motion.div
        initial={{opacity: 0}}
        whileInView={{y: [-50, 0], opacity: 1}}
        className="experiencs"
      >
        {active === 2 && experiences.map(experience => {
          return (
            <div className="experience" key={experience.id}>
              <span>{experience.year}</span>
              <div className="position">
                <h3>{experience.position}</h3>
                <p>{experience.company}</p>
              </div>
            </div>
          )
        })}
        </motion.div>
      <motion.div
        initial={{opacity: 0}}
        whileInView={{y: [-50, 0], opacity: 1}}
        className="finishes_container"
      >
        {finishes.map(finish => {
        return (
          <div className='finishes' key={finish.id}>
            <div className='number'>{finish.number}</div>
            <h4 className='item_name'>{finish.itemName }</h4>
          </div>
          )
        })}
      </motion.div>
    </div>
  )
}

export default Experience