import { useOutletContext } from "react-router-dom";
import Body from "../components/Body";
import CurWeather from "../components/CurWeather";

export default function Home(){
    const outletContext = useOutletContext()
    const WeatherData = outletContext.WeatherData 
    return(
        <>
            <CurWeather WeatherData={WeatherData}/>
            <Body WeatherData={WeatherData}/>
        </>
    )

}