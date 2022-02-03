import { useEffect } from "react";
const { gsap } = require("gsap/dist/gsap");
const { ScrollTrigger } = require("gsap/dist/ScrollTrigger");

gsap.registerPlugin(ScrollTrigger);

function useParallax() {

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
}

export default useParallax;
