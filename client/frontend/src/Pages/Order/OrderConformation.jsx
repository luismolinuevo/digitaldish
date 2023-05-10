import React from "react";

export default function OrderConformation() {
  return (
    <div className="pt-[100px] px-[92px]">
      <h1 className="text-[34px]">Check out</h1>
      <div className="flex">
        <div className="w-[462px] mr-[122px]">
          <div>
            <div className="flex flex-col">
              <h1 className="text-5 mb-4">Contact Information</h1>
              <label className="text-4 mb-2">Email</label>
              <input className="border-[#A8A8A8] border-[1px] h-7 mb-9"></input>
              <label className="text-4 mb-2">Phone Number</label>
              <input className="border-[#A8A8A8] border-[1px] h-7"></input>
            </div>
            <div>
              <h1 className="text-[34px] text-center mb-[15px] mt-[120px]">
                Order Summary
              </h1>
              <div className="flex mb-[74px]">
                <img className="w-[198px] h-[183px]" />
                <div className="ml-[26px]">
                  <p className="text[22px]">Title</p>
                  <p className="text[18px]">Username</p>
                  <p className="text-4">Price</p>
                </div>
              </div>
              <div className="border-black border-t-[1px] flex justify-center">
                <div className="flex flex-col mt-5">
                  <div className="flex">
                    <p className="text[18px] w-[75px] mr-[72px]">Subtotal</p>
                    <p className="text-4">$00.00</p>
                  </div>
                  <div className="flex">
                    <p className="text[18px] w-[75px] mr-[72px]">Shipping</p>
                    <p className="text-4">$00.00</p>
                  </div>
                  <div className="flex">
                    <p className="text[18px] w-[75px] mr-[72px]">Tax</p>
                    <p className="text-4">$00.00</p>
                  </div>
                  <div className="flex">
                    <p className="text[18px] w-[75px] mr-[72px]">Total</p>
                    <p className="text-4">$00.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-[53px] w-[596px]">
          <h1 className="text-4 mb-4 font-[lato]">Shipping Address</h1>
          <div className="flex mb-4">
            <input type="radio" />
            <p className="text-[17px] ml-[24px]">purchase to be shipped</p>
          </div>
          <div>
            <div className="flex mb-9">
              <div className="mr-9 flex flex-col">
                <label className="text-[17px] mb-2">First Name</label>
                <input
                  type="text"
                  className="w-[280px] h-7 border-[#A8A8A8] border-[1px]"
                />
              </div>
              <div>
                <label className="text-[17px] flex flex-col mb-2">Last Name</label>
                <input
                  type="text"
                  className="w-[280px] h-7 border-[#A8A8A8] border-[1px]"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label className="text-[17px] mb-2">Street Address</label>
              <input
                type="text"
                className="w-[596px] h-7 border-[#A8A8A8] border-[1px] mb-9"
              />
            </div>

            <div className="flex mb-9">
              <div className="flex flex-col mr-[45px]">
                <label className="text-[17px] mb-2" l>
                  Postal Code
                </label>
                <input
                  type="text"
                  className="w-[180px] h-7 border-[#A8A8A8] border-[1px]"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-[17px] mb-2">Town/City</label>
                <input
                  type="text"
                  className="w-[180px] h-7 border-[#A8A8A8] border-[1px]"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label className="text-[17px] mb-2">State</label>
              <input
                type="text"
                className="w-[250px] h-7 border-[#A8A8A8] border-[1px]"
              />
            </div>
          </div>
          <div className="mt-[53px] w-[405px]">
            <h1 className="mb-3 text-4 font-[Lato]">Payment Details</h1>
            <div className="flex mb-4">
              <input type="radio" />
              <p>online transaction</p>
            </div>
            <div className="flex flex-col">
              <label className="text-[17px] mb-2">Card Number</label>
              <input type="text" />
            </div>
            <div className="flex flex-col">
              <label className="text-[17px] mb-2">Name on Card</label>
              <input type="text" />
            </div>

            <div className="flex">
              <div className="flex flex-col mr-[45px]">
                <label className="text-[17px] mb-2">Expiration</label>
                <input type="text" />
              </div>
              <div className="flex flex-col">
                <label className="text-[17px] mb-2">Security Code</label>
                <input type="text" />
              </div>
            </div>
            <div className="flex justify-center">
                <img src="" className="w-[44px] h-[44px]" />
                <img src="" className="w-[44px] h-[44px]"/>
                <img src="" className="w-[44px] h-[44px]"/>
                <img src="" className="w-[44px] h-[44px]"/>
                <img src="" className="w-[44px] h-[44px]"/>
            </div>
            <div className="flex justify-center">
                <button>confirm</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
