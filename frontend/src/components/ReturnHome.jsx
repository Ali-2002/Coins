import React from "react";
import { Link } from "react-router-dom";
const ReturnHome = () => {
  return (
    <>
      <Link to="/" className="text-gray-500 mt-2 text-xs">
        <span className="underline">Homepage</span> -- List of the coins
      </Link>
    </>
  );
};

export default ReturnHome;
