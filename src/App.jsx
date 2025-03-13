import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import CurWeather from "./components/CurWeather.jsx";
import Body from "./components/Body.jsx";
import fetchCurWeather from "./services/fetchCurWeather.jsx";

function App() {
  const [city, setCity] = useState('Ha Noi');
  const [WeatherData, setWeatherData] = useState(null);
 
  useEffect(() => {
    fetchCurWeather(city).then((data) => {
      if (data) 
        if(!data.error)
        setWeatherData(data);
    });
  }, [city]);
  
  return (
    <>
      <Header setCity={setCity} />
      <CurWeather WeatherData={WeatherData}/>
      <Body WeatherData={WeatherData}/>


    </>
  );
}

export default App;
