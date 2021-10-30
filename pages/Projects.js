import PropTypes from "prop-types";
import Navbar from "../components/Navbar";
import ProjectItem from "../components/ProjectItem";
import { useRef, useState, useEffect } from "react";

const pageData = [
  {
    url: "/images/knstntin-coding.jpg",
    title: "KVALITET I ALT",
    info: ["Translation", "Consulting", "Building Plans"],
  },
  {
    url: "/images/KNSTNTIN.jpg",
    title: "EVA EIK",
    info: ["Healer", "Singer", "Songwriter"],
  },
  {
    url: "/images/knstntin-outdoors.jpg",
    title: "BORSCHT N TEARS",
    info: ["Russian", "Restaurant", "Food", "Music"],
  },
  {
    url: "/images/KNSTNTIN.jpg",
    title: "AIR BNB CLONE",
    info: ["Healer", "Singer", "Songwriter"],
  },
  {
    url: "/images/knstntin-coding.jpg",
    title: "INSTAGRAM CLONE",
    info: ["Translation", "Consulting", "Building Plans"],
  },
  {
    url: "/images/knstntin-outdoors.jpg",
    title: "NETFLIX CLONE",
    info: ["Russian", "Restaurant", "Food", "Music"],
  },
];

function projects(props) {
  const menuItems = useRef(null);
  const [renderItems, setRenderItems] = useState(pageData);

  const cloneItems = () => {
    const itemHeight = menuItems.current.childNodes[0].offsetHeight;
    const fitMax = Math.ceil(window.innerHeight / itemHeight);
    const clonedItems = [...renderItems]
      .filter((_, index) => index < fitMax)
      .map((target) => target);

    setRenderItems([...renderItems, ...clonedItems]);

    return clonedItems.length * itemHeight;
  };

  const getScrollPos = () => {
    return (
      (menuItems.current.pageYOffset || menuItems.current.scrollTop) -
      (menuItems.current.clientTop || 0)
    );
  };

  const setScrollPos = (pos) => {
    menuItems.current.scrollTop = pos;
  };

  const initScroll = () => {
    const scrollPos = getScrollPos();
    if (scrollPos <= 0) {
      setScrollPos(1);
    }
  };

  const scrollUpdate = () => {
    const clonesHeight = cloneItems();
    const scrollPos = getScrollPos();
    if (clonesHeight + scrollPos >= menuItems.current.scrollHeight) {
      setScrollPos(1);
    } else if (scrollPos <= 0) {
      setScrollPos(menuItems.current.scrollHeight - clonesHeight);
    }
  };
  useEffect(() => {
    const ref = menuItems.current;
    ref.style.scrollBehavior = "unset";
    initScroll();

    ref.addEventListener("scroll", scrollUpdate);
    return () => ref.removeEventListener("scroll", scrollUpdate);
  }, [scrollUpdate]);

  return (
    <section className="">
      <Navbar />
      <div
        ref={menuItems}
        className="section py-0 pl-[10vw]  h-screen w-screen box-border overflow-auto my-container  mx-auto"
      >
        {renderItems.map((project, index) => (
          <ProjectItem key={index} project={project} projectIndex={index} />
        ))}
      </div>
    </section>
  );
}

projects.propTypes = {};

export default projects;
