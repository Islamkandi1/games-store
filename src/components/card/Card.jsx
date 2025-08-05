import React from "react";
import { FaStar } from "react-icons/fa6";

import Platform from "./../platform/Platform";
import Button from "./../button/Button";
import { PacmanLoader } from "react-spinners";
const Card = ({ ele, openModal, getGame }) => {
  function handleModal() {
    openModal(true);
    getGame(ele.id);
  }
  //? return suit icon=========================
  return (
    <>
      <div className=" flex flex-col justify-between  border border-gray-200 rounded-lg shadow-sm dark:bg-nav dark:border-gray-700">
        <img
          className="rounded-t-lg h-[200px] object-cover  w-full"
          src={ele.background_image}
        />
        <div className="p-5 ">
          <h5 className=" text-2xl font-bold tracking-tight   text-green-700  dark:text-light">
            {ele.name.split(" ", 5).join(" ")}
          </h5>
          <section className="flex items-center p-3 mb-3   gap-2">
            <section className="flex gap-1">
              {Array.from({ length: ele.rating_top }).map((_, idx) => (
                <FaStar key={idx} className="text-amber-300  " />
              ))}
            </section>
            <p className="text-nav dark:text-light font-medium">{ele.rating}</p>
          </section>
          <section className="flex justify-between items-center">
            <Button handleModal={handleModal} />
            <section className="flex items-center gap-3">
              <Platform ele={ele} />
            </section>
          </section>
        </div>
      </div>
    </>
  );
};

export default Card;
{
  /* <p key={idx}>{platform.platform.name}</p> */
}
