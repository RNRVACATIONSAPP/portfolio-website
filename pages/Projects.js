import PropTypes from "prop-types";
import Navbar from "../components/Navbar";
import ProjectItem from "../components/ProjectItem";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";

function projects({ project }) {
  const menuItems = useRef(null);
  const [renderItems, setRenderItems] = useState(project);

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
    <section className="bg-[#dad6cd]">
      <div className="fixed prevminusIndex z-10 h-screen w-screen opacity-[25%] pointer-events-none">
        <Image
          src="/images/grain-overlay.jpg"
          layout="fill"
          priority
          objectFit="cover"
        />
      </div>
      <Navbar />
      <div
        ref={menuItems}
        className="section py-0 pl-[10vw] h-screen w-screen box-border overflow-auto my-container mx-auto"
      >
        {renderItems.map((project, index) => (
          <Link key={index} href={`/projects/${project.slug}`}>
            <a>
              <ProjectItem key={index} project={project} projectIndex={index} />
            </a>
          </Link>
        ))}
      </div>
    </section>
  );
}

projects.propTypes = {};

export default projects;

export async function getStaticProps(context) {
  const project = await axios.get(
    `${process.env.NEXT_PUBLIC_HOSTNAME}/projects/`
  );

  return {
    props: {
      project: project.data,
    },
  };
}
