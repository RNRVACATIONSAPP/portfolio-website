import { ChevronDownIcon } from "@heroicons/react/solid";
import { motion, useMotionValue, useTransform } from "framer-motion";
// import PropTypes from "prop-types";

function Hero(props) {
  // const x = useMotionValue(0);
  // const y = useMotionValue(0);
  // const rotateX = useTransform(y, [-100, 100], [30, -30]);
  // const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  {
    /* <motion.div
    style={{ x, y, rotateX, rotateY, z: 100 }}
    drag
    dragElastic={0.16}
    dragConstraints={{ top: 0, bottom: 0, right: 0, left: 0 }}
    whileTap={{ cursor: "grabbing" }}
    className="perspective-2000 relative "
  >
  </motion.div> */
  }

  return (
    <section className="section h-screen my-container ">
      <div className="relative flex flex-col w-full h-full">
        <div className="flex justify-center place-items-center w-full flex-1 relative">

          <img
            className=" heroImageDimensions relative left-[48%] xs:left-[9.5em] md:left-[15em] lg:left-[9.5em] shadow-2xl object-cove pointer-events-none"
            src="/images/KNSTNTIN.jpg"
            alt="Hero image"
          />
          <img
            className=" heroImageDimensions relative right-[48%] xs:right-[9.5em] md:right-[15em] lg:right-[9.5em] shadow-2xl object-cove pointer-events-none"
            src="/images/KNSTNTIN.jpg"
            alt="Hero image"
          />
          <img
            className="absolute heroImageDimensions shadow-xl object-cover cursor-pointer transition-all duration-700 ease-out hover:animate-pulse"
            src="/images/KNSTNTIN.jpg"
            alt="Hero image"
          />
          <h1 className="absolute ml-3 font-Bulgari text-center tracking-[.110em] leading-[130px] max-w-[790px] text-white mix-blend-difference text-[15vw]  md:text-[120px] lg:text-[140px] xl:text-[150px] pointer-events-none">
            CREATIVE DEVELOPER
          </h1>
        </div>

        <h2 className="hidden absolute uppercase left-2 top-1/2  text-[15px] font-bold tracking-[.100em] transform  origin-left -rotate-90 xs:block">
          LOVE FOR CREATING
        </h2>
        <h2 className="hidden absolute uppercase right-2 top-1/2 text-[15px] font-bold tracking-[.100em] transform origin-right rotate-90 xs:block">
          LOVE FOR CREATING
        </h2>

        <div className="relative bottom-0 flex justify-between place-items-center text-[15px] uppercase mb-10 mt-[86px] font-bold tracking-[.100em]">
          <h2>SCROLL MORE</h2>
          <ChevronDownIcon className="w-8 animate-bounce opacity-[14%] cursor-pointer" />
          <h2>LDN / NRW</h2>
        </div>
      </div>
    </section>
  );
}

// Hero.propTypes = {};

export default Hero;
