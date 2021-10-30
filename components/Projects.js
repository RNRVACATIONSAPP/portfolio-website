import PropTypes from "prop-types";
import Project from "./Project";

function Projects(props) {
  return (
    <section data-scroll-section className="section  ">
        <hgroup className="flex space-x-10 marqueeEffect w-screen">
          <h2 className="marqueeText ">
            SELECTED <span className="textOutlineBlack text-transparent">PROJECTS</span>
          </h2>
          <h2 className="marqueeText ">
            SELECTED <span className="textOutlineBlack text-transparent">PROJECTS</span>
          </h2>
          <h2 className="marqueeText">
            SELECTED <span className="textOutlineBlack text-transparent">PROJECTS</span>
          </h2>
          <h2 className="marqueeText ">
            SELECTED <span className="textOutlineBlack text-transparent">PROJECTS</span>
          </h2>
          <h2 className="marqueeText ">
            SELECTED <span className="textOutlineBlack text-transparent">PROJECTS</span>
          </h2>
          <h2 className="marqueeText">
            SELECTED <span className="textOutlineBlack text-transparent">PROJECTS</span>
          </h2>
          <h2 className="marqueeText ">
            SELECTED <span className="textOutlineBlack text-transparent">PROJECTS</span>
          </h2>
          <h2 className="marqueeText ">
            SELECTED <span className="textOutlineBlack text-transparent">PROJECTS</span>
          </h2>
          <h2 className="marqueeText">
            SELECTED <span className="textOutlineBlack text-transparent">PROJECTS</span>
          </h2>
        </hgroup>
      <div className="flex flex-col space-y-3 py-8 max-w-xl sm:max-w-2xl lg:max-w-6xl mx-auto">
       <Project title="EVA EIK" page="/" img="/images/KNSTNTIN.jpg"/>
       <Project title="KVALITET I ALT" page="/" img="/images/KNSTNTIN.jpg"/>
       <Project title="BORSCHT N TEARS" page="/" img="/images/KNSTNTIN.jpg"/>
      </div>
    </section>
  );
}

Projects.propTypes = {};

export default Projects;
