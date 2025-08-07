import React from "react";

const Button = ({handleModal}) => {
  return (
    <>
      <button
        onClick={() => {
          handleModal();
        }}
        type="button"
        className="cursor-pointer relatve bottom-[20px] capitalize text-[1.1rem]  flex items-center px-3 py-2 text-sm font-medium text-center text-light bg-main rounded-lg hover:bg-green-300 transition-all duration-300  "
      >
        see more
        <svg
          className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </button>
    </>
  );
};

export default Button;
