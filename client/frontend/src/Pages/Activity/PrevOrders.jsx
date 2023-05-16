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
    <div className="ml-[90px]">
      <div className="flex w-[1171px]  ">
        <h1>Product</h1>
        <h1>Status</h1>
        <h1>Price</h1>
      </div>
      {prevOrder && prevOrder.length != 0 ? (
        prevOrder.map((item) => (
          <div className="flex w-[1171px] h-[120px] border-[1px] border-black justify-between" key={item.id}>
            <div className="flex">
              <div className="py-3">
                <h1 className="text-[27px]">{}</h1>
                <p className="text-[27px]">Username</p>
              </div>
              <img></img>
              <div className=" flex items-center px-5 w-[375px] ">
                <h1 className="text-[27px]">Product Description</h1>
              </div>
            </div>
            <div className="flex items-center">
              <h1 className="text-[27px]">Expired</h1>
              <h1 className="text-[27px] pl-[65px] px-[10px]">Sold: $00.00</h1>
            </div>
          </div>
        ))
      ) : (
        <p>No previous orders</p>
      )}
    </div>
  );
}
