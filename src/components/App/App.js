import React, { useState, useEffect } from "react";
import "./App.style.scss";
import Hotels from "../Hotels/Hotels";
import Filters from "../Filters/Filters";
import hotelResultService from "../../services/hotel-result/hotel-result.service";

const App = () => {
  const [hotels, updateHotels] = useState([]);
  const [filteredHotels, updateFilteredHotels] = useState([]);
  const [searchTerm, updateSearch] = useState("");
  const [sort, updateSort] = useState("");

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
          searchTerm={searchTerm}
          updateSort={updateSort}
          updateSearch={updateSearch}
        />
        <Hotels hotels={hotels} />
      </div>
    </div>
  );
};

export default App;
