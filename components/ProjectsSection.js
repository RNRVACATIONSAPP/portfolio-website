import PropTypes from "prop-types";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import useParallax from "../hooks/useParallax";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

function ProjectsSection({ project }) {
  // ADD PARALLAX TO IMAGES
  useParallax();

  return (
    <section data-scroll-section className="w-screen min-h-screen bg-[#f2f2f2]">
      <hgroup className="flex py-20 pt-30 space-x-10 marqueeEffect">
        <h2 className="marqueeText ">
          SELECTED
          <span className="textOutlineBlack text-transparent">PROJECTS</span>
        </h2>
        <h2 className="marqueeText ">
          SELECTED
          <span className="textOutlineBlack text-transparent">PROJECTS</span>
        </h2>
        <h2 className="marqueeText">
          SELECTED
          <span className="textOutlineBlack text-transparent">PROJECTS</span>
        </h2>
        <h2 className="marqueeText ">
          SELECTED
          <span className="textOutlineBlack text-transparent">PROJECTS</span>
        </h2>
        <h2 className="marqueeText ">
          SELECTED
          <span className="textOutlineBlack text-transparent">PROJECTS</span>
        </h2>
        <h2 className="marqueeText">
          SELECTED
          <span className="textOutlineBlack text-transparent">PROJECTS</span>
        </h2>
        <h2 className="marqueeText ">
          SELECTED
          <span className="textOutlineBlack text-transparent">PROJECTS</span>
        </h2>
        <h2 className="marqueeText ">
          SELECTED
          <span className="textOutlineBlack text-transparent">PROJECTS</span>
        </h2>
        <h2 className="marqueeText">
          SELECTED
          <span className="textOutlineBlack text-transparent">PROJECTS</span>
        </h2>
      </hgroup>
      <div data-scroll className="flex flex-col w-full h-full ">
        {project &&
          project
            .filter((item) => [1, 6].includes(item.id))
            .map(function ({
              title,
              featureImage,
              id,
              siteUrl,
              tags,
              shortDescription,
            }) {
              const projectTags = tags.split(" ");
              const splitTags = projectTags.join(" / ").toUpperCase();
              return (
                <div
                  key={id}
                  className="relative flex last:text-white sm:last:text-black sm:last:bg-[#dad6cd] flex-col sm:flex-row justify-center first:bg-white place-items-center w-full h-full"
                >
                  <div
                    className={`flex flex-col justify-center ${
                      title === "Eva Eik"
                        ? "pt-[10vw]"
                        : "bg-[#f93700] sm:bg-[#dad6cd] text-white"
                    }  place-items-center with-parallax h-full w-full md:w-1/2 mx-auto  p-[5vw] sm:p-0 `}
                  >
                    <div className="relative flex justify-center w-full">
                      <div className="relative h-[70vh] xl:h-[75vh] w-[90%] xl:w-[65%] sm:w-[70%] overflow-hidden flex justify-center ">
                        <Image
                          className=" h-full w-full transform scale-[1.3] -translate-y-3"
                          layout="fill"
                          objectFit="cover"
                          src={featureImage.url}
                          alt=""
                        />
                      </div>
                      <p
                        className={`absolute -bottom-4 ${
                          title === "Eva Eik" ? "" : "text-white"
                        }  text-[7vw] leading-10 sm:text-[3.1vw] font-SchnyderL font-medium uppercase`}
                      >
                        {title}
                      </p>
                      <p className="absolute -bottom-16">{splitTags}</p>
                    </div>
                    <div className=" flex py-10 pt-20 sm:hidden flex-col justify-center place-items-center w-full sm:w-1/2">
                      <div className="flex justify-center place-items-center w-1/2">
                        <ul className=" font-GTWalsheim leading-[0.68] font-light block">
                          <li className="hidden sm:flex absolute  left-[45.5%] transform -translate-x-[45.5%]  text-[15vw] md:text-[10.5vw] w-[15vw] flex-shrink-0 ">
                            {title[0]}
                            <span className="dot">.</span>
                          </li>
                        </ul>
                        <div className="text-center relative sm:absolute sm:left-1/2 transform sm:translate-x-1/2 flex flex-col justify-between">
                          <p className="text-sm leading-[1.6] py-[30px] sm:p-0 sm:w-[40%]">
                            {shortDescription}
                          </p>
                          <a
                            href={siteUrl}
                            className=" font-GTWalsheim text-3xl underline mb-5 font-medium"
                          >
                            Visit the site
                            <span className=" font-extralight">+</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`hidden sm:flex flex-col justify-center ${
                      title === "Eva Eik"
                        ? "bg-[#f2f2f2]"
                        : "bg-[#f93700] text-white"
                    }  place-items-center h-screen w-full sm:w-1/2`}
                  >
                    <div className="flex justify-center place-items-center w-1/2 ">
                      <ul className="font-GTWalsheim leading-[0.68] font-light block">
                        <li className="hidden sm:flex text-black absolute left-[55%] transform -translate-x-[55%]  text-[15vw] md:text-[10.5vw] w-[15vw] flex-shrink-0 ">
                          {title[0]}
                          <span className="dot">.</span>
                        </li>
                      </ul>
                      <div className="relative sm:absolute sm:left-1/2 transform sm:translate-x-1/2 flex flex-col justify-between">
                        <p className=" font-SchnyderL font-medium uppercase text-3xl">
                          {title}
                        </p>
                        <span className="text-xs pb-11">{splitTags}</span>
                        <p className="text-sm leading-[1.6] sm:w-[40%]">
                          {shortDescription}
                        </p>
                        <span className="text-xs pb-11"></span>
                        <a
                          href={siteUrl}
                          target="_blank"
                          className=" font-GTWalsheim text-3xl underline mb-5 font-medium"
                        >
                          Visit the site
                          <span className="font-extralight">+</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
      </div>
      <div className="flex justify-center w-full py-[10vw] bg-[#dad6cd]">
        <Link href="/Projects">
          <a className="relative inline-block pb-5  text-center text-white text-4xl w-[65%] sm:w-auto sm:text-7xl font-normal before:p-[3px] before:w-full before:absolute before:bg-white before:bottom-0 before:right-0">
            ALL PROJECTS HERE
          </a>
        </Link>
      </div>
    </section>
  );
}

ProjectsSection.propTypes = {};

export default ProjectsSection;
