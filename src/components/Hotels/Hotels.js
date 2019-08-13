import React, { useState, useEffect } from "react";
import HotelCard from "./HotelCard/HotelCard";

const Hotels = ({ hotels }) => {
  return (
    <div className="hotel-list">
      {hotels.map(hotel => (
        <HotelCard key={hotel.id} hotel={hotel} />
      ))}
    </div>
  );
};

export default Hotels;
