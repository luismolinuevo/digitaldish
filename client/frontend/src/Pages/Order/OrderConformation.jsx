import React from "react";

export default function OrderConformation() {
  return (
    <div className="pt-[100px]">
      <h1 className="text-[34px]">Check out</h1>
      <div className="flex">
        <div className="w-[462px] mr-[122px]">
          <div>
            <div className="flex flex-col">
              <h1 className="text-5">Contact Information</h1>
              <label className="text-4">Email</label>
              <input className="border-[#A8A8A8] border-[1px] h-7"></input>
              <label className="text-4">Phone Number</label>
              <input className="border-[#A8A8A8] border-[1px] h-7"></input>
            </div>
            <div>
              <h1 className="text-[34px]">Order Summary</h1>
              <div>
                <img className="w-[198px] h-[183px]"/>
                <div>
                  <p className="text[22px]">Title</p>
                  <p className="text[18px]">Username</p>
                  <p className="text-4">Price</p>
                </div>
              </div>
              <div className="border-black border-t-[1px] flex justify-center">
                <div className="flex flex-col">
                  <div className="flex">
                    <p className="text[18px]">Subtotal</p>
                    <p className="text-4">$00.00</p>
                  </div>
                  <div className="flex">
                    <p className="text[18px]">Shipping</p>
                    <p className="text-4">$00.00</p>
                  </div>
                  <div className="flex">
                    <p className="text[18px]">Tax</p>
                    <p className="text-4">$00.00</p>
                  </div>
                  <div className="flex">
                    <p className="text[18px]">Total</p>
                    <p className="text-4">$00.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-4">Shipping Address</h1>
          <div>
            <input type="radio" />
            <p>purchase to be shipped</p>
          </div>
          <div>
            <div className="flex">
              <div className="mr-9">
                <label className="text-[17px]">First Name</label>
                <input type="text" className="w-[280px] h-7 border-[#A8A8A8] border-[1px]"/>
              </div>
              <div>
                <label className="text-[17px]">Last Name</label>
                <input type="text" className="w-[280px] h-7 border-[#A8A8A8] border-[1px]"/>
              </div>
            </div>
            <label className="text-[17px]">Street Address</label>
            <input type="text" className="w-[596px] h-7 border-[#A8A8A8] border-[1px]"/>
            <div className="flex">
              <div>
                <label className="text-[17px]"l>Postal Code</label>
                <input type="text" />
              </div>
              <div>
                <label className="text-[17px]">Town/City</label>
                <input type="text" />
              </div>
            </div>
            <label className="text-[17px]">State</label>
            <input type="text" />
          </div>
          <div>
            <div className="flex">
              <input type="radio" />
              <p>online transaction</p>
            </div>
            <label>Card Number</label>
            <input type="text" />
            <label>Name on Card</label>
            <input type="text" />
            <div className="flex">
              <div>
                <label>Expiration</label>
                <input type="text" />
              </div>
              <div>
                <label>Security Code</label>
                <input type="text" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
