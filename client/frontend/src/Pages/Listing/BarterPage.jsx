import { useState, useCallback } from "react";
import axios from "axios";
import Sellerplaceholder from "../../assets/sellerplaceholder.jpeg";
import Americanexpress from "../../assets/american-express.png";
import Visa from "../../assets/visa.png";
import Mastercard from "../../assets/mastercard.png";
import Paypal from "../../assets/paypal.png";
import Applepay from "../../assets/applepay.png";

import { useDropzone } from "react-dropzone";

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
  const [userName, setUserName] = useState("");
  const [userRating, setUserRating] = useState("");

  const [files, setFiles] = useState();

  const onDrop = useCallback((acceptedFiles) => {
    setFiles(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    maxFiles: 3,
  });

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
      userRating: userRating,
      type: "barter",
    };

    let newFormData = new FormData();
    newFormData.append("description", description);
    newFormData.append("price", price);
    newFormData.append("category", category);
    newFormData.append("title", title);
    newFormData.append("location", location);
    newFormData.append("startTime", startTime);
    newFormData.append("endTime", endTime);
    newFormData.append("condition", condition);
    newFormData.append("color", color);
    newFormData.append("size", size);
    newFormData.append("carrier", carrier);
    newFormData.append("shippingFees", shippingFees);
    newFormData.append("userName", userName);
    newFormData.append("userRating", userRating);
    newFormData.append("type", "barter");
    newFormData.append("status", "Active");
    //Append each file to the right key. You CANNOT append all the files to the key. It will not work.
    files.forEach((file) => {
      newFormData.append("images[]", file);
    });

    const newPost = await axios.post(`http://localhost:8080/post`, newFormData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
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
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              {isDragActive ? (
                <p>Drop the files here ...</p>
              ) : (
                <p>Drag 'n' drop some files here, or click to select files</p>
              )}
            </div>
          </div>

          <div className="text-[20px] mb-4">
            <h1 className="font-bold">Required</h1>
          </div>

          <div className="flex flex-col mb-10 ">
            <label className="relative">Specific:</label>
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
              <option value="Silver">Silver</option>
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
              <label
                className={`absolute top-4 ${shippingFees && "mt-[-15px]"}`}
              >
                Fee
              </label>
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
        <div className=" border border-blue-500 bg-[#C2B8A3] mt-20 ml-10 mr-20 w-full h-[800px]">
          <div className=" border h-[30px] w-[70px]  text-lg ml-10 mt-4">
            Preview
          </div>

          {/* Photo & Description Preview window container */}
          <div className="flex ">
            <div className="border border-black mt-4 ml-10  w-full h-[555px]  ">
              <div className="border border-black bg-[#F1F0EB] mt-[403px] w-full h-[150px] flex">
                <h1 className="text-[20px]">
                  {description ? description : "Description"}
                </h1>
              </div>
            </div>

            <form className="border mt-4 mr-10 ml-10 w-full h-[510px] ">
              <div>
                <h1 className="text-[35px] font-bold ">
                  {title ? title : "Title"}
                </h1>
              </div>

              <div>
                <h1 className="text-[20px]">
                  {price ? price : "Starting Bid"}
                </h1>
              </div>

              <div>
                <h1 className="text-[16px]">
                  {" "}
                  {startTime && endTime
                    ? `${startTime} - ${endTime}`
                    : "Time Left"}
                </h1>
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

              <div className=" border w-full mt-5">
                <h1>Payment Accepted</h1>
                <div className="flex">
                  <img
                    src={Americanexpress}
                    className="h-[40px] w-[40px] mr-5"
                  />
                  <img src={Visa} className="h-[40px] w-[40px] mr-5 " />
                  <img src={Mastercard} className="h-[40px] w-[40px] mr-5 " />
                  <img src={Paypal} className="h-[40px] w-[40px] mr-5" />
                  <img src={Applepay} className="h-[40px] w-[40px] mr-5" />
                </div>
              </div>
            </form>
          </div>

          {/* About Seller info Conatainer */}
          <div className="flex">
            <div className="border border-green-600 mt-[30px] mr-[420px] ml-10 w-[495px] h-[110px]">
              <h1>About the seller</h1>
              <div className="flex items-center">
                <img
                  src={Sellerplaceholder}
                  alt=""
                  className="rounded-full h-[70px] w-[60px] my-2"
                />

                <h1 className="ml-10 -mt-10">{userName}Username</h1>
                <h1 className="ml-12 -mt-10">Successful Sales</h1>
                <h1 className="-ml-[245px] mt-[30px]">
                  {userRating}Seller Rating
                </h1>
                <h1 className="ml-[30px] mt-[30px]">
                  {userName}Username's other listings
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
