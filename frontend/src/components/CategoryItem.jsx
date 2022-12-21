import React from "react";
import {RiArrowDropRightLine} from "react-icons/ri"
const CategoryItem = ({category,mpimages}) => {
  console.log(mpimages)
  return <>
    <div className="bg-slate-400 rounded-lg p-4 w-1/4 ">
      <h3>{category}</h3>
      <button className="flex items-center text-sm">Show all <RiArrowDropRightLine size={20}/></button>
      <img src={mpimages?.front_img} alt="" />
    </div>
  </>;
};

export default CategoryItem;
