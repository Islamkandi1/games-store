import React, { useEffect, useState } from "react";
import { FaCircleArrowUp } from "react-icons/fa6";
const UpBtn = () => {
// * btn state opacity=============================
    const [opacity,setOpacity] = useState("opacity-0")
    // follow scroll==================================================
    useEffect(()=>{
        window.addEventListener("scroll",upBtn)
        return ()=>{
             window.removeEventListener("scroll",upBtn)
        }
    },[])
    // ? btn appear=============================
    function upBtn(){
        scrollY >= 120? setOpacity("opacity-100") : setOpacity("opacity-0")
    }
    // scroll to top===============================
    function scrollTop(){
      scrollTo({
        top:0,
        behavior:"smooth"
      })
    }
    // ? jsx code ============================================
  return (
    <>
      <button type="button" className={`fixed bottom-[10px] right-[10px] z-40 transition-all duration-500  rounded-3 ${opacity}`}
      onClick={scrollTop}>
        <FaCircleArrowUp className="text-nav dark:text-light text-[2rem] cursor-pointer" />
      </button>
    </>
  );
};

export default UpBtn;
