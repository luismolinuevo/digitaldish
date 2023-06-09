import { useState } from "react";
import {} from "react-dom";
import { Link } from "react-router-dom";
// import MouseCoverPic from "../../assets/photos/mouse-coverpic.png";
// import MouseProfilePic from "../../assets/photos/mouse-profilepic.png";
// import Heart from "../../assets/photos/hearts.png";
// import MagnifyingGlass from "../../assets/icons/Icon-MagnifyingGlass.png";
import Footer from "../../Components/Footer/Footer";
import Upload from "./Upload";
import ReviewCard from "./CustomerReview";
import { Select, Option } from "@material-tailwind/react";
import Modal from "../../Components/Modal";
import { HeaderComponent, CardComponent } from "../Community/ListingComponent";
import "./Profile.css";

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
      border: isClicked
        ? "2px solid rgb(161 98 7)"
        : "2px solid rgb(107 114 128)",
    };
  };

  //USER-NAV BUTTONS function and style
  const handleClick = (buttonId) => {
    setIsClicked(buttonId === isClicked ? null : buttonId);
  };

  const buttonHighlight = (buttonId) => {
    return {
      borderBottom: buttonId === isClicked ? "2px solid #DAB24E" : "none",
    };
  };

  //CONTACT SELLER
  const totalSales = 82;
  const userRating = "5/5";

  //LINK SCROLLlING
  const handleScroll = (event) => {
    event.preventDefault();
    const section = document.getElementById("bttm-gray-line");
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div className="h-[175rem] pt-20">
        <div className="w-full flex flex-col">
          <img src={"/assets/photos/mouse-coverpic.png"} />
        </div>

        <div className="main-pic w-full pt-6 p-10 flex flex-row justify-center bg-[#F1F0EB]">
          <div className="profile-pic">
            <img src={"/assets/photos/mouse-profilepic.png"} />
          </div>
          <div className="flex flex-col pl-10 pt-4 w-[18rem]">
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
            <button
              className="bg-white border-[3px] border-gray-500 hover:border-yellow-700 hover text-black rounded-full h-[3rem] w-[10.5rem] flex justify-center pr-6 p-2 hover:shadow-2xl"
              strokeWidth={2}
              style={buttonSaves(1)}
            >
              <img
                src={"/assets/photos/hearts.png"}
                className="focus:text-yellow-700 px-2"
              />
              <p className="py-[2px]" onClick={saveShopClicked}>
                SAVE {isClicked ? null : <span>SHOP</span>}
              </p>
            </button>
          </div>
          <div className="bio-description pt-5 w-[50rem]">
            <p>
              I specialize in all things mice. If you are into computers, like{" "}
              {<br />}
              myself, then you come to the right place.
            </p>
          </div>
          <div className="horizontal-line border-b border-blue-500 pt-20"></div>
        </div>

        <body className="pt-4 mx-20 h-[100rem]">
          <div className="user-nav border-b-2 border-gray-500 h-[3rem] flex flex-row justify-center gap-12 font-bold text-xl">
            <div className="flex flex-row w-full justify-center gap-10 pl-40">
              <div className="listing">
                <button
                  style={buttonHighlight(1)}
                  onClick={() => handleClick(1)}
                  strokeWidth={2}
                  className="hover:shadow-xl"
                >
                  Listing
                  <span className="text-gray-500 font-medium">
                    {" "}
                    ({listings})
                  </span>
                </button>
              </div>
              <div className="friends">
                <button
                  style={buttonHighlight(2)}
                  onClick={() => handleClick(2)}
                  strokeWidth={2}
                  className="hover:shadow-xl"
                >
                  <Link to={"/socialfollowers"}>Friends</Link>
                  <span>{}</span>
                </button>
              </div>
              <div className="feedback">
                <button
                  style={buttonHighlight(3)}
                  onClick={() => handleClick(3)}
                  strokeWidth={2}
                  className="hover:shadow-xl"
                >
                  <Link to={"#bttm-gray-line"} onClick={handleScroll}>
                    Feedback
                  </Link>
                  <span className="text-gray-500 font-medium">
                    {" "}
                    ({feedback})
                  </span>
                </button>
              </div>
            </div>
            <div className="flex flex-row justify-end w-full">
              <button className="bg-[#DAB24E] border border-[#DAB24E] w-[9rem] h-8 rounded-sm font-normal font-[Inter] hover:bg-[#f2b519] hover:shadow-2xl">
                CONTACT
              </button>
            </div>
          </div>

          {/**FEATURED LISTING 
                
                className="pl-3">v</div>
            */}
          <div>
            <p className="sort-by flex justify-end text-blue-500 pr-10 py-8 gap-3 hover:text-blue-800">
              <div className="w-[8rem] pr-[10rem]">
                <Select label="Sort by" className="border-none">
                  <Option>Relevance</Option>
                  <Option>Most recent</Option>
                  <Option>Lowest price</Option>
                  <Option>Highest price</Option>
                </Select>
              </div>
            </p>
          </div>

          {/**MAIN BAR */}

          {/**SIDEBAR COLUMN           
  
  
  
  */}

          <div name="sidebar" className="flex flex-wrap">
            <div className=" h-[40rem] mt-10">
              <form className="search-bar border-2 border-gray-500 rounded-full w-[16rem] h-[2.5rem] m-5 appearance-none bg-transparent text-black shadow-lg focus:outline-none">
                <div className="flex flex-row">
                  <input
                    type="search"
                    placeholder=""
                    onChange={""}
                    className="appearance-none bg-transparent text-lg text-black p-2 leading-tight border-none w-[14rem] focus:outline-none"
                  />
                  <div className="">
                    <button
                      className="cursor-pointer hover:bg-indigo-100 h-[2rem]"
                      onClick={"handleFormSubmit"}
                    >
                      <input
                        type="image"
                        src={"/assets/icons/Icon-MagnifyingGlass.png"}
                        alt="Magnifying Glass"
                        width="18rem"
                        className="flex flex-row justify-end item-center self-center"
                      />
                    </button>
                  </div>
                </div>
              </form>

              <div className="flex flex-col gap-10">
                <div className="pl-5 text-lg flex flex-col">
                  <div className="flex flex-col font-bold gap-3">
                    <p className="hover:text-blue-900">All</p>
                    <p className="hover:text-blue-900">On Sale</p>
                    <p className="hover:text-blue-900">Mice</p>
                    <p className="hover:text-blue-900">Custom Mice</p>
                  </div>
                </div>
                <div className="pt-20">
                  <div>
                    <button
                      onClick={"handleClick"}
                      className="border-2 border-gray-500 rounded-full w-[14rem] h-[2.5rem] flex justify-center p-1 m-5 text-xl font-bold hover:bg-gray-100 hover:shadow-2xl"
                    >
                      Contact seller
                    </button>
                    <div className="flex flex-col font-semibold gap-3 pl-5 text-lg">
                      <p className="hover:text-blue-900">
                        Total sales <span>{totalSales}</span>
                      </p>
                      <p className="hover:text-blue-900">
                        User rating <span>{userRating}</span> stars
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              id="MAIN-COLUMN"
              className="w-[61.1rem] flex-wrap"
            >
              <div
                name="featured-listing"
                className="featured-listings flex flex-row flex-wrap text-2xl pl-5 font-bold pb-[6rem]"
              >
                Featured listings
              </div>
              <div name="LISTINGS" className="flex flex-row flex-wrap ">
                <div name="main1-1" className="flex flex-row h-80 gap-5 pl-10">
                  <div className="w-[18rem]">
                    <img src={"/assets/photos/product-title1.png"} />
                  </div>
                  <div name="main1-2" className="flex h-80">
                    <div className="w-[18rem]">
                      <img src={"/assets/photos/product-title2.png"} />
                    </div>
                  </div>
                  <div name="main1-3" className="flex h-80">
                    <div className="w-[18rem]">
                      <img src={"/assets/photos/product-title3.png"} />
                    </div>
                  </div>
                </div>

                <div name="main2-1" className="flex flex-row flex-wrap gap-5 pl-10 ">
                  <div className="w-[18rem]">
                    <img src={"/assets/photos/1-croc-skin-mouse.png"} />
                  </div>

                  <div name="main2-2" className="flex flex-row h-80">
                    <div className="w-[18rem]">
                      <img src={"/assets/photos/2-wood-grain-mouse.png"} />
                    </div>
                  </div>
                  <div name="main2-3" className="flex h-80">
                    <div className="w-[18rem]">
                      <img src={"/assets/photos/3-tie-dye-mouse.png"} />
                    </div>
                  </div>
                </div>
                <div
                  name="main3-1"
                  className="flex flex-row h-80 flex-wrap gap-5 pl-10"
                >
                  <div className="w-[18rem]">
                    <img src={"/assets/photos/7-gaming-mouse.png"} />
                  </div>

                  <div name="main3-2" className="flex h-80">
                    <div className="w-[18rem]">
                      <img src={"/assets/photos/8-gaming-mouse.png"} />
                    </div>
                  </div>
                  <div name="main3-3" className="flex h-80">
                    <div className="w-[18rem]">
                      <img src={"/assets/photos/9-crystal-mouse.png"} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            id="bttm-gray-line"
            className="bottom-gray-line my-5 border-b-2 border-gray-500"
          ></div>
          <div id="ratings-section" name="ratings-section">
            <div className="flex flex-row justify-end my-6">
              <button className="bg-[#DAB24E] border border-[#DAB24E] w-[9rem] h-8 rounded-sm font-normal font-[Inter] hover:bg-[#f2b519] hover:shadow-2xl">
                ADD RATING
              </button>
            </div>
            <div className="rating-card flex flex-col gap-10"></div>
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
          </div>
        </body>
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
