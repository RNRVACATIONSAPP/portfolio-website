import PropTypes from "prop-types";
import axios from "axios";
import Navbar from "../../components/Navbar";
import Image from "next/image";

import gsap from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import { useEffect } from "react";

export default function ProjectDetails({
  project,
  project: {
    title,
    siteUrl,
    tags,
    shortDescription,
    description,
    featureImage,
    projectAssets,
  },
}) {
  const projectTags = tags.split(" ");
  const splitTags = projectTags.join(" / ").toUpperCase();

  console.log(project);
  useEffect(() => {
    setTimeout(() => {
      gsap.to(".dot", {
        opacity: 0,
        scrollTrigger: {
          trigger: ".details",
          start: "bottom 100%",
          end: "+=58%",
          scrub: 1,
          scroller: ".scroll-container",
        },
      });
      gsap.to(".projectTitle", {
        autoAlpha: 0,
        y: 100,
        scrollTrigger: {
          trigger: ".details",
          start: "120% bottom",
          end: "+=58%",
          scrub: 1,
          scroller: ".scroll-container",
        },
      });
      gsap.to(".arrow", {
        autoAlpha: 0,
        scrollTrigger: {
          trigger: ".details",
          start: "120% bottom",
          end: "+=58%",
          scrub: 1,
          scroller: ".scroll-container",
        },
      });

      gsap.from(".description-image-container", {
        scale: 0.7,
        scaleZ: 1,
        duration: 3.3,
        ease: "Expo.easeOut",
        scrollTrigger: {
          trigger: ".projectDescription",
          start: "top bottom",
          toggleActions: "play none none reset",
          scroller: ".scroll-container",
        },
      });
      gsap.from(".description-image", {
        scale: 2,
        scaleZ: 1,
        duration: 3.3,
        ease: "Expo.easeOut",
        scrollTrigger: {
          trigger: ".projectDescription",
          start: "top bottom",
          toggleActions: "play none none reset",
          scroller: ".scroll-container",
        },
      });

      gsap.utils.toArray(".with-parallax").forEach((section) => {
        const image = section.querySelector("img");

        gsap.to(image, {
          yPercent: 30,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            scrub: true,
            // markers: true,
            scroller: ".scroll-container",
          },
        });
      });
      gsap.utils.toArray(".transform-container").forEach((container) => {
        const image = container.querySelector(".transform-image");

        gsap.from(container, {
          scale: 0.7,
          scaleZ: 1,
          duration: 3.3,
          ease: "Expo.easeOut",
          scrollTrigger: {
            trigger: container,
            start: "top bottom",
            toggleActions: "play none none none",
            scroller: ".scroll-container",
          },
        });
        gsap.from(image, {
          scale: 2,
          scaleZ: 1,
          duration: 3.3,
          ease: "Expo.easeOut",
          scrollTrigger: {
            trigger: container,
            start: "top bottom",
            toggleActions: "play none none none",
            scroller: ".scroll-container",
          },
        });
      });
      ScrollTrigger.refresh();
    }, 400);
  }, []);

  return (
    <>
      <div className="fixed z-[-1] h-screen w-screen opacity-[15%] pointer-events-none">
        <Image
          src="/images/grain-overlay.jpg"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <Navbar />

      <header
        data-scroll-section
        className="relative section my-container h-screen w-screen flex flex-col"
      >
        <h1 className="projectTitle pt-[22vh] font-SchnyderL font-semibold text-center tracking-[1.2rem] leading-[130px] text-[10vw] md:text-[8.8vw]">
          {title}
        </h1>
        <div className="details absolute bottom-[5vh] px-[6vw] right-0 left-0 flex  pt-[10vh] w-full justify-between ">
          <span
            data-scroll
            data-scroll-speed="-5"
            data-scroll-delay="0.06"
            data-scroll-position="top"
            className="w-1/2 arrow"
          >
            <svg
              data-v-184d2f2e=""
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 132 89"
              className="max-w-[11vw] rotate-90"
            >
              <path
                data-v-184d2f2e=""
                d="M85.085 84.167c15.984-15.935 27.434-27.033 34.34-33.285l2.572-2.329-3.465.036c-24.534.252-64.046.254-118.532.006v-5.576c54.509.194 94.026.192 118.556-.005l3.065-.024-2.133-2.208c-6.944-7.184-18.435-18.779-34.477-34.788L89.303 0 132 45.775 89.237 89l-4.152-4.833z"
              />
            </svg>
          </span>
          <div className="flex place-items-center w-1/2">
            <ul className="font-GTWalsheim leading-[0.68] font-light block">
              <li className="relative flex text-[15vw] md:text-[10.5vw] w-[15vw] flex-shrink-0 ">
                {title[0]}
                <span
                  data-scroll
                  data-scroll-speed="2"
                  data-scroll-position="top"
                  className="dot"
                >
                  .
                </span>
              </li>
            </ul>
            <div className="flex flex-col justify-between">
              <p className="font-GTWalsheim font-medium">{title}</p>
              <span className="text-xs pb-11">{splitTags}</span>
              <a href={siteUrl} className="underline mb-5 text-xl font-medium">
                Visit the site
              </a>
            </div>
          </div>
        </div>
      </header>
      <section
        data-scroll-section
        className="relative min-h-screen  flex flex-col z-30 w-full"
      >
        <div className="w-full flex justify-start items-start my-container pb-[6vw] ">
          <span className="w-1/2"></span>
          <p className="text-sm leading-[1.6] pl-[15vw] w-[50%]">
            {shortDescription}
          </p>
        </div>
        {featureImage && (
          <div className="w-full overflow-hidden with-parallax">
            <div className="relative w-full z-30 h-[900px] ">
              <Image
                layout="fill"
                objectFit="cover"
                priority
                className="transform scale-[1.3]  -translate-y-7 w-full h-full"
                src={`${featureImage.url}`}
                alt=""
              />
              <Image
                layout="fill"
                src="/images/shadow-kit.webp"
                className=" top-0 w-full z-30 h-full opacity-20"
              />
            </div>
          </div>
        )}
      </section>
      <section
        data-scroll-section
        className="relative section py-0 h-auto my-container"
      >
        <div className="relative transform-container transform overflow-hidden place-items-center bg-black max-w-[900px] h-auto lg:mx-auto my-[5%] ">
          {/* <img className="absolute z-20 h-full w-full opacity-[0.02]" src="/images/grain-anim.gif" alt="" /> */}
          {projectAssets[1] ? (
            <video
              autoPlay
              muted
              loop
              className="transform-image  w-full h-full"
              src={`${projectAssets[1].url}`}
            />
          ) : (
            <img
              className="transform-image  w-full h-full"
              src={`${projectAssets[0].url}`}
            />
          )}
        </div>
        {description && <p>{description}</p>}
        <div className="transform-container  transform overflow-hidden place-items-center bg-black relative max-w-[900px] h-auto lg:mx-auto my-[5%] ">
          <img
            className="transform-image  w-full h-full"
            src={`${projectAssets[0].url}`}
          />
        </div>
      </section>
      <section
        data-scroll-section
        className="relative min-h-screen flex flex-col z-30 w-full"
      >
        {featureImage && (
          <div className="w-full overflow-hidden with-parallax">
            <div className="flex flex-col justify-center relative w-full z-30 h-[900px] ">
              <Image
                layout="fill"
                objectFit="cover"
                priority
                className="transform scale-[1.3]  -translate-y-7 w-full h-full"
                src={`${featureImage.url}`}
                alt=""
              />
              <Image
                layout="fill"
                src="/images/shadow-kit.webp"
                className=" top-0 w-full z-30 h-full opacity-20"
              />
              <div className="transform-container mx-5 transform overflow-hidden place-items-center bg-black relative max-w-[900px] h-auto md:mx-auto my-[5%] ">
                <img
                  className="transform-image w-full h-full"
                  src={`${projectAssets[0].url}`}
                />
              </div>
            </div>
          </div>
        )}
      </section>
      <section data-scroll-section className="h-screen flex">
        <div className="relative h-full w-1/2 bg-[#dbd5c9]">
          <div className="transform-container mx-20 transform -translate-y-1/2 overflow-hidden place-items-center bg-black absolute top-[50%] max-w-[900px] h-auto my-[5%] ">
            <img
              className="transform-image w-full h-full"
              src={`${projectAssets[0].url}`}
            />
          </div>
        </div>
        <div className="block h-full w-1/2"></div>
      </section>
    </>
  );
}

export async function getServerSidePaths() {
  const data = await axios.get(`${process.env.NEXT_PUBLIC_HOSTNAME}/projects`);
  const projects = data.data;

  const paths = projects.map((project) => {
    return { params: { slug: project.slug } };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getServerSideProps(context) {
  const slug = context.params.slug;

  const project = await axios.get(
    `${process.env.NEXT_PUBLIC_HOSTNAME}/projects/` + slug
  );

  return {
    props: {
      project: project.data,
    },
  };
}