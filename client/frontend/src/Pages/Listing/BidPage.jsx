import {} from "react";
import { useState } from "react";
import axios from "axios";
import Sellerplaceholder from "../../assets/sellerplaceholder.jpeg";
import Americanexpress from "../../assets/american-express.png";
import Visa from "../../assets/visa.png";
import Mastercard from "../../assets/mastercard.png";
import Paypal from "../../assets/paypal.png";
import Applepay from "../../assets/applepay.png";

export default function BidForm() {
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    const postData = {
      description: description,
      price: price,
      category: category,
      title: title,
    };

    const newPost = await axios.post(`http://localhost:8080/post`, postData, {
      // url: `http://localhost:8080/post`,
      // data: {
      //   userName: req.user.userName,
      //   description: description,
      //   price: price,
      //   category: category,
      //   userId: req.user.id,
      //   title: title,
      // },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };

  return (
    <div className="border border-black ">
      <div className="border border-red-500 flixed mt-[85px] mb-[85px] flex mx-10 ">
        <button
          className="bg-[#DAB24E] hover:bg-[#eed083] font-bold py-2 px-10 absolute mt-[20px] right-[120px]"
          type="submit"
        >
          Publish
        </button>

        <form
          className="border border-black bg-[#ededee] w-[435px] justify-start items-start py-10 px-2"
          onSubmit={handleSubmit}
        >
          <div className="flex font-bold ">
            <h2 className="text-[25px]">List an Item</h2>
            <div className="w-7 h-7 bg-[#faf8f8] sqaure-full flex items-center justify-center ml-2">
              <span className="text-black text-[10px]">Bid</span>
            </div>
          </div>

          <div className="text-[20px] mb-4">
            <h1>Add Photos</h1>
          </div>

          <div className="text-[20px] mb-4">
            <h1 className="font-bold">Required</h1>
          </div>

          <div className="flex items-center mb-4">
            <div className="mr-4 flex flex-col ">
              <label>Start Date:</label>
              <input className="h-10" type="date" value="" />
            </div>

            <div className="mr-4 flex flex-col ">
              <label>End Date:</label>
              <input className="h-10" type="date" value="" />
            </div>
          </div>

          <div className="flex flex-col mb-4">
            <label className="relative">
              Starting Bid:
              <div className="bg-[#faf8f8] text-xs absolute top-0 right-20 w-20 h-20 square-full flex items-center">
                <span className="text-black">
                  To attract more buyers, we suggest starting with a low bid
                </span>
              </div>
            </label>
            <input
              className="w-20 h-7 mr-2"
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div className="flex flex-col mb-4 ">
            <label>Title:</label>
            <input
              className="h-10"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div class="flex flex-col mb-4">
            <label>Category:</label>
            <select
              className="block h-10 focus:bg-white focus:border-gray-500"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value=""></option>
              <option value="electronics">Headphones</option>
              <option value="electronics">Mice</option>
              <option value="electronics">Monitor</option>
              <option value="electronics">Controllers</option>
              <option value="electronics">Computers</option>
              <option value="electronics">Phone</option>
              <option value="electronics">Game Systems</option>
              <option value="furniture">KeyBoard</option>
            </select>
          </div>

          <div className="flex flex-col mb-4">
            <label>Condition:</label>
            <select
              className=" block h-10  focus:bg-white focus:border-gray-500"
              //   value={condition}
              //   onChange={(e) => setCondition(e.target.value)}
            >
              <option value=""></option>
              <option value="New">New</option>
              <option value="Used-Good">Used-Good</option>
              <option value="Used-Okay">Used-Okay</option>
              <option value="Old">Old</option>
            </select>
          </div>

          <div className="flex flex-col mb-4">
            <label>Color</label>
            <select
              className=" block h-10 mb-4 focus:bg-white focus:border-gray-500"
              //   value={}
              //   onChange={(e) => set(e.target.value)}
            >
              <option value=""></option>
              <option value="Black">Black</option>
              <option value="White">White</option>
              <option value="Gray">Gray</option>
              <option value="Blue">Blue</option>
              <option value="Red">Red</option>
              <option value="Yellow">Yellow</option>
              <option value="Green">Green</option>
              <option value="Purple">Purple</option>
              <option value="Orange">Orange</option>
            </select>
          </div>

          <div className="flex flex-col mb-4">
            <label>Size</label>
            <input className="h-10" type="text" />
          </div>

          <div className=" mb-4">
            <h1 className="text-xl font-bold">Recommended</h1>
          </div>

          <div className="flex flex-col mb-4">
            <label>Description:</label>
            <input
              className="h-20"
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="flex flex-col  mb-4 ">
            <h1 className="font-bold text-xl mb-4">Shipping</h1>
            <label>Location</label>
            <input className="h-10 mb-4" type="text" />

            <label>Courier</label>
            <select
              className=" block h-10 mb-4 focus:bg-white focus:border-gray-500"
              //   value={}
              //   onChange={(e) => set(e.target.value)}
            >
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
            </select>

            <label>Fee</label>
            <input className="h-10" type="text" />
          </div>
        </form>

        {/* parent container */}
        <div className=" border border-blue-500 bg-[#C2B8A3] flex mt-20 ml-10 mr-20 w-full h-[800px]">
        {/* <div className=" border h-[30px] w-[70px] font-bold text-lg">Preview</div> */}

          {/* Preview window container */}
          <div className="border border-black mt-20 ml-10 mr-10 w-full h-[550px] px-20">
          
            {/* Your preview window code here */}
          </div>

          {/* form container */}
          <form className="border mt-20 mr-10 ml-70 w-full h-[600px] ">
            {/* Your form code here */}

            <div className="flex flex-col mt-[500px] ml-5">
              <h1>Payment Accepted</h1>
              <div className="flex ">
                <img src={Americanexpress} className="h-[50px] w-[50px] mr-5" />
                <img src={Visa} className="h-[50px] w-[50px] mr-5 " />
                <img src={Mastercard} className="h-[50px] w-[50px] mr-5 " />
                <img src={Paypal} className="h-[50px] w-[50px] mr-5" />
                <img src={Applepay} className="h-[50px] w-[50px] mr-5" />
              </div>
            </div>
          </form>

          {/* About Seller info Conatainer */}
          <div className="border border-green-600 absolute mt-[650px] ml-10 w-[500px] h-[110px]">
            <h1>About the seller</h1>
            <img
              src={Sellerplaceholder}
              alt=""
              className="rounded-full h-[70px] w-[60px] my-3"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
