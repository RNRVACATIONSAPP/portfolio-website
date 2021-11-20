import PropTypes from "prop-types";
import Title from "./Title";
import ProjectImage from "./ProjectImage";
import { HashtagIcon } from "@heroicons/react/solid";
import { useEffect, useReducer, useRef } from "react";
import animate from "./animate";
import cn from "classnames";
import { gsap } from "gsap";

// REDUCER STATE
const initialState = {
  opacity: 0,
  parallaxPos: { x: 0, y: -20 },
  scale: 0.8,
  rotationPosition: 0,
  active: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "CHANGE/OPACITY": {
      return {
        ...state,
        opacity: action.payload,
      };
    }
    case "MOUSE/ENTER": {
      return {
        ...state,
        active: true,
      };
    }
    case "MOUSE/LEAVE": {
      return {
        ...state,
        active: false,
      };
    }

    case "MOUSE/COORDINATES": {
      return {
        ...state,
        parallaxPos: action.payload,
      };
    }
    case "CHANGE/SCALE": {
      return {
        ...state,
        scale: action.payload,
      };
    }
    case "CHANGE/ROTATION": {
      return {
        ...state,
        rotationPosition: action.payload,
      };
    }

    default: {
      throw new Error();
    }
  }
}

function ProjectItem({ project: { title, featureImage, tags }, projectIndex }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const listItem = useRef(null);
  const easeMethod = "easeInOutCubic";

  // IMAGE POSITION IN RELATION TO MOUSE
  const parallax = (e) => {
    const speed = -5;
    const x = (window.innerWidth - e.pageX * speed) / 100;
    const y = (window.innerHeight - e.pageY * speed) / 100;
    dispatch({ type: "MOUSE/COORDINATES", payload: { x, y } });
  };

  // REDUCER DISPATCH FOR IMAGE OPACITY CONTROL BASED ON MOUSE EVENTS
  const handleOpacity = (initialOpacity, newOpacity, duration) => {
    animate({
      fromValue: initialOpacity,
      toValue: newOpacity,
      onUpdate: (newOpacity, callback) => {
        dispatch({ type: "CHANGE/OPACITY", payload: newOpacity });
        callback();
      },
      onComplete: () => {},
      duration: duration,
      easeMethod: easeMethod,
    });
  };

  // REDUCER DISPATCH FOR IMAGE SCALING CONTROL BASED ON MOUSE EVENTS
  const handleScale = (initialScale, newScale, duration) => {
    animate({
      fromValue: initialScale,
      toValue: newScale,
      onUpdate: (newScale, callback) => {
        dispatch({ type: "CHANGE/SCALE", payload: newScale });
        callback();
      },
      onComplete: () => {},
      duration: duration,
      easeMethod: easeMethod,
    });
  };

  // REDUCER DISPATCH FOR IMAGE ROTATION CONTROL BASED ON MOUSE EVENTS
  const handleRotation = (currentRotation, duration) => {
    // RANDOM NUMBER BETWEEN 15 & -15
    const newRotation =
      Math.random() * 15 * (Math.round(Math.random()) ? 1 : -1);
    animate({
      fromValue: currentRotation,
      toValue: newRotation,
      onUpdate: (newRotation, callback) => {
        dispatch({ type: "CHANGE/ROTATION", payload: newRotation });
        callback();
      },
      onComplete: () => {},
      duration: duration,
      easeMethod: easeMethod,
    });
  };

  const handleMouseEnter = () => {
    handleScale(0.8, 1, 500);
    handleOpacity(0, 1, 900);
    handleRotation(state.rotationPosition, 500);

    dispatch({ type: "MOUSE/ENTER" });
    listItem.current.addEventListener("mousemove", parallax);
  };

  const handleMouseLeave = () => {
    handleScale(1, 0, 800);
    handleOpacity(1, 0, 700);
    handleRotation(state.rotationPosition, 500);

    dispatch({ type: "MOUSE/LEAVE" });
    dispatch({ type: "MOUSE/COORDINATES", payload: initialState.parallaxPos });
    listItem.current.removeEventListener("mousemove", parallax);
  };


  const projectTags = tags.split(" ");

  return (
    <li
      ref={listItem}
      className="tag-container group project-item-container cursor-pointer leading-[1.25] py-[20px] list-none"
    >
      <Title
        title={title}
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
      />
      <ProjectImage
        url={`${featureImage.url}`}
        opacity={state.opacity}
        parallaxPos={state.parallaxPos}
        scale={state.scale}
        rotationPosition={state.rotationPosition}
      />

      <div
        className={cn(
          "fixed top-1/2 left-[70vw] text-left text-[20px]  transform -translate-y-1/2 z-[1] info-block",
          { "as-active": state.active }
        )}
      >
        <p className="opacity-0 duration-300 group-hover:opacity-100 mb-[10px] overflow-hidden font-medium text-[24px] info-block-header">
          <span className="flex place-items-center"># 0{projectIndex + 1}</span>
        </p>

        {projectTags.map((tag) => (
          <p
            key={tag}
            className="tags duration-300 opacity-0 group-hover:opacity-100 flex mb-[10px] overflow-hidden "
          >
            <span className="block transition-all duration-[.25s] ease-linear">
              {tag}
            </span>
          </p>
        ))}
      </div>
    </li>
  );
}

ProjectItem.propTypes = {};

export default ProjectItem;
