import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import { useState } from 'react';

export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState(
        {
            city:"pune",
            feelsLike: 17.54,
            humidity: 47,
            temp: 18.42,
            tempMax: 18.42,
            tempMin: 18.42,
            weather: "scattered clouds",
        });
    let updateInfo = (result) =>{
        setWeatherInfo(result);
    }

    return (
        <div>
            <h2 style={{textAlign:"center"}} >Weather App</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo} />
        </div>
    )

}