import React, { useState } from 'react';
import HotelList from '../HotelList/HotelList'

//from SearchControls, pass down props to HotelList
//here, in SearchControls, I'll do any necessary filtering/sorting per user input
//if user input, pass filtered/sorted list into HotelList
//HotelList will take whatever its props are and list them on the page (sorted/filtered or not)
export default function SearchControls({
    hotels,
}) {

    //TODO
    //create new state variables to sort based on recommended, low-to-high, high-to-low
    //create state to handle filter by name





    return (
        <div className="content">


            <div className="filters">
                Hotel name
                        <input type="text" className="input" maxLength={1} />
                        Price
                        <select name="" className="select">
                    <option value="">Recommended</option>
                    <option value="">Price low-to-high</option>
                    <option value="">Price high-to-low</option>
                </select>
                <button className="button">Reset</button>
            </div>
            {/* TEMP pass in unfiltered/unsorted API results into HotelList, change to hotels={searchedHotels} once functions are built */}
            <HotelList hotels={hotels} />
        </div>

    )
}
