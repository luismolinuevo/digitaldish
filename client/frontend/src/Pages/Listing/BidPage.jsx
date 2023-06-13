import {} from "react";
import { useState, useCallback } from "react";
import axios from "axios";
import Sellerplaceholder from "../../assets/sellerplaceholder.jpeg";
import Americanexpress from "../../assets/american-express.png";
import Visa from "../../assets/visa.png";
import Mastercard from "../../assets/mastercard.png";
import Paypal from "../../assets/paypal.png";
import Applepay from "../../assets/applepay.png";
import FooterNav from "../../Components/Footer/FooterNav";
import { StarIcon } from "@heroicons/react/24/solid";
import { useDropzone } from "react-dropzone";
import { Button } from "@material-tailwind/react";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { blue } from "@mui/material/colors";
import Modal from "../../Pages/Listing/PublishModal";
import { useNavigate } from "react-router-dom";

import "tailwindcss/tailwind.css";

export default function BidForm() {
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [condition, setCondition] = useState("");
  const [color, setColor] = useState("");
  const [quantity, setQuantity] = useState("");
  const [carrier, setCarrier] = useState("");
  const [shippingFees, setShippingFees] = useState("");
  const [userName, setUserName] = useState("");
  const [userRating, setUserRating] = useState("");
  const [showModal, setShowModal] = useState(false);

  const [files, setFiles] = useState();
  const navigate = useNavigate();

  const onDrop = useCallback((acceptedFiles) => {
    setFiles(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    maxFiles: 3,
  });

  const calculateTimeLeft = () => {
    const start = new Date(startTime);
    const end = new Date(endTime);
    const difference = end - start;
    const hours = Math.floor(difference / 1000 / 60 / 60);
    return `${hours} hours`;
  };

  const formatEndTime = (endTime) => {
    const date = new Date(endTime);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString(undefined, options);
  };

  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const theme = createTheme({
    palette: {
      primary: blue,
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

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
    newFormData.append("quantity", quantity);
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

    try {
      await axios.post(`http://localhost:8080/post`, newFormData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="">
      <div className="mb-[85px] flex mx-10 ">
        <button
          className="bg-[#EDEBEB] hover:bg-[#eed083] w-48 h-14 text-xl absolute mt-[160px] right-[120px] font-bold py-2 px-10 "
          type="submit"
          onClick={() => setShowModal(true)}
        >
          Publish
        </button>
        <Modal isVisable={showModal} onClose={() => setShowModal(false)}>
          <div>
            <h1 className="text-center text-bold text-[30px] mb-[30px]">
              Are you sure you'd like to publish?
            </h1>
          </div>

          <div>
            <div>
              <div className="flex justify-center mt-[25px]">
                <button
                  className=" border-2 w-[100px] h-[55px] border-[#DAB24E] text-[22px]"
                  onClick={() => setShowModal(false)}
                >
                  EDIT
                </button>
                <button
                  className=" border-2 w-[100px] h-[55px] bg-[#DAB24E] text-[22px] mr-[25px] ml-10 text-center"
                  onClick={handleSubmit}
                >
                  Publish
                </button>
              </div>
            </div>
          </div>
        </Modal>

        <form className=" bg-[#d8cfb9] mt-20 w-[435px] justify-start items-start py-10 px-2 ">
          <div className="flex font-bold ">
            <h2 className="text-[25px]">List an Item</h2>
            <div className="w-14 h-9 bg-[#faf8f8] sqaure-full flex items-center justify-center ml-2">
              <span className="text-black text-[15px]">Bid</span>
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

          <div className="flex items-center mb-4">
            <div className="mr-4 flex flex-col">
              <label>Start Date:</label>
              <input
                className="h-10 rounded-md border border-black"
                type="date"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
              />
            </div>

            <div className="mr-4 flex flex-col ">
              <label>End Date:</label>
              <input
                className="h-10 rounded-md border border-black"
                type="date"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
              />
            </div>
          </div>
          <div>
            <h1 className="text-[20px]">
              {startTime && endTime
                ? `${calculateTimeLeft()} - ${endTime}`
                : "Time Left"}
            </h1>
          </div>

          <div className="flex flex-col mb-10 ">
            <label className="relative">
              Starting Bid:
              <div className="bg-[#faf8f8] text-xs absolute top-0 right-10 w-[130px] h-20 square-full flex items-center">
                <span className="text-black">
                  To attract more buyers, we suggest starting with a low bid
                </span>
              </div>
            </label>
            <input
              className="w-20 h-[36px] rounded-md mr-2 border border-black"
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
              className="h-[56px] rounded-md border border-black"
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
              className="block h-[56px] rounded-md border border-black"
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
              className="block h-[56px] rounded-md border border-black"
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
              className=" block h-[56px] rounded-md border border-black"
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
            <label className={`absolute top-4 ${quantity && "mt-[-15px]"}`}>
              Quantity
            </label>
            <input
              className="h-[56px] rounded-md border border-black"
              type="text"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
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
              className="h-20 rounded-md border border-black"
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="flex flex-col  mb-4 ">
            <h1 className="font-bold text-xl mb-4 ">Delivery Method</h1>
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
                Courrier
              </label>
              <select
                className=" block h-[56px] rounded-md border border-black "
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
                className="h-[56px] rounded-md border border-black"
                type="text"
                value={shippingFees}
                onChange={(e) => setShippingFees(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center mb-4">
            <h1 className="mr-4 text-[20px] font-bold">Returns Accepted?</h1>
            <FormControlLabel
              control={
                <Switch
                  color="primary"
                  checked={isSwitchOn}
                  onChange={() => setIsSwitchOn(!isSwitchOn)}
                />
              }
              label={isSwitchOn ? "Y" : "N"}
            />
          </div>
        </form>

        {/* parent container */}
        <div className=" bg-[#C2B8A3] mt-60 ml-10 mr-20 w-full h-[800px]">
          <div className="h-[30px] w-[70px]  text-lg ml-10 mt-4">Preview</div>

          {/* Photo & Description Preview window container */}
          <div className="flex ">
            <div className="border border-black mt-4 ml-10  w-full h-[555px]  ">
              <div className=" bg-[#F1F0EB] mt-[403px] w-full h-[150px] flex">
                <h1 className="text-[20px]">
                  {description ? description : "Description"}
                </h1>
              </div>
            </div>

            <form className="mt-4 mr-10 ml-10 w-full h-[510px] ">
              <div>
                <h1 className="text-[35px] font-bold ">
                  {title ? title : "Title"}
                </h1>
              </div>

              <div className="flex">
                <h1 className="text-[20px]">
                  Time Left:
                  {startTime && endTime && (
                    <>
                      <span className="ml-2"> {calculateTimeLeft()}</span>
                    </>
                  )}
                </h1>
              </div>

              <div className="flex">
                <h1 className="text-[20px]">
                  Ends:
                  <>
                    <span className="ml-3">{formatEndTime(endTime)} </span>
                  </>
                </h1>
              </div>

              <div className="flex mt-5 ">
                <div className="text-center w-16 h-14 bg-[#F1F0EB]">
                  <h1 className="text-[20px] mt-3">{price}</h1>
                </div>

                <div className="bg-white text-center rounded-full w-40 h-14 ml-16">
                  <h1 className=" mt-3 text-[20px]">Place Bid</h1>
                </div>
              </div>

              <div>
                <h1 className="mt-3 font-bold text-[20px]">Category</h1>
                <span>{category ? category : "text"}</span>
              </div>

              <div>
                <h1 className="mt-4 font-bold text-[20px]">Condition</h1>
                <span>{condition ? condition : "Text"}</span>
              </div>

              <div>
                <h1 className="mt-4 font-bold text-[20px]">Color</h1>
                <span>{color ? color : "Text"}</span>
              </div>

              <div>
                <h1 className="mt-4 font-bold text-[20px]">Quantity</h1>
                <span>{quantity ? quantity : "Text"}</span>
              </div>

              <div>
                <h1 className="mt-4 font-bold text-[20px]">Shipping</h1>
                <span>
                  {carrier && shippingFees
                    ? `${carrier} - ${shippingFees}`
                    : "Shipping info goes here, rate, etc."}
                </span>
              </div>

              <div className=" w-full mt-5 text-[20px]">
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
          <div className="flex ">
            <div className=" mt-[25px] ml-10 w-[595px] h-[110px] text-[20px]">
              <h1>About the seller</h1>
              <div className="flex items-center">
                <img
                  src={Sellerplaceholder}
                  alt=""
                  className="rounded-full h-[70px] w-[60px] my-2"
                />
                <div className="flex flex-col w-[600px]">
                  <div className="mt-5">
                    <h1 className="ml-10 ">{userName} joshuapl317</h1>
                    <h1 className="ml-60 -mt-7">34 Successful Sales</h1>
                  </div>

                  <div className="flex ml-10  h-12 w-32 text-yellow-600 ">
                    {Array(5)
                      .fill()
                      .map((_, index) => (
                        <StarIcon key={index} className="mr-1" />
                      ))}
                  </div>
                  <button className=" -mt-10 ml-40">
                    {userName}joshuapl317's other listings
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterNav />
    </div>
  );
}
