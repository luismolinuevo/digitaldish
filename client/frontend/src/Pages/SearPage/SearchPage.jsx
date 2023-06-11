import React, {useState} from "react";
import { SearchData } from "./SearchData";
import FilterComponent from "./FilterComponent";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { useDispatch } from "react-redux";
import { setSearch } from "../../Utils/filter";

export default function SearchPage() {
  const dispatch = useDispatch();

  return (
    <div className=" h-auto border w-screen ">
      <div className=" flex justify-center">
        <div className=" flex w-[1000px] mt-[130px] rounded-full focus-within:shadow-lg bg-[#F1F0EB]">
          <div className="grid place-items-center w-12 ">
            <svg
              className=""
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <input
            className="peer h-full w-full rounded-full outline-none text-sm bg-[#F1F0EB] pr-2  placeholder-black"
            type="text"
            id="search"
            placeholder="Search by product title"
            onChange={(event) => dispatch(setSearch(event.target.value))}
          />
        </div>
      </div>

      <div className="mt-20 flex justify-between">
        <FilterComponent />
        <SearchData />
      </div>

      <Footer />
    </div>
  );
}
