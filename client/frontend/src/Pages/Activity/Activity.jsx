import React, { useState } from "react";
import axios from "axios";
import OffersRecieved from "./OffersRecieved";
import Chat from "./chat";
import OffersSent from "./OffersSent";
import Auctions from "./Auctions";

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
          className={`text-left text-[27px] ${
            activeButton === 0 ? "border-b-2 border-black" : ""
          }`}
          onClick={() => handleClick(0)}
        >
          Offers Recieved
        </button>
        <button
          className={`text-left text-[27px] ${
            activeButton === 1 ? "border-b-2 border-black" : ""
          }`}
          onClick={() => handleClick(1)}
        >
          Offers Sent
        </button>
        <button
          className={`text-left text-[27px] ${
            activeButton === 2 ? "border-b-2 border-black" : ""
          }`}
          onClick={() => handleClick(2)}
        >
          Auctions
        </button>
        <button
          className={`text-left text-[27px] ${
            activeButton === 3 ? "border-b-2 border-black" : ""
          }`}
          onClick={() => handleClick(3)}
        >
          Past Purchases
        </button>
      </div>
      <div>
        <div className="px-20">
          <div className="flex">
            {" "}
            {/*may have to but this in each page */}
            {activeButton === 0 || activeButton === 1 ? (
              <div>
                <p>Messages</p>
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
              <div>
                <p>Product</p>
                <p>Status</p>
                <p>Price</p>
              </div>
            )}
          </div>
          <div>
            {activeButton === 0 ? <OffersRecieved /> : ""}
            {activeButton === 1 ? <OffersSent /> : ""}
            {activeButton == 2 ? <Auctions /> : ""}
          </div>
        </div>
      </div>
      <div>{activeButton === 2 || activeButton === 3 ? "" : <Chat />}</div>
    </div>
  );
}
