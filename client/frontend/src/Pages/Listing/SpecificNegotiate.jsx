import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Modal from "../../Components/Modal";
import { useSelector, useDispatch } from "react-redux";
import { checkLoginStatus } from "../../Utils/auth";
import ae from "../../assets/payment/ae.png";
import visa from "../../assets/payment/visa-Icon.png";
import mastercard from "../../assets/payment/mastercard-Icon.png";
import paypal from "../../assets/payment/paypal-Icon.png";
import apple from "../../assets/payment/apple-pay-Icon.png";

export default function SpecificNegotiate() {
  //TODO maybe start currnet price state at 
  //TODO may have to edit post route to check if offer already exist, also check to make sure the post isnt yours
  //TODO make the buy now button work(figure out if I need two pages)
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.userInfo);

  const [post, setPost] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [offer, setOffer] = useState(post.price);
  const [message, setMessage] = useState("");
  const [offerSent, setOfferSent] = useState(false);

  useEffect(() => {
    dispatch(checkLoginStatus());
    const fetchPost = async () => {
      try {
        const post = await axios.get(`http://localhost:8080/post/${params.id}`);

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

  const createOffer = async () => {
    try {
      const create = await axios.post(
        `http://localhost:8080/offer/createroom/${params.id}`,
        {
          userTwoId: post.userId,
          status: "Active",
          userId: user,
          currentOffer: offer,
          buyerAccept: true
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
      let offerMessage = user + "has created a offer of $" + offer
      const createMessage = await axios.post(
        `http://localhost:8080/offer/createmessage/${offerId}`,
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
      const createMessage = await axios.post(
        `http://localhost:8080/offer/createmessage/${offerId}`,
        {
          content: message,
          userId: user,
        }
      );

      console.log("offer message created");
    } catch (err) {
      console.log(err);
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
          <div className="ml-[92px]">
            {/* <div className="w-[800px] h-[221px] bg-[#D9D9D9]">Description</div> */}
            <div className="w-[600px] h-[221px] bg-[#D9D9D9] mb-[30px]">
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
                <button className="bg-[#F1F0EB] w-[86px] h-[70px]">
                  <p>${post.price - (post.price * 0.05).toFixed(2)}</p>
                  <p>5% off</p>
                </button>
                <button className="bg-[#F1F0EB] w-[86px] h-[70px]">
                  <p>${post.price - (post.price * (0.1).toFixed(2))}</p>
                  <p>10% off</p>
                </button>
                <button className="bg-[#F1F0EB] w-[86px] h-[70px]">
                  <p>${post.price - (post.price * (0.15).toFixed(2))}</p>
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
