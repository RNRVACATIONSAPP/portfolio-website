import PropTypes from "prop-types";
import Title from "./Title";
import ProjectImage from "./ProjectImage";
import { HashtagIcon } from "@heroicons/react/solid";
import { useReducer, useRef } from "react";

const initialState = {
  opacity: 0,
  parallaxPos: { x: 0, y: -20 },
};

function reducer(state, action) {
  switch (action.type) {
    case "CHANGE/OPACITY": {
      return {
        ...state,
        opacity: action.payload,
      };
    }

    case "MOUSE/COORDINATES": {
      return {
        ...state,
        parallaxPos: action.payload,
      };
    }

    default: {
      throw new Error();
    }
  }
}

function ProjectItem({ project, projectIndex }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const listItem = useRef(null);
  const parallax = (e) => {
    const speed = -5;
    const x = (window.innerWidth - e.pageX * speed) / 100;
    const y = (window.innerHeight - e.pageY * speed) / 100;
    dispatch({ type: "MOUSE/COORDINATES", payload: { x, y } });
  };
  const handleMouseEnter = () => {
    dispatch({ type: "CHANGE/OPACITY", payload: 1 });
    listItem.current.addEventListener("mousemove", parallax);
  };
  const handleMouseLeave = () => {
    dispatch({ type: "CHANGE/OPACITY", payload: 0 });
    listItem.current.removeEventListener("mousemove", parallax);
  };

  return (
    <li
      ref={listItem}
      className="project-item-container cursor-pointer leading-[1.25] py-[10px] list-none"
    >
      <Title
        title={project.title}
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
      />
      <ProjectImage url={project.url} opacity={state.opacity} parallaxPos={state.parallaxPos}/>

      <div className="fixed top-1/2 left-[70vw] text-left text-[20px] transform -translate-y-1/2 z-[1] info-block opacity-0">
        <p className="mb-[20px] overflow-hidden font-medium text-[24px] info-block-header">
          <span className="flex place-items-center ">
            <HashtagIcon className="w-6 mr-1" />0{projectIndex}
          </span>
        </p>

        {project.info.map((element) => (
          <p key={element} className="flex mb-[10px] overflow-hidden ">
            <span className="block transition-all duration-[.25s] ease-linear">
              {element}
            </span>
          </p>
        ))}
      </div>
    </li>
  );
}

ProjectItem.propTypes = {};

export default ProjectItem;
