import { useState } from "react";
import { useDispatch } from "react-redux";
import { setCategory, deleteCategory } from "../../Utils/filter";
import { Input } from "@material-tailwind/react";

export default function FilterComponent() {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);
  const [colors, setColors] = useState([])

  //did it like this to have dryer code. Improved it from community pages
  const handleCategory = (category) => {
    setCategory(...categories, category);
    if (!categories.includes(category)) {
      dispatch(setCategory(category));
      setCategories([...categories, category]);
    } else {
      dispatch(deleteCategory(category));
      setCategories(categories.filter((item) => item !== category));
    }
  };

  return (
    <div className="ml-20 w-1/4 h-auto">
      <h1 className="font-bold text-[40px]">Filter By:</h1>
      <div className="text-[28px] font-bold mt-5">Product Type</div>
      <div className="grid grid-cols-2 gap-4 mt-5">
        <button
          className={`hover:bg-[#F1F0EB] text-left text-[20px] ${
            categories.includes("pcs") ? "bg-gray-400" : ""
          }`}
          onClick={() => handleCategory("headphones")}
        >
          Headphone
        </button>
        <button
          className={`hover:bg-[#F1F0EB] text-left text-[20px] ${
            categories.includes("pcs") ? "bg-gray-400" : ""
          }`}
          onClick={() => handleCategory("pcs")}
        >
          Computer
        </button>
        <button
          className={`hover:bg-[#F1F0EB] text-left text-[20px] ${
            categories.includes("pcs") ? "bg-gray-400" : ""
          }`}
          onClick={() => handleCategory("mice")}
        >
          Mice
        </button>
        <button
          className={`hover:bg-[#F1F0EB] text-left text-[20px] ${
            categories.includes("pcs") ? "bg-gray-400" : ""
          }`}
          onClick={() => handleCategory("phone")}
        >
          Phones
        </button>
        <button
          className={`hover:bg-[#F1F0EB] text-left text-[20px] ${
            categories.includes("pcs") ? "bg-gray-400" : ""
          }`}
          onClick={() => handleCategory("monitor")}
        >
          Monitor
        </button>
        <button
          className={`hover:bg-[#F1F0EB] text-left text-[20px] ${
            categories.includes("pcs") ? "bg-gray-400" : ""
          }`}
          onClick={() => handleCategory("game system")}
        >
          Game System
        </button>
        <button
          className={`hover:bg-[#F1F0EB] text-left text-[20px] ${
            categories.includes("pcs") ? "bg-gray-400" : ""
          }`}
          onClick={() => handleCategory("controllers")}
        >
          Controller
        </button>
        <button
          className={`hover:bg-[#F1F0EB] text-left text-[20px] ${
            categories.includes("pcs") ? "bg-gray-400" : ""
          }`}
          onClick={() => handleCategory("keyboards")}
        >
          Keyboard
        </button>
      </div>

      <div className="text-[28px] font-bold mt-5">Price Range</div>
      <div className="mt-5 flex">
        <input className=" bg-[#C2B8A3] w-20 h-12 mr-5"></input>{" "}
        <span className=" w-8 text-[20px] flex items-center mr-5">to</span>
        <input className="bg-[#C2B8A3] w-20 h-12"></input>
      </div>

      <div className="text-[28px] font-bold mt-5">Color</div>
      <div className="grid grid-cols-2 gap-4 mt-5">
        <button className=" hover:bg-[#F1F0EB] text-left text-[20px]">
          Black
        </button>
        <button className="hover:bg-[#F1F0EB] text-left text-[20px]">
          Yellow
        </button>
        <button className="hover:bg-[#F1F0EB] text-left text-[20px]">
          White
        </button>
        <button className="hover:bg-[#F1F0EB] text-left text-[20px]">
          Green
        </button>
        <button className="hover:bg-[#F1F0EB] text-left text-[20px]">
          Gray
        </button>
        <button className="hover:bg-[#F1F0EB] text-left text-[20px]">
          Purple
        </button>
        <button className="hover:bg-[#F1F0EB] text-left text-[20px]">
          Blue
        </button>
        <button className="hover:bg-[#F1F0EB] text-left text-[20px]">
          Orange
        </button>
        <button className="hover:bg-[#F1F0EB] text-left text-[20px]">
          Red
        </button>
      </div>

      <div className="text-[28px] font-bold mt-5">Condition</div>
      <div className="grid grid-cols gap-4 mt-5">
        <button className=" hover:bg-[#F1F0EB] text-left text-[20px]">
          New
        </button>
        <button className="hover:bg-[#F1F0EB] text-left text-[20px]">
          Used - Good
        </button>
        <button className="hover:bg-[#F1F0EB] text-left text-[20px]">
          Used - Okay
        </button>
        <button className="hover:bg-[#F1F0EB] text-left text-[20px]">
          Old
        </button>
      </div>

      <div className="text-[28px] font-bold mt-5">Purchase Type</div>
      <div className="grid grid-cols gap-4 mt-5">
        <button className=" hover:bg-[#F1F0EB] text-left text-[20px]">
          Auction
        </button>
        <button className="hover:bg-[#F1F0EB] text-left text-[20px]">
          Negotiation
        </button>
        <button className="hover:bg-[#F1F0EB] text-left text-[20px]">
          Barter
        </button>
      </div>
    </div>
  );
}
