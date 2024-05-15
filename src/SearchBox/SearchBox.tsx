"use client";

import { useState } from "react";
import "./SearchBox.css";
// import InputField from "./InputField/InputField";
// import SearchButton from "./SearchButton/SearchButton";
import type { WeatherData } from "./SearchBox_Types";

const apiKey = import.meta.env.REACT_APP_API_KEY;

export default function SearchBox() {
  // export default function SearchBox(props) {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const handleFetch = async (): Promise<string> => {
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const response = await fetch(apiURL, {
      headers: {
        Accept: "application/json",
      },
    });
    console.log(response);

    if (!response.ok) {
      console.error(response.status);
      console.error(response.text());
    }
    const data: WeatherData = await response.json();
    console.log(data);
    setWeather(String(data.main.temp - 200));
    return weather;
  };

  return (
    <>
      <input
        className="city"
        placeholder="enter your city"
        type="text"
        value={city}
        onChange={handleChange}
      ></input>
      <button type="submit" className="search" onClick={handleFetch}>
        Search
      </button>
      <p>{weather}</p>
    </>
  );
}

// onSubmit - refresh page
// onClick - no refresh page

