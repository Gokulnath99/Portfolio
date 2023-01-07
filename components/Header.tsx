import React, { useState  } from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion"
import Logo from './Logo';
import Link from 'next/link';
 
type Props = {}

function Header({}: Props) {

    const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='sticky z-20 p-5 top-0 flex items-center justify-between max-w-7xl mx-auto bg-[rgb(36,36,36)]'>
        {/* logo */}
        <Logo />
        
        {/* navigation */}
        <motion.div 
            initial={{
                y: -200,
                opacity: 0,
                scale: 0.5
            }}
            animate={{
                y: 0,
                opacity: 1,
                scale: 1
            }}
            transition={{
                duration: 1
            }}
            className="hidden shrink-0 md:flex">
          <Link href='#about'>
            <button className="heroButton">About</button>
          </Link>
          <Link href='#SkillExp'>
            <button className="heroButton">Experience</button>
          </Link>
          <Link href='#SkillExp'>
            <button className="heroButton">Skills</button>
          </Link>
          <Link href='#project'>
            <button className="heroButton">Project</button>
          </Link>
        </motion.div>
        
        {/* social icon */}
        <motion.div 
        initial={{
            x: 500,
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
        className='flex-row items-center hidden md:flex'>

            <SocialIcon 
                url="https://github.com/Gokulnath99" 
                fgColor='gray'
                bgColor='transparent'
            />
            <SocialIcon 
                url="https://github.com/Gokulnath99" 
                fgColor='gray'
                bgColor='transparent'
            />
            <SocialIcon 
                url="https://github.com/Gokulnath99" 
                fgColor='gray'
                bgColor='transparent'
            />
        </motion.div>
        
        {/* hamberger menu */}
        <motion.div 
        initial={{
            x: 500,
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
        className='cursor-pointer md:hidden'>
            <button 
                onClick={() => setIsOpen(!isOpen)} 
                type='button'
                className='flex justify-center w-10 h-10 rounded-full 
                border-yellow-700 border hover:bg-[#F5B553]
                text-white'
                aria-controls='mobil-menu'
                aria-expanded='false'
                >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                    <svg
                        className="block h-10 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                ) : (
                    <svg
                        className="block h-10 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                )}
                </button>
        </motion.div>
    </header>
  )
}

export default Header