import React, { useState } from 'react';

//props passed into this component will be filtered/sorted in SearchControls
//regardless of what SearchControls does, this component will render a list of hotels
export default function HotelList({
    hotels
}) {

    //Earmarked for further functionality. What happens when the user clicks?
    const handleClick = (uniqueHotel) => {
        console.log(uniqueHotel.id)
    }

    return (
        <div>
            <div className="hotel-list">
                {hotels.map(hotel => (
                    <div className="hotel-card" key={hotel.id}>
                        <div
                            className="image"
                            style={{ backgroundImage: `url(${hotel.hotelStaticContent.mainImage.url})` }}>
                        </div>
                        <div className="hotel-details">
                            <div className="hotel-name">
                                {hotel.hotelStaticContent.name}
                            </div>
                            <div className="location">
                                {hotel.hotelStaticContent.neighborhoodName}
                            </div>
                        </div>
                        <div className="price-details">
                            <span className="price">
                                <span dangerouslySetInnerHTML={{ __html: hotel.lowestAveragePrice.symbol }}></span>
                                {hotel.lowestAveragePrice.amount}
                            </span>
                            <span className="rewards">
                                {hotel.rewards.miles} miles
                                </span>
                            <button
                                className="button select-button"
                                onClick={() => handleClick(hotel)}>
                                Select
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
