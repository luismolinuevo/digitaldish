import React, { useEffect, useState } from "react";
import axios from "axios";
import Chat from "./chat";
import { useDispatch } from "react-redux";
import { updateCurrentOffer } from "../../Utils/offer"

export default function OffersRecieved() {
  const dispatch = useDispatch();
  const [offers, setOffers] = useState([]);
  const [active, setActive] = useState(1);

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const token = localStorage.getItem("token");
        const allOffers = await axios.get(
          "http://localhost:8080/offer/useroffers",
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
      {offers && offers.length != 0 ? 
        offers.map((item) => (
          <div key={item.id} onClick={() => handleClick(item.id)} className={`w-[687px] pb-10 border-2 border-black mb-4 cursor-pointer ${active === item.id ?  "bg-[#D9D9D9]" : ""}`} >
            <div className="flex ">
              <img src="https://placehold.jp/180x118.png"></img>
              <div className="w-full flex justify-between">
                <div className="pl-2">
                  <p className="text-[32px]">{item.post.title}</p>
                  <p className="text-[22px]">Mode</p>
                </div>
                <div className="flex items-center">
                    <p className="pr-4 text-[27px]">Status</p>
                </div>
                
              </div>
            </div>
          </div>
        ))
       : 
        <p></p>
      }
    </div>
  );
}
