import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import ExItem from "./ExItem";
import Header from "../../components/Header";
import Search from "../../components/Search";
import ReturnHome from "../../components/ReturnHome";

const Exclusive = () => {

  const [excoins, setExcoins] = useState([]);
  const getExcoins = async () => {
    let response;
    response = await axios.get("http://localhost:5000/exclusive");
    setExcoins(response.data);
  };
  
  useEffect(()=>{
    getExcoins();
  },[])

  return (
    <>
      <Header />
      <ReturnHome/>
      <Search />
      {
        <div className="flex flex-wrap gap-x-6 gap-y-8 ">
        {excoins ? (
          excoins.map((item) => (
            <ExItem key={item.id} data={item}/>
          ))
        ) : (
          <div>Something wrong</div>
        )}
      </div>
      }
    </>
  );
};

export default Exclusive;
