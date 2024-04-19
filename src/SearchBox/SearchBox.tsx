"use client";

import { useState } from "react";
import "./SearchBox.css";
// import InputField from "./InputField/InputField";
// import SearchButton from "./SearchButton/SearchButton";

export default function SearchBox() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const handleFetch = async () => {
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a10fd647e5b66fe47bf06b45afa3e4bd`;
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
    const data = await response.json();
    console.log(data);
    setWeather(data.main.temp);
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
