import React, { useState, useEffect } from 'react';
import './App.style.scss'

import SearchControls from '../SearchControls/SearchControls'

import hotelResultService from '../../services/hotel-result/hotel-result.service';

const App = () => {
    const [hotels, setHotels] = useState([]);

    useEffect(() => {
        hotelResultService.get().then(response => {
            setHotels(response.results.hotels)
            console.log(response.results.hotels)
        })
    }, []);

    return (
        <div className="app-container">

                <SearchControls hotels={hotels}/>

        </div>
    )
}

export default App;
