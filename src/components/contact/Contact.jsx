import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const Contact = () => {
  const [inputValue, setValue] = useState({
    userName: "",
    userEmail: "",
    message: "",
  });
  //   handle inputs value===================
  function handleValue() {
    let { value, id } = event.target;
    setValue({ ...inputValue, [id]: value });
  }
  const { userName, userEmail, message } = inputValue;
  // handle form==========================
  function handleForm() {
    event.preventDefault();
    if (userName != "" && userEmail != "" && message != "") {
      toast.success("message sended", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setValue({
        userName: "",
        userEmail: "",
        message: "",
      });
    } else {
      toast.error("❌ all inputs are required", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }
  useEffect(() => {
    document.title = "contact us";
  }, []);
  // ? jsx code ======================================
  return (
    <>
      <section className=" py-[7rem] lg:px-[4rem] mx-auto min-h-dvh flex justify-between items-center text-dark dark:text-light ">
        <section className="content px-3 mx-auto my-form w-full md:w-3/4  capitalize">
          <h2 className="mb-5 text-[2rem]">contact us</h2>
          <form onSubmit={handleForm}>
            <section className="input-box flex flex-col mb-4">
              <label htmlFor="userName" className="mb-3">
                userName :
              </label>
              <input
                value={userName}
                onChange={handleValue}
                type="text"
                name="user-name"
                id="userName"
                placeholder="userName"
                className="border-1 border-gray-400 px-2.5 py-2 outline-0 rounded-lg dark:bg-nav"
              />
            </section>
            <section className="input-box flex flex-col mb-4">
              <label htmlFor="userEmail" className="mb-3">
                userEmail :
              </label>
              <input
                value={userEmail}
                onChange={handleValue}
                type="text"
                name="user-Email"
                id="userEmail"
                placeholder="userEmail"
                className="border-1 border-gray-400 px-2.5 py-2 outline-0 rounded-lg dark:bg-nav"
              />
            </section>
            <section className="input-box flex flex-col mb-4">
              <label htmlFor="message" className="mb-3">
                message :
              </label>
              <textarea
                name="message"
                id="message"
                value={message}
                onChange={handleValue}
                placeholder="Message"
                className="border-1 border-gray-400 px-2.5 py-2  h-[120px] outline-0 rounded-lg dark:bg-nav mb-4"
              ></textarea>
            </section>
            <button
              type="submit"
              className=" btn  transition-all duration-400 active:scale-90"
            >
              send message
            </button>
          </form>
        </section>
        <ToastContainer />
      </section>
      {/* head tag meta============================================= */}
      <meta name="description" content={"contact us"} />
      <title>contact</title>
    </>
  );
};

export default Contact;
