import React, { useEffect, useState } from "react";
import axios from "axios";

export default function PrevOrders() {
  const [prevOrder, setPrevOrder] = useState([]);
  const [active, setActive] = useState(1);
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

  const handleClick = (id) => {
    setActive(id);
    console.log(active);
  };

  return (
    // <div className="ml-[90px] pt-[40px]">
    //   <div className="flex w-[1025px]  ">
    //     <h1>Product</h1>
    //     <h1>Status</h1>
    //     <h1>Price</h1>
    //   </div>
    //   {prevOrder && prevOrder.length != 0 ? (
    //     prevOrder.map((item) => (
    //       <div
    //         className="flex w-[1025px] h-[120px] border-[1px] border-black justify-between"
    //         key={item.id}
    //       >
    //         <div className="flex">
    //           <img></img>
    //           <div className="py-3 mr-20">
    //             <h1 className="text-[27px]">{item.post.title}</h1>
    //             <p className="text-[27px]">{item.post.userName}</p>
    //           </div>

    //           <div className=" flex items-center px-5 w-[375px] mr-[120px] ">
    //             <h1 className="text-[22px]">status</h1>
    //           </div>
    //         </div>
    //         <div className="flex items-center">
    //           <h1 className="text-[27px]">{item.finalPrice}</h1>
    //         </div>
    //       </div>
    //     ))
    //   ) : (
    //     <p>No previous orders</p>
    //   )}
    // </div>
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
        {prevOrder && prevOrder != 0 ? (
          prevOrder.map((item) => (
            <div
              className={`flex w-[1025px] h-[120px] px-2 mb-[30px]${
                active === item.id ? "bg-[#D9D9D9]" : ""
              }`}
              key={item.id}
              onClick={() => handleClick(item.id)}
            >
              <div className="flex items-center mr-[33px] w-[148px]">
                <img className="w-[148px] h-full border-2 border-black" />
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

                </div>
              </div>

              <div className="flex items-center w-[180px] text-center justify-center">
                <div>
                  <h1 className="text-[27px]">
                    ${item.finalPrice}
                  </h1>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No previous orders</p>
        )}
      </div>
    </div>
  );
}
