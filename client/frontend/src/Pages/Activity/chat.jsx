import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { io } from "socket.io-client";
import { useSelector, useDispatch } from "react-redux";
import { checkLoginStatus } from "../../Utils/auth";
import ChatAction from "../../assets/chataction.png"

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

  return (
    <div>
      <div className="w-[520px] h-[820px] border-[#C2B8A3] border-[2px] relative rounded-[8px]">
        <div className="h-[84px] border-black border-b-2 flex justify-between items-center p-4">
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
                    className={`break-all w-[350px] p-[10px] rounded-[50px] bg-[#D9D9D9] text-[12px] ${items.userId === user? "text-right" : "text-left"}`}
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
            <div className="mb-4 mt-6 flex justify-center">
              <input
                className="w-[386px] h-[32px] rounded-[50px] bg-[#D9D9D9] text-[12px]"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
              />
              <button
                className="w-20 h-[39px] mr-[29px] text-base border-black border-[1px]"
                onClick={sendMessage}
              >
                Send
              </button>
            </div>
            <div className="flex justify-center">
              <button className="w-20 h-[39px] mr-[29px] text-base border-black border-[1px]">
                Counter
              </button>
              <button className="w-20 h-[39px] mr-[29px] text-base border-black border-[1px]">
                Accept
              </button>
              <button className="w-20 h-[39px] text-base border-black border-[1px]">
                Decline
              </button>
            </div>
            <div className="flex justify-center mb-5 mt-6">
              <button className="w-[192px] h-[44px] text-xl border-black border-[1px]">
                Negotiate
              </button>
              <button className="w-[192px] h-[44px] text-xl border-black border-[1px]">
                Barter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
