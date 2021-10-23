import { useEffect } from "react";

export default function useLocoScroll(navOpen) {
  useEffect(() => {
    let locoScroll = null;
    async function getLocomotive() {
      const Locomotive = (await import("locomotive-scroll")).default;
      locoScroll = new Locomotive({
        el: document.querySelector("#main-container"),
        smooth: true,
        tablet: { smooth: true },
        smartphone: { smooth: true },
        multiplier: 3,
      });
      navOpen ? locoScroll.stop() : locoScroll.start();
    }
    getLocomotive();

    return () => locoScroll.destroy();
  }, [navOpen]);
}
