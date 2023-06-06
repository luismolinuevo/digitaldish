import React from "react";
import { Link } from "react-router-dom";

export default function Card({ type, title, img, price }) {
    
    const shortTitle = title.slice(0, 16)+'...';
  return (
    <div>
      <div className="w-[320px] h-[220px] px-[10px] mb-[20px]">
        <div
          className="w-[300px] h-[160px] bg-cover bg-no-repeat z-[-1] rounded-[4px]"
          style={{ backgroundImage: `url(${img})` }}
        >
          <div className="flex h-full items-end ">
            <p className="text-[20px] bg-white m-[15px] p-1">Barter</p>
          </div>
        </div>
        <div className="flex justify-between text-[25px]"> 
          <p>{title.length > 16 ? shortTitle : title}</p>
          {type !== "barter" ? <p>$00.00</p> : <p></p>}
        </div>
      </div>
    </div>
  );
}

//TODO add link