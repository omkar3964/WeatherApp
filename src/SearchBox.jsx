import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({updateInfo}){
    let [city , setCity] = useState("");
    let [error , setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather"
    const API_KEY = "68378772d90e1d5b14087e7d7f501636"

    let getWeatherInfo = async ()=>{
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            console.log(jsonResponse);
            let result = {
                city : city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike : jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            };
            console.log(result);
            return result;
        }catch(error) {
            throw error;
        }
    }

    let handelChange = (event)=>{
        setCity(event.target.value);
    }

    let handelSubmit =async (event)=>{
        try{
            event.preventDefault();
            console.log(city);
            setCity("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);

        }catch(error){
            setError(true);
        }
    }
    return (
        <div className="SearchBox" >
            <form action="/" onSubmit={handelSubmit}>
                <TextField id="city" label="City-name" variant="outlined" onChange={handelChange} value={city} required/>
                <br /><br />
                <Button variant="contained" type="submit" >Search</Button>
                {error && <p style={{color:"red"}}>No data for that place</p>}
            </form>
        </div>
    );
}