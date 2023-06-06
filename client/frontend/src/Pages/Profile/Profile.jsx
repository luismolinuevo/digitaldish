import { useState } from "react";
import {} from "react-dom";
import CoverPic from "../../assets/photos/Coverpic.png";
import ProfilePic from "../../assets/photos/profilepic.png";
import Heart from "../../assets/photos/hearts.png";
import Footer from "../../Components/Footer/Footer";


// const pH = "10000rem"


export default function Profile() {
  const [followerNum, setFollerNum] = useState(201);
  const [followingNum, setFollowingNum] = useState(35);

  return (
    <div>
      <div className="h-screen pt-20 border border-red-500">
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
            <button className="bg-white border border-gray-500 hover:border-yellow-700 hover text-black rounded-full h-[3rem] w-[11rem] flex justify-center p-2">
              <img
                src={Heart}
                className="focus:bg-yellow-700 hover:bg-yellow-700 px-2 pb-3"
              />
              <p className="py-[2px]">SAVE SHOP</p>
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
      </div>

      <Footer />
    </div>
  );
}
