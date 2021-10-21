import Head from "next/head";
import Navbar from "../components/Navbar";
import Image from "next/image";
import Hero from "../components/Hero";
import About from "../components/About";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>TINO TAYLOR</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
      </Head>
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
