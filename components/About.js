import PropTypes from "prop-types";
import Image from "next/image";
import Link from "next/link";
function About(props) {
  return (
    <section id="about" className="section z-[2] pt-[90px] shadow-2xl bg-[#f2f2f2] relative">
      <div className="my-container">
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
            <button className="relative uppercase mt-[40px] lg:mt-[70px] group">
              <Link href="/">
                <a>LEARN MORE</a>
              </Link>
              <p className="navBtnUnderlineDesktop"></p>
            </button>
          </div>
          <div className="flex flex-col relative w-full min-h-[700px] lg:w-[50%] ">
            <img
              className="sm:absolute top-0 right-14 lg:-top-5 lg:right-0 mx-auto max-w-full sm:max-w-[320px] md:max-w-[350px] md:min-h-[450px] z-[4]"
              src="/images/fist-up.jpg"
            />
            <img
              className="hidden sm:block absolute -bottom-20 lg:-bottom-10 left-0 lg:left-0 mx-auto w-full sm:max-w-[280px] md:max-w-[310px] z-[3]  "
              src="/images/clouds.jpg"
            />
          </div>
        </div>
        <div className="overflow-hidden">
          <div className=" xs:block absolute bg-black h-[340px] w-full sm:w-[72vw] lg:w-[43%] right-0 top-[68%] lg:top-[55%] transform -translate-y-1/2 "></div>
          <div className=" xs:block absolute bg-pink-900 mix-blend-overlay z-[7] h-[340px] w-full sm:w-[72vw] lg:w-[43%] right-0 top-[68%] lg:top-[55%] transform -translate-y-1/2 "></div>
        </div>
      </div>
    </section>
  );
}

About.propTypes = {};

export default About;
