import React, { useState, useEffect } from "react";
import Image from "../../Image/Image";

const HotelCard = ({ hotel }) => {
  const image = hotel.hotelStaticContent.mainImage.url;

  return (
    <div className="hotel-card" key={hotel.id}>
      <Image src={image} alt={hotel.hotelStaticContent.name} />

      <div className="hotel-details">
        <div className="hotel-name">{hotel.hotelStaticContent.name}</div>
        <div className="location">
          {hotel.hotelStaticContent.neighborhoodName}
        </div>
      </div>
      <div className="price-details">
        <span className="price">
          <span
            dangerouslySetInnerHTML={{
              __html: hotel.lowestAveragePrice.symbol
            }}
          ></span>
          {hotel.lowestAveragePrice.amount}
        </span>
        <span className="rewards">{hotel.rewards.miles} miles</span>
        <button className="button">Select</button>
      </div>
    </div>
  );
};

export default HotelCard;
