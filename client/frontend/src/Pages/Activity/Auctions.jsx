import React, { useState, useEffect } from "react";
import Countdown from "../../Components/Countdown";
import axios from "axios";

export default function Auctions() {
  const [auctions, setAuctions] = useState([]);

  useEffect(() => {
    fetchAuctions();
  }, []);

  const fetchAuctions = async () => {
    try {
      const token = localStorage.getItem("token");
      const allAuctions = await axios.get("http://localhost:8080/bid", {
        headers: {
          Authorization: `Bearer ${token}`, // Include the token in the Authorization header
        },
      });
      // console.log(allOffers.data.offers);

      if (allAuctions.status === 200) {
        setAuctions(allAuctions.data.getBids);
        console.log(allAuctions.data.getBids);
      } else {
        return null;
      }
    } catch (error) {
      console.log("Oh no, something went wrong", error);
    }
  };
  return (
    <div className="ml-[90px] pt-[40px]">
      {auctions && auctions.length != 0 ? (
        auctions.map((item) => (
          <div
            className="flex w-[1025px] h-[120px] border-[1px] border-black justify-between"
            key={item.id}
          >
            <div className="flex">
              <img className="w-[148px] h-[96px]" />
            </div>

            <div className="py-3">
              <h1 className="text-[27px]">{item.post.title}</h1>
              <p className="text-[22px]">{item.post.userName}</p>
            </div>
            <div className="flex items-center text-center">
              <div>
                <h1 className="text-[22px]">Active</h1>
                <div className="text-[18px]">
                  <Countdown startDate={"2023-05-16"} endDate={"2023-005-17"} />
                </div>
              </div>
            </div>

            <div className="flex items-center">
              <h1 className="text-[27px]">{}</h1>
              <p className="text-[27px]"></p>
              <h1 className="text-[27px] pl-[65px] px-[10px]">Sold: $00.00</h1>
            </div>
          </div>
        ))
      ) : (
        <p>No auctions</p>
      )}
    </div>
  );
}
