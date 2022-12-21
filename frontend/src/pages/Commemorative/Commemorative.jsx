import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Header from "../../components/Header";
import Search from "../../components/Search";
import CmItem from "./CmItem";
import axios from "axios";
const Commemorative = () => {
  const [cmcoins, setCmcoins] = useState([]);
  const getCmcoins = async () => {
    let response;
    response = await axios.get("http://localhost:5000/commemorative");
    setCmcoins(response.data);
  };
  console.log(cmcoins);
  
  useEffect(()=>{
    getCmcoins();
  },[])

  return (
    <>
      <Header />
      <Search />
      {
        <div className="flex flex-wrap gap-x-6 gap-y-8 ">
        {cmcoins ? (
          cmcoins.map((item) => (
            <CmItem key={item.id} data={item}/>
          ))
        ) : (
          <div>Something wrong</div>
        )}
      </div>
      }
    </>
  );
};

export default Commemorative;
