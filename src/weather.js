import React from "react";

export default function Weather(props) {
  if (props.temperature) {
    return (
      <div className="Weather">
        <ul>
          <li>Temperature: {Math.round(props.temperature)}°C</li>
          <li>Description: {props.description}</li>
          <li>Humidity: {props.humidity}%</li>
          <li>Wind: {props.wind}km/h</li>
          <li>
            <img
              src={`https://openweathermap.org/img/wn/${props.icon}@2x.png`}
              height="100"
              width="100"
              alt={props.description}
            />
          </li>
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
