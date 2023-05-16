import React, { useEffect, useState } from "react";
import axios from "axios";

export default function PrevOrders() {
  const [prevOrder, setPrevOrder] = useState([]);
  useEffect(() => {
    fetchPrevOrders();
  }, []);

  const fetchPrevOrders = async () => {
    try {
      const token = localStorage.getItem("token");
      const fetchData = await axios.get(`http://localhost:8080/prevorder`, {
        headers: {
          Authorization: `Bearer ${token}`, // Include the token in the Authorization header
        },
      });

      if (fetchData.status === 200) {
        setPrevOrder(fetchData.data.getPrevOrders);
        console.log(fetchData.data.getPrevOrders);
      }
    } catch (error) {
      console.log("Error fetching prev orders");
    }
  };

  return (
    <div className="ml-[90px] pt-[40px]">
      <div className="flex w-[1025px]  ">
        <h1>Product</h1>
        <h1>Status</h1>
        <h1>Price</h1>
      </div>
      {prevOrder && prevOrder.length != 0 ? (
        prevOrder.map((item) => (
          <div
            className="flex w-[1025px] h-[120px] border-[1px] border-black justify-between"
            key={item.id}
          >
            <div className="flex">
              <img></img>
              <div className="py-3 mr-20">
                <h1 className="text-[27px]">{item.post.title}</h1>
                <p className="text-[27px]">{item.post.userName}</p>
              </div>

              <div className=" flex items-center px-5 w-[375px] mr-[120px] ">
                <h1 className="text-[22px]">status</h1>
              </div>
            </div>
            <div className="flex items-center">
              <h1 className="text-[27px]">{item.finalPrice}</h1>
            </div>
          </div>
        ))
      ) : (
        <p>No previous orders</p>
      )}
    </div>
  );
}
