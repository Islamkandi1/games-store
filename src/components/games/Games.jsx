import React, { useEffect, useState } from "react";
import axios from "axios";
import { PacmanLoader } from "react-spinners";
import Card from "./../card/Card";
import Modal from "./../Modal/Modal";
import Mypagination from "../myPagination/Mypagination";
const key = "e6e62cafa3ef481884a524b7b37485d9";
const Games = () => {
  const [api, setApi] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [modalData, setModalData] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  // *open & close modal==============================
  function openModall(boolean) {
    setOpenModal(boolean);
    document.body.style.overflow = "auto";
  }

  // get next page==================================================
  function getPage(page) {
    setCurrentPage(page);
  }
  // get api
  async function getGames(signal) {
    try {
      setLoader(false);
      const { data } = await axios.get(
        `https://api.rawg.io/api/games?key=${key}&page=${currentPage}`,
        { signal }
      );
      setApi(data.results);
      setLoader(true);
    } catch (error) {
      if (axios.isCancel(error)) {
        setLoader(false); // ! if i put it at the finally there is a delay happened couse of th setLoader is Async so it woudnot wait to make it true
      } else {
        setError("some thing went wrong");
        setLoader(true); // ! if i put it at the finally there is a delay happened couse of th setLoader is Async so it woudnot wait to make it true
      }
    }
  }
  // get spacific game==============================================
  async function getGame(id) {
    const { data } = await axios.get(
      `https://api.rawg.io/api/games/${id}?key=${key}`
    );
    setModalData(data);
    setLoader(true);
  }
  // * handle useEffect==================================
  useEffect(() => {
    const controller = new AbortController();
    getGames(controller.signal);
    return () => {
      controller.abort(); //! the useeffect looks to unmount for a second so it is canceld thin make the request correct
    };
  }, [currentPage]);
  // ? jsx code ===================================================
  return (
    <>
      <section className=" min-h-dvh    px-3 container lg:px-[4rem] mx-auto pt-[7rem]">
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

        <div className="flex justify-center mb-4 ">
          <Mypagination currentPage={currentPage} getPage={getPage} />
        </div>
        {loader == false ? (
          <p className="flex justify-center h-dvh items-center ">
            <PacmanLoader color="#30e767" />
          </p>
        ) : (
          <section className="grid   gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-[2.5rem] justify-center">
            {api.map((ele, idx) => {
              return (
                <Card
                  getGame={getGame}
                  openModal={openModall}
                  key={idx}
                  ele={ele}
                  loader={loader}
                  setLoader={setLoader}
                ></Card>
              );
            })}
          </section>
        )}
        <div className="flex justify-center mb-4 ">
          <Mypagination currentPage={currentPage} getPage={getPage} />
        </div>
      </section>

      {openModal && <Modal modalData={modalData} openModal={openModall} />}
      {/* head tag meat============================================= */}
      <meta
        name="description"
        content={"discover new games withen free or not"}
      />
      <title>games</title>
    </>
  );
};

export default Games;
