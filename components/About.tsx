import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "../typings";
import { BiUser, BiPhone } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { urlFor } from "../sanity";

type Props = {
  pageInfo: PageInfo
};

const About = ({ pageInfo }: Props) => {
  const [_file, id, extension] = pageInfo.resume.asset._ref.split('-')
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
            src= {urlFor(pageInfo?.aboutPic).url()}
            alt="picture"
          />
        </motion.div>

        <motion.div className="about_right"
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p>{pageInfo.AboutPage}</p>
          <div className="bio">
            <span className='bioKey'><BiUser />Name</span>
            <span className='bioValue'>{pageInfo?.myName}</span>
          </div>
          <div className="bio">
            <span className='bioKey'><BiPhone />Phone</span>
            <span className='bioValue'>{pageInfo?.phoneNumber}</span>
          </div>
          <div className="bio">
            <span className='bioKey'><AiOutlineMail />Email</span>
            <span className='bioValue'>{pageInfo?.email}</span>
          </div>
          <motion.a href={`https://cdn.sanity.io/files/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${process.env.NEXT_PUBLIC_SANITY_DATASET}/${id}.${extension}?dl=${id}.${extension}`}
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
