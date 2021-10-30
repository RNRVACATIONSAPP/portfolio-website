import PropTypes from "prop-types";
import Image from "next/image";

function ProjectImage({ url, opacity, parallaxPos }) {
  return (
    <img
      src={url}
      className="fixed left-[45vw] top-[30vh] z[1] pointer-events-none min-h-[200px] max-h-[50vw] max-w-[20vw] object-cover transition-transform duration-300 ease-linear "
      style={{
        opacity: opacity,
        transform: `translate3d(${parallaxPos.x}px, ${parallaxPos.y}px, 0px)`,
      }}
    />
  );
}

ProjectImage.propTypes = {};

export default ProjectImage;
