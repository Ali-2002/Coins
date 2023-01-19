import React from "react";
import { RiArrowDropRightLine } from "react-icons/ri";
import { Link } from "react-router-dom";
const CategoryItem = ({ category, mpimages, links }) => {
  console.log(mpimages?.front_img);
  return (
    <>
      <div className="bg-slate-400 rounded-lg p-4 w-1/4">
        <h3>{category}</h3>
        <Link to={links} className="flex items-center text-sm">
          Show all
          <RiArrowDropRightLine size={20} />
        </Link>
        <img src={mpimages?.front_img} alt="coin" />
      </div>
    </>
  );
};

export default CategoryItem;
