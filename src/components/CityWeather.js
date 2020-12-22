import React from 'react'

export default function CityWeather({weather}) {
    function msConverter(ms) {
        const date = new Date(ms * 1000)
        const hours = date.getHours()
        const min =  date.getMinutes()
        return `${hours < 10 ? '0' + hours : hours}:${min < 10 ? '0' + min : min}`
    }
    if (weather)
        return(
            <div className="card">
                <div className="card-body">
                    <h1 className="card-title">{weather.name}<img src={"http://openweathermap.org/img/w/" + weather.weather[0].icon + ".png"} alt={weather.description} /></h1>
                    <h3>Температура воздуха: {weather.main.temp}C°</h3>
                    <h3>Влажность: {weather.main.humidity}%</h3>
                    <h3>Ветер: {weather.wind.speed}м/с</h3>
                    <h3>Рассвет {msConverter(weather.sys.sunrise)} Закат {msConverter(weather.sys.sunset)} </h3>
                </div>
            </div>
            
        ) 
    else return <h2>Выберите город</h2>
}