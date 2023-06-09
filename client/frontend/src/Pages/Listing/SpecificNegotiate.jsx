import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Modal from "../../Components/Modal";
import { useSelector, useDispatch } from "react-redux";
import { checkLoginStatus } from "../../Utils/auth";
// import ae from "../../assets/payment/ae.png";
// import visa from "../../assets/payment/visa-Icon.png";
// import mastercard from "../../assets/payment/mastercard-Icon.png";
// import paypal from "../../assets/payment/paypal-Icon.png";
// import apple from "../../assets/payment/apple-pay-Icon.png";
import Carousel from "./ImgCarousel";
import Card from "../Home/Card";
import Footer from "../../Components/Footer/Footer";

export default function SpecificNegotiate() {
  //TODO maybe start currnet price state at
  //TODO may have to edit post route to check if offer already exist, also check to make sure the post isnt yours
  //TODO make the buy now button work(figure out if I need two pages)
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.userInfo);
  const userName = useSelector((state) => state.auth.userName)

  const [post, setPost] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [offer, setOffer] = useState(post.price);
  const [message, setMessage] = useState("");
  const [offerSent, setOfferSent] = useState(false);
  const fivePercentOff = parseFloat(post.price) - parseFloat(post.price) * (0.05).toFixed(2);
  const tenPercentOff = post.price - post.price * (0.1).toFixed(2);
  const fifteenPercentOff = post.price - post.price * (0.15).toFixed(2);
  const [suggestedPost, setSuggestedPost] = useState([]);

  useEffect(() => {
    dispatch(checkLoginStatus());
    const fetchPost = async () => {
      try {
        const post = await axios.get(`${import.meta.env.VITE_HOSTED_API}/post/${params.id}`);

        if (post.status == 200) {
          setPost(post.data.post);

          console.log(post.data.post);
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

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `${import.meta.env.VITE_HOSTED_API}/post/getType/negotiation`
      );
      console.log(response.data.getPost);
      setSuggestedPost(response.data.getPost.splice(0, 8));
    }
    fetchData();
  }, []);

  const createOffer = async () => {
    try {
      const create = await axios.post(
        `${import.meta.env.VITE_HOSTED_API}/offer/createroom/${params.id}`,
        {
          userTwoId: post.userId,
          status: "Active",
          userId: user,
          currentOffer: offer,
          buyerAccept: true,
        }
      );
      let offerId = create.data.chatroom.id;
      sendMessage(offerId);
      sendOffer(offerId);
      console.log("offercreated");

      setOfferSent(!offerSent);
    } catch (err) {
      console.log("There is a error" + err);
    }
  };

  const sendOffer = async (offerId) => {
    try {
      let offerMessage = userName + " has created a offer of $" + offer;
      const createMessage = await axios.post(
        `${import.meta.env.VITE_HOSTED_API}/offer/createmessage/${offerId}`,
        {
          content: offerMessage,
          userId: user,
        }
      );

      console.log("offer message created");
    } catch (err) {
      console.log(err);
    }
  };

  const sendMessage = async (offerId) => {
    try {
      if (message) {
        const createMessage = await axios.post(
          `${import.meta.env.VITE_HOSTED_API}/offer/createmessage/${offerId}`,
          {
            content: message,
            userId: user,
          }
        );
      }

      console.log("offer message created");
    } catch (err) {
      console.log(err);
    }
  };

  const handleSuggestButton = async (price) => {
    try {
      console.log(price);
      const create = await axios.post(
        `${import.meta.env.VITE_HOSTED_API}/offer/createroom/${params.id}`,
        {
          userTwoId: post.userId,
          status: "Active",
          userId: user,
          currentOffer: price,
          buyerAccept: true,
        }
      );
      let offerId = create.data.chatroom.id;
      setOffer(price)
      sendOffer(offerId);
      sendMessage(offerId);
      console.log("offercreated");

      setOfferSent(!offerSent);
    } catch (err) {
      console.log("There is a error" + err);
    }
  };

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
              <div className="flex justify-between">
                <div>
                  <h1 className="text-[37px] mb-[18px]">{post.title}</h1>
                  <div className="flex items-center mb-[18px]">
                    <p className="text-[28px] pr-2">${post.price}</p>
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
                <button
                  className="p-4 w-[210px] rounded-[57px] border-2 border-[#C7A695] text-[25px]"
                  onClick={() => navigate(`/orderconformation/${post.id}`)}
                >
                  Buy Now
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
                <p className="text-[15px]">{post.shippingFees}</p>
              </div>
              <div className="pb-[36px]">
                <p className="text-[20px]">Returns</p>
                <p className="text-[15px]">Sellers return policy goes here</p>
              </div>
              <div>
                <p className="text-[20px]">Payment Accepted</p>
                <div className="flex gap-[30px] mt-[30px]">
                  <img src={"/assets/payment/ae.png"} className="w-[44px] h-[44px]" />
                  <img src={"/assets/payment/visa-Icon.png"} className="w-[44px] h-[44px]" />
                  <img src={"/assets/payment/mastercard-Icon.png"} className="w-[44px] h-[44px]" />
                  <img src={"/assets/payment/paypal-Icon.png"} className="w-[44px] h-[44px]" />
                  <img src={"/assets/payment/apple-pay-Icon.png"} className="w-[44px] h-[44px]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex mt-10 mb-[137px]">
          <div className="w-[704px] flex justify-center mr-[92px]">
            <div className="w-[564px] h-[101px] flex items-center">
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
          </div>
          <div className="ml-[92px]">
            {/* <div className="w-[800px] h-[221px] bg-[#D9D9D9]">Description</div> */}
            <div className="w-[600px] h-[221px] bg-[#D9D9D9] mb-[30px] break-words">
              <p>{post.description}</p>
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
                    type={"negotiation"}
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
      <Modal isVisable={showModal} onClose={() => setShowModal(false)}>
        {!offerSent ? (
          <div>
            <h1 className="text-center text-bold text-[30px] mb-[30px]">
              Make an Offer
            </h1>
            <div className="flex">
              <div className="h-[150px] w-[190px]">
                <p className="text-[22px] break-words">{post.title}</p>
                <p className="text-[22px]">Listing Price: ${post.price}</p>
                <p className="text-4">{post.userName}</p>
              </div>
              <div className="h-[150px] w-[190px]">
                <img></img>
              </div>
            </div>
            <div className="mb-8">
              <h3 className="text-[22px] text-center mb-4">
                Sugguested Offers:
              </h3>
              <div className="flex gap-[40px] justify-center">
                <button
                  className="bg-[#F1F0EB] w-[86px] h-[70px]"
                  onClick={() => handleSuggestButton(fivePercentOff)}
                >
                  <p>${fivePercentOff}</p>
                  <p>5% off</p>
                </button>
                <button
                  className="bg-[#F1F0EB] w-[86px] h-[70px]"
                  onClick={() => handleSuggestButton(tenPercentOff)}
                >
                  <p>${tenPercentOff}</p>
                  <p>10% off</p>
                </button>
                <button
                  className="bg-[#F1F0EB] w-[86px] h-[70px]"
                  onClick={() => handleSuggestButton(fifteenPercentOff)}
                >
                  <p>${fifteenPercentOff}</p>
                  <p>15% off</p>
                </button>
              </div>
            </div>
            <div className="flex items-center justify-center mb-[35px]">
              <p className="text-4 mr-6">Create a custom offer: </p>
              <input
                type="text"
                className="w-[90px] h-11 bg-[#F1F0EB]"
                onChange={(e) => setOffer(e.target.value)}
              />
            </div>
            <div>
              <p className="text-4">add a message to {post.userName}:</p>
              <textarea
                name="offermessage"
                className="w-full h-[140px] p-1 bg-[#F1F0EB]"
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <div className="flex justify-center mt-[25px]">
              <button
                className="p-3 border-2 w-[200px] h-[55px] border-[#C7A695] rounded-[57px]"
                onClick={createOffer}
              >
                SUBMIT
              </button>
            </div>
          </div>
        ) : (
          <div>
            <h1 className="text-center text-bold text-[30px] mb-[30px]">
              Offer Submitted
            </h1>
            <div className="flex">
              <div className="h-[150px] w-[190px]">
                <p className="text-[22px] break-words">{post.title}</p>
                <p className="text-[22px]">Listing Price: ${post.price}</p>
                <p className="text-4">{post.userName}</p>
              </div>
              <div className="h-[150px] w-[190px]">
                <img></img>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <p className="text-[20px] mr-[34px]">Offer: </p>
              <p className="w-[90px] h-11 bg-[#F1F0EB] text-[20px]">${offer}</p>
            </div>
            <div>
              <div className="flex justify-center mt-[25px]">
                <button
                  className="p-3 border-2 w-[200px] h-[55px] border-[#C7A695] rounded-[57px] mr-[25px]"
                  onClick={() => navigate("/activity")}
                >
                  GO TO ACTIVE OFFERS
                </button>
                <button
                  className="p-3 border-2 w-[200px] h-[55px] border-[#C7A695] rounded-[57px]"
                  onClick={() => setShowModal(false)}
                >
                  RETURN TO LISTING
                </button>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
