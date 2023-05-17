import React, { useState, useEffect } from "react";
import Countdown from "../../Components/Countdown";
import axios from "axios";

export default function Auctions() {
  const [auctions, setAuctions] = useState([]);

  useEffect(() => {}, []);

  const fetchAuctions = async () => {
    try {
      const token = localStorage.getItem("token");
      const allOffers = await axios.get(
        "http://localhost:8080/bid",
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the Authorization header
          },
        }
      );
      // console.log(allOffers.data.offers);

      if (allOffers.status === 200) {
        setOffers(allOffers.data.offers);
      } else {
        return null;
      }
    } catch (error) {
      console.log("Oh no, something went wrong", error);
    }
  };
  return (
    <div>
      {}
      <div className="flex w-[1171px] h-[120px] border-[1px] border-black ml-[188px] justify-between">
        <div className="flex">
          <div className="py-3">
            <h1 className="text-[27px]">Product Title</h1>
            <p className="text-[27px]">Username</p>
          </div>
          <img></img>
          <div className=" flex items-center px-5 w-[375px] ">
            <h1 className="text-[27px]">Product Description</h1>
          </div>
        </div>
        <div className="flex items-center">
          <h1 className="text-[27px]">{}</h1>
          <Countdown startDate={"2023-06-01"} endDate={"2023-06-07"} />
          <h1 className="text-[27px] pl-[65px] px-[10px]">Sold: $00.00</h1>
        </div>
      </div>
    </div>
  );
}
