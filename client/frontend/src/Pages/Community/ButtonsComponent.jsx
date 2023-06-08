import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setCategory, deleteCategory } from "../../Utils/filter";
import { Button, Select, Option } from "@material-tailwind/react";

const ButtonsComponent = ({ greeting1, auction, neg, barter}) => {
  const dispatch = useDispatch();

  const [monitor, setMonitor] = useState(false);
  const [mice, setMice] = useState(false);
  const [keyboards, setKeyboards] = useState(false);
  const [game, setGame] = useState(false);
  const [phones, setPhones] = useState(false)

  const handleMonitor = () => {
    setMonitor(!monitor);
    if(!monitor) { dispatch(setCategory("monitor")) } 
    else { dispatch(deleteCategory("monitor")) }
  }

  const handleMice = () => {
    setMice(!mice);
    if(!mice) { dispatch(setCategory("mice")) } 
    else { dispatch(deleteCategory("mice")) }
  }

  const handleKeyboards = () => {
    setKeyboards(!keyboards);
    if(!keyboards) { dispatch(setCategory("keyboard")) } 
    else { dispatch(deleteCategory("keyboard")) }
  }

  const handleGame = () => {
    setKeyboards(!game);
    if(!game) { dispatch(setCategory("game")) } 
    else { dispatch(deleteCategory("game")) }
  }

  const handlePhones = () => {
    setKeyboards(!phones);
    if(!phones) { dispatch(setCategory("phone")) } 
    else { dispatch(deleteCategory("phone")) }
  }

  return (
    <div className="pt-[100px] flex flex-col">
      <div className=" w-[1400px] h-[500px] py-40 mx-auto">
        <div className=" mx-40 -mt-40">
          <div class=" flex w-[1000px] h-[40px] rounded-full focus-within:shadow-lg bg-[#F1F0EB]">
            <div className="grid place-items-center h-full w-12 text-gray-300">
              <svg
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            <input
              class="peer h-full w-full rounded-full outline-none text-sm bg-[#F1F0EB] text-gray-700 pr-2"
              type="text"
              id="search"
              placeholder="Search"
            />
          </div>
        </div>

        <div className="mt-10">
          <h1 className="text-[48px] text-center font-bold ">{greeting1}</h1>

          <p className="text-[20px] text-gray-500 text-center mt-3">
            Explore the world of custom tech, where anything you can think of
            is.
          </p>
        </div>

        <div name="buttons" className="flex justify-center text-center ">
          <div className=" mt-[50px]">
            <div>
              <Button
                href="#"
                color="white"
                size="lg"
                className=" border-4 rounded-2xl border-[#DAB24E] mr-8 w-44 text-lg"
              >
                ACCESORIES
              </Button>

              <Link to="/communityauction">
                <Button
                  color="white"
                  size="lg"
                  className={` border-4 rounded-2xl border-[#DAB24E] mr-12 w-44 text-lg ${auction ? "bg-[#DAB24E] text-white" : ""}`}
                >
                  AUCTION
                </Button>
              </Link>

              <Link to="/communitynegotiate">
                <Button
                  color="white"
                  size="lg"
                  className={`border-4 rounded-2xl border-[#DAB24E] mr-8 w-44 text-lg ${neg ? "bg-[#DAB24E] text-white" : ""}`}
                >
                  NEGOTIATION
                </Button>
              </Link>

              <Button
                href="#"
                color="white"
                size="lg"
                className=" border-4 rounded-2xl border-[#DAB24E] w-44 text-lg"
              >
                DEVICES
              </Button>
            </div>

            <div className="mt-5 flex justify-center text-center">
              <Button
                href="#"
                color="white"
                size="lg"
                className={` border-4 rounded-2xl border-[#DAB24E] mr-8 ml-10 w-44 text-lg ${monitor ? "bg-[#DAB24E] text-white" : ""}`}
                onClick={handleMonitor}
              >
                MONITOR
              </Button>

              <Button
                href="#"
                color="white"
                size="lg"
                className={` border-4 rounded-2xl border-[#DAB24E] mr-8 w-44 text-lg ${mice ? "bg-[#DAB24E] text-white" : ""}`}
                onClick={handleMice}
              >
                MICE
              </Button>
              <Button
                href="#"
                color="white"
                size="lg"
                className={` border-4 rounded-2xl border-[#DAB24E] mr-8 w-44 text-lg ${keyboards ? "bg-[#DAB24E] text-white" : ""}`}
                onClick={handleKeyboards}
              >
                KEYBOARD
              </Button>

              <Button
                href="#"
                color="white"
                size="lg"
                className={` border-4 rounded-2xl border-[#DAB24E] mr-8 w-52 text-lg ${game ? "bg-[#DAB24E] text-white" : ""}`}
                onClick={handleGame}
              >
                GAME SYSTEM
              </Button>

              <Button
                href="#"
                color="white"
                size="lg"
                className={` border-4 rounded-2xl border-[#DAB24E] mr-8 w-44 text-lg ${phones ? "bg-[#DAB24E] text-white" : ""}`}
                onClick={handlePhones}
              >
                PHONES
              </Button>
            </div>

            <div class="mt-5 flex justify-center">
              <Link to="/communitynear">
                <Button
                  color="white"
                  size="lg"
                  className="border-4 rounded-2xl border-[#DAB24E] mr-8 w-64 text-lg"
                >
                  WHAT'S NEAR ME?
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default ButtonsComponent;
