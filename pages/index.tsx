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
    <div className="bg-[rgb(36,36,36)] text-white h-screen overflow-x-hidden overflow-y-scroll z-0">
      <Head>
        <title>Gokul's Portfolio</title>
      </Head>

      {/* Header */}
      <Header />

      {/* Hero */}
      <section id="hero">
        <Hero />
      </section>

      {/* About */}
      <section id="about">
        <About />
      </section>

      {/* Experience */}
      <section id="SkillExp">
        <SkillExp />
      </section>

      {/* project */}
      <section id="project">
        <Projects />
      </section>
      
      {/* contact me */}
    </div>
  );
}
