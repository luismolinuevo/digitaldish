import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Countdown from "../../Components/Countdown";
import Carousel from "./ImgCarousel";
import Card from "../Home/Card";

// import ae from "../../assets/payment/ae.png";
// import visa from "../../assets/payment/visa-Icon.png";
// import mastercard from "../../assets/payment/mastercard-Icon.png";
// import paypal from "../../assets/payment/paypal-Icon.png";
// import apple from "../../assets/payment/apple-pay-Icon.png";
import Footer from "../../Components/Footer/Footer";

export default function SpecificBid() {
  const [post, setPost] = useState("");
  const [bidInput, setBidInput] = useState(0);
  const params = useParams();
  const [suggestedPost, setSuggestedPost] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const post = await axios.get(`${import.meta.env.VITE_HOSTED_API}/post/${params.id}`);
        console.log(post.data);
        if (post.status == 200) {
          setPost(post.data.post);
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
  }, [params.id]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `${import.meta.env.VITE_HOSTED_API}/post/getType/bid`
      );
      console.log(response.data.getPost);
      setSuggestedPost(response.data.getPost.splice(0, 8));
    }
    fetchData();
  }, []);

  const handleBid = async () => {
    try {
      const token = localStorage.getItem("token");
      const createBid = await axios.post(
        `${import.meta.env.VITE_HOSTED_API}/bid/${params.id}`,
        {
          price: parseFloat(bidInput),
          status: "Active",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the Authorization header
          },
        }
      );

      console.log(createBid.status);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="pt-[100px] px-20">
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
              {/* <img
                src="https://placehold.jp/704x700.png"
                alt="listingimage"
                className="w-[704px] h-[700px]"
              /> */}
              {post && post.img.length != 0 ? (
                post.img.map((item) => <Carousel url={item.url} />)
              ) : (
                <img
                  src="https://placehold.jp/704x700.png"
                  alt="listingimage"
                  className="w-[704px] h-[700px]"
                />
              )}
            </div>
            <div className="w-full">
              <div className="flex justify-between ">
                <div className="mb-[22px]">
                  <h1 className="text-[37px] mb-[18px]">{post.title}</h1>
                  <div className="flex">
                    <div className="mr-10">
                      <p className="text-5">{post.bidCount} bids:</p>
                      <p className="text-[27px]">${post.highestBid}</p>
                    </div>
                    <div>
                      <p className="text-[27px]">
                        Time left:{" "}
                        <Countdown
                          startDate={post.startTime}
                          endDate={post.endTime}
                        />
                      </p>
                      <p className="text-[22px]">Ends: {post.endTime}</p>
                    </div>
                  </div>
                </div>
                <div className="">
                  <p>add to favourites</p>
                </div>
              </div>
              <div className="flex mb-[18px] items-center">
                <div className=" mr-11 text-center">
                  <input
                    type="text"
                    className="bg-[#F1F0EB] w-[80px] h-[50px] text-7 outline-none"
                    placeholder="$00.00"
                    onChange={(e) => setBidInput(e.target.value)}
                  />
                </div>
                <button
                  className="text-center px-[40px] py-[10px] rounded-[57px] border-[4px] border-[#C7A695] text-[30px]"
                  onClick={handleBid}
                >
                  PLACE BID
                </button>
              </div>
              <div className="flex pb-[36px]">
                <div className="w-[300px]">
                  <p className="text-[20px]">Condition</p>
                  <p className="text-[15px]">{post.condition}</p>
                </div>
                <div>
                  <p className="text-[20px]">Color</p>
                  <p className="text-[15px]">{post.color}</p>
                </div>
              </div>
              <div className="flex pb-[16px]">
                <div className=" w-[300px]">
                  <p className="text-[20px]">Shipping/Pick-up Info</p>
                  <p className="text-[15px]">{post.shippingFees}</p>
                </div>
                <div>
                  <p className="text-[20px]">Materials</p>
                  <ul className="text-[15px] list-disc ml-6">
                    <li>list of materials</li>
                    <li>list of materials</li>
                    <li>list of materials</li>
                  </ul>
                </div>
              </div>
              <div className="pb-[36px]">
                <p className="text-[20px]">Returns</p>
                <p className="text-[15px]">Sellers return policy goes here</p>
              </div>
              <div>
                <p className="text-[20px]">Payment Accepted</p>
                <div className="flex gap-[30px] mt-[30px]">
                  <img
                    src={"/assets/payment/ae.png"}
                    className="w-[44px] h-[44px]"
                  />
                  <img
                    src={"/assets/payment/visa-Icon.png"}
                    className="w-[44px] h-[44px]"
                  />
                  <img
                    src={"/assets/payment/mastercard-Icon.png"}
                    className="w-[44px] h-[44px]"
                  />
                  <img
                    src={"/assets/payment/paypal-Icon.png"}
                    className="w-[44px] h-[44px]"
                  />
                  <img
                    src={"/assets/payment/apple-pay-Icon.png"}
                    className="w-[44px] h-[44px]"
                  />
                  
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex mt-10 mb-[137px]">
          <div className="w-[704px] flex justify-center mr-[92px]">
            <div className="w-[564px] h-[102px] flex">
              <p className="text-[35px] pr-4">&lt;</p>
              <div>
                {post && post.img.length != 0 ? (
                  post.img.map((item) => (
                    <div>
                      <img
                        src={item.url}
                        alt={"Post img"}
                        className=" flex w-[101px] h-[101px] gap-4"
                        key={item.id}
                      />
                    </div>
                  ))
                ) : (
                  <p></p>
                )}
              </div>
              <p className="text-[35px] pl-4">&gt;</p>
            </div>
            <div className="flex"></div>
          </div>
          <div className="">
            <div className="w-[600px] h-[221px] bg-[#D9D9D9] mb-[30px]">
              <p>des</p>
            </div>
            <div className="flex justify-center">
              <div className="flex flex-col">
                <h1 className="text-center">About the seller</h1>
                <div className="flex">
                  <div>
                    <p>{post.userName}</p>
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
          <div className="flex flex-wrap">
            {suggestedPost && suggestedPost.length !== 0 ? (
              suggestedPost.map((item) => (
                <div className="">
                  <Card
                    title={item.title}
                    price={item.price}
                    id={item.id}
                    img={item.img != 0 ? item.img[0].url.toString() : ""}
                    type={"bid"}
                  />
                </div>
              ))
            ) : (
              <p></p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
