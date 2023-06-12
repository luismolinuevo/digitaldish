import { useState } from "react";
import ReactDOM from "react-dom";
import MouseProfilePic from "../../assets/photos/mouse-profilepic.png";
import ProductImg from "../../assets/photos/mouse105.png";
import { IoStarSharp } from "react-icons/io5";
// import Mouse105 from

export default function Followers() {
  const [title, setTitle] = useState("Eli Gamer");
  const [mutualFriends, setMutualFriends] = useState("2 mutual friends");

  return (
    <div className="comp-start py-3">
      <div className="hover:shadow-2xl">
        <div className="border-2 border-gray-500 w-full h-[8rem] ">
          <div>
            <div className="flex flex-row p-4 pt-2">
              <div className="img">
                <img src={MouseProfilePic} width="200rem" />
              </div>
              <div className="title flex flex-col text-2xl pt-2 pl-6">
                {title}
                <div className="text-sm font-normal">{mutualFriends}</div>
                <div className="date-posted text-xs  w-[10rem]">Rating</div>
              </div>
              <div className="flex flex-row justify-end w-full p-2 h-[3rem]">
              <div className="w-[5rem] hover:bg-blue-200">
                <p className="border-2 border-black font-bold py-[.2rem] flex justify-center">Unfollow</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
