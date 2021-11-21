import PropTypes from "prop-types";
import ProjectItem from "./ProjectItem";
import axios from "axios";

function ProjectsSection({ project }) {
  return (
    <section data-scroll-section className="section  w-screen h-screen">
      <hgroup className="flex space-x-10 marqueeEffect ">
        <h2 className="marqueeText ">
          SELECTED{" "}
          <span className="textOutlineBlack text-transparent">PROJECTS</span>
        </h2>
        <h2 className="marqueeText ">
          SELECTED{" "}
          <span className="textOutlineBlack text-transparent">PROJECTS</span>
        </h2>
        <h2 className="marqueeText">
          SELECTED{" "}
          <span className="textOutlineBlack text-transparent">PROJECTS</span>
        </h2>
        <h2 className="marqueeText ">
          SELECTED{" "}
          <span className="textOutlineBlack text-transparent">PROJECTS</span>
        </h2>
        <h2 className="marqueeText ">
          SELECTED{" "}
          <span className="textOutlineBlack text-transparent">PROJECTS</span>
        </h2>
        <h2 className="marqueeText">
          SELECTED{" "}
          <span className="textOutlineBlack text-transparent">PROJECTS</span>
        </h2>
        <h2 className="marqueeText ">
          SELECTED{" "}
          <span className="textOutlineBlack text-transparent">PROJECTS</span>
        </h2>
        <h2 className="marqueeText ">
          SELECTED{" "}
          <span className="textOutlineBlack text-transparent">PROJECTS</span>
        </h2>
        <h2 className="marqueeText">
          SELECTED{" "}
          <span className="textOutlineBlack text-transparent">PROJECTS</span>
        </h2>
      </hgroup>
      <div className="flex flex-col w-full h-full pb-20">
        <div className="flex w-full h-full">
          <div className="block h-full bg-black w-1/2"></div>
          <div className="block h-full bg-blue-500 w-1/2"></div>
        </div>
        <div className="flex w-full h-full">
          <div className="block h-full bg-blue-500 w-1/2"></div>
          <div className="block h-full bg-black  w-1/2"></div>
        </div>
      </div>
    </section>
  );
}

ProjectsSection.propTypes = {};

export default ProjectsSection;
