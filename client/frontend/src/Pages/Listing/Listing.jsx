import {} from "react";
import {} from "react-dom";
// import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import Bidpic from "../../assets/bidpic.png"
// import Barterpic from "../../assets/barterpic.png"
// import Negpic from "../../assets/negpic.png"
import FooterNav from "../../Components/Footer/FooterNav";

export default function Listing() {
    const navigate = useNavigate()

    const [selectedType, setSelectedType] = useState ("");

    const handleBidClick = () => {
        setSelectedType("bid");
        navigate("/listing/bidpage")
    };

    const handleNegotiateClick = () => {
      setSelectedType("negotiate");
      navigate("/listing/negotiatepage")
  };

    const handleBarterClick = () => {
        setSelectedType("barter");
        navigate("/listing/barterpage")
    };

  return (
    <div className="border border-orange-400 ">
      <div className=" text-center mt-20 py-20 mx-auto">
        <h2 className="text-[37px] font-bold ml-40 text-left">
          Select Your Listing Type</h2>

        <div class="flex justify-center mt-10">

          <button
            onClick={handleBidClick}
            className="bg-[#DAB24E] hover:bg-[#f7dea0] border-4 border-black font-bold text-[30px] w-[384px] h-[377px] rounded-full mx-10 " 
          >
            Bid
            <img src={"/assets/bidpic.png"} className=" h-[230px] w-[260px] ml-[60px] mt-[30px]"
            />
          </button>

          <button
            onClick={handleNegotiateClick}
            className="bg-[#C2B8A3] hover:bg-[#cbc0a9] border-4 border-black font-bold text-[30px] w-[384px] h-[377px] rounded-full mx-10 " 
          >
            Negotiate
            <img src={"/assets/negpic.png"} className=" h-[200px] w-[210px] ml-28 mt-[30px]"
            />
          </button>

          <button
            onClick={handleBarterClick}
            className="bg-[#DAB24E] hover:bg-[#c4beb1] border-4 border-black font-bold text-[30px] w-[384px] h-[377px] rounded-full mx-10 "
            
          >
            Barter
            <img src={"/assets/barterpic.png"} className=" h-[220px] w-[240px] ml-[75px] mt-[30px]" />
          </button>
        </div>
        
      </div>
      <FooterNav />
    </div>
  );
}
