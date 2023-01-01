import React from 'react'
import companylogo from '../assets/zimetrics.jpg'
import { motion } from "framer-motion";


type Props = {}

function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px]
    snap-center bg-[#292929] p-10 hover:opacity-100 opacity-60 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2
        }}
        whileInView={{
          opacity: 1,
          y:0
        }}
        viewport={{
          once: true
        }}
      className='w-20 h-20 rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center' 
      src={companylogo.src}
      alt="company logo"/>

      <div className='px-2 md:px-10'>
        <h4 className='text-2xl font-light pl-5'>Data Engineer</h4>
        <p className='font-bold text-xl mt-1 pl-5'>ZiMetrics</p>
        <div className='flex space-x-2 my-2 pl-5'>
          <img className='h-8 w-8 rounded-full' src={companylogo.src} alt="" />
          <img className='h-8 w-8 rounded-full' src={companylogo.src} alt="" />
          <img className='h-8 w-8 rounded-full' src={companylogo.src} alt="" />
        </div>
        <p className='uppercase py-5 text-sm text-gray-300 pl-5'>started work... -Ended...</p>
        <ul className='list-disc space-y-4 ml-5 text-sm'>
          <li> summary pointssummary pointssummary pointssummary points</li>
          <li> summary pointssummary pointssummary pointssummary points</li>
          <li> summary pointssummary pointssummary pointssummary points</li>
          <li> summary pointssummary pointssummary pointssummary points</li>
          <li> summary pointssummary pointssummary pointssummary points</li>
        </ul>
      </div>
    </article>
  )
}

export default ExperienceCard