import Image from "next/image";
import Navbar from "../components/Navbar";
import AboutContact from "../components/AboutContact";
import useParallax from "../hooks/useParallax";

function About() {
  // ADD PARALLAX TO IMAGES
  useParallax();

  return (
    <>
      <Navbar />
      <section
        data-scroll
        data-scroll-section
        className=" py-[100px] sm:pt-[200px] .with-parallax bg-[#dad6cd]"
      >
        <article
          className=" flex flex-col sm:flex-row"
        >
          <div
            data-scroll
            data-scroll-speed="-2"
            className="overflow-hidden pr-[8vw] sm:pr-0 w-full sm:w-[45%] "
          >
            <div className="relative transform ">
              <Image
                data-scroll
                data-scroll-speed="-2"
                src="/images/knstntin-outdoors.jpg"
                priority={true}
                width="801"
                height="887"
                objectFit="cover"
              />
            </div>
          </div>
          <aside className="flex w-full sm:w-[45%] -mt-5 pt-0 sm:px-[4vw] section">
            <ul
              data-scroll
              className="font-SchnyderL font-semibold  block relative"
            >
              <aside className="inline-flex sm:flex-col">
                <li className="relative font-GTWalsheim font-normal flex text-[10rem]  sm:text-[15vw] flex-shrink-0 ">
                  T
                  <span data-scroll data-scroll-position="top" className="dot">
                    .
                  </span>
                </li>
                <h2 className="inline-block mb-12 text-left text-4xl ml-auto mt-auto w-[45%] sm:w-full  sm:mt-0 sm:text-[4.4vw] tracking-normal font-normal">
                  a bit about myself
                </h2>
              </aside>

              <h2 className="font-GTWalsheim font-light tracking-normal text-2xl  sm:text-[2vw]">
                Just about
              </h2>
              <p className=" font-GTWalsheim font-normal  text-xs">WHAT I DO</p>
              <p className="pt-[4vw] font-GTWalsheim leading-6 font-normal text-left block text-sm w-[150px]">
                My experience, awards collaborations, and own vibes, <br /> for
                sure!
              </p>
              <h2 className="font-GTWalsheim font-light tracking-normal mt-[4vw] text-[22px]  sm:text-[2vw]">
                So,
              </h2>
              <p className="font-GTWalsheim">
                I’m Konstantin, also known as Tino — Front End Developer with a
                creative background. I love everything that has to do with
                visual design for both mobile & web projects as well as,
                typography, and animations. With my solid industry experience, I
                know how to help clients solve real business cases and grow
                their businesses by using design thinking.
              </p>
              <h2 className="pt-[8vw] pb-[14vw] sm:py-[4vw] text-[35px] lg:text-[4vw] tracking-normal font-normal">
                Technologies that I use
              </h2>
              <hgroup className="flex flex-col space-y-5">
                <h2 className="font-GTWalsheim font-light tracking-normal text-[4.1vw] sm:text-[3vw] lg:text-[2vw]">
                  Next Js
                </h2>
                <h2 className="font-GTWalsheim font-light tracking-normal text-[4.1vw] sm:text-[3vw] lg:text-[2vw]">
                  Firebase V9
                </h2>
                <h2 className="font-GTWalsheim font-light tracking-normal text-[4.1vw] sm:text-[3vw] lg:text-[2vw]">
                  Tailwind CSS
                </h2>
                <h2 className="font-GTWalsheim font-light tracking-normal text-[4.1vw] sm:text-[3vw] lg:text-[2vw]">
                  Stripe Checkout
                </h2>
                <h2 className="font-GTWalsheim font-light tracking-normal text-[4.1vw] sm:text-[3vw] lg:text-[2vw]">
                  Headless CMS
                </h2>
                <h2 className="font-GTWalsheim font-light tracking-normal text-[4.1vw] sm:text-[3vw] lg:text-[2vw]">
                  Redux
                </h2>
              </hgroup>
              <div className="mt-20 space-y-32 flex flex-col">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 132 89"
                  className=" max-w-[7vw] rotate-90 "
                >
                  <path
                    data-v-184d2f2e=""
                    d="M85.085 84.167c15.984-15.935 27.434-27.033 34.34-33.285l2.572-2.329-3.465.036c-24.534.252-64.046.254-118.532.006v-5.576c54.509.194 94.026.192 118.556-.005l3.065-.024-2.133-2.208c-6.944-7.184-18.435-18.779-34.477-34.788L89.303 0 132 45.775 89.237 89l-4.152-4.833z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 132 89"
                  className=" max-w-[7vw] rotate-90 "
                >
                  <path
                    data-v-184d2f2e=""
                    d="M85.085 84.167c15.984-15.935 27.434-27.033 34.34-33.285l2.572-2.329-3.465.036c-24.534.252-64.046.254-118.532.006v-5.576c54.509.194 94.026.192 118.556-.005l3.065-.024-2.133-2.208c-6.944-7.184-18.435-18.779-34.477-34.788L89.303 0 132 45.775 89.237 89l-4.152-4.833z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 132 89"
                  className=" max-w-[7vw] rotate-90 "
                >
                  <path
                    data-v-184d2f2e=""
                    d="M85.085 84.167c15.984-15.935 27.434-27.033 34.34-33.285l2.572-2.329-3.465.036c-24.534.252-64.046.254-118.532.006v-5.576c54.509.194 94.026.192 118.556-.005l3.065-.024-2.133-2.208c-6.944-7.184-18.435-18.779-34.477-34.788L89.303 0 132 45.775 89.237 89l-4.152-4.833z"
                  />
                </svg>
              </div>
            </ul>
          </aside>
        </article>
      </section>
      <AboutContact />
    </>
  );
}

export default About;
