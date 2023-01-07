import Head from "next/head";
import { Inter } from "@next/font/google";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import SkillExp from "../components/SkillExp";
import Projects from "../components/Projects";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen md:snap-y md:snap-mandatory overflow-x-hidden overflow-y-scroll z-0">
      <Head>
        <title>Gokul's Portfolio</title>
      </Head>

      {/* Header */}
      <Header />

      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>

      {/* About */}
      <section id="about" className="snap-center">
        <About />
      </section>

      {/* Experience */}
      <section id="SkillExp" className="snap-center">
        <SkillExp />
      </section>

      {/* skills */}
      {/* <section id="skills" className="snap-center">
        <Skills />
      </section> */}

      {/* project */}
      <section id="project" className="snap-center">
        <Projects />
      </section>
      
      {/* contact me */}
    </div>
  );
}
