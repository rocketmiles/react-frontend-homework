import React, { useState, useEffect } from "react";
import HotelCard from "./HotelCard/HotelCard";

const Hotels = ({ hotels, isEmpty }) => {
  if (isEmpty) {
    return (
      <div className="hotel-list">
        Oh no! Looks like there are no matching hotels!
      </div>
    );
  } else {
    return (
      <div className="hotel-list">
        {hotels.map(hotel => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </div>
    );
  }
};

export default Hotels;
