import SmoothScrollbar, { ScrollbarPlugin } from "smooth-scrollbar";
import { Scrollbar } from "smooth-scrollbar/scrollbar";
import { useEffect } from "react";

const option = {
"damping": .2,
}

useEffect(() => {
  Scrollbar.init(document.querySelector("#my-scroll"), options);
}, [options]);
