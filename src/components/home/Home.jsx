import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import axios from "./../../../node_modules/axios/lib/axios";
import PacmanLoader from "./../../../node_modules/react-spinners/esm/PacmanLoader";
import Card from './../card/Card';
const key = "e6e62cafa3ef481884a524b7b37485d9";
const Home = () => {
  const [api, setApi] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState("");
  //  get api====================
  async function getGames(signal) {
    try {
      const { data } = await axios.get(
        `https://api.rawg.io/api/games?key=${key}`,
        { signal }
      );
      const slice = data.results.slice(0, 9);
      setApi(slice);
    } catch (error) {
      if (error) {
        setError("some thing went wrong");
      }
    } finally {
      setLoader(true);
    }
  }
  // * handle useEffect==================================
  useEffect(() => {
    const controller = new AbortController();
    getGames(controller.signal);
    return () => {
      controller.abort(); // ! some thing wrong about it at strict mood 
    };
  }, []);
  // ? jsx code =====================================================
  return (
    <>
      <section className="container mx-auto  lg:px-[4rem] ">
        <section className="flex justify-center items-center pt-[7rem] ">
          <section
            className={`  text heading  w-full mb-6   py-[7rem] lg:w-[80%] text-center rounded-xl`}
          >
            <h1 className=" text-light text-4xl uppercase px-2 md:text-5xl max-w-[700px] mx-auto lg:text-6xl mb-[.7rem]">
              discover the best free games
            </h1>
            <p className="text-light  text-[1rem] max-w-[500px] mx-auto md:text-[1.3rem] md:max-w-[600px] lg:max-w-[700px] py-3 mb-[1.3rem]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
              voluptas.
            </p>
            <Link to="/games" className="capitalize btn">
              browser games
            </Link>
          </section>
        </section>
        <section className="some-games px-3">
          <h2 className="text-[1.7rem] capitalize text-emerald-600 font-medium  dark:text-light mb-5">
            featured game :
          </h2>
          {error != "" ? (
            <p
              className={`text-center bg-main rounded-2xl text-light capitalize w-full ${
                error != "" ? "p-3" : ""
              }`}
            >
              {error}
            </p>
          ) : (
            ""
          )}
          {loader == false ? (
            <p className="flex justify-center items-center">
              <PacmanLoader color="#30e767" />
            </p>
          ) : (
            <section className="grid gap-4  grid-cols-1 md:grid-cols-2   w-full   sm:grid-cols-2 lg:grid-cols-3 mb-[2.5rem]">
              {api.map((ele, idx) => {
                return <Card ele={ele} key={idx}/>
              })}
             
            </section>
          )}
          <Link
            to="/games"
            className=" w-fit btn mb-3 !mx-auto flex justify-center "
          >
            sea more
          </Link>
        </section>
      </section>
      {/* head tag===================================================================== */}
      <meta name="description" content={"mykd games website"} />
      <title>home</title>
    </>
  );
};

export default Home;
