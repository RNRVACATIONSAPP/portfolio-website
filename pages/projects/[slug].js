import PropTypes from "prop-types";
import axios from "axios";
import Navbar from "../../components/Navbar";
export default function ProjectDetails({
  project,
  project: { title, shortDescription, description, featureImage },
}) {

  return (
    <>
      <Navbar />
      <section data-scroll-section className="section my-container">
        <header className="my-[10vw] ">
          <h1 className=" text-center tracking-[.110em] leading-[130px] text-[15vw]  md:text-[120px] lg:text-[140px] xl:text-[150px]">
            {title}
          </h1>
          <p>{shortDescription}</p>
        </header>
        {featureImage && <img className="" src={featureImage.url} alt="" />}
        {description && <p>{description}</p>}
      </section>
    </>
  );
}

ProjectDetails.propTypes = {};

export async function getServerSidePaths() {
  const data = await axios.get(`${process.env.NEXT_PUBLIC_HOSTNAME}/projects`);
  const projects = data.data;

  const paths = projects.map((project) => {
    return { params: { slug: project.slug } };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getServerSideProps(context) {
  const slug = context.params.slug;

  const project = await axios.get(
    `${process.env.NEXT_PUBLIC_HOSTNAME}/projects/` + slug
  );

  return {
    props: {
      project: project.data,
    },
  };
}
