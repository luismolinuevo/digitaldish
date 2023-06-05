import React from "react";
import {} from "react-dom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button, Select, Option } from "@material-tailwind/react";
import Googleimg from "../../assets/googleimg.png";

const CommunityComponent = ({ title, description, postings, showGoogleimg }) => {
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
          <h1 className="text-[48px] text-center font-bold ">{title}</h1>

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
                  className=" border-4 rounded-2xl border-[#DAB24E] mr-12 w-44 text-lg"
                >
                  AUCTION
                </Button>
              </Link>

              <Link to="/communitynegotiate">
                <Button
                  color="white"
                  size="lg"
                  className="border-4 rounded-2xl border-[#DAB24E] mr-8 w-44 text-lg"
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
                className=" border-4 rounded-2xl border-[#DAB24E] mr-8 ml-10 w-44 text-lg"
              >
                MONITOR
              </Button>

              <Button
                href="#"
                color="white"
                size="lg"
                className=" border-4 rounded-2xl border-[#DAB24E] mr-8 w-44 text-lg"
              >
                MICE
              </Button>
              <Button
                href="#"
                color="white"
                size="lg"
                className=" border-4 rounded-2xl border-[#DAB24E] mr-8 w-44 text-lg"
              >
                KEYBOARD
              </Button>

              <Button
                href="#"
                color="white"
                size="lg"
                className=" border-4 rounded-2xl border-[#DAB24E] mr-8 w-52 text-lg"
              >
                GAME SYSTEM
              </Button>

              <Button
                href="#"
                color="white"
                size="lg"
                className=" border-4 rounded-2xl border-[#DAB24E] mr-8 w-44 text-lg"
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

      <div className="h-screen w-full bg-[#F4EBDC]">
        <div className="w-36 mt-2 ml-[1230px]">
          <Select className="text-[#1b72f6]" label="Sort By:">
            <Option className="hover:bg-[#DAB24E4D]">Relevance</Option>
            <Option className="hover:bg-[#DAB24E4D]">Most recent</Option>
            <Option className="hover:bg-[#DAB24E4D]">Lowest price</Option>
            <Option className="hover:bg-[#DAB24E4D]">Highest price</Option>
          </Select>
        </div>

        <div>
          <p className="font-bold text-[45px] mt-5 ml-40">{description}</p>
        </div>

        
        {showGoogleimg && (
          <div className=" w-1/4 ml-40 mt-5 border border-black">
            <img src={Googleimg} alt="Google Image" />
          </div>
        )}

      </div>
    </div>
  );
};

export default CommunityComponent;
