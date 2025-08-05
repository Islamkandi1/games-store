import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <section className="flex justify-center items-center py-5 bg-emerald-800 dark:bg-nav">
        <section className="container mx-auto text-center lg:px-[4rem]">
          <section className="text">
            <ul className="flex  justify-center gap-8 mb-[1rem]">
              <li className="text-gray-300 text-2xl cursor-pointer">
                <FaFacebook />
              </li>
              <li className="text-gray-300 text-2xl cursor-pointer">
                <FaTwitter />
              </li>
              <li className="text-gray-300 text-2xl cursor-pointer">
                <FaInstagram />
              </li>
            </ul>
            <p className="text-gray-300 capitalize">
              @2025 free Games hub.all rights reseved
            </p>
          </section>
        </section>
      </section>
    </>
  );
};

export default Footer;
