import React, { useEffect, useState } from 'react';
import './App.css';
import searchIcon from './assets/search.jpg';
import clear from './assets/clear.webp';
import clouds from './assets/clouds.webp';
import drizzile from './assets/drizzile.webp';
import mist from './assets/mist.webp';
import Rain from './assets/Rain.webp';
import snow from './assets/snow.webp';
import thunderstrom from './assets/thunderstrom.webp';

import cloudsIcon from './assets/clouds_icon.webp';
import clearSkyIcon from './assets/clear_sky_icon.webp';
import drizzileIcon from './assets/drizzile_icon.webp';
import MistIcon from './assets/mist_icon.webp';
import RainIcon from './assets/rain_icon.webp';
import SnowIcon from './assets/snow_icon.webp';
import ThunderstromIcon from './assets/thunderstrom_icon.webp';

const weatherImgMap = {
  "01d": clear, "02d": clouds, "03d": clouds, "04d": clouds,
  "09d": drizzile, "10d": Rain, "11d": thunderstrom, "13d": snow, "50d": mist,
  "01n": clear, "02n": clouds, "03n": clouds, "04n": clouds,
  "09n": drizzile, "10n": Rain, "11n": thunderstrom, "13n": snow, "50n": mist
};

const weatherIconMap = {
  "01d": clearSkyIcon, "02d": cloudsIcon, "03d": cloudsIcon, "04d": cloudsIcon,
  "09d": drizzileIcon, "10d": RainIcon, "11d": ThunderstromIcon, "13d": SnowIcon, "50d": MistIcon,
  "01n": clearSkyIcon, "02n": cloudsIcon, "03n": cloudsIcon, "04n": cloudsIcon,
  "09n": drizzileIcon, "10n": RainIcon, "11n": ThunderstromIcon, "13n": SnowIcon, "50n": MistIcon
};

const WeatherDetails = ({temp, status, feel, city, country, minTemp, maxTemp, pressure, humidity, speed, sunrise, sunset, longitude, latitude, icon1, icon3, icon2, icon4, icon5, temp1, temp2, temp3, temp4, temp5, cond1, cond2, cond3, cond4, cond5}) => {
    return (
        <div className='container flex'>
        <div className="first-row flex">
            <div className="box1 flex">
                <div className="temp-box">
                    <div className='temp'>{temp}{"\u00B0"}C</div>
                    <div className="status">{status}</div>
                    <div className="feel">feels like {feel}{"\u00B0"}C</div>
                </div>
                <div className="area flex">
                    <div className='location'>{city}</div>
                    <div className="country">{country}</div>
                </div>
            </div>
            <div className="box2 flex">
                <div className="min-temp">Minimum temperature: <span>{minTemp}{"\u00B0"}C</span></div>
                <div className="max-temp">Maximum temperature: <span>{maxTemp}{"\u00B0"}C</span></div>
                <div className="pressure">Pressure: <span>{pressure} hPa</span></div>
                <div className="humidity">Humidity: <span>{humidity}%</span></div>
                <div className="speed">Speed: <span>{speed} km/h</span></div>
            </div>
        </div>
        <div className="second-row flex">
            <div className="left flex">
                <div className="box1">
                    <div className="sunrise">Sun rise: <span>{sunrise}</span></div>
                    <div className="sunset">Sun set: <span>{sunset}</span></div>
                </div>
                <div className="box2">
                    <div className="longitude">Longitude: <span>{longitude}{"\u00B0"}</span></div>
                    <div className="latitude">Latitude: <span>{latitude}{"\u00B0"}</span></div>
                </div>
            </div>
            <div className="right flex">
                <div className="heading">5 Day weather forecase</div>
                <div className="boxes flex">
                    <div className="forecaste">
                        <img src={icon1} alt="image" />
                        <div className="temperature">{temp1}{"\u00B0"}C</div>
                        <div className="condition">{cond1}</div>
                    </div>
                    <div className="forecaste">
                        <img src={icon2} alt="image" />
                        <div className="temperature">{temp2}{"\u00B0"}C</div>
                        <div className="condition">{cond2}</div>
                    </div>
                    <div className="forecaste">
                        <img src={icon3} alt="image" />
                        <div className="temperature">{temp3}{"\u00B0"}C</div>
                        <div className="condition">{cond3}</div>
                    </div>
                    <div className="forecaste">
                        <img src={icon4} alt="image" />
                        <div className="temperature">{temp4}{"\u00B0"}C</div>
                        <div className="condition">{cond4}</div>
                    </div>
                    <div className="forecaste">
                        <img src={icon5} alt="image" />
                        <div className="temperature">{temp5}{"\u00B0"}C</div>
                        <div className="condition">{cond5}</div>
                    </div>
                </div>
            </div>
        </div>
        <div className='copyright'>Weather Application developed by <span>William James</span></div>
        </div>
    );
}

const App = () => {
  const API_KEY = '4fa0af5705a5cc1e4f1edf6923072791';

  const [text, setText] = useState("London");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedCity, setSelectedCity] = useState("London");

  const [status, setStatus] = useState("Clear");
  const [feel, setFeel] = useState(0);
  const [temp, setTemp] = useState(0);
  const [city, setCity] = useState("London");
  const [country, setCountry] = useState("GB");
  const [minTemp, SetMinTemp] = useState(0);
  const [maxTemp, setMaxTemp] = useState(0);
  const [pressure, setPressure] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [sunrise, setSunrise] = useState(0);
  const [sunset, setSunset] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [latitude, setLatitude] = useState(0);

  const [icon1, setIcon1] = useState(clearSkyIcon);
  const [icon2, setIcon2] = useState(clearSkyIcon);
  const [icon3, setIcon3] = useState(clearSkyIcon);
  const [icon4, setIcon4] = useState(clearSkyIcon);
  const [icon5, setIcon5] = useState(clearSkyIcon);

  const [temp1, setTemp1] = useState(0);
  const [temp2, setTemp2] = useState(0);
  const [temp3, setTemp3] = useState(0);
  const [temp4, setTemp4] = useState(0);
  const [temp5, setTemp5] = useState(0);

  const [cond1, setCond1] = useState("Clear");
  const [cond2, setCond2] = useState("Clear");
  const [cond3, setCond3] = useState("Clear");
  const [cond4, setCond4] = useState("Clear");
  const [cond5, setCond5] = useState("Clear");

  const [cityNotFound, setCityNotFound] = useState(false);
  const [Loading, setLoading] = useState(false);
  const [img, setImg] = useState(clear);
  const [error, setError] = useState(null);

  const fetchSuggestions = async (input) => {
    if (input.length === 0) return setSuggestions([]);
    try {
      const res = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${input}&limit=5&appid=${API_KEY}`);
      const data = await res.json();
      setSuggestions(data);
    } catch (err) {
      console.error("Error fetching city suggestions", err);
    }
  };

  const search = async (searchText = text) => {
    setLoading(true);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=${API_KEY}&units=Metric`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${searchText}&appid=${API_KEY}&units=Metric`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      const res2 = await fetch(forecastUrl);
      const forecastData = await res2.json();

      if (data.cod === "404" || data.cod === 404) {
        setCityNotFound(true);
        setLoading(false);
        return;
      }

      const formatTime = (t, z) => {
        const local = t + z;
        const hrs = String(Math.floor(local / 3600 % 24)).padStart(2, '0');
        const mins = String(Math.floor(local / 60 % 60)).padStart(2, '0');
        return `${hrs}:${mins}`;
      };

      setCityNotFound(false);
      setTemp(Math.round(data.main.temp));
      setStatus(data.weather[0].main);
      setCity(data.name);
      setCountry(data.sys.country);
      setImg(weatherImgMap[data.weather[0].icon] || clear);
      setFeel(Math.round(data.main.feels_like));
      SetMinTemp(Math.round(data.main.temp_min));
      setMaxTemp(Math.round(data.main.temp_max));
      setPressure(data.main.pressure);
      setHumidity(data.main.humidity);
      setSpeed(data.wind.speed);
      setSunrise(formatTime(data.sys.sunrise, data.timezone));
      setSunset(formatTime(data.sys.sunset, data.timezone));
      setLongitude(data.coord.lon);
      setLatitude(data.coord.lat);

      const setForecast = (i, setIcon, setTemp, setCond) => {
        setIcon(weatherIconMap[forecastData.list[i].weather[0].icon]);
        setTemp(Math.round(forecastData.list[i].main.temp));
        setCond(forecastData.list[i].weather[0].main);
      };

      setForecast(0, setIcon1, setTemp1, setCond1);
      setForecast(1, setIcon2, setTemp2, setCond2);
      setForecast(2, setIcon3, setTemp3, setCond3);
      setForecast(3, setIcon4, setTemp4, setCond4);
      setForecast(4, setIcon5, setTemp5, setCond5);
    } catch (err) {
      console.error("Fetch error:", err);
      setError("Failed to fetch weather data");
    } finally {
      setLoading(false);
    }
  };

  const HandleCity = (e) => {
    const value = e.target.value;
    setText(value);
    fetchSuggestions(value);
  };

  const HandleKeyDown = (e) => {
    if (e.key === "Enter") {
      search(text);
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (name) => {
    setText(name);
    setSuggestions([]);
    search(name);
  };

  useEffect(() => {
    search("London");
  }, []);

  return (
    <div className="frame">
      <img src={img} id='img' />
      <div className='main'>
        <div className="input-container">
          <div className="input flex">
            <input
              type="text"
              placeholder='Enter the city name'
              onChange={HandleCity}
              value={text}
              onKeyDown={HandleKeyDown}
            />
            <img src={searchIcon} alt="search" onClick={() => search(text)} />
          </div>
          {suggestions.length > 0 && (
            <ul className="suggestions">
              {suggestions.map((s, i) => (
                <li
                  key={i}
                  className="suggestion-item"
                  onClick={() => handleSuggestionClick(s.name)}
                >
                  {s.name}, {s.state ? s.state + ", " : ""}{s.country}
                </li>
              ))}
            </ul>
          )}
        </div>

        {Loading && <div className="Loading-message">Loading...</div>}
        {error && <div className="error-message">{error}</div>}
        {cityNotFound && <div className="city-not-found">City Not Found</div>}

        <div className="details">
          {!Loading && !cityNotFound && !error && (
            <WeatherDetails
              temp={temp} status={status} feel={feel} city={city} country={country}
              minTemp={minTemp} maxTemp={maxTemp} pressure={pressure} humidity={humidity}
              speed={speed} sunrise={sunrise} sunset={sunset} longitude={longitude}
              latitude={latitude} icon1={icon1} icon2={icon2} icon3={icon3}
              icon4={icon4} icon5={icon5} temp1={temp1} temp2={temp2} temp3={temp3}
              temp4={temp4} temp5={temp5} cond1={cond1} cond2={cond2}
              cond3={cond3} cond4={cond4} cond5={cond5}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;