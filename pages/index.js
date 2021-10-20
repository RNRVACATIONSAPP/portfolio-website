import Head from "next/head";
import Navbar from "../components/Navbar";
import Image from "next/image";
import Hero from "../components/Hero";
import About from "../components/About";

export default function Home() {
  return (
    <div className="">
      <div className="fixed prevminusIndex z-10 h-screen w-screen opacity-[10%] pointer-events-none">
        <Image
          src="/images/grain-overlay.jpg"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <Navbar />
      <Hero />
      <About />
      {/* PROJECTS */}
      {/* CONTACT */}
      {/* FOOTER */}
    </div>
  );
}
