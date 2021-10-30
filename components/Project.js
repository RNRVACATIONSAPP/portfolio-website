import PropTypes from "prop-types";
import Link from "next/link";
import Image from 'next/image';
function Project({ title, page,img }) {
  return (
    <div className="group border-b border-black border-opacity-[.4]">
      <Link href={page}>
        <h2 className="text-3xl xs:text-4xl lg:text-5xl uppercase py-5 text-transparent textOutlineBlack hover:text-black transition duration-300 ease-out cursor-pointer">
          {title}
        </h2>
      </Link>
        <Image src={img} width="250px" height="300px" objectFit="cover"/>
    </div>
  );
}

Project.propTypes = {};

export default Project;
