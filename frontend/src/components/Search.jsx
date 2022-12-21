import React from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
const Search = () => {
  return (
    <>
      <div className="text-sm">Input field</div>
      <div className="flex gap-3">
        <input type="text" className="max-w-sm border-[1px] border-black p-2 rounded-lg" />
        <button className="bg-[#833AE0] max-w-[120px] p-2 rounded-lg">Search</button>
      </div>
      <div className="flex gap-1 items-center">
        <p>Advanced filter</p>
        <RiArrowDropDownLine size={30} className="cursor-pointer" />
        <RiArrowDropUpLine size={30} className="cursor-pointer" />
      </div>
    </>
  );
};

export default Search;
