import React, { useEffect, useState } from "react";
import axios from "axios";
import InvItem from "./InvItem";
import Header from "../../components/Header";
import Search from "../../components/Search";

const Investment = () => {
  const [invcoins, setInvcoins] = useState([]);
  const getInvcoins = async () => {
    let response;
    response = await axios.get("http://localhost:5000/exclusive");
    setInvcoins(response.data);
  };

  useEffect(() => {
    getInvcoins();
  }, []);
  return (
    <>
      <Header />
      <Search />
      {
        <div className="flex flex-wrap gap-x-6 gap-y-8 ">
          {invcoins ? (
            invcoins.map((item) => <InvItem key={item.id} data={item} />)
          ) : (
            <div>Something wrong</div>
          )}
        </div>
      }
    </>
  );
};

export default Investment;
