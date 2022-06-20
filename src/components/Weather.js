import axios from "axios";
import { useEffect, useState } from "react";
import "./Weather.css"

export const Weather = () => {
  const [data, setData] = useState(null);


  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (x) => {
      try {
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${x.coords.latitude}&lon=${x.coords.longitude}&appid=4c2ee7d0e1022d94f245ec51e2dcefb2&units=metric`
        );
        setData(res.data);
       
      } catch (error) {
        console.log(error);
      }
    });
  }, []);

  //render nothing if there is no data
  if (!data) {
    return;
  }

  return (
    <div className="weather-container">
        <h3 className="weather-title">Weather</h3>
      <img
        src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        alt="weather"
        className="img"
      />
      <div>
          <p>{data.weather[0].description}</p>
      </div>
      <div>
        <h3>{Math.floor(data.main.temp)} &deg;C</h3>
        <p>{data.name}</p>
      </div>
    </div>
  );
};
