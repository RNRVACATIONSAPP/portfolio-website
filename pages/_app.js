import "../styles/global.css";
import gsap from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";
import "locomotive-scroll/dist/locomotive-scroll.css";

gsap.registerPlugin(ScrollTrigger);

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    let locoScroll = null;
    (async () => {
      try {
        const LocomotiveScroll = (await import("locomotive-scroll")).default;
        const scrollContainer = document.querySelector(".scroll-container");
        locoScroll = new LocomotiveScroll({
          el: scrollContainer, //DEFINE THE SCROLL CONTAINER
          smooth: true,
          multiplier: 0.8, //CHANGE THE SPEED OF THE USERS SCROLL
          lerp: 0.06,
          getSpeed: true,
          getDirection: true,
          smartphone: {
            smooth: true,
          },
          tablet: {
            smooth: true,
          },
        });

        // UPDATE SCROLLTRIGGER WHEN LOCOMOTIVE SCROLL SCROLLS
        locoScroll.on("scroll", ScrollTrigger.update);

        // tell ScrollTrigger to use these proxy methods for the ".scroll-container" element since Locomotive Scroll is hijacking things
        ScrollTrigger.scrollerProxy(scrollContainer, {
          scrollTop(value) {
            return arguments.length
              ? locoScroll.scrollTo(value, 0, 0)
              : locoScroll.scroll.instance.scroll.y;
          },

          // GET THE SCROLL CONTAINERS SCROLL VALUES
          getBoundingClientRect() {
            return {
              top: 0,
              left: 0,
              width: window.innerWidth,
              height: window.innerHeight,
            };
          },

          // LocomotiveScroll handles things completely differently on mobile devices, so to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
          pinType: scrollContainer.style.transform ? "transform" : "fixed",
        });
      } catch (error) {
        throw Error(`[useLocoScroll]: ${error}`);
      }
    })();

    const lsUpdate = () => {
      if (locoScroll) {
        locoScroll.update();
      }
    };
    // ONCE WE HAVE THE SCROLL CONTAINER VALUES LETS REFRESH SCROLLTRIGGER AND TELL LOCOMOTIVE SCROLL THAT SCROLL TRIGGER IS UP TO DATE
    ScrollTrigger.addEventListener("refresh", lsUpdate);

    ScrollTrigger.refresh();

    return () => {
      // FOR GOOD PRACTICE WE NEED TO REMOVE OUR EVENT LISTENERS AND LOCOSCROLL WHEN THE COMPONENT UNMOUNTS

      locoScroll.destroy();

      setTimeout(() => {
        locoScroll.init();
        ScrollTrigger.refresh();
      }, 300);

      ScrollTrigger.removeEventListener("refresh", lsUpdate);
    };
  });

  return (
    <main data-scroll-container className="scroll-container">
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
