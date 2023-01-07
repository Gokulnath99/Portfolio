import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import profilePic from "../assets/profile.jpg";

type Props = {};

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: ["I am Gokul", "I like coffe! "],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        src={profilePic}
        alt="Picture of the author"
        className="relative rounded-full h-32 w-32 mx-auto"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-[#F5B553] pb-2 tracking-[15px]">
          Software Engineer
        </h2>
        <h1 className="text-2xl lg:text-4xl font-semibold px-10 pt-5">
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
