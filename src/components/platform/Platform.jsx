import React from "react";
import { RiComputerLine } from "react-icons/ri";
import { IoLogoPlaystation } from "react-icons/io";
import { FaXbox, FaLinux } from "react-icons/fa";
const Platform = ({ ele }) => {
  function platForms(name) {
    switch (name.toLowerCase()) {
      case "pc":
        return <RiComputerLine />;
      case "playstation":
        return <IoLogoPlaystation />;
      case "xbox":
        return <FaXbox />;
      case "linux":
        return <FaLinux />;
      default:
        return null;
    }
  }
  return (
    <>
      {ele?.parent_platforms.map((plat, idx) => {
        const icon = platForms(plat.platform.name);
        return icon ? (
          <span
            className="text-green-700 dark:text-light text-[1.1rem]"
            key={idx}
          >
            {icon}
          </span>
        ) : null;
      })}
    </>
  );
};

export default Platform;
