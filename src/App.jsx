import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import CurWeather from "./components/CurWeather.jsx";
import Body from "./components/Body.jsx";
import fetchCurWeather from "./services/fetchCurWeather.jsx";

function App() {
  const [city, setCity] = useState('Ha Noi');
  const [curWeatherData, setCurWeatherData] = useState(null);
 
  useEffect(() => {
    fetchCurWeather(city).then((data) => {
      if (data) setCurWeatherData(data);
    });
  }, [city]);
  
  return (
    <>
      <Header setCity={setCity} />
      <CurWeather curWeatherData={curWeatherData}/>
      <Body curWeatherData={curWeatherData}/>


    </>
  );
}

export default App;
