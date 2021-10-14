import Head from "next/head";
import Navbar from "../components/Navbar";
import Image from "next/image";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>TINO TAYLOR</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="fixed  minusIndex h-screen w-screen opacity-[22%] pointer-events-none">
        <Image
          src="/images/grain-overlay.jpg"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <Navbar />
      <Hero />
      {/* ABOUT */}
      {/* PROJECTS */}
      {/* CONTACT */}
      {/* FOOTER */}
    </div>
  );
}
