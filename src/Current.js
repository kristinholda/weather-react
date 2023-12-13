import React from "react";

export default function Current() {
  let weatherData = {
    temperature: 37,

    description: "Broken Clouds",
    imgUrl:
      "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png",
    feels: 32,
    humidity: 80,
    wind: 10,
  };

  return (
    <div className="row current">
      <div className="col-6 current-weather-temp">
        <h3 id="temperature">{weatherData.temperature}</h3>
        <ul>
          <li className="weather-units" id="units">
            <a href="#" id="fahrenheit-link" class="active" rel="noreferrer">
              °F
            </a>
            |
            <a href="#" id="celsius-link">
              °C
            </a>
          </li>
        </ul>
      </div>

      <div className="col-3 current-weather-description">
        <img
          src={weatherData.imgUrl}
          alt={weatherData.description}
          id="weather-icon"
        />
        <h4 className="weather-desc" id="weather-description">
          {weatherData.description}
        </h4>
      </div>

      <div className="col-3 weather-conditions">
        <ul id="weather-info">
          <li className="feels-like">
            <img
              src="img/feels-like.svg"
              alt="feels-like-icon"
              className="icon"
            />
            Feels like: <span id="feels-like">{weatherData.feels}</span>°
          </li>
          <li className="humidity">
            <img src="img/humidity.svg" alt="humidity-icon" className="icon" />
            Humidity: <span id="humidity-level">{weatherData.humidity}</span>%
          </li>
          <li className="wind">
            <img src="img/wind.svg" alt="wind-icon" className="icon" />
            Wind: <span id="wind-speed">{weatherData.wind}</span> km/h
          </li>
        </ul>
      </div>
    </div>
  );
}
