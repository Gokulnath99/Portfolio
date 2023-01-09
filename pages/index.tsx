import Head from "next/head";
import { Inter } from "@next/font/google";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import SkillExp from "../components/SkillExp";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="text-white h-screen z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f5b453cd]">
      <Head>
        <title>Gokul's Portfolio</title>
      </Head>

      <Navbar />

      {/* Hero */}
      <section id="home">
        <Hero />
      </section>

      {/* About */}
      <section id="about">
        <About />
      </section>

      {/* Experience */}
      <section id="skills">
        <SkillExp />
      </section>

      {/* project */}
      <section id="portfolio">
        <Projects />
      </section>
      
      {/* contact me */}
      <section id="project">
        <Contact />
      </section>

      <Footer />
    </div>
  );
}
