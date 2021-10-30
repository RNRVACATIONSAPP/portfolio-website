import PropTypes from "prop-types";

function Title({ title, handleMouseEnter, handleMouseLeave }) {
  return (
    <div
      className="relative title-item group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="text-transparent textOutlineBlack text-[7.5vw] z-[1] leading-[1.1] menu-title ">
        {title}
      </h2>
      <div className="absolute bottom-0 left-[7px] overflow-hidden transition-all duration-500 group-hover:left-0 ">
        <h2 className="text-black textOutlineBlack w-full text-[7.5vw] z-[1] leading-[1.1] menu-title ">
          {title}
        </h2>
      </div>
    </div>
  );
}

Title.propTypes = {};

export default Title;
