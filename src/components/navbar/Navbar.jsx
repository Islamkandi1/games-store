import React, { useEffect, useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { MdDarkMode } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { CiLight } from "react-icons/ci";
const Navbar = ({mood,setMood}) => {
  const [navMobil, setNavMobile] = useState(false);
  const [changeNavHeight, setChangeNavHeight] = useState("py-5");
  // ? change navbar==================
  function changeNav() {
    if (navMobil == false) {
      setNavMobile(true);
    } else {
      setNavMobile(false);
    }
  }
  // change height of navbar========================================
  function changeHeight() {
    if (scrollY >= 100) {
      setChangeNavHeight("py-3");
    } else {
      setChangeNavHeight("py-5");
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", changeHeight);
    document.documentElement.classList.add(localStorage.theme);
    return () => {
      window.removeEventListener("scroll", changeHeight);
    };
  }, []);
  // mood effect==============================================
  useEffect(() => {
    if (localStorage.theme) {
      document.documentElement.classList.add(localStorage.theme);
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      if (prefersDark) {
        setMood("dark");
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        setMood("light");
        document.documentElement.classList.add("light");
        localStorage.setItem("theme", "light");
      }
    }
  }, []);
  // change mood=================================
  function changeMood() {
    if (mood == "light") {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
      setMood("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      setMood("light");
      localStorage.setItem("theme", "light");
    }
  }

  return (
    <>
      <nav
        className={` px-3 ${changeNavHeight} transition-all z-40 duration-500  bg-emerald-800    dark:bg-nav   fixed top-0 start-0 end-0`}
      >
        <div className="container mx-auto flex flex-wrap items-center justify-between lg:px-[4rem]">
          <a className="uppercase text-4xl text-light  dark:text-light  tracking-widest">
            mykd
          </a>
          <section className="flex  gap-5">
            {mood == "dark" ? (
              <MdDarkMode
                className=" text-light cursor-pointer text-[1.4rem] md:hidden"
                onClick={changeMood}
              />
            ) : (
              <CiLight
                onClick={changeMood}
                className=" text-light cursor-pointer text-[1.4rem] md:hidden"
              />
            )}
            <FaBarsStaggered
              className="text-light dark:text-light  text-2xl cursor-pointer md:hidden"
              onClick={() => changeNav()}
            />
          </section>
          <div
            className={`${
              navMobil ? "h-[230px]" : "h-0"
            } md:h-fit overflow-hidden transition-all w-full md:w-fit  `}
          >
            <section className="flex justify-center items-center gap-4">
              <ul className="flex text-center  flex-col p-4 md:p-0 mt-4  rounded-lg  md:flex-row md:space-x-8  md:mt-0 md:border-0  text-dark dark:text-light">
                <li>
                  <NavLink
                    to="/"
                    className="block px-3 py-2 capitalize  text-[1.2rem] lg:text-[1.2rem] lg:mx-1  text-light dark:text-light  rounded-xl   "
                    aria-current="page"
                    onClick={()=>setNavMobile(false)}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className="block px-3 py-2 capitalize  text-[1.2rem] lg:text-[1.2rem] lg:mx-1  text-light dark:text-light  rounded-xl   "
                    aria-current="page"
                    onClick={()=>setNavMobile(false)}
                  >
                    about
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/games"
                    className="block px-3 py-2 capitalize  text-[1.2rem] lg:text-[1.2rem] lg:mx-1   text-light dark:text-light  rounded-xl"
                    aria-current="page"
                    onClick={()=>setNavMobile(false)}
                  >
                    games
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className="block px-3 py-2 capitalize  text-[1.2rem] lg:text-[1.2rem] lg:mx-1   text-light dark:text-light  rounded-xl"
                    aria-current="page"
                    onClick={()=>setNavMobile(false)}
                  >
                    contact us
                  </NavLink>
                </li>
              </ul>
              {mood == "dark" ? (
                <MdDarkMode
                  className="hidden text-light cursor-pointer text-[1.4rem] md:block"
                  onClick={changeMood}
                />
              ) : (
                <CiLight
                  onClick={changeMood}
                  className="hidden text-light cursor-pointer text-[1.4rem] md:block"
                />
              )}
            </section>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
