import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/NavLogo.png";
import Search from "../../assets/search.png"
import Community from "../../assets/community.png"
import Cart from "../../assets/cart.png"
import Notification from "../../assets/notification.png"
import Activity from "../../Pages/Activity/Activity";
import { useSelector, useDispatch } from "react-redux";
import { checkLoginStatus } from "../../Utils/auth";
import profileIcon from "../../assets/profileIcon.png"

const Navbar = () => {
  const dispatch = useDispatch()
  const [nav, setNav] = useState(false);
  const isAuthenticated = useSelector((state) => state.auth.isLoggedIn);
  const handleClick = () => setNav(!nav);

  useEffect(() => {
    dispatch(checkLoginStatus());
  }, []);

  return (
    <div className="fixed w-full h-[80px] bg-[#F1F0EB] flex justify-between items-center px-4 border z-10">
    <div className="flex items-center">
      <Link to="/"><img className="w-50 mr-4" src={Logo} alt="test" style={{ width: "250px" }} /></Link>
      <ul className=" md:flex ">
        <li>
          <Link to="Devices" className="text-base md:text-lg ">
            Devices
          </Link>
        </li>
  
        <li>
          <Link to="Accessories" className="text-base md:text-lg ml-4">
            Accessories
          </Link>
        </li>
      </ul>
    </div>
  
    <ul className="hidden md:flex">
      <li>
        <Link to="/Seach">
          <img src={Search} alt="" className="mr-5"/>
        </Link>
      </li>
  
      <li>
        <Link to="/communitynew">
          <img src={Community} alt="" style={{ width: "30px" }} className="mr-5" />
        </Link>
      </li>
  
      <li>
        <Link to="/Cart">
          <img src={Cart} alt="" className="mr-5"/>
        </Link>
      </li>
  
      <li>
        <Link to="/activity">
          <img src={Notification} alt="" className="mr-5" />
        </Link>
      </li>
  
      <li>
        {
          !isAuthenticated ? <Link to="/login" className="text-base md:text-lg mr-5">Login</Link> : <Link to="/useraccount" className="flex items-center w-[30px]"><img src={profileIcon} /></Link>
        }
        
      </li>
    </ul>
  </div>

  // expanding search bar
  // <div class="relative flex-col  p-6 ">
  //       <div class="relative rounded-2xl ring-black sm:mx-auto sm:max-w-lg sm:px-10">
  //         <form action="" class="relative">
  //           <input
  //             type="search"
  //             class=" cursor-pointer relative z-10 h-12 w-12 rounded-full border bg-transparent pl-12 outline-none focus:w-full focus:cursor-text  focus:pl-16 focus:pr-4"
  //           />
  //           <svg
  //             class="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-black px-3.5"
  //             fill="none"
  //             viewBox="0 0 24 24"
  //             stroke="currentColor"
  //             stroke-width="2"
  //           >
  //             <path
  //               stroke-linecap="round"
  //               stroke-linejoin="round"
  //               d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0"
  //             />
  //           </svg>
  //         </form>
  //       </div>
  //     </div>
  );
};

export default Navbar;
