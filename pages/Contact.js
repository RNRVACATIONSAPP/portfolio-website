import Navbar from "../components/Navbar";
import { useEffect } from "react";
import SplitText from "../utils/Split3.min";
import { gsap } from "gsap/dist/gsap";

function Contact() {
  useEffect(() => {
    const split = new SplitText("#split-text", {
      type: "lines",
      linesClass: "lineChildren",
    });

    const splitParent = new SplitText("#split-text", {
      type: "lines",
      linesClass: "lineParent",
    });

    gsap.to(split.lines, {
      duration: 1.5,
      y: 0,
      opacity: 1,
      stagger: 0.2,
      ease: "power2",
    });
  }, []);

  return (
    <>
      <Navbar />
      <section
        data-scroll
        data-scroll-section
        className="section flex flex-col justify-center h-screen w-screen bg-[#dad6cd]"
      >
        <h2 id="split-text" className="text-[8vw] tracking-normal leading-[1.1] font-bold text-left font-SchnyderL  w-full h-full flex flex-col justify-center place-items-center ">
          <span className="flex justify-between w-screen px-[6vw] py-[1vw]">
            Let’s make <i className="text-white">something</i> great!
          </span>
          <span className="flex justify-between w-screen items-baseline px-[6vw] py-[1vw] place-items-center">
            <a className="text-white" href="">
              hello@tinotaylor.com
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 132 89"
              className="max-w-[7vw]"
            >
              <path
                data-v-184d2f2e=""
                d="M85.085 84.167c15.984-15.935 27.434-27.033 34.34-33.285l2.572-2.329-3.465.036c-24.534.252-64.046.254-118.532.006v-5.576c54.509.194 94.026.192 118.556-.005l3.065-.024-2.133-2.208c-6.944-7.184-18.435-18.779-34.477-34.788L89.303 0 132 45.775 89.237 89l-4.152-4.833z"
              />
            </svg>
            <span className="italic">for</span>
          </span>
          <span className="flex justify-between w-screen items-baseline px-[6vw] py-[1vw] place-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 132 89"
              className="max-w-[7vw]"
            >
              <path
                data-v-184d2f2e=""
                d="M85.085 84.167c15.984-15.935 27.434-27.033 34.34-33.285l2.572-2.329-3.465.036c-24.534.252-64.046.254-118.532.006v-5.576c54.509.194 94.026.192 118.556-.005l3.065-.024-2.133-2.208c-6.944-7.184-18.435-18.779-34.477-34.788L89.303 0 132 45.775 89.237 89l-4.152-4.833z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 132 89"
              className="max-w-[7vw]"
            >
              <path
                data-v-184d2f2e=""
                d="M85.085 84.167c15.984-15.935 27.434-27.033 34.34-33.285l2.572-2.329-3.465.036c-24.534.252-64.046.254-118.532.006v-5.576c54.509.194 94.026.192 118.556-.005l3.065-.024-2.133-2.208c-6.944-7.184-18.435-18.779-34.477-34.788L89.303 0 132 45.775 89.237 89l-4.152-4.833z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 132 89"
              className="max-w-[7vw]"
            >
              <path
                data-v-184d2f2e=""
                d="M85.085 84.167c15.984-15.935 27.434-27.033 34.34-33.285l2.572-2.329-3.465.036c-24.534.252-64.046.254-118.532.006v-5.576c54.509.194 94.026.192 118.556-.005l3.065-.024-2.133-2.208c-6.944-7.184-18.435-18.779-34.477-34.788L89.303 0 132 45.775 89.237 89l-4.152-4.833z"
              />
            </svg>
            <div>Collaborations.</div>
          </span>
        </h2>
        <ul className="flex my-container space-x-32 font-SchnyderL text-lg">
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/konstantintaylor/"
            >
              Linked In
            </a>
          </li>
          <li>
            <a target="_blank" href="https://github.com/KONSTANTINDEV1">
              Github
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.instagram.com/iamtinotaylor/">
              Instagram
            </a>
          </li>
        </ul>
      </section>
    </>
  );
}

export default Contact;
