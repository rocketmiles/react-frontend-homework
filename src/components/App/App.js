import React, { useState, useEffect } from "react";
import "./App.style.scss";
import Hotels from "../Hotels/Hotels";
import Filters from "../Filters/Filters";
import hotelResultService from "../../services/hotel-result/hotel-result.service";

const App = () => {
  // State
  const [hotels, updateHotels] = useState([]);
  const [filteredHotels, updateFilteredHotels] = useState([]);
  const [sort, updateSort] = useState("Recommended");
  const [searchTerm, updateSearch] = useState("");

  // Helper Functions
  const filterHotels = searchValue => {
    let filtered = hotels.filter(hotel => {
      let hotelName = hotel.hotelStaticContent.name.toLowerCase();
      let searchValueLowerCase = searchValue.toLowerCase();
      return hotelName.includes(searchValueLowerCase);
    });
    updateFilteredHotels(filtered);
  };

  const sortHotels = (hotels, sortBy) => {
    if (sortBy === "Recommended") {
      return hotels.sort(
        (a, b) => b.hotelStaticContent.rating - a.hotelStaticContent.rating
      );
    } else if (sortBy === "Ascending") {
      return hotels.sort(
        (a, b) => a.lowestAveragePrice.amount - b.lowestAveragePrice.amount
      );
    } else if (sortBy === "Descending") {
      return hotels.sort(
        (a, b) => b.lowestAveragePrice.amount - a.lowestAveragePrice.amount
      );
    }
  };

  const getHotels = () => {
    if (filteredHotels.length || searchTerm) {
      return sortHotels(filteredHotels, sort);
    } else {
      return sortHotels(hotels, sort);
    }
  };

  // API Call
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
          searchTerm={searchTerm}
          sort={sort}
          filterHotels={filterHotels}
          updateSort={updateSort}
          updateSearch={updateSearch}
          updateFilteredHotels={updateFilteredHotels}
        />
        <Hotels hotels={getHotels()} />
      </div>
    </div>
  );
};

export default App;
