import React, { useState, useEffect } from 'react';
import hotelSortService from '../../services/hotel-sort/hotel-sort.service'
import hotelFilterService from '../../services/hotel-filter/hotel-filter.service'
import HotelList from '../HotelList/HotelList'


export default function SearchControls({ hotels }) {


    const [sortValue, setSortValue] = useState('')
    const [filterValue, setFilterValue] = useState('')

    console.log(sortValue)
    console.log(filterValue)

    const filteredHotelsByName = hotelFilterService(hotels, filterValue)

    //reset state values => return hotel list to unfiltered/unsorted
    const reset = () => {
        setSortValue('');
        setFilterValue('');
        console.log('reset')
    }

    return (
        <div className="content">


            <div className="filters">

                <label htmlFor="hotel-name-filter-input">Hotel name</label>
                <input
                    type="text"
                    className="input"
                    id="hotel-name-filter-input"
                    value={filterValue}
                    onChange={(event)=>setFilterValue(event.target.value)}/>

                <label htmlFor="hotel-price">Hotel name</label>
                <select
                    name="hotel-price-sort-dropdown"
                    className="select"
                    id="hotel-price-sort-dropdown"
                    value={sortValue}
                    onChange={(event) => setSortValue(event.target.value)}>
                    <option value="recommended">Recommended</option>
                    <option value="ascending">Price low-to-high</option>
                    <option value="descending">Price high-to-low</option>
                </select>

                <button
                    className="button"
                    role="button"
                    id="reset-button"
                    onClick={() => reset()}>
                    Reset
                </button>

            </div>
            {/* TEMP pass in unfiltered/unsorted API results into HotelList, change to hotels={searchedHotels} once functions are built */}
            <HotelList hotels={filteredHotelsByName} />
        </div>

    )
}
