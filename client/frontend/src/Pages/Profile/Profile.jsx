import { useState } from "react";
import {} from "react-dom";
import CoverPic from "../../assets/photos/Coverpic.png";
import ProfilePic from "../../assets/photos/profilepic.png";
import Heart from "../../assets/photos/hearts.png";
import Footer from "../../Components/Footer/Footer";

// const pH = "10000rem"
const listings = 12;
const feedback = 4;

export default function Profile() {
  const [followerNum, setFollerNum] = useState(201);
  const [followingNum, setFollowingNum] = useState(35);
  const [isClicked, setIsClicked] = useState(false);

  //SAVE-SHOP BUTTON
  const saveShopClicked = () => {
    setIsClicked(!isClicked);
  };

  const buttonSaves = (buttonStyle) => {
      return {
          border: isClicked ? '2px solid rgb(161 98 7)' : '2px solid rgb(107 114 128)'
      }
  }

  //USER-NAV BUTTONS function and style
  const handleClick = (buttonId) => {
    setIsClicked(buttonId === isClicked ? null : buttonId);
  };

  const buttonHighlight = (buttonId) => {
    return {
      borderBottom: buttonId === isClicked ? "2px solid #DAB24E" : "none",
    };
  };

  return (
    <div>
      <div className="h-[100rem] pt-20 border border-red-500">
        <div className="w-full border border-red-500 flex flex-col">
          <img src={CoverPic} />
        </div>
        <div className="main-pic border border-red-500 w-full pt-6 p-10 flex flex-row justify-center bg-[#F1F0EB] pr-80">
          <div className="profile-pic w-[15rem] h-[15rem]">
            <img src={ProfilePic} width={"250px"} />
          </div>
          <div className="flex flex-col pl-10 pt-10">
            <h1 className="text-4xl font-semibold font-[Inter]">
              {" "}
              Mouse King{" "}
            </h1>

            <div className="flex flex-row pb-2">
              <p className="flex flex-col p-2">
                Followers
                <p className="pl-8">{followerNum}</p>
              </p>

              <p className="flex flex-col p-2">
                Following
                <p className="pl-8">{followingNum}</p>
              </p>
            </div>
            <button className="bg-white border-[3px] border-gray-500 hover:border-yellow-700 hover text-black rounded-full h-[3rem] w-[10rem] flex justify-center pr-6 p-2"
            style={buttonSaves(1)} 
            >
              <img
                src={Heart}
                className="focus:text-yellow-700 text-blue-500 px-2"
              />
              <p className="py-[2px]" 
                onClick={saveShopClicked}>
                SAVE {isClicked ? null : <span>SHOP</span>}
              </p>
            </button>
          </div>
          <div className="bio-description px-10 pt-12 w-[30rem]">
            <p>
              I specialize in all things mice. If you are into computers, like
              myself, then you come to the right place.
            </p>
          </div>

          <div className="horizontal-line border-b border-blue-500 pt-20"></div>
        </div>
        <div className="user-nav border-b-2 border-gray-500 h-[4rem] flex flex-row justify-center gap-12 font-bold text-xl pt-4 mx-20">
          <div className="listing">
            <button style={buttonHighlight(1)} onClick={() => handleClick(1)}>
              Listing
              <span className="text-gray-500 font-medium"> ({listings})</span>
            </button>
          </div>
          <div className="friends">
            <button style={buttonHighlight(2)} onClick={() => handleClick(2)}>
              Friends
              <span>{}</span>
            </button>
          </div>
          <div className="feedback">
            <button style={buttonHighlight(3)} onClick={() => handleClick(3)}>
              Feedback
              <span className="text-gray-500 font-medium"> ({feedback})</span>
            </button>
          </div>
          <div className="flex flex-row justify-end ">
            <button className="bg-[#DAB24E] border border-[#DAB24E] w-[9rem] h-8 rounded-sm font-normal font-[Inter]">
              CONTACT
            </button>
          </div>
        </div>
        <div className="border-2 border-blue-500 h-[40rem] mt-10">
          <div className="border border-green-500 w-[200px] h-[20px] p-5 m-5"></div>
          <div className="flex flex-col font-bold gap-4">
            <p>All</p>
            <p>On Sale</p>
            <p>Mice</p>
            <p>Custom Mice</p>
          </div>
          <div className="border border-green-500 w-[200px] h-[40px] flex justify-center p-2 m-5">Contact seller</div>
          <div className="flex flex-col font-bold gap-4">
            <p>Total sales 82</p>
            <p>User rating 5/5 stars</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

// const button = useButton()

// function useButton() {
//     const [isClicked, setIsClicked] = useState(false);

//     const handleClick = (buttonId) => {
//         setIsClicked(buttonId === isClicked ? null : buttonId);
//     };

//     const buttonHighlight = (buttonId) => {
//         return {
//             borderBottom: buttonId === clickedButton ? '2px solid #DAB24E' : 'none',
//         }
//     };
//   }
