import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  setCategory,
  deleteCategory,
  setColor,
  deleteColor,
  setCondition,
  deleteCondition,
} from "../../Utils/filter";
import { Input } from "@material-tailwind/react";

export default function FilterComponent() {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);
  const [colors, setColors] = useState([]);
  const [conditions, setConditions] = useState([]);

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

  const handleColor = (color) => {
    setColors(...colors, color);
    if (!colors.includes(color)) {
      dispatch(setColor(color));
      setColors([...colors, color])
    } else {
      dispatch(deleteColor(color));
      setColors(color.filter((item) => item !== color));
    }
  };

  const handleCondition = (condition) => {
    if(!conditions.includes(condition)) {
      dispatch(setCondition(condition));
      setConditions([...conditions, condition])
    } else {
        dispatch(deleteCondition(condition));
        setConditions(conditions.filter((item) => item !== condition))
    }
  }

  return (
    <div className="ml-20 w-1/4 h-auto">
      <h1 className="font-bold text-[40px]">Filter By:</h1>
      <div className="text-[28px] font-bold mt-5">Product Type</div>
      <div className="grid grid-cols-2 gap-4 mt-5">
        <button
          className={`hover:bg-[#F1F0EB] text-left text-[20px] ${
            categories.includes("headphones") ? "bg-gray-400" : ""
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
            categories.includes("mice") ? "bg-gray-400" : ""
          }`}
          onClick={() => handleCategory("mice")}
        >
          Mice
        </button>
        <button
          className={`hover:bg-[#F1F0EB] text-left text-[20px] ${
            categories.includes("phone") ? "bg-gray-400" : ""
          }`}
          onClick={() => handleCategory("phone")}
        >
          Phones
        </button>
        <button
          className={`hover:bg-[#F1F0EB] text-left text-[20px] ${
            categories.includes("monitor") ? "bg-gray-400" : ""
          }`}
          onClick={() => handleCategory("monitor")}
        >
          Monitor
        </button>
        <button
          className={`hover:bg-[#F1F0EB] text-left text-[20px] ${
            categories.includes("game system") ? "bg-gray-400" : ""
          }`}
          onClick={() => handleCategory("game system")}
        >
          Game System
        </button>
        <button
          className={`hover:bg-[#F1F0EB] text-left text-[20px] ${
            categories.includes("controllers") ? "bg-gray-400" : ""
          }`}
          onClick={() => handleCategory("controllers")}
        >
          Controller
        </button>
        <button
          className={`hover:bg-[#F1F0EB] text-left text-[20px] ${
            categories.includes("keyboards") ? "bg-gray-400" : ""
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
        <button
          className={` hover:bg-[#F1F0EB] text-left text-[20px] ${
            colors.includes("Black") ? "bg-gray-400" : ""
          }`}
          onClick={() => handleColor("Black")}
        >
          Black
        </button>
        <button
          className={` hover:bg-[#F1F0EB] text-left text-[20px] ${
            colors.includes("Yellow") ? "bg-gray-400" : ""
          }`}
          onClick={() => handleColor("Yellow")}
        >
          Yellow
        </button>
        <button
          className={` hover:bg-[#F1F0EB] text-left text-[20px] ${
            colors.includes("White") ? "bg-gray-400" : ""
          }`}
          onClick={() => handleColor("White")}
        >
          White
        </button>
        <button
          className={` hover:bg-[#F1F0EB] text-left text-[20px] ${
            colors.includes("Green") ? "bg-gray-400" : ""
          }`}
          onClick={() => handleColor("Green")}
        >
          Green
        </button>
        <button
          className={` hover:bg-[#F1F0EB] text-left text-[20px] ${
            colors.includes("Gray") ? "bg-gray-400" : ""
          }`}
          onClick={() => handleColor("Gray")}
        >
          Gray
        </button>
        <button
          className={` hover:bg-[#F1F0EB] text-left text-[20px] ${
            colors.includes("Purple") ? "bg-gray-400" : ""
          }`}
          onClick={() => handleColor("Purple")}
        >
          Purple
        </button>
        <button
          className={` hover:bg-[#F1F0EB] text-left text-[20px] ${
            colors.includes("Blue") ? "bg-gray-400" : ""
          }`}
          onClick={() => handleColor("Blue")}
        >
          Blue
        </button>
        <button
          className={` hover:bg-[#F1F0EB] text-left text-[20px] ${
            colors.includes("Orange") ? "bg-gray-400" : ""
          }`}
          onClick={() => handleColor("Orange")}
        >
          Orange
        </button>
        <button
          className={` hover:bg-[#F1F0EB] text-left text-[20px] ${
            colors.includes("Red") ? "bg-gray-400" : ""
          }`}
          onClick={() => handleColor("Red")}
        >
          Red
        </button>
      </div>

      <div className="text-[28px] font-bold mt-5">Condition</div>
      <div className="grid grid-cols gap-4 mt-5">
        <button className={`hover:bg-[#F1F0EB] text-left text-[20px] ${conditions.includes("New") ? "bg-gray-400" : ""}`} onClick={() => handleCondition("New")}>
          New
        </button>
        <button className={`hover:bg-[#F1F0EB] text-left text-[20px] ${conditions.includes("Used-Good") ? "bg-gray-400" : ""}`} onClick={() => handleCondition("Used-Good")}>
          Used - Good
        </button>
        <button className={`hover:bg-[#F1F0EB] text-left text-[20px] ${conditions.includes("Used-Like-New") ? "bg-gray-400" : ""}`} onClick={() => handleCondition("Used-Like-New")}>
          Used - Okay
        </button>
        <button className={`hover:bg-[#F1F0EB] text-left text-[20px] ${conditions.includes("Used-Fair") ? "bg-gray-400" : ""}`} onClick={() => handleCondition("Used-Fair")}>
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
