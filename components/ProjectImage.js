import PropTypes from "prop-types";
import Image from "next/image";

function ProjectImage({ url, opacity, parallaxPos, scale, rotationPosition }) {
  return (
    <div
      style={{
        opacity: opacity,
        transform: `translate3d(${parallaxPos.x}px, ${parallaxPos.y}px, 0px) rotate(${rotationPosition}deg) scale(${scale})`,
      }}
      className="fixed left-[45vw] top-[30vh] z-[1] pointer-events-none min-h-[200px] max-h-[50vw] max-w-[20vw] object-cover  "
    >
      <Image className="shadow-2xl" height="450" width="650" objectFit="cover" objectPosition="left" src={url} />
    </div>
  );
}

ProjectImage.propTypes = {};

export default ProjectImage;
