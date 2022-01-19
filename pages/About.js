import Image from "next/image";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function About() {
  useEffect(() => {
    setTimeout(() => {
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

      ScrollTrigger.refresh();
    }, 400);
  }, []);
  return (
    <>
      <Navbar />
      <section
        data-scroll
        data-scroll-section
        className="py-[200px] .with-parallax bg-[#dad6cd]"
      >
        <article className="flex flex-col xs:flex-row">
          <div className="overflow-hidden w-full sm:w-[45%] ">
            <div className="relative transform ">
              <Image
                data-scroll
                data-scroll-speed="-2"
                src="/images/knstntin-outdoors.jpg"
                priority={true}
                width="801"
                height="887"
                objectFit="cover"
              />
            </div>
          </div>
          <aside className="flex w-[45%] -mt-5 pt-0 px-[4vw] section">
            <ul
              data-scroll
              data-scroll-speed="4"
              data-scroll-position="top"
              className="font-SchnyderL font-semibold  block"
            >
              <li className="relative font-GTWalsheim font-normal flex text-[15vw] flex-shrink-0 ">
                T
                <span data-scroll data-scroll-position="top" className="dot">
                  .
                </span>
              </li>
              <h2 className=" mb-12 text-[4.4vw] tracking-normal font-normal">
                a bit about myself
              </h2>
              <h2 className="font-GTWalsheim font-light tracking-normal  text-[2vw]">
                Just about
              </h2>
              <p className="mb-12 font-GTWalsheim font-normal  text-xs">
                WHAT I DO
              </p>
              <p className="mb-28 font-GTWalsheim font-normal text-left block text-sm w-[150px]">
                My experience, awards collaborations, and own vibes, <br /> for
                sure!
              </p>
              <h2 className="font-GTWalsheim font-light tracking-normal  text-[2vw]">
                So,
              </h2>
              <p className="font-GTWalsheim">
                So, I’m Zhenya — Art Director with an architectural background.
                I love everything that has to do with product & visual design,
                mobile & web projects as well as branding, typography, and
                animations. With my solid industry experience, I know how to
                help clients solve real business cases and grow their businesses
                by using design thinking.
              </p>
            </ul>
          </aside>
        </article>
      </section>
      <ContactSection brownBg={true} />
    </>
  );
}

export default About;
