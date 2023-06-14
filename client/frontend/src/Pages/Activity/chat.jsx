import React, { useState, useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { io } from "socket.io-client";
import { useSelector, useDispatch } from "react-redux";
import { checkLoginStatus } from "../../Utils/auth";
// import ChatAction from "../../assets/chataction.png";
// import ChatSend from "../../assets/chatsend.png";
import Modal from "../../Components/Modal";

const socket = io(":8080", {
  reconnectionDelay: 1000,
  reconnection: true,
  reconnectionAttemps: 10,
  transports: ["websocket"],
  agent: false,
  upgrade: false,
  rejectUnauthorized: false,
});

export default function Chat() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const offerId = useSelector((state) => state.offers.currentOffer);
  const user = useSelector((state) => state.auth.userInfo);
  console.log(user);
  // console.log(offerId)

  const [messages, setMessages] = useState([]);
  const [postInfo, setPostInfo] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const messagesEndRef = useRef(null);
  const [negoiteorbarter, setNegoiateorbarter] = useState(0);
  const [currentOffer, setCurrentOffer] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [offerInfo, setOfferInfo] = useState([]);
  const [bothAccept, setBothAccept] = useState(false);

  // const socket = io();

  useEffect(() => {
    dispatch(checkLoginStatus());
    // const socket = io.connect("http://localhost:8080/");
    // Join the offer room
    socket.emit("connection", "Hi there");
    socket.emit("joinOfferRoom", offerId);

    // Listen for new messages
    socket.on("newMessage", () => {
      // Fetch the latest messages
      fetchMessages();
    });

    // Fetch initial messages
    fetchMessages();

    return () => {
      // Clean up event listeners
      socket.off("newMessage");
    };
  }, [offerId]); //putting offerId here made it so that this runs whenever offerId has changed

  useEffect(() => {
    scrollToBottom(); //this causes the bug that moves the page down when a new message is created
  }, [messages]);

  const fetchMessages = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/offer/${offerId}`
      );
      const { success, getChat } = response.data;

      if (success) {
        console.log(getChat);
        setPostInfo(getChat.post);
        setMessages(getChat.offermessages);
        setOfferInfo(getChat);
      }

      if (getChat.buyerAccept === true && getChat.sellerAccept == true) {
        setBothAccept(true);
      } else {
        setBothAccept(false);
      }
    } catch (error) {
      console.log("Error fetching messages:", error);
    }
  };

  const sendMessage = async () => {
    try {
      const message = {
        content: inputMessage,
        userId: user, // Replace with the actual user ID
      };
      // Send the message to the server
      socket.emit("sendOfferMessage", message, offerId);

      setInputMessage(""); // Clear the input field
    } catch (error) {
      console.log("Error sending message:", error);
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleClick = (buttonIndex) => {
    setNegoiateorbarter(buttonIndex);
  };

  const handleOffer = async () => {
    try {
      setShowModal(false);
      const message = {
        content: `The current offer is $${currentOffer}`,
        userId: user, // Replace with the actual user ID
      };
      // Send the message to the server
      socket.emit("sendOfferMessage", message, offerId);

      // const editOffer = await axios.put(`http://localhost:8080/offer/editoffer/${(offerId)}`, {
      //   currentOffer: currentOffer,
      // });

      if (postInfo.userId === user) {
        const editOffer = await axios.put(
          `http://localhost:8080/offer/editoffer/${offerId}`,
          {
            buyerAccept: false,
            sellerAccept: true,
            currentOffer: currentOffer,
          }
        );
      } else {
        const editOffer = await axios.put(
          `http://localhost:8080/offer/editoffer/${offerId}`,
          {
            sellerAccept: false,
            buyerAccept: true,
            currentOffer: currentOffer,
          }
        );
      }
    } catch (error) {
      console.log("Error sending message:", error);
    }
  };

  const handleDecline = async () => {
    try {
      const decline = await axios.put(
        `http://localhost:8080/offer/editoffer/${offerId}`,
        {
          sellerAccept: false,
          buyerAccept: false,
        }
      );

      const declineMessage = {
        content: "I decline that offer",
        userId: user, // Replace with the actual user ID
      };
      socket.emit("sendOfferMessage", declineMessage, offerId);

      console.log(decline);
    } catch (error) {
      console.log("Error declining offer", error);
    }
  };
  //I could make a button appear instead of nagivating, need to make separte confirmation page for offers, test
  const handleAccept = async () => {
    try {
      if (user === postInfo.userId) {
        const accept = await axios.put(
          `http://localhost:8080/offer/editoffer/${offerId}`,
          {
            sellerAccept: true,
          }
        );

        console.log(accept);
        if (
          accept.data.editOffer.sellerAccept == true &&
          accept.data.editOffer.buyerAccept == true
        ) {
          const sellerAcceptMessage = {
            content: "Thanks",
            userId: user,
          };
          socket.emit("sendOfferMessage", sellerAcceptMessage, offerId);

          setBothAccept(true);
        }
      } else {
        const accept = await axios.put(
          `http://localhost:8080/offer/editoffer/${offerId}`,
          {
            buyerAccept: true,
          }
        );

        if (
          accept.data.editOffer.sellerAccept == true &&
          accept.data.editOffer.buyerAccept == true
        ) {
          console.log("hey");
          const sellerAcceptMessage = {
            content: "Thanks",
            userId: user,
          };
          socket.emit("sendOfferMessage", sellerAcceptMessage, offerId);

          setBothAccept(true);
        }
      }
    } catch (err) {
      console.log("There is a error", err);
    }
  };

  const handleCheckout = () => {
    navigate(`/offerorderconform/${offerInfo.id}`);
  };

  return (
    <div>
      <div className="w-[520px] h-[820px] border-[#C2B8A3] border-[2px] relative rounded-[8px]">
        <div className="h-[84px] border-[#C7A695] border-b-2 flex justify-between items-center p-4">
          <div>
            <p className="text-[22px]">
              <Link to={`/specneglisting/${postInfo.id}`}>
                {postInfo.title}
              </Link>
            </p>
            <p className="text-[12px]">{postInfo.userName}</p>
          </div>
          <div className="flex">
            <Link to={`/specneglisting/${postInfo.id}`}>
              <img
                className="w-[52px] h-[52px] pr-1"
                src={
                  postInfo.img && postInfo.img.length > 0
                    ? postInfo.img[0].url.toString()
                    : "https://placehold.jp/52x52.png"
                }
              ></img>
            </Link>
            <button className="">
              <img src={"/assets/chataction.png"} />
            </button>
          </div>
        </div>
        <div className="h-full">
          <div
            className={`h-[65%] overflow-y-scroll bg-[#F5F5F5] border-b-[2px] border-[#C2B8A3] ${
              negoiteorbarter === 1 ? "h-[68%]" : ""
            }`}
          >
            {messages.length != 0 ? (
              messages.map((items) => (
                <div
                  className={`px-[20px] mb-[16px] ${
                    items.userId === user
                      ? "flex justify-end"
                      : "flex justify-start"
                  }`}
                  key={items.id}
                >
                  <p
                    className={`break-all w-[350px] p-[5px] px-2 rounded-[50px] bg-white border-2 text-[12px] ${
                      items.userId === user
                        ? "text-right border-[#C7A695]"
                        : "text-left border-[#94B9FF]"
                    }`}
                  >
                    {items.content}
                  </p>
                </div>
              ))
            ) : (
              <p></p>
            )}
            <div ref={messagesEndRef} />
          </div>
          <div className="absolute bottom-0 w-full">
            <div className="flex justify-center">
              <div className="mb-4 mt-6 flex justify-center items-center w-[386px] h-[32px] border-[#C7A695] border-2 rounded-[50px]">
                <input
                  className="h-[32px] w-[85%] text-[12px] outline-none bg-transparent"
                  placeholder="text box for user messages"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                />
                <button className="" onClick={sendMessage}>
                  <img src={"/assets/chatsend.png"} />
                </button>
              </div>
            </div>
            {negoiteorbarter === 0 ? (
              <div className="flex justify-center">
                {bothAccept ? (
                  <div>
                    {user === postInfo.userId ? (
                      <div className="w-[195px] h-[44px] rounded-[60px] px-4 text-base border-[#C7A695] border-4 text-center">
                        <p>Thank you</p>
                      </div>
                    ) : (
                      <button
                        className="w-[195px] h-[44px] rounded-[57px] px-4 text-base border-[#C7A695] border-4"
                        onClick={handleCheckout}
                      >
                        Checkout
                      </button>
                    )}
                  </div>
                ) : (
                  <div>
                    <button
                      className="w-[95px] h-[44px] rounded-[57px] px-4 mr-[29px] text-base border-[#C7A695] border-4"
                      onClick={() => setShowModal(true)}
                    >
                      OFFER
                    </button>
                    <button
                      className="w-[95px] h-[44px] rounded-[57px] px-4 mr-[29px] text-base border-[#C7A695]  border-4"
                      onClick={handleAccept}
                    >
                      ACCEPT
                    </button>
                    <button
                      className="w-[95px] h-[44px] rounded-[57px] px-4 text-base border-[#C7A695] border-4"
                      onClick={handleDecline}
                    >
                      DECLINE
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <p></p>
            )}

            <div className="flex justify-center mb-5 mt-6">
              <button
                className={`mr-[34px] w-[176px] h-[50px] px-4 text-[22px] rounded-[44px] border-[#DAB24E] border-4 ${
                  negoiteorbarter === 0 ? "bg-[#DAB24E]" : ""
                }`}
                onClick={() => handleClick(0)}
              >
                NEGOTIATION
              </button>
              <button
                className={`w-[176px] h-[50px] px-4 text-[22px] rounded-[44px] border-[#DAB24E] border-4 ${
                  negoiteorbarter === 1 ? "bg-[#DAB24E]" : ""
                }`}
                onClick={() => handleClick(1)}
              >
                BARTER
              </button>
            </div>
          </div>
        </div>
      </div>

      <Modal isVisable={showModal} onClose={() => setShowModal(false)}>
        <div>
          <h1 className="text-[34px] text-center mb-[47px]">Make an Offer</h1>
          <div>
            <h3 className="text-[20px] text-center mb-4">Suggested Offers:</h3>
            <div className="flex gap-[40px] justify-center mb-[30px]">
              <div className="w-[90px] h-[73px] bg-[#F0EEEE] flex flex-col justify-center items-center">
                <button className="bg-[#F1F0EB] w-[86px] h-[70px]">
                  <p>${postInfo.price - (postInfo.price * 0.05).toFixed(2)}</p>
                  <p>5% off</p>
                </button>
              </div>
              <div className="w-[90px] h-[73px] bg-[#F0EEEE] flex flex-col justify-center items-center">
                <button className="bg-[#F1F0EB] w-[86px] h-[70px]">
                  <p>${postInfo.price - (postInfo.price * 0.1).toFixed(2)}</p>
                  <p>10% off</p>
                </button>
              </div>
              <div className="w-[90px] h-[73px] bg-[#F0EEEE] flex flex-col justify-center items-center">
                <button className="bg-[#F1F0EB] w-[86px] h-[70px]">
                  <p>${postInfo.price - (postInfo.price * 0.15).toFixed(2)}</p>
                  <p>15% off</p>
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-center mb-[35px]">
            <p className="text-5 mr-6">Create a custom offer: </p>
            <input
              type="text"
              className="bg-[#F0EEEE] w-[90px] h-[34px] text-5"
              onChange={(e) => setCurrentOffer(e.target.value)}
            />
          </div>
          <div className="flex justify-center">
            <button
              className="w-[274px] h-[59px] bg-[#F0EEEE] rounded-[57px] text-[32px]"
              onClick={handleOffer}
            >
              SUBMIT
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
