import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

function Logo({}: Props) {
  return (
    <motion.div 
    initial={{
        x: -500,
        opacity: 0,
        scale: 0.5
    }}
    animate={{
        x: 0,
        opacity: 1,
        scale: 1
    }}
    transition={{
        duration: 1.5
    }}
    className='logo'>
        Logo
    </motion.div>
  )
}

export default Logo