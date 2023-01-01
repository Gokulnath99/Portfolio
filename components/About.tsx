import React from "react";
import { motion } from "framer-motion";
import aboutpic from "../assets/about.jpg"

type Props = {};

function About({}: Props) {
  return (
    <motion.div 
    initial={{ opacity: 0}}
    whileInView={{ opacity: 1}}
    transition={{ duration: 1.5}}
    className="flex flex-col relative h-screen text-center md:text-left
              md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-[#F5B553] text-2xl">
        About
      </h3>
      <motion.img
        initial={{
            x: -200,
            opacity: 0
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
            x: 0,
            opacity: 1,
        }}
        viewport={{ once:true }}
        src= {aboutpic.src}
        alt="picture"
        className="-mb-20 mt-10 md:mb-0 flex-shrink-0 w-48 h-48 rounded-full object-cover
        md:rounded-lg md:w-64 md:h-64 xl:w-[300px] xl:h-[400px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold"> 
          Here is a <span className="underline decoration-[#B68D40]">little</span> background 
        </h4>
        <p className="text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo deserunt harum laborum magnam eos atque expedita, in maxime alias nesciunt soluta sit odit repellat dicta hic asperiores voluptatibus voluptatum adipisci?</p>
      </div>
    </motion.div>
  );
}

export default About;
