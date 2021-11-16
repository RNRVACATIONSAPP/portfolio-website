import PropTypes from "prop-types";
import { MenuAlt3Icon, XIcon } from "@heroicons/react/solid";
import { useState, useEffect } from "react";
import Link from "next/link";
import useLocoScroll from "../hooks/useLocoScroll";
function Navbar(props) {
  const [navOpen, setNavOpen] = useState(false);

  // CHECK IF NAV IS OPEN
  const isMenuOpen = () => {
    if (navOpen === false) {
      setNavOpen(true);
    } else {
      setNavOpen(false);
    }
  };

  useLocoScroll(navOpen);

  // STOP SCROLL WHEN NAV IS OPEN
  useEffect(() => {
    if (navOpen === true) {
      document.querySelector("body").style.overflow = "hidden !important";
    } else {
      document.querySelector("body").style.overflowY = "scroll";
    }
  }, [isMenuOpen]);
  return (
    <nav
      data-scroll-section
      className="absolute w-screen px-[30px] z-[10] pt-[43px]"
    >
      <div className="relative">
        <ul className="flex justify-between my-container mx-auto place-items-center">
          {/* LOGO */}
          <li className="relative flex flex-col group pointer-events-auto">
            <Link href="/">
              <a className="navBtn font-bold text-xl mb-[.5px]">T.TAYLOR</a>
            </Link>
            <p className="navBtnUnderlineDesktop"></p>
          </li>
          {/* Desktop Nav Links */}
          <ul className="hidden sm:flex justify-between space-x-4 z-[3]">
            <li className="flex flex-col group relative pointer-events-auto">
              <Link href="#about">
                <a className="navBtn">About</a>
              </Link>
              <p className="navBtnUnderlineDesktop"></p>
            </li>
            <li className="flex flex-col group relative pointer-events-auto">
              <Link href="/Projects">
                <a className="navBtn">Projects</a>
              </Link>
              <p className="navBtnUnderlineDesktop"></p>
            </li>
            <li className="flex flex-col group relative pointer-events-auto">
              <Link href="/Contact">
                <a className="navBtn">contact</a>
              </Link>
              <p className="navBtnUnderlineDesktop "></p>
            </li>
          </ul>
          {/* Mobile Menu Links Start */}
          <ul
            className={`${
              navOpen
                ? "h-screen w-screen px-[30px] py-[43px] pointer-events-auto"
                : "h-0 w-screen transform -translate-y-10 pointer-events-none"
            } fixed left-0 top-0 flex flex-col overflow-hidden transition-all duration-500 z-20 bg-black sm:hidden`}
          >
            <li className="relative flex-[20vw] ">
              <Link href="/">
                <a
                  className={`${
                    navOpen ? "navBtnMenuOpen" : "navBtnMenuClosed"
                  } tracking-normal text-white font-bold text-xl mb-[.5px] `}
                >
                  T.TAYLOR
                </a>
              </Link>
            </li>
            <ul className="flex flex-col flex-[80%] space-y-10">
              <li className="flex flex-col">
                <Link href="/About">
                  <a
                    className={`${
                      navOpen ? "" : "navBtnMenuClosed"
                    } navBtnMenuOpen textOutlineWhite`}
                  >
                    About
                  </a>
                </Link>
                <p className="navBtnUnderlineMobile"></p>
              </li>
              <li className="flex flex-col">
                <Link href="/Projects">
                  <a
                    className={`${
                      navOpen ? "" : "navBtnMenuClosed"
                    } navBtnMenuOpen textOutlineWhite`}
                  >
                    Projects
                  </a>
                </Link>
                <p className="navBtnUnderlineMobile"></p>
              </li>
              <li className="flex flex-col">
                <Link href="/Contact">
                  <a
                    className={`${
                      navOpen ? "" : "navBtnMenuClosed"
                    } navBtnMenuOpen textOutlineWhite`}
                  >
                    Contact
                  </a>
                </Link>
                <p className="navBtnUnderlineMobile"></p>
              </li>
            </ul>
            <aside className="flex flex-col opacity-80 text-white">
              <h2 className="text-sm font-bold uppercase">
                LDN — Front End Developer
              </h2>

              <ul className="flex pt-2 space-x-2  text-white">
                <li>
                  <a href="https://www.instagram.com/iamtinotaylor/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#fff"
                        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/konstantintaylor/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#fff"
                        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </aside>
          </ul>
          {/* Mobile Menu Links End */}
          {/* Mobile Menu Icons */}

          <XIcon
            onClick={isMenuOpen}
            className={`${
              navOpen
                ? "opacity-100 pointer-events-auto "
                : "opacity-0 animate-spin pointer-events-none"
            }  absolute z-20 inline-block right-0 bottom-[.01px] navBtn w-8 object-contain text-white transition-all duration-500 sm:hidden `}
          />
          <MenuAlt3Icon
            onClick={isMenuOpen}
            className={`${
              navOpen
                ? "opacity-0 animate-spin pointer-events-none"
                : "opacity-100 pointer-events-auto"
            }   absolute z-20 inline-block right-0 bottom-[.01px] navBtn w-8 object-contain transition-all duration-500 sm:hidden`}
          />
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
