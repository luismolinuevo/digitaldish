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
        setPrevOrder(fetchData.data);
        console.log(fetchData.data);
      }
    } catch (error) {
      console.log("Error fetching prev orders");
    }
  };

  return (
    <div>
      <div className="flex w-[1171px] ml-[188px] ">
        <h1>Product</h1>
        <h1>Status</h1>
        <h1>Price</h1>
      </div>
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
          <h1 className="text-[27px]">Expired</h1>
          <h1 className="text-[27px] pl-[65px] px-[10px]">Sold: $00.00</h1>
        </div>
      </div>
    </div>
  );
}
