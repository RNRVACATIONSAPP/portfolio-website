import PropTypes from "prop-types";
import Link from "next/link";
function About(props) {
  return (
    <section
      data-scroll-section
      id="about"
      className="section z-[2] pt-[90px]  bg-[#f2f2f2] relative"
    >
      <article className="my-container">
        <div className="flex justify-between place-items-center flex-col lg:flex-row max-w-xl sm:max-w-2xl lg:max-w-6xl mx-auto">
          <div className="flex-1 w-full mb-[30px] lg:mb-0 lg:max-w-[40%]">
            <h2 className="uppercase">THE ABILITY TO CREATE</h2>
            <p className="pt-10">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta
              atque repellat amet nostrum magni aspernatur. Numquam nesciunt
              deleniti dignissimos perferendis facilis doloremque nulla.
              Doloribus, reiciendis asperiores? Iste labore doloremque
              voluptatem? Magnam magni, reiciendis quas error dolores nisi nemo
              deleniti.
            </p>
            <button
              name="button"
              className="relative uppercase mt-[40px] lg:mt-[70px] group"
            >
              <Link href="/">
                <a>LEARN MORE</a>
              </Link>
              <p className="navBtnUnderlineDesktop"></p>
            </button>
          </div>
          <aside className="flex relative mt-10  min-h-[700px] w-full lg:w-[50%] ">
            <img
              className="relative sm:absolute top-0 sm:-top-5 sm:right-10 lg:right-0 mx-auto max-w-[90%] object-contain sm:max-w-[60%] md:max-w-[55%] lg:max-w-[350px] lg:min-h-[450px] z-[4]"
              src="/images/fist-up.jpg"
            />
            <img
              className="hidden sm:block relative sm:absolute sm:-bottom-10 md:left-0 mx-auto w-[90%] object-contain sm:max-w-[50%] lg:max-w-[310px] z-[3]  "
              src="/images/clouds.jpg"
            />
          </aside>
        </div>
        <aside className="overflow-hidden">
          <span className=" xs:block absolute bg-black h-[340px] w-full sm:w-[72vw] lg:w-[43%] right-0 top-[68%] lg:top-[55%] transform -translate-y-1/2 "></span>
          <span className=" xs:block absolute bg-pink-900 mix-blend-overlay z-[7] h-[340px] w-full sm:w-[72vw] lg:w-[43%] right-0 top-[68%] lg:top-[55%] transform -translate-y-1/2 "></span>
        </aside>
      </article>
    </section>
  );
}

About.propTypes = {};

export default About;
