import Head from "next/head";
import { Inter } from "@next/font/google";
import Hero from "../components/Hero";
import About from "../components/About";
import SkillExp from "../components/SkillExp";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import { Experience, PageInfo, Project, Skills, Socials } from "../typings";
import { GetStaticProps } from "next";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchSocials } from "../utils/fetchSocials";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchExperience } from "../utils/fetchExperience";
import { fetchProjects } from "../utils/fetchPojects";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  pageInfo: PageInfo;
  experience: Experience[];
  skills: Skills[];
  projects: Project[];
  socials: Socials[];
}

export default function Home({pageInfo, experience, skills, projects, socials }: Props) {
  return (
    <div className="text-white h-screen z-0">
      <Head>
        <title>Gokul's Portfolio</title>
      </Head>

      <Navbar socials={socials} />

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


export const getStaticProps: GetStaticProps<Props>  = async() => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const socials: Socials[] = await fetchSocials();
  const skills: Skills[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const experience: Experience[] = await fetchExperience();

  return {
    props: {
      pageInfo,
      socials,
      skills,
      projects,
      experience
    },

    revalidate: 10,
  }
}
