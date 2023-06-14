import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import Placeholder from "../../assets/photos/profile-placeholder.png";
import { Textarea } from "@material-tailwind/react";

export default function UserAccount() {
  return (
    <div className="pt-40 p-10 px-20">
      <div className="flex gap-6">
        <div className="border border-[#F1F0EB] bg-[#F1F0EB] w-[16rem] h-[10rem]">
          <p className="text-2xl flex p-4">
            <span className="hover:shadow-lg hover:text-blue-700">
              Edit Profile
            </span>
          </p>
          <p className="text-2xl px-4 ">
            <span className="hover:shadow-lg hover:text-blue-700">
              Account Info
            </span>
          </p>
        </div>
        <div className="border border-[#F1F0EB] bg-[#F1F0EB] w-full">
          <p className="flex justify-end p-2">
            <span className="border-b hover:border-blue-500">
              Change Header Image
            </span>
          </p>
          <div className="px-4">
            <img
              src={Placeholder}
              alt="edit photo placeholder"
              className="w-[4rem] z-[10]"
            />
            <p className="">Edit Photo</p>
          </div>
        </div>
      </div>

      <body className="py-10 ml-[13rem]">
        <div></div>
        <p className="text-xl">Bio</p>
        <div className="">
          <Textarea
            variant="static"
            label=""
            placeholder="message"
            className="border border-black p-2 text-xl"
          />
        </div>
        <div className="basic-info-section">
          <p className="text-2xl py-2 font-semibold">Basic Info</p>
          <div className="flex flex-row flex-wrap">
            <form className="" />
            <div class="mb-4 pr-10 w-[33.5rem]">
              <label class="block text-black text-xl" for="First Name">
                First Name
              </label>
              <input class="shadow appearance-none border border-black rounded w-full py-2 px-3 text-gray-700 leading-tight"></input>
            </div>
            <div className="mb-6 w-[33.5rem]">
              <label className="block text-gray-700 text-xl" for="Last Name">
                Last Name
              </label>
              <input class="shadow appearance-none border border-black rounded w-full py-2 px-3 text-gray-700 leading-tight" />
            </div>
            <div className="mb-6 w-full">
              <label
                className="block text-gray-700 text-xl"
                for="Street Address"
              >
                Street Address
              </label>
              <input className="shadow appearance-none border border-black rounded w-full py-2 px-3 text-gray-700 leading-tight" />
            </div>
            <div className="mb-6 pr-10 w-[20rem]">
              <label className="block text-gray-700 text-xl" for="Postal Code">
                Postal Code
              </label>
              <input className="shadow appearance-none border border-black rounded w-full py-2 px-3 text-gray-700 leading-tight" />
            </div>
            <div className="mb-6 w-[20rem]">
              <label className="block text-gray-700 text-xl" for="Town/City">
                Town/City
              </label>
              <input className="shadow appearance-none border border-black rounded w-full py-2 px-3 text-gray-700 leading-tight" />
            </div>
            <div className="mb-6 w-[27.5rem]">
              <label className="block text-gray-700 text-xl" for="State">
                State
              </label>
              <input className="shadow appearance-none border border-black rounded w-full py-2 px-3 text-gray-700 leading-tight" />
            </div>
          </div>
        </div>

        <div className="account-info-section"></div>
        <p className="text-2xl py-2 font-semibold">Account Info</p>
        <div className="flex flex-row flex-wrap">
            <form className="" />
            <div class="mb-4 w-full">
              <label class="block text-black text-xl" for="First Name">
                Username
              </label>
              <input class="shadow appearance-none border border-black rounded w-full py-2 px-3 text-gray-700 leading-tight" type="username"></input>
            </div>
            <div className="mb-6 w-full">
              <label className="block text-gray-700 text-xl" for="Last Name">
                Email
              </label>
              <input class="shadow appearance-none border border-black rounded w-full py-2 px-3 text-gray-700 leading-tight" />
            </div>
            <div className="mb-6 w-full">
              <label
                className="block text-gray-700 text-xl"
                for="Street Address"
              >
                Password
              </label>
              <input className="shadow appearance-none border border-black rounded w-full py-2 px-3 text-gray-700 leading-tight" 
              type="password" />            
              </div>
            <div className="flex justify-end w-full">
            <button className="bg-[#000] border border-[#000] w-[9rem] h-8 rounded-sm font-normal font-[Inter] hover:bg-[#f2b519] hover:shadow-2xl text-white">
           
            <Link to={"/editprofile"} scrollBehavior="smooth">EDIT PROFILE</Link> 
          </button>
          </div>
          <div className="deactivate-account pt-4">
          <p className="flex justify-end p-2">
          <span className="border-b hover:border-blue-500 font-bold text-xl">
            Deactivate Account
          </span>
        </p>  
          
          </div>
          </div>


      </body>
    </div>
  );
}
