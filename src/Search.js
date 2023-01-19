import React, { useState } from "react";
import weather from "./weather";
import axios from "axios";

export default function Search() {
  const [city, setCity] = useState("Sydney");
  let [temperature, setTemperature] = useState(null);
  let [description, setDescription] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [icon, setIcon] = useState(null);

  function showWeather(response) {
    setTemperature(response.data.main.temp);
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setIcon(response.data.weather[0].icon);
  }
  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8ccf37f47c78fce7cbde0d0a29369196&units=metric`;
    axios.get(url).then(showWeather);
  }

  function changeCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="WeatherSearch">
      <form onSubmit={handleSubmit}>
        <input type="search" placeholder="Type a city" onChange={changeCity} />
        <input type="submit" value="Search" />
      </form>

      <weather
        temperature={temperature}
        description={description}
        humidity={humidity}
        wind={wind}
        icon={icon}
      />
    </div>
  );
}
