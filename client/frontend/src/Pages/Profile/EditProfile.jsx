import { useState, useEffect } from "react";
import {} from "react-dom";
import { Link } from "react-router-dom";
// import EliCoverPic from "../../assets/photos/eli-coverpic.png";
// import EliProfilePic from "../../assets/photos/eli-profilepic.png";
// import Heart from "../../assets/photos/hearts.png";
// import MagnifyingGlass from "../../assets/icons/Icon-MagnifyingGlass.png";
import Footer from "../../Components/Footer/Footer";
import Upload from "./Upload";
import ReviewCard from "./CustomerReview";
import { Select, Option } from "@material-tailwind/react";
import "./Profile.css";
import { logoutUser } from "../../Utils/auth";
import { useDispatch } from "react-redux";
import axios from "axios";
import UserListingCard from "../../Components/UserListingCard";
// const pH = "10000rem"
const listings = 9;
const feedback = 2;

export default function EditProfile() {
  const dispatch = useDispatch();
  const [followerNum, setFollerNum] = useState(201);
  const [followingNum, setFollowingNum] = useState(35);
  const [isClicked, setIsClicked] = useState(false);
  const [userListing, setUserListing] = useState([]);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const fetchUserListing = async () => {
      try {
        const token = localStorage.getItem("token");
        const fetchPost = await axios.get(
          `${import.meta.env.VITE_HOSTED_API}/post/userPost`,
          {
            headers: {
              Authorization: `Bearer ${token}`, // Include the token in the Authorization header
            },
          }
        );

        setUserListing(fetchPost.data.getPost);
        console.log(fetchPost.data.getPost);
      } catch (err) {
        console.log("There is a error" + err);
      }
    };

    fetchUserListing();
  }, []);

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
  const totalSales = 10;
  const userRating = "4/5";

  //LINK SCROLLlING
  const handleScroll = (event) => {
    event.preventDefault();
    const section = document.getElementById("bttm-gray-line");
    section.scrollIntoView({ behavior: "smooth" });
  };

  const handleScroll2 = (event) => {
    event.preventDefault();
    const top = document.getElementById("move-to-top");
    top.scrollIntoView({ behavior: "smooth" });
  };

  const handleLogout = (e) => {
    event.preventDefault();
    dispatch(logoutUser());
  };

  return (
    <div>
      <div className="h-[160rem] pt-20">
        <div name="move-to-top" id="move-to-top" onClick={handleScroll2}>
          <div className="w-full flex flex-col">
            <img src={"/assets/photos/eli-coverpic.png"} />
          </div>
        </div>
        <div className="main-pic w-full pt-6 p-10 flex flex-row justify-center bg-[#F1F0EB]">
          <div className="profile-pic">
            <img src={"/assets/photos/eli-profilepic.png"} />
          </div>
          <div className="flex flex-col pl-10 pt-4 w-[18rem]">
            <h1 className="text-4xl font-semibold font-[Inter]"> Eli Gamer </h1>

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
              Hi, I'm a gamer enthusiast and keyboard aficionado who has turned{" "}
              {<br />}
              my passion into a business. Hope you like what you see.
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
            <div className="flex flex-row justify-end w-full gap-3">
              <button className="bg-[#000] border border-[#000] w-[9rem] h-8 rounded-sm font-normal font-[Inter] hover:bg-[#f2b519] hover:shadow-2xl text-white">
                <Link to={"/useraccount"}>EDIT PROFILE</Link>
              </button>
              <button
                className="bg-[#000] border border-[#000] w-[9rem] h-8 rounded-sm font-normal font-[Inter] hover:bg-[#f2b519] hover:shadow-2xl text-white"
                onClick={handleLogout}
              >
                <Link to={"/"}>LOG OUT</Link>
              </button>
              <Link
                to={"/listing"}
                className="bg-[#DAB24E] border border-[#DAB24E] w-[9rem] h-8 rounded-sm font-normal font-[Inter] hover:bg-[#f2b519] hover:shadow-2xl text-center"
              >
                ADD LISTING
              </Link>
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
            {/**GRID LISTINGS */}
            <div
              id="MAIN-COLUMN"
              className="w-[61.1rem] flex-wrap"
            >
              <div
                name="featured-listing"
                className="featured-listings flex flex-row flex-wrap text-2xl pl-5 font-bold pb-[6rem"
              >
                Featured listings
              </div>
              <div name="LISTINGS" className="flex flex-row flex-wrap"
              >
                {userListing && userListing.length != 0 ? (
                  userListing.map((item) => (
                    <div>
                      {!isHovered ? (

                      

                      <UserListingCard
                        title={item.title}
                        price={item.price}
                        id={item.id}
                        img={item.img != 0 ? item.img[0].url.toString() : ""}
                        type={item.type}
                        
                      />
                      ):(
                        <div className="w-[275px] h-[220px] px-[10px] mb-[20px]">
                          test
                        </div>
                      )
                      }
                    </div>
                  ))
                ) : (
                  <p>No listing</p>
                )}
                {/* <div
                  name="main1-1"
                  className="flex flex-col w-80 h-80"
                >
                  <div className="">
                    <img src={"/assets/photos/eli-profilepic.png"} />
                  </div>
                  <div
                    name="main1-2"
                    className="flex flex-col w-80 h-80"
                  >
                    <div className="">
                      <img src={"/assets/photos/eli-profilepic.png"} />
                    </div>
                  </div>
                  <div
                    name="main1-3"
                    className="flex flex-col w-80 h-80"
                  >
                    <div className="">
                      <img src={"/assets/photos/eli-profilepic.png"} />
                    </div>
                  </div>
                </div>

                <div name="main2-1" className="">
                  <div className="">
                    <img src={"/assets/photos/eli-profilepic.png"} />
                  </div>

                  <div
                    name="main2-1"
                    className="flex flex-col w-80 h-80"
                  >
                    <div className="">
                      <img src={"/assets/photos/eli-profilepic.png"} />
                    </div>
                  </div>
                  <div
                    name="main2-3"
                    className="flex flex-col w-80 h-80"
                  >
                    <div className="">
                      <img src={"/assets/photos/eli-profilepic.png"} />
                    </div>
                  </div>
                </div>
                <div
                  name="main3-1"
                  className="flex flex-col w-80 h-80"
                >
                  <div className="">
                    <img src={"/assets/photos/eli-profilepic.png"} />
                  </div>

                  <div
                    name="main3-2"
                    className="flex flex-col w-80 h-80"
                  >
                    <div className="">
                      <img src={"/assets/photos/eli-profilepic.png"} />
                    </div>
                  </div>
                  <div
                  name="main3-3"
                  className="flex flex-col w-80 h-80"
                >
                  <div className="">
                    <img src={"/assets/photos/eli-profilepic.png"} />
                  </div>
                </div>
                </div> */}
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
                RATING
              </button>
            </div>
            <div className="rating-card flex flex-col gap-10"></div>
            <Link to={"/profile"}> <ReviewCard /> </Link>
            <Link to={"/profile"}> <ReviewCard /> </Link>
            <div className="flex justify-end w-full">
              <Link to={"#move-to-top"} onClick={handleScroll2}>
                <button
                  type="button"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  class="inline-block p-3 bg-[#DAB24E] text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-[#f2b519] hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:#f2b519 active:shadow-lg transition duration-150 ease-in-out bottom-5 right-5"
                  id="btn-back-to-top"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    class="w-4 h-4"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"
                    ></path>
                  </svg>
                </button>
              </Link>
            </div>
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
