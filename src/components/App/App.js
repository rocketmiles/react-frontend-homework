import React, { useState, useEffect } from "react";
import "./App.style.scss";
import Hotels from "../Hotels/Hotels";
import Filters from "../Filters/Filters";
import hotelResultService from "../../services/hotel-result/hotel-result.service";

const App = () => {
  const [hotels, updateHotels] = useState([]);
  const [filteredHotels, updateFilteredHotels] = useState([]);

  const [sort, updateSort] = useState("recommended");

  console.log("hotels", hotels);

  const filterHotels = searchValue => {
    let filtered = hotels.filter(hotel => {
      let hotelName = hotel.hotelStaticContent.name.toLowerCase();
      let searchValueLowerCase = searchValue.toLowerCase();
      return hotelName.includes(searchValueLowerCase);
    });
    updateFilteredHotels(filtered);
  };

  const sortHotels = (hotels, sortBy) => {
    if (sortBy === "recommended") {
      return hotels.sort(
        (a, b) => a.hotelStaticContent.rating - b.hotelStaticContent.rating
      );
    } else if (sortBy === "ascending") {
      return hotels.sort(
        (a, b) => b.lowestAveragePrice.amount - a.lowestAveragePrice.amount
      );
    } else if (sortBy === "descending") {
      return hotels.sort(
        (a, b) => a.lowestAveragePrice.amount - b.lowestAveragePrice.amount
      );
    }
  };

  const getHotels = () => {
    if (filteredHotels.length) {
      return sortHotels(filteredHotels, sort);
    } else {
      return sortHotels(hotels, sort);
    }
  };

  useEffect(() => {
    hotelResultService
      .get()
      .then(response => {
        updateHotels(response.results.hotels);
      })
      .catch(err => {
        console.log("err", err);
      });
  }, []);

  return (
    <div className="app-container">
      <div className="content">
        <Filters
          sort={sort}
          updateSort={updateSort}
          filterHotels={filterHotels}
        />
        <Hotels hotels={getHotels()} />
      </div>
    </div>
  );
};

export default App;
