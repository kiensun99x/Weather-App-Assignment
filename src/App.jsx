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
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
