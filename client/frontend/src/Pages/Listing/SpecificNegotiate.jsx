import React from "react";

export default function SpecificNegotiate() {
  //TODO make api call and use useParams to get specfic listing. Update post model to support type of transaction
  return (
    <div className="pt-20 px-20">
      <div className="flex flex-col">
        <div className="flex pb-[27px]">
          <p>negotiation</p>
          <p>&gt;</p>
          <p>category</p>
          <p>&gt;</p>
          <p>subcategory</p>
        </div>
        <div className="flex">
          <div className=" flex-shrink-0 pr-[92px]">  .{/*adding this flex-shink stoped the image from shrinking when justify-between was used below */}
            <img src="https://placehold.jp/704x700.png" alt="listingimage" />
          </div>
          <div className="w-full">
            <div className="flex justify-between pt-[20px]">
              <div>
                <h1>Product Title</h1>
                <p>Listed Price:</p>
                <p>$00.00</p>
              </div>
              <div className="">
                <p>add to favourites</p>
                <p>Send (user) a message</p>
              </div>
            </div>
            <div className="flex">
              <button>
                Make an Offer
              </button>
              <button>
                Buy Now
              </button>
            </div>
            <div className="flex pb-[36px]">
              <div className="w-[300px]">
                <p>Condition</p>
                <p>New/Used</p>
              </div>
              <div>
                <p>Color</p>
                <p>Colors</p>
              </div>
            </div>
            <div className="flex pb-[36px]">
              <div className=" w-[300px]">
                <p>Quantity Available</p>
                <p>00</p>
              </div>
              <div>
                <p>Materials</p>
                <ul>
                  <li>list of materials</li>
                  <li>list of materials</li>
                  <li>list of materials</li>
                </ul>
              </div>
            </div>
            <div className="pb-[36px]">
              <p>Shipping/Pick-up Info</p>
              <p>Shiping info goes here. Rate, etc.</p>
            </div>
            <div className="pb-[36px]">
              <p>Returns</p>
              <p>Sellers return policy goes here</p>
            </div>
            <div>
              <p>Payment Accepted</p>
              <p>Payment icons go here</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
