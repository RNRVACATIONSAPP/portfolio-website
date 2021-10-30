import PropTypes from "prop-types";

function Title({ title, handleMouseEnter, handleMouseLeave }) {
  return (
    <div
      className="relative w-full title-item group filter transition-all duration-700 ease-linear hover:animate-pulse hover:blur-[2px]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="text-transparent textOutlineWhite text-[7.8vw] z-[1] leading-[1.1] menu-title ">
        {title}
      </h2>

      <h2 className="absolute bottom-0 left-[7px] pointer-events-none ease-in text-white textOutlineWhite text-[7.8vw] z-[1] leading-[1.1] menu-title-clone ">
        {title}
      </h2>
    </div>
  );
}

Title.propTypes = {};

export default Title;
