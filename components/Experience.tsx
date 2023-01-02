import React, { Component } from 'react'
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

type Props = {}

type State = {}

class Experience extends Component<Props, State> {
  state = {}

  render() {
    return (
    <motion.div 
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1}}
        transition={{ duration: 1.5}}
        className="overscroll-contain flex flex-col relative h-screen text-left md:text-left overflow-hidden
                  md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-[#F5B553] text-2xl">
            Experience
        </h3>
        <div className='mt-28 w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory'>
          {/* ExperienceCard */}
          <ExperienceCard />
          <ExperienceCard />
          <ExperienceCard />
          <ExperienceCard />
          <ExperienceCard />
        </div>
    </motion.div>
    )
  }
}

export default Experience