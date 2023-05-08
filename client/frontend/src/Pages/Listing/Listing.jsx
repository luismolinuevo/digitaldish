import {} from "react";
import {} from "react-dom";
// import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Bidpic from "../../assets/bidpic.png"
import Barterpic from "../../assets/barterpic.png"
// import BidPage from "./Pages/Listing/BidPage";

export default function Listing() {
    const navigate = useNavigate()

    const [selectedType, setSelectedType] = useState ("");

    const handleBidClick = () => {
        setSelectedType("bid");
        navigate("/listing/bidpage")
    };

    const handleBarterClick = () => {
        setSelectedType("barter");
        navigate("/listing/barterpage")
    };

  return (
    <div className="pt-[125px] flex px-20 py-20 border border-black ">
      <div className=" text-center border-4 border-red  w-[1000px] py-20 mx-auto">
        <h2 className="text-[37px] font-medium mb-6 text-left border border-black">
          Select Your Listing Type</h2>

        <div class="flex justify-center">

          <button
            onClick={handleBidClick}
            className="bg-[#DAB24E] hover:bg-[#f7dea0] text-[25px] font-medium w-[384px] h-[377px] rounded-full mx-10 " 
          >
            Bid
            <img src={Bidpic} className=" h-[260px] w-[260px] border border-black ml-[60px] mt-[50px]"
            />
          </button>

          <button
            onClick={handleBarterClick}
            className="bg-[#C2B8A3] hover:bg-[#c4beb1] text-[25px] font-medium w-[384px] h-[377px] rounded-full mx-10 "
            
          >
            Barter
            <img src={Barterpic} className=" h-[250px] w-[250px] border border-black ml-[70px] mt-[50px]" />
          </button>
        </div>
        
      </div>
    </div>
  );
}
