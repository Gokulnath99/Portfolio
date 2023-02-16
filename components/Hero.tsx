import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  pageInfo: PageInfo
};


const Hero = (pageInfo: Props) => {
  const [text, count] = useTypewriter({
    words: ["I am Gokul", "I like coffe! "],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        src={urlFor(pageInfo.pageInfo.profilePicture).url()}
        alt="Picture of the author"
        className="relative rounded-full h-44 w-44 mx-auto mb-8"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-[#F5B553] pb-2 tracking-[15px] mb-8">
          Software Engineer
        </h2>
        <h1 className="text-2xl lg:text-4xl font-semibold px-10 pt-5 mb-8">
          <span className="mr-1">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
      </div>
      <div>
        Say Hi! 👋👋
      </div>
    </div>
  );
};

export default Hero;
