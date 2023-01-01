import React, { Component } from 'react'
import { motion } from "framer-motion";

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
        className="flex flex-col relative h-screen text-center md:text-left
                  md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-[#F5B553] text-2xl">
            Experience
        </h3>
    </motion.div>
    )
  }
}

export default Experience