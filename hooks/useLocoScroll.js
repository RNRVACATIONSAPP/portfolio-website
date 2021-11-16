import { useEffect } from "react";
import "locomotive-scroll/dist/locomotive-scroll.css";
export default function useLocoScroll(navOpen) {
  useEffect(() => {
    // if (typeof window === "undefined") {
    //   return;
    // }
    let locoScroll = null;

    async function getLocomotive() {
      const Locomotive = (await import("locomotive-scroll")).default;
      locoScroll = new Locomotive({
        el: document.querySelector("body"),
        smooth: true,
        tablet: { smooth: true },
        smartphone: { smooth: true },
        multiplier: 1,
      });
      navOpen ? locoScroll.stop() : locoScroll.start();
    }
    getLocomotive();

    return () => locoScroll.destroy();
  }, [navOpen]);
}
