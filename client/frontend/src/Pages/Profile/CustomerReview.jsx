import React from "react";
import ReactDOM from "react-dom";
import MouseProfilePic from "../../assets/photos/mouse-profilepic.png";
import ProductImg from "../../assets/photos/mouse105.png";
import { IoStarSharp } from "react-icons/io5";
// import Mouse105 from 


export default function ReviewCards() {
  return (
    <div className="comp-start py-3">
      <div className="hover:shadow-2xl">
        <div className="border-2 border-gray-500 w-full h-[9rem] ">
          <div className="flex flex-row p-4 pt-2">
            <div className="img">
              <img src={MouseProfilePic} width="140rem" />
            </div>
            <div className="title flex flex-col text-2xl pt-2 px-1">
              Floyd
              <div className="text-sm font-normal">1 review</div>
              <div className="star-review flex flex-row pt-2">
                <IoStarSharp className="text-yellow-700" />
                <IoStarSharp className="text-yellow-700" />
                <IoStarSharp className="text-yellow-700" />
                <IoStarSharp className="text-yellow-700" />
                <IoStarSharp className="text-yellow-700" />

                <div className="date-posted font-light text-xs pt-[.5em] w-[10rem]">
                  1 week ago
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-end w-full">
              <img src={ProductImg} width={"110rem"} className="py-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
