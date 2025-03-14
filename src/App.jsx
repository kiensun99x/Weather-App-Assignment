import { useEffect, useState } from "react";
import "./App.css";
import "leaflet/dist/leaflet.css";
import Header from "./components/Header.jsx";
import CurWeather from "./components/CurWeather.jsx";
import Body from "./components/Body.jsx";
import fetchCurWeather from "./services/fetchCurWeather.jsx";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import Home from "./pages/Home.jsx";
import Hourly from "./pages/Hourly.jsx";
import Tomorrow from "./pages/Tomorrow.jsx";
import ThreeDays from "./pages/ThreeDays.jsx";
import FiveDays from "./pages/FiveDays.jsx";
import SevenDays from "./pages/SevenDays.jsx";
import TwoWeeks from "./pages/TwoWeeks.jsx";

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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout setCity={setCity} WeatherData={WeatherData}/>}>
            <Route index element={<Home />}/>
            <Route path="/hourly" element={<Hourly />}/>
            <Route path="/tomorrow" element={<Tomorrow />}/>
            <Route path="/3days" element={<ThreeDays />}/>
            <Route path="/5days" element={<FiveDays />}/>
            <Route path="/7days" element={<SevenDays />}/>
            <Route path="/14days" element={<TwoWeeks />}/>
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
