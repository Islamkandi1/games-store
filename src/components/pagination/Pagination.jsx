import React, { useState } from "react";
import { MdOutlineKeyboardDoubleArrowRight,MdOutlineKeyboardDoubleArrowLeft  } from "react-icons/md";
const Pagination = ({getPage}) => {
  const [currentPage, setCurrentPage] = useState(localStorage.page==null?1:localStorage.page);
  const handlePageClick = (page) => {
    getPage(event.target.innerHTML)
    setCurrentPage(page);
    localStorage.setItem("page",page)
  };


  return (
    <div className="flex flex-wrap items-center gap-2 text-lg mt-5 justify-center mb-5">
      <button
        className="px-2 py-1   cursor-pointer dark:border-light dark:text-light"
      >
        <MdOutlineKeyboardDoubleArrowLeft />
      </button>

      {[1, 2, 3, 4, 5,6,7,8,9,10].map((page) => (
        <button
          key={page}
          onClick={() => handlePageClick(page)}
          className={`px-3 py-1 rounded-[10px] border border-nav dark:border-light dark:text-light
            ${currentPage == page ? "bg-main transition-all duration-200 border-0   text-white" : "hover:bg-gray-200 cursor-pointer transition-all duration-300"}`}
        >
          {page}
        </button>
      ))}

      <button
        className="px-2 py-1 text-[1.4rem] cursor-pointer dark:border-light dark:text-light"
      >
        <MdOutlineKeyboardDoubleArrowRight />
      </button>
    </div>
  );
};

export default Pagination;
