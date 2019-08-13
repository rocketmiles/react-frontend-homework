import React, { useState, useEffect } from "react";
import HotelName from "./HotelName/HotelName";
import Price from "./Price/Price";
import Reset from "./Reset/Reset";

const Filters = () => {
  return (
    <div>
      <div className="filters">
        <HotelName />
        <Price />
        <Reset />
      </div>
    </div>
  );
};

export default Filters;
