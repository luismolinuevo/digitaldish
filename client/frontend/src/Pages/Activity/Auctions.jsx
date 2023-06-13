import React, { useState, useEffect } from "react";
import Countdown from "../../Components/Countdown";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { checkLoginStatus } from "../../Utils/auth";

export default function Auctions() {
  const dispatch = useDispatch();
  const [active, setActive] = useState(1);
  const [auctions, setAuctions] = useState([]);

  const user = useSelector((state) => state.auth.userInfo);

  useEffect(() => {
    dispatch(checkLoginStatus());
    fetchAuctions();
  }, []);

  const handleClick = (id) => {
    setActive(id);
    console.log(active);
  };

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
        setAuctions(allAuctions.data.mappedBids);
        // console.log(allAuctions.data.getBids);
        console.log(allAuctions.data.mappedBids);
      } else {
        return null;
      }
    } catch (error) {
      console.log("Oh no, something went wrong", error);
    }
  };

  const fetchBidInfo = async () => {};

  return (
    <div className="ml-[90px] pt-[40px]">
      <div className="flex items-center w-[1025px] px-2 mb-[26px]">
        <div className="text-[27px] w-[148px] mr-[33px]">
          <h1>Product</h1>
        </div>
        <div className="text-4 w-[180px]">
          <p>Sort by: choice</p>
        </div>

        <div className="text-[27px] w-[180px] mx-20 text-center">
          <h1 className="">Status</h1>
        </div>
        <div className="w-[180px] text-[27px] text-center">
          <h1>Price</h1>
        </div>
      </div>
      <div>
        {auctions && auctions.length != 0 ? (
          auctions.map((item) => (
            <div
              className={`flex w-[1025px] h-[120px] cursor-pointer px-2 my-[30px]${
                active === item.id ? "bg-[#D9D9D9]" : ""
              }`}
              key={item.id}
              onClick={() => handleClick(item.id)}
            >
              <div className="flex items-center mr-[33px] w-[148px]">
                <img className="w-[148px] h-full border-2 border-black" 
                src={
                  item.post.img && item.post.img.length > 0
                    ? postInfo.img[0].url.toString()
                    : "https://placehold.jp.png"
                }/>
              </div>
              <div className="w-[180px] flex items-center">
                <div className="flex flex-col text-center">
                  <h1 className="text-[27px]">{item.post.title}</h1>
                  <p className="text-[22px]">{item.post.userName}</p>
                </div>
              </div>
              {/* <div className="w-[200px] flex items-center break-words">
                <p className="text-[27px]">{item.post.description}</p>
              </div> */}
              <div className="flex items-center text-center mx-20 w-[180px] justify-center">
                <div>
                  <h1 className="text-[22px]">{item.status}</h1>
                  <div className="text-[18px]">
                    <Countdown
                      // startDate={"2023-06-02"}
                      // endDate={"2023-06-03"}
                      startDate={item.post.startTime}
                      endDate={item.post.endTime}
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center w-[180px] text-center justify-center">
                <div className="">
                  <h1 className="text-[18px]">{item.post.bidCount}</h1>
                  <h1 className="text-[27px]">${item.price}</h1>
                  <div className="text-[18px]">
                    {item.post.highestBidUserId === user ? (
                      <p>Your bid</p>
                    ) : (
                      <p>Outbid</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No auctions</p>
        )}
      </div>
    </div>
  );
}


