import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-dom";
import robot from "../../assets/HomePage/robot2.jpg";
import monitor from "../../assets/HomePage/Monitors.jpg";
import headphones from "../../assets/HomePage/Headphones.jpg";
import keyboard from "../../assets/HomePage/Keyboard.jpg";
import keycaps from "../../assets/Homepage/Keycaps.jpg";
import logo from "../../assets/HomePage/logo.png";
import robotHand from "../../assets/HomePage/robotHand.png"
import Card from "./Card";
import BiggerCard from "./BiggerCard";

export default function Home() {
  return (
    <div className="">
      <div className="bg-[#F1F0EB] pt-20 px-4">
        <h1 className="text-[48px]">What's new in the Community</h1>
        <div className="flex justify-between">
          <div
            className="w-[770px] h-[680px] bg-cover bg-no-repeat z-[1] rounded-[4px]"
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
              <Card
                title={"titletestlengthoftitle"}
                type={"bid"}
                img={robot}
                price={"00.00"}
              />
            </div>
            <div>
              <Card title={"title"} type={"bid"} img={robot} price={"00.00"} />
            </div>
          </div>
          <div>
            <div className="w-[320px] h-[430px] mb-[50px] bg-white">
              <div className="flex flex-col items-center justify-center h-full">
                <h1 className="text-[27px] mb-[26px]">Welcome,</h1>
                <button className="bg-black text-white px-[70px] py-4">
                  Login
                </button>
                <h1 className="text-[27px] my-4">or</h1>
                <button className="bg-black text-white px-[70px] py-4">
                  Signup
                </button>
              </div>
            </div>
            <div>
              <Card title={"title"} type={"bid"} img={robot} price={"00.00"} />
            </div>
          </div>
        </div>
      </div>
      <div className="h-[581px] flex items-center px-4 gap-[58px]">
        <BiggerCard title={"Keyboards"} img={keyboard} />
        <BiggerCard title={"Headphones"} img={headphones} />
        <BiggerCard title={"Monitor"} img={monitor} />
        <BiggerCard title={"Keycaps"} img={keycaps} />
      </div>
      <div className=" bg-[#F1F0EB]">
        <div className="px-4 py-[150px]">
          <div className="">
            <h1 className="text-[38px] mb-2">Explore Active Barters</h1>
            <div className="flex pb-[100px]">
              <p className="text-[28px]">
                the exchange of goods
                <br /> and services between
                <br /> two users without the
                <br /> use of money.
              </p>
              <div className="pl-[70px]">
                <div className="flex gap-[60px]">
                  <Card
                    title={"title"}
                    type={"barter"}
                    img={robot}
                    price={"00.00"}
                  />
                  <Card
                    title={"title"}
                    type={"barter"}
                    img={robot}
                    price={"00.00"}
                  />
                  <Card
                    title={"title"}
                    type={"barter"}
                    img={robot}
                    price={"00.00"}
                  />
                </div>
                <div className="flex gap-[60px]">
                  <Card
                    title={"title"}
                    type={"barter"}
                    img={robot}
                    price={"00.00"}
                  />
                  <Card
                    title={"title"}
                    type={"barter"}
                    img={robot}
                    price={"00.00"}
                  />
                  <Card
                    title={"title"}
                    type={"barter"}
                    img={robot}
                    price={"00.00"}
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-[38px] mb-2">Explore Active Barters</h1>
            <div className="flex">
              <div className="">
                <div className="flex gap-[60px]">
                  <Card
                    title={"title"}
                    type={"barter"}
                    img={robot}
                    price={"00.00"}
                  />
                  <Card
                    title={"title"}
                    type={"barter"}
                    img={robot}
                    price={"00.00"}
                  />
                  <Card
                    title={"title"}
                    type={"barter"}
                    img={robot}
                    price={"00.00"}
                  />
                </div>
                <div className="flex gap-[60px]">
                  <Card
                    title={"title"}
                    type={"barter"}
                    img={robot}
                    price={"00.00"}
                  />
                  <Card
                    title={"title"}
                    type={"barter"}
                    img={robot}
                    price={"00.00"}
                  />
                  <Card
                    title={"title"}
                    type={"barter"}
                    img={robot}
                    price={"00.00"}
                  />
                </div>
              </div>
              <p className="ml-[70px] text-[28px]">
                a back and forth
                <br /> discussion between
                <br /> users creating offers
                <br /> and counter offers to
                <br /> come to an agreed
                <br /> upon price.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[840px] flex">
        <div className="h-full bg-[#3E3E3E] w-1/2">
          <div className="py-[55px] px-[49px] ">
            <img src={logo} alt="" className="w-[160px] h-[51px]" />
            <h1 className="text-[44px] text-white">Who we are</h1>
            <p className="text-white text-[28px] pb-[100px]"> 
              born to connect hobbyists within
              <br /> technology, (logo) is a one of a kind
              <br /> marketplace where products are sold
              <br /> through bartering, bidding, and
              <br /> negotiating. Learn more by signing up
              <br /> and becoming a part of the community
            </p>
            <div className="">
              <button className="bg-white rounded-[57px] border-2 border-black text-[32px] px-4 py-2 w-[270px]">Contact</button>
              <button className="bg-white rounded-[57px] border-2 border-black text-[32px] px-4 py-2 w-[270px]">About Us</button>
            </div>
          </div>
        </div>
        <div >
          <img src={robotHand} alt="" className="h-full " />
        </div>
      </div>
    </div>
  );
}
