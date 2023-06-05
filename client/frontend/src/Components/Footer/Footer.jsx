import { useState } from "react";
import { Link } from "react-router-dom";
import InstagramIcon from "../../assets/icons/Icon-InstagramLogo.png";
import FacebookIcon from "../../assets/icons/Icon-FacebookLogo.png";
import TwitterIcon from "../../assets/icons/Icon-TwitterLogo.png";
import ArrowIcon from "../../assets/Icon-ArrowUp.png";

export default function Footer() {
  return (
    <div>
      <div className="Footer-container flex justify-center flex-col pt-60">
        <div className="p-5 w-full mt-8 border border-gray-200 bg-[#7F92B5] text-center">
          {" "}
          <span className="inline-flex">
            <a className="text-gray-500 px-5">
              <img src={InstagramIcon} alt="Instagram Icon" />
            </a>
            <a className="ml-4 text-gray-500 px-5">
              <img src={FacebookIcon} alt="Facebook Icon" />
            </a>
            <a className="ml-4 text-gray-500 px-5">
              <img src={TwitterIcon} alt="Twitter Icon" />
            </a>
          </span>
        </div>
        <div className="p-2 bg-[#C3D5F5] h-[20vw] flex justify-center flex-col mt-auto text-center">
          <a className="text-black font-['Arial'] font-extrabold text-4xl py-10 ">
            Stay in Touch
          </a>
          <form
            method="POST"
            action="https://mailchi.mp/[xxxxxx]/welcome-to-digital-dish"
            className="leading-normal my-5 w-full flex flex-col justify-center"
          >
          <div className="flex flex-col justify-center self-center">
            <div className="flex flex-row">
              <div className="border-b border-[#7F92B5] w-[26rem] self-center text-left">
                <input
                  className="appearance-none bg-transparent border-none w-[24rem] text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none text-xl"
                  type="text"
                  placeholder="Enter your email"
                  aria-label="Email address"
                />
              </div>
              <input
                type="image"
                src={ArrowIcon}
                alt="Arrow Icon"
                width="30px"
                className="flex flex-row justify-center item-center self-center"
              />
            </div>
            </div>
            <p className="text-xs">
              By entering my email I accept the terms and conditions and the
              privacy policy.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

// <div classNameName='border border-black fixed w-full h-[300px] flex justify-between items-center px-4'>
//     <div classNameName='flex items-center'></div>
//     <div classNameName='text-indigo-500'></div>
// </div>

