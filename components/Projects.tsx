import React, { useEffect, useState, useMemo } from 'react';
import {FiGithub, FiEye} from "react-icons/fi"
import { motion } from 'framer-motion';
import { Project } from "../typings";
import { urlFor } from '../sanity';

type Props = {
  projects: Project[]
}

const Projects = ({projects}: Props) => {
  const [tab, setTab] = useState({ name: "all" });
  const [active, setActive] = useState(0);
  const filteredProjects = useMemo(() => {
    return tab.name === "all" ? projects : projects.filter(p => p.categories[0].name === tab.name);
  }, [tab, projects]);
  const imageUrls = useMemo(() => projects.map(p => urlFor(p.image).url()), [projects]);
  
  const handleTabClick = (index: number) => {
    setTab({ name: workNavs[index].toLowerCase() });
    setActive(index);
  }

  const workNavs = [    "All", "Web", "App", "Design"  ]
  return (
    <div className="container">
      <motion.div
        initial={{opacity: 0}}
        whileInView={{y: [-50, 0], opacity: 1}}
        className="title"
      
      >
            <span>My Work</span>
            <h1>Awesome Projects</h1>
      </motion.div>
      <motion.div
        initial={{opacity: 0}}
        whileInView={{y: [-50, 0], opacity: 1}}
        className="buttons"
      >
        {workNavs.map((workNav ,index) => (
            <button
              onClick={() => handleTabClick(index)}
              className={`${active === index ? "active" : "inactive"}`}
              key={index}>{workNav}</button>
        ))}
      </motion.div>
      <motion.div
        initial={{x: 0 ,opacity: 0}}
          whileInView={{ x: [-250,0], opacity: 1 }}
          transition={{ duration: 1 }}
          exit={{opacity: 0, y: -50}}
          className="workImages"
          >
          {filteredProjects.map((work, index) => (
          <div className="workImage"
                    key={work._id}
                   >
          <img src={imageUrls[index]} alt={work.title} />
          <motion.div
          initial={{opacity: 0}}
          whileHover={{ opacity: [0, 1] }}
          transition={{duration: 0.3 , ease: "easeInOut"}}
          className='hoverLayer'
          >            <motion.a href='#'
          whileInView={{scale: [0,1]}}
           whileHover={{scale: [1, 1.1]}}
           transition={{duration: 0.3}}
          >
            <FiGithub />
          </motion.a>
            
          <motion.a href='#'
          whileInView={{scale: [0,1]}}
           whileHover={{scale: [1, 1.1]}}
           transition={{duration: 0.3}}
          >
            <FiEye />
          </motion.a>
        </motion.div>
      </div>
  ))}
</motion.div>
<motion.div
  initial={{x: 0 ,opacity: 0}}
    whileInView={{ x: [250,0], opacity: 1 }}
    transition={{duration: 1}}
  className="talk"
>
  <div className="talk_left">
    <h3> So, lets talk about <br /> <span>your next projects</span></h3>
  </div> 
  <motion.div
    whileHover={{scale: [1, 1.1]}}
    transition={{duration: 0.3}}
    className="talk_right"
  >
    <button>Contact Me</button>
  </motion.div>
</motion.div>
</div>

  )
}

export default Projects;