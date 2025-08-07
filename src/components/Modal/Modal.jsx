import React from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { FaStar } from "react-icons/fa6";
const Modal = ({ openModal, modalData, loader, modalError }) => {
  document.body.style.overflow = "hidden";
  return (
    <>
      <section className="parent z-50 fixed top-0 left-0 right-0 bottom-0 bg-dark/50 ">
        {loader && (
          <section className="fixed h-full top-0 bottom-[10px] left-0 right-0  bg-light dark:bg-bgDark mx-auto overflow-auto">
            <IoMdCloseCircle
              className="absolute top-[10px] right-[10px] text-[1.6rem] cursor-pointer z-30 text-light"
              onClick={() => {
                openModal(false);
              }}
            />
            {modalError != false ? (
              <p
                className={`text-center bg-main rounded-2xl text-light capitalize w-full 
            `}
              >
                {modalError}
              </p>
            ) : (
              ""
            )}
            <section className="grid grid-cols-1 ">
              <section>
                <figure className="  relative">
                  <img
                    src={modalData.background_image}
                    className=" h-[500px] w-full object-cover "
                    alt=""
                  />
                  <h2 className="capitalize text-light dark:text-light font-bold absolute bottom-5 left-5 text-[1.8rem]">
                    {modalData.name}
                  </h2>
                </figure>
                <section className="py-3 px-6">
                  <h3 className="text-[2rem] font-semibold text-dark dark:text-light mb-3">
                    {modalData.rating}
                  </h3>
                  <section className="flex gap-3 items-center mb-2">
                    <section className="flex items-center     gap-2">
                      <section className="flex gap-1 ">
                        {Array.from({ length: modalData.rating_top }).map(
                          (_, idx) => (
                            <FaStar key={idx} className="text-amber-300 " />
                          )
                        )}
                      </section>
                    </section>
                    <p className="capitalize text-lg  font-bold text-dark dark:text-light">
                      {" "}
                      {modalData.ratings_count} reviwers
                    </p>
                  </section>
                  <p className="text-dark dark:text-light capitalize">
                    released : <span>{modalData.released}</span>{" "}
                  </p>
                  <p className="py-4 capitalize text-justify leading-[25px] text-dark dark:text-light text-[1.1rem]">
                    {modalData.description_raw?.split(" ", 150).join(" ")}
                  </p>
                </section>
              </section>
            </section>
          </section>
        )}
      </section>
    </>
  );
};

export default Modal;
