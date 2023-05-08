import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo3.png";
import Search from "../../assets/search.png"
import Community from "../../assets/community.png"
import Cart from "../../assets/cart.png"
import Notification from "../../assets/notification.png"

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] bg-[#F1F0EB] flex justify-between items-center px-4 border z-10 border-black">
    <div className="flex items-center">
      <img className="w-50 mr-4" src={Logo} alt="test" style={{ width: "70px" }} />
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
        <Link to="/Community">
          <img src={Community} alt="" style={{ width: "30px" }} className="mr-5" />
        </Link>
      </li>
  
      <li>
        <Link to="/Cart">
          <img src={Cart} alt="" className="mr-5"/>
        </Link>
      </li>
  
      <li>
        <Link to="/Notification">
          <img src={Notification} alt="" className="mr-5" />
        </Link>
      </li>
  
      <li>
        <Link to="Login" className="text-base md:text-lg mr-5">
          Login
        </Link>
      </li>
    </ul>
  </div>
  );
};

export default Navbar;
