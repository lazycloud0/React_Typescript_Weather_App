'use client';
import {useState} from "react";

export default function InputField (){

const [city, setCity] = useState ("");
const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value)
}
console.log(city)
    return (
        <input 
        className="city"
        placeholder="enter your city"
        type="text"
        value={city}
        onChange={handleChange}
        ></input>
    )

    
}