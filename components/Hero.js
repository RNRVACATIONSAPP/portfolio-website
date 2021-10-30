import { ChevronDownIcon } from "@heroicons/react/solid";
import SplitText from "../utils/Split3.min";
import { gsap } from "gsap/dist/gsap";
import { useEffect } from "react";

function Hero(props) {
  useEffect(() => {
    const split = new SplitText("#header-text", {
      type: "lines",
      linesClass: "lineChildren",
    });

    const splitParent = new SplitText("#header-text", {
      type: "lines",
      linesClass: "lineParent",
    });

    gsap.to(split.lines, {
      duration: 1.5,
      y: 0,
      opacity: 1,
      stagger: 0.2,
      ease: "power2",
    });
  }, []);

  return (
    <header data-scroll-section className="relative h-screen">
      <article className="z-[2] section pt-[120px] top-0 left-0  h-full w-full bg-[#dad6cd]">
        <div className="h-full relative">
          <div className="my-container h-full relative flex flex-col ">
            <div
              data-scroll
              data-scroll-speed="2"
              className="flex justify-center place-items-center w-full  flex-1 relative bg-[#dad6cd]"
            >
              <img
                className=" heroImageDimensions relative left-[48%] xs:left-[9.5em] md:left-[15em] lg:left-[9.5em] shadow-2xl object-cove pointer-events-none"
                src="/images/KNSTNTIN.jpg"
                alt="Hero image"
              />
              <img
                className="heroImageDimensions relative right-[48%] xs:right-[9.5em] md:right-[15em] lg:right-[9.5em] shadow-2xl object-cove pointer-events-none"
                src="/images/KNSTNTIN.jpg"
                alt="Hero image"
              />
              <img
                className="absolute heroImageDimensions shadow-xl object-cover cursor-pointer transition-all duration-700 ease-out hover:animate-pulse"
                src="/images/KNSTNTIN.jpg"
                alt="Hero image"
              />
              <h1
                id="header-text"
                className="flex flex-col absolute ml-3 font-Bulgari text-center tracking-[.110em] leading-[130px] max-w-[790px] text-white mix-blend-difference text-[15vw]  md:text-[120px] lg:text-[140px] xl:text-[150px] pointer-events-none"
              >
                CREATIVE DEVELOPER
              </h1>
            </div>
            <aside data-scroll>
              <h3 className="hidden absolute uppercase left-2 top-1/2 translate-y-1/2 text-[15px] font-bold tracking-[.100em] transform  origin-left -rotate-90 xs:block">
                LOVE FOR CREATING
              </h3>
              <h3 className="hidden absolute uppercase right-2 top-1/2 translate-y-1/2  text-[15px] font-bold tracking-[.100em] transform origin-right rotate-90 xs:block">
                LOVE FOR CREATING
              </h3>
            </aside>

            <aside
              data-scroll
              data-scroll-speed="-1"
              className="relative z-[1] -bottom-14 flex justify-between place-items-center text-[15px] uppercase  mt-[86px] font-bold tracking-[.100em]"
            >
              <h3>SCROLL DOWN</h3>
              <a href="#about">
                <ChevronDownIcon className="w-8 animate-bounce opacity-[14%] cursor-pointer" />
              </a>
              <h3>LDN / NRW</h3>
            </aside>
          </div>
        </div>
      </article>
    </header>
  );
}

// Hero.propTypes = {};

export default Hero;
