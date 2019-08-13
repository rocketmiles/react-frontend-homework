import React, { useState, useEffect } from "react";
import HotelCard from "./HotelCard/HotelCard";

const Hotels = ({ hotels, error, isEmpty, fetchApi }) => {
  if (error) {
    return (
      <div className="hotel-list">
        {error}
        <button className="button" onClick={fetchApi}>
          Try Again
        </button>
      </div>
    );
  } else if (isEmpty) {
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
