import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Modal from "../../Components/Modal";

import ae from "../../assets/payment/ae.png";
import visa from "../../assets/payment/visa-Icon.png";
import mastercard from "../../assets/payment/mastercard-Icon.png";
import paypal from "../../assets/payment/paypal-Icon.png";
import apple from "../../assets/payment/apple-pay-Icon.png";

export default function SpecificNegotiate() {
  //TODO make api call and use useParams to get specfic listing. Update post model to support type of transaction
  //TODO replace mock data will data from api call
  //TODO make the make offer button work
  //TODO make the buy now button work
  const [post, setPost] = useState("");
  const [showModal, setShowModal] = useState(false);
  const params = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const post = await axios.get(`http://localhost:8080/post/${params.id}`);

        if (post.status == 200) {
          setPost(post.data.post);

          console.log(post.data.post)
        } else {
          console.log("Error");
        }

        console.log(post.data);
      } catch (error) {
        console.log("Error");
      }
    };

    fetchPost();
    return () => {};
    // }, []);
  }, [params]);

  return (
    <div className="pt-[100px]">
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
            <div className=" flex-shrink-0 pr-[92px]">
              {" "}
              {/*adding this flex-shink stoped the image from shrinking when justify-between was used below */}
              <img
                src="https://placehold.jp/704x700.png"
                alt="listingimage"
                className="w-[704px] h-[700px]"
              />
            </div>
            <div className="w-full">
              <div className="flex justify-between">
                <div>
                  <h1 className="text-[37px] mb-[18px]">{post.title}</h1>
                  <div className="flex items-center mb-[18px]">
                    <p className="text-[28px] pr-2">$00.00</p>
                    <p className="text-[20px]">Listed Price</p>
                  </div>
                </div>
                <div className="">
                  <p>add to favourites</p>
                </div>
              </div>
              <div className="flex mb-[18px]">
                <button
                  className="p-4 w-[210px] rounded-[57px] border-2 border-[#C7A695] mr-[35px] text-[25px]"
                  onClick={() => setShowModal(true)}
                >
                  Make an Offer
                </button>
                <button className="p-4 w-[210px] rounded-[57px] border-2 border-[#C7A695] text-[25px]">
                  Buy Now
                </button>
              </div>
              <div className="flex pb-[36px]">
                <div className="w-[300px]">
                  <p className="text-[20px]">Condition</p>
                  <p className="text-[15px]">New/Used</p>
                </div>
                <div>
                  <p className="text-[20px]">Color</p>
                  <p className="text-[15px]">Colors</p>
                </div>
              </div>
              <div className="flex pb-[16px]">
                <div className=" w-[300px]">
                  <p className="text-[20px]">Quantity Available</p>
                  <p className="text-[15px]">00</p>
                </div>
                <div>
                  <p className="text-[20px]">Materials</p>
                  <ul className="text-[15px]">
                    <li>list of materials</li>
                    <li>list of materials</li>
                    <li>list of materials</li>
                  </ul>
                </div>
              </div>
              <div className="pb-[36px]">
                <p className="text-[20px]">Shipping/Pick-up Info</p>
                <p className="text-[15px]">
                  Shiping info goes here. Rate, etc.
                </p>
              </div>
              <div className="pb-[36px]">
                <p className="text-[20px]">Returns</p>
                <p className="text-[15px]">Sellers return policy goes here</p>
              </div>
              <div>
                <p className="text-[20px]">Payment Accepted</p>
                <div className="flex gap-[30px] mt-[30px]">
                  <img src={ae} className="w-[44px] h-[44px]" />
                  <img src={visa} className="w-[44px] h-[44px]" />
                  <img src={mastercard} className="w-[44px] h-[44px]" />
                  <img src={paypal} className="w-[44px] h-[44px]" />
                  <img src={apple} className="w-[44px] h-[44px]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex mt-10 mb-[137px]">
          <div className="w-[704px] flex justify-center mr-[92px]">
            <div className="w-[564px] h-[101px] flex items-center">
              <p className="text-[35px]">&lt;</p>
              {/*TODO map through other images here */}
              <p className="text-[35px]">&gt;</p>
            </div>
          </div>
          <div className="">
            {/* <div className="w-[800px] h-[221px] bg-[#D9D9D9]">Description</div> */}
            <div className="w-[800px] h-[221px] bg-[#D9D9D9] mb-[30px]">
              <p>des</p>
            </div>
            <div className="flex justify-center">
              <div className="flex flex-col">
                <h1 className="text-center">About the seller</h1>
                <div className="flex">
                  <div>
                    <p>Username</p>
                    <p>* * * * * (00 sales)</p>
                  </div>
                  <p>image</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-[37px]">You might also like</h1>
        </div>
      </div>
      <Modal isVisable={showModal} onClose={() => setShowModal(false)}>
        <h1 className="text-center text-bold text-[30px]">Make an Offer</h1>
        <div className="flex">
          <div className="h-[180px] w-[190px]">
            <p className="text-[22px] break-words">{post.title}</p>
            <p className="text-[22px]">Listing Price: ${post.price}</p> 
            <p className="text-4">{post.userName}</p> 
          </div>
          <div className="h-[180px] w-[190px]">
            <img></img>
          </div>
        </div>
        <div>
          <h3 className="text-[25px] text-center ">Sugguested Offers:</h3>
          <div className="flex gap-[40px]">
            <button className="bg-[#F1F0EB] w-[86px] h-[75px]"></button>
            <button className="bg-[#F1F0EB] w-[86px] h-[75px]"></button>
            <button className="bg-[#F1F0EB] w-[86px] h-[75px]"></button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
