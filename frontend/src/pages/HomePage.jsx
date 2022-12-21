import React from "react";
import Category from "../components/Category";
import Header from "../components/Header";
import Search from "../components/Search";

const HomePage = () => {
  return (
    <>
      <div>
        <Header />
        <Search />
        <Category/>
      </div>
    </>
  );
};

export default HomePage;
