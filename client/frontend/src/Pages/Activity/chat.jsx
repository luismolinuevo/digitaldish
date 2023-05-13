import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { io } from "socket.io-client";
import { useSelector, useDispatch } from "react-redux";
import { checkLoginStatus } from "../../Utils/auth";
import ChatAction from "../../assets/chataction.png"
import ChatSend from "../../assets/chatsend.png"

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
  const dispatch = useDispatch();
  const offerId = useSelector((state) => state.offers.currentOffer);
  const user = useSelector((state) => state.auth.userInfo);
  console.log(user);
  // console.log(offerId)

  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const messagesEndRef = useRef(null);
  const [negoiteorbarter, setNegoiateorbarter] = useState(0)

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
    scrollToBottom();
  }, [messages]);

  const fetchMessages = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/offer/${offerId}`
      );
      const { success, getChat } = response.data;

      if (success) {
        console.log(getChat);
        setMessages(getChat.offermessages);
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

  return (
    <div>
      <div className="w-[520px] h-[820px] border-[#C2B8A3] border-[2px] relative rounded-[8px]">
        <div className="h-[84px] border-[#C7A695] border-b-2 flex justify-between items-center p-4">
          <div>
            <p className="text-[22px]">Product Name</p>
            <p className="text-[12px]">Username</p>
          </div>
          <div className="flex">
            <img
              className="w-[52px] h-[52px] pr-1"
              src="https://placehold.jp/52x52.png"
            ></img>
            <button className=""><img src={ChatAction}/></button>
          </div>
        </div>
        <div className="h-full">
          <div className="h-[65%] overflow-y-scroll bg-[#F5F5F5] border-b-[2px] border-[#C2B8A3]">
            {messages.length != 0 ? (
              messages.map((items) => (
                <div
                  className={`px-[20px] mb-[16px] ${items.userId === user? "flex justify-end": "flex justify-start"}`}
                  key={items.id}
                >
                  <p
                    className={`break-all w-[350px] p-[5px] px-2 rounded-[50px] bg-white border-2 text-[12px] ${items.userId === user ? "text-right border-[#C7A695]" : "text-left border-[#94B9FF]"}`}
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
              <button
                className=""
                onClick={sendMessage}
              >
                <img src={ChatSend}/>
              </button>
            </div>
            </div>
            <div className="flex justify-center">
              <button className="w-[95px] h-[44px] rounded-[57px] px-4 mr-[29px] text-base border-[#C7A695] border-4">
                OFFER
              </button>
              <button className="w-[95px] h-[44px] rounded-[57px] px-4 mr-[29px] text-base border-[#C7A695]  border-4">
                ACCEPT
              </button>
              <button className="w-[95px] h-[44px] rounded-[57px] px-4 text-base border-[#C7A695] border-4">
                DECLINE
              </button>
            </div>
            <div className="flex justify-center mb-5 mt-6">
              <button className={`mr-[34px] w-[176px] h-[50px] px-4 text-[22px] rounded-[44px] border-[#DAB24E] border-4 ${negoiteorbarter === 0 ? "bg-[#DAB24E]" : ""}`} onClick={() => handleClick(0)}>
                NEGOTIATION
              </button>
              <button className={`w-[176px] h-[50px] px-4 text-[22px] rounded-[44px] border-[#DAB24E] border-4 ${negoiteorbarter === 1 ? "bg-[#DAB24E]" : ""}`} onClick={() => handleClick(1)}>
                BARTER
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
