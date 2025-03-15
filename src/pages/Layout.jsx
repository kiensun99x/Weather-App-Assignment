import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function Layout({setCity, WeatherData, loading}){
    return(
        <>
            <Header setCity={setCity} loading={loading}/>
            <Outlet context={{WeatherData}}/>
        </>
    )
}