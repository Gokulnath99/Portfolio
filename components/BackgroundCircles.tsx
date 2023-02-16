import React from 'react'
import { motion } from "framer-motion"


type Props = {}

function BackgroundCircles({}: Props) {
  return (
    <motion.div 
    initial={{
        opacity: 0,
    }}
    animate={{
        opacity: [0.1, 0.2, 0.5, 1],
        borderRadius: ["20%", "20%", "80%", "20%"]
    }}
    transition={{
        duration: 2.5,
    }}
    className='relative flex justify-center items-center'>
        <div className='absolute border border-[#F5B553] rounded-full h-[100px] w-[100px] mt-44 animate-ping-slow' />
        <div className='absolute border border-[#F5B553] rounded-full h-[300px] w-[300px] mt-44 animate-ping-slow' />
        <div className='absolute border border-[#F5B553] rounded-full h-[500px] w-[500px] mt-44 animate-ping-slow' />
        <div className='absolute border border-[#F5B553] rounded-full h-[800px] w-[800px] mt-44 animate-ping-slow' />
    </motion.div>
  )
}

export default BackgroundCircles