import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function Layout({setCity, WeatherData}){
    return(
        <>
            <Header setCity={setCity}/>
            <Outlet context={{WeatherData}}/>
        </>
    )
}