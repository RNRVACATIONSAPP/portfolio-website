import { useEffect } from "react";

export default function useLocoScroll(start) {
  if (typeof document !== "undefined") {
    useEffect(() => {
      if (!start) return;
      let scroll;
      import("locomotive-scroll").then((locomotiveModule) => {
        scroll = new locomotiveModule.default({
          el: document.querySelector("#main-container"),
          smooth: true,
          multiplier: 1,
        });
      });

      return () => scroll.destroy();
    }, [start]);
  }
}

