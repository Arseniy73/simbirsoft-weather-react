import React, { useState } from 'react'
import CityWeather from './CityWeather'

export default function Weather() {
    const [weather, setWeather] = useState(null)
    function fetchWeather(city) {
        const API_KEY = 'fc07d3832bbffeb81777c794e3f7889e'
        const URL = `https://api.openweathermap.org/data/2.5/weather?id=${city}&appid=${API_KEY}&units=metric`
        return fetch(URL)
            .then(res => res.json())
            .then(json => setWeather(json))
            .catch(e => console.error(e + 'Сорян, твой гавнокод не пашет'))
    }
    return(
        <div className="container">
            <div className="btn-panel">
                <button className="btn btn-primary m-1" onClick={() => fetchWeather('479123')}>Ульяновск</button>
                <button className="btn btn-primary m-1" onClick={() => fetchWeather('566199')}>Димитровград</button>
                <button className="btn btn-primary m-1" onClick={() => fetchWeather('499099')}>Самара</button>
                <button className="btn btn-primary m-1" onClick={() => fetchWeather('551487')}>Казань</button>
            </div>
            <CityWeather weather={weather} />
        </div>
    )
}