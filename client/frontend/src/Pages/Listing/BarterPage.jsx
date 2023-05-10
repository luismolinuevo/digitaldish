import {} from "react";
import { useState } from "react";
import axios from "axios";
import Sellerplaceholder from "../../assets/sellerplaceholder.jpeg";
import Americanexpress from "../../assets/american-express.png";
import Visa from "../../assets/visa.png";
import Mastercard from "../../assets/mastercard.png";
import Paypal from "../../assets/paypal.png";
import Applepay from "../../assets/applepay.png";

export default function BarterForm() {
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [condition, setCondition] = useState("");
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [carrier, setCarrier] = useState("");
  const [shippingFees, setShippingFees] = useState("");
  const [userName, setUserName] = useState("")
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    const postData = {
      description: description,
      price: price,
      category: category,
      title: title,
      location: location,
      startTime: startTime,
      endTime: endTime,
      condition: condition,
      color: color,
      size: size,
      carrier: carrier,
      shippingFees: shippingFees,
      userName: userName,
    };

    const newPost = await axios.post(`http://localhost:8080/post`, postData, {
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
          onClick={handleSubmit}
        >
          Publish
        </button>

        <form className="border border-black bg-[#ededee] w-[435px] justify-start items-start py-10 px-2 ">
          <div className="flex font-bold ">
            <h2 className="text-[25px]">List an Item</h2>
            <div className="w-7 h-7 bg-[#faf8f8] sqaure-full flex items-center justify-center ml-2">
              <span className="text-black text-[10px]">Barter</span>
            </div>
          </div>

          <div className="text-[20px] mb-4">
            <h1>Add Photos</h1>
          </div>

          <div className="text-[20px] mb-4">
            <h1 className="font-bold">Required</h1>
          </div>

          <div className="flex flex-col mb-10 ">
            <label className="relative">
              Specific:
              
            </label>
            <input
              className="w-20 h-[36px] rounded-md mr-2 "
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div className="flex flex-col mb-10 relative">
            <label className={`absolute top-4 ${title && "mt-[-15px]"}`}>
              Title
            </label>
            <input
              className="h-[56px] rounded-md"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="flex flex-col mb-10 relative">
            <label
              className={`absolute -top-2 transition-all duration-300 ${
                category ? "" : "translate-y-full text-base"
              }`}
            >
              Category
            </label>

            <select
              className="block h-[56px] rounded-md"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value=""></option>
              <option value="Mice">Mice</option>
              <option value="Headphones">Headphones</option>
              <option value="PCs">PCs</option>
              <option value="KeyBoards">KeyBoard</option>
              <option value="Phone">Phone</option>
              <option value="Monitor">Monitor</option>
              <option value="Game System">Game Systems</option>
              <option value="Controllers">Controllers</option>
            </select>
          </div>

          <div className="flex flex-col mb-10 relative ">
            <label
              className={`absolute -top-2 transition-all duration-300 ${
                condition ? "" : "translate-y-full text-base"
              }`}
            >
              Condition
            </label>
            <select
              className="block h-[56px] rounded-md"
              value={condition}
              onChange={(e) => setCondition(e.target.value)}
            >
              <option value=""></option>
              <option value="New">New</option>
              <option value="Used-Like-New">Used-Like New</option>
              <option value="Used-Good">Used-Good</option>
              <option value="used-Fair">Used-Fair</option>
            </select>
          </div>

          <div className="flex flex-col mb-10 relative">
            <label
              className={`absolute -top-2 transition-all duration-300 ${
                color ? "" : "translate-y-full text-base"
              }`}
            >
              Color
            </label>
            <select
              className=" block h-[56px] rounded-md"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            >
              <option value=""></option>
              <option value="White">White</option>
              <option value="Black">Black</option>
              <option value="">Silver</option>
              <option value="Blue">Blue</option>
              <option value="Green">Green</option>
              <option value="Red">Red</option>
              <option value="Orange">Orange</option>
              <option value="Purple">Purple</option>
              <option value="Pink">Pink</option>
              <option value="Gold">Gold</option>
              <option value="Bronw">Brown</option>
              <option value="Miscellaneous">Miscellaneous</option>
            </select>
          </div>

          <div className="flex flex-col mb-10 relative">
            <label className={`absolute top-4 ${size && "mt-[-15px]"}`}>
              Size
            </label>
            <input
              className="h-[56px] rounded-md"
              type="text"
              value={size}
              onChange={(e) => setSize(e.target.value)}
            />
          </div>

          <div className=" mb-4">
            <h1 className="text-xl font-bold">Recommended</h1>
          </div>

          <div className="flex flex-col mb-4 relative">
            <label className={`absolute top-6 ${description && "mt-[-15px]"}`}>
              Description
            </label>
            <input
              className="h-20 rounded-md"
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="flex flex-col  mb-4 ">
            <h1 className="font-bold text-xl mb-4">Delivery Method</h1>
            {/* <label>Location:</label>
            <input
              className="h-10 mb-4"
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            /> */}
            <div className="flex flex-col mb-10 relative">
              <label
                className={`absolute -top-2 transition-all duration-300 ${
                  carrier ? "" : "translate-y-full text-base"
                }`}
              >
                Delivery Method
              </label>
              <select
                className=" block h-[56px] rounded-md "
                value={carrier}
                onChange={(e) => setCarrier(e.target.value)}
              >
                <option value=""></option>
                <option value="USPS">USPS</option>
                <option value="UPS">UPS</option>
                <option value="FedEx">FedEx</option>
                <option value="DHL">DHL</option>
              </select>
            </div>

            <div className="flex flex-col relative">
              <label className={`absolute top-4 ${shippingFees && "mt-[-15px]"}`}>Fee</label>
              <input
                className="h-[56px] rounded-md"
                type="text"
                value={shippingFees}
                onChange={(e) => setShippingFees(e.target.value)}
              />
            </div>
          </div>

        </form>

        {/* parent container */}
        <div className=" border border-blue-500 bg-[#C2B8A3] flex mt-20 ml-10 mr-20 w-full h-[800px]">
          {/* <div className=" border h-[30px] w-[70px] font-bold text-lg ml-5">Preview</div> */}

          {/* Photo & description Preview window container */}
          <div className="border border-black mt-20 mb-30 ml-10 mr-10 w-full h-[400px] px-20 "></div>

          <div className="border border-black absolute top-[650px] ml-10 mr-[600px] w-[440px] h-[150px]">
            <h1 className="text-[25px] flex ">
              {description ? description : "Description"}
            </h1>
          </div>

          {/* form preview container */}
          <form className="border mt-20 mr-10 ml-70 w-full h-[540px]">
            <div>
              <h1 className="text-[35px] font-bold font- ">
                {title ? title : "Title"}
              </h1>
            </div>

            <div>
              <h1 className="text-[20px]">{price ? price : "Starting Price"}</h1>
            </div>

            <div>
              <h1 className="mt-3 font-bold">Category</h1>
              <span>{category ? category : "text"}</span>
            </div>

            <div>
              <h1 className="mt-4 font-bold">Condition</h1>
              <span>{condition ? condition : "Text"}</span>
            </div>

            <div>
              <h1 className="mt-4 font-bold">Color</h1>
              <span>{color ? color : "Text"}</span>
            </div>

            <div>
              <h1 className="mt-4 font-bold">Size</h1>
              <span>{size ? size : "Text"}</span>
            </div>

            <div>
              <h1 className="mt-4 font-bold">Shipping</h1>
              <span>
                {carrier && shippingFees
                  ? `${carrier} - ${shippingFees}`
                  : "Shipping info goes here, rate, etc."}
              </span>
            </div>

            <div className=" border absolute top-[710px]">
              <h1>Payment Accepted</h1>
              <div className="flex">
                <img src={Americanexpress} className="h-[40px] w-[40px] mr-5" />
                <img src={Visa} className="h-[40px] w-[40px] mr-5 " />
                <img src={Mastercard} className="h-[40px] w-[40px] mr-5 " />
                <img src={Paypal} className="h-[40px] w-[40px] mr-5" />
                <img src={Applepay} className="h-[40px] w-[40px] mr-5" />
              </div>
            </div>
          </form>

          {/* About Seller info Conatainer */}
          <div className="border border-green-600 absolute mt-[650px] ml-10 w-[440px] h-[110px] ">
      <h1>About the seller</h1>
      <img
        src={Sellerplaceholder}
        alt=""
        className="rounded-full h-[70px] w-[60px] my-3 mr-3"
      />
      {/* <h1>Username: {userName}</h1> */}
    </div>

        </div>
      </div>
    </div>
  );
}