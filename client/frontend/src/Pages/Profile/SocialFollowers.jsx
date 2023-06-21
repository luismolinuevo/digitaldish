import { useState } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Followers from "./Followers";

export default function SocialFollowers() {
  const [isClicked, setIsClicked] = useState(false);

  const listings = 9;
  const feedback = 2;

  //USER-NAV BUTTONS function and style
  const handleClick = (buttonId) => {
    setIsClicked(buttonId === isClicked ? null : buttonId);
  };

  const buttonHighlight = (buttonId) => {
    return {
      borderBottom: buttonId === isClicked ? "2px solid #DAB24E" : "none",
    };
  };

  //LINK SCROLLlING
  const handleScroll = (event) => {
    event.preventDefault();
    const section = document.getElementById("bttm-gray-line");
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="pt-[8rem]">
      <div className="px-20">
        <div className="user-nav h-[3rem] flex flex-row justify-center gap-12 font-bold text-xl">
          <div className="flex flex-row w-full justify-start gap-10 px-16">
            <div className="listing">
              <button className="hover:shadow-xl">
                <Link to={"/editprofile"}>Listing</Link>
                <span className="text-gray-500 font-medium"> ({listings})</span>
              </button>
            </div>
            <div className="friends border-b-2 border-[#DAB24E]">
              <button className="hover:shadow-xl">
                <Link to={"/socialfollowers"}>Friends</Link>
                <span>{}</span>
              </button>
            </div>
            <div className="feedback">
              <button className="hover:shadow-xl">
                <Link to={"#bttm-gray-line"} onClick={handleScroll}>
                  Feedback
                </Link>
                <span className="text-gray-500 font-medium"> ({feedback})</span>
              </button>
            </div>
          </div>
        </div>
        <p className="text-4xl pt-10 flex justify-center font-bold">Social Followers</p>
      </div>
      <div className="flex flew-row p-10 pt-5 mx-20">
        <div className="flex flex-col p-5 pt-0">
          <Link to={"/profile"}> <Followers /> </Link>
          <Followers />
          <Followers />
          <Followers />
          <Followers />
          <Followers />
          <Followers />
          <Followers />
        </div>
        <div className="flex flex-col p-5 pt-0 ">
          <Followers />
          <Followers />
          <Followers />
          <Followers />
          <Followers />
          <Followers />
          <Followers />
          <Followers />
        </div>
      </div>
      <Footer />
    </div>
  );
}
