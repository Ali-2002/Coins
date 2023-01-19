import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import CategoryItem from "./CategoryItem";

const Category = () => {
  const [category, setCategory] = useState([]);
  const [mpimages, setMpImages] = useState([]);
  const linkdatas=['/commermorative','/investment','/exclusive']
  const getCategory = async () => {
    let response;
    response = await axios.get("http://localhost:5000/category");
    setCategory(response.data);
  };

  const getMpImages = async () => {
    let response;
    response = await axios.get("http://localhost:5000/mpimages");
    setMpImages(response.data);
  };

  console.log(mpimages);

  useEffect(() => {
    getCategory();
    getMpImages();
  }, []);

  return (
    <>
      <div className="max-w-[80%] flex justify-between">
        {category && mpimages ? (
          category.map((item,index) => (
            <CategoryItem key={item.category} category={item.category} mpimages={mpimages[index]} links={linkdatas[index]}/>
          ))
        ) : (
          <div>Something wrong</div>
        )}
      </div>
    </>
  );
};

export default Category;
