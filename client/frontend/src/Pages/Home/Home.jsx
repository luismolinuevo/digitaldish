import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-dom";
import robot from "../../assets/HomePage/robot2.jpg";
import Card from "./Card";

export default function Home() {
  return (
    <div className="">
      <div className="bg-[#F1F0EB] pt-20 px-4">
        <h1 className="text-[48px]">What's new in the Community</h1>
        <div className="flex justify-between">
          <div
            className="w-[770px] h-[680px] bg-cover bg-no-repeat z-[1]"
            style={{ backgroundImage: `url(${robot})` }}
          >
            <div className="h-full flex items-end p-[40px] justify-between">
              <button className="bg-white rounded-[57px] border-2 border-[#DAB24E] text-[32px] px-4 py-2">
                Devices
              </button>
              <button className="bg-white rounded-[57px] border-2 border-[#DAB24E] text-[32px] px-4 py-2">
                Accessories
              </button>
            </div>
          </div>
          <div>
            <div>
              <Card title={"title"} type={"bid"} img={robot} price={"00.00"} />
            </div>
            <div>
              <Card title={"titletestlengthoftitle"} type={"bid"} img={robot} price={"00.00"} />
            </div>
            <div>
              <Card title={"title"} type={"bid"} img={robot} price={"00.00"} />
            </div>
          </div>
          <div>
            <div className="w-[320px] h-[430px] mb-[50px] bg-white">
                <div className="flex flex-col items-center justify-center h-full">
                <h1 className="text-[27px] mb-[26px]">Welcome,</h1>
                <button className="bg-black text-white px-[70px] py-4">Login</button>
                <h1 className="text-[27px] my-4">or</h1>
                <button className="bg-black text-white px-[70px] py-4">Signup</button>
                </div>
            </div>
            <div>
            <Card title={"title"} type={"bid"} img={robot} price={"00.00"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
