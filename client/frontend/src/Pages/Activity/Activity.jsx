import React, { useState } from "react";
import axios from "axios";
import OffersRecieved from "./OffersRecieved";
import Chat from "./chat";
import OffersSent from "./OffersSent";
import Auctions from "./Auctions";
import PrevOrder from "./PrevOrders";

export default function Activity() {
  const [activeButton, setActiveButton] = useState(0);

  const handleClick = (buttonIndex) => {
    setActiveButton(buttonIndex);
  };

  return (
    <div className="flex px-20 pt-[100px] justify-between">
      <div className="flex flex-col cursor-pointer">
        <h1 className={"text-left text-[44px]"}>Activity</h1>
        <button
          className={`text-left text-[27px] mt-[60px] mb-[108px] ${
            activeButton === 0 ? "border-b-2 border-black" : ""
          }`}
          onClick={() => handleClick(0)}
        >
          Offers Recieved
        </button>
        <button
          className={`text-left text-[27px] mb-[108px] ${
            activeButton === 1 ? "border-b-2 border-black" : ""
          }`}
          onClick={() => handleClick(1)}
        >
          Offers Sent
        </button>
        <button
          className={`text-left text-[27px] mb-[108px] ${
            activeButton === 2 ? "border-b-2 border-black" : ""
          }`}
          onClick={() => handleClick(2)}
        >
          Auctions
        </button>
        <button
          className={`text-left text-[27px] mb-[108px] ${
            activeButton === 3 ? "border-b-2 border-black" : ""
          }`}
          onClick={() => handleClick(3)}
        >
          Past Purchases
        </button>
      </div>
      <div>
        <div className="px-20">
          {/* <div className="flex">
            {activeButton === 0 || activeButton === 1 ? (
              <div className="flex">
                <p className="text-[27px] mr-[50px]">Messages</p>
                <p>Sort by: choice</p>
                <p>Status</p>
              </div>
            ) : activeButton === 2 ? (
              <div className="pl-[188px] flex">
                <p>Product</p>
                <p>Sort by: choice</p>
                <p>Price</p>
              </div>
            ) : (
              <div></div>
            )}
          </div> */}
          <div>
            {activeButton === 0 ? <OffersRecieved /> : ""}
            {activeButton === 1 ? <OffersSent /> : ""}
            {activeButton == 2 ? <Auctions /> : ""}
            {activeButton == 3 ? <PrevOrder /> : ""}
          </div>
        </div>
      </div>
      <div>
        {activeButton === 2 || activeButton === 3 ? (
          ""
        ) : (
          <h1 className="text-center text-[27px]">Chat</h1>
        )}
        {activeButton === 2 || activeButton === 3 ? "" : <Chat />}
      </div>
    </div>
  );
}
