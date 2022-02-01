import Head from "next/head";
import Navbar from "../components/Navbar";

import Hero from "../components/Hero";
import About from "../components/About";
import ProjectsSection from "../components/ProjectsSection";
import { useState } from "react";

import axios from "axios";
import ContactSection from "../components/ContactSection";

export default function Home({project}) {
  const [preloader, setPreloader] = useState(true);

  

  return (
    <div className="h-full">
      <Head>
        <title>TINO TAYLOR</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
      </Head>
      <Navbar />
      <Hero />
      <About />
      <ProjectsSection project={project} />
      <ContactSection brownBg={true}/>
    </div>
  );
}

export async function getStaticProps() {
  const project = await axios.get(
    `${process.env.NEXT_PUBLIC_HOSTNAME}/projects/`
  );

  return {
    props: {
      project: project.data,
    },
  };
}
