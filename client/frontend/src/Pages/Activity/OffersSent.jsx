import React, { useEffect, useState } from "react";
import axios from "axios";
import Chat from "./chat";
import { useDispatch, useSelector } from "react-redux";
import { updateCurrentOffer } from "../../Utils/offer";

export default function OffersRecieved() {
  const dispatch = useDispatch();
  const [offers, setOffers] = useState([]);
  const [active, setActive] = useState(1);
  const user = useSelector((state) => state.auth.userInfo);

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const token = localStorage.getItem("token");
        const allOffers = await axios.get(
          `${import.meta.env.VITE_HOSTED_API}/offer/useroffers`,
          {
            headers: {
              Authorization: `Bearer ${token}`, // Include the token in the Authorization header
            },
          }
        );
        console.log(allOffers.data.offers);

        if (allOffers.status === 200) {
          setOffers(allOffers.data.offers);
        } else {
          return null;
        }
      } catch (error) {
        console.log("Oh no, something went wrong", error);
      }
    };

    fetchOffers();
  }, []);

  const handleClick = (id) => {
    setActive(id);
    dispatch(updateCurrentOffer(id));
    console.log(active);
  };

  return (
    <div>
      <div className="w-[687px] px-3 flex mb-[26px]">
        <div className="w-[180px]">
          <p className="text-[27px]">Messages</p>
        </div>
        <div className="flex w-full justify-between items-center">
          <p className="text-4">Sort by: choice</p>
          <div className=" w-[130px]">
            <p className="text-[27px]">Status</p>
          </div>
        </div>
      </div>
      <div>
        {offers && offers.length != 0 ? (
          offers.map((item) =>
            item.post.userId !== user ? (
              <div
                key={item.id}
                onClick={() => handleClick(item.id)}
                className={`w-[687px] p-3 mb-4 cursor-pointer ${
                  active === item.id ? "bg-[#D9D9D9]" : ""
                }`}
              >
                <div className="flex ">
                  <div className="w-[180x]">
                    <img
                      src="https://placehold.jp/180x118.png"
                      className="w-[148px] h-[98px]"
                    ></img>
                  </div>

                  <div className="w-full flex justify-between">
                    <div className="pl-4">
                      <p className="text-[32px]">{item.post.title}</p>
                      <p className="text-[22px]">Mode</p>
                    </div>
                    <div className="flex items-center w-[130px]">
                      <p className="text-[22px]">Status</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <p>No offers sent</p>
            )
          )
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
}

//TODO add mode to post request.
//TODO add status to offer
