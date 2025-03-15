import getWeatherBackground from "../services/getWeatherBg";

export default function CurWeather({WeatherData}){
    const defaultData = {
        location: { name: "--", country: "" },
        current: {
          temp_c: "--",
          feelslike_c: "--",
          humidity: "--",
          cloud:"--",
          wind_kph: "--",
          vis_km: "--",
          uv: "--",
          condition: { text: "", icon: "" },
        },
      };
    
    const location = WeatherData?.location || defaultData.location;
    const currentData = WeatherData?.current || defaultData.current;
    console.log(currentData.condition.code);
    
    
    return(
        <div id="cur-weather" className=" pt-34 pb-10 w-100% bg-cover bg-center"
            style={{ backgroundImage: `url(${getWeatherBackground(currentData.condition.code, currentData.is_day)})` }}
        >
            <div className="max-w-2xl min-h-100 mx-10 md:mx-auto bg-black/20 rounded-2xl">
                <div className="flex flex-col sm:flex-row  opacity-100 text-white">
                    <div className="p-8 flex-1  flex flex-col justify-center items-center gap-1 text-center">
                        <h1 className="text-5xl sm:text-6xl ">{location.name}</h1>
                        <h1 className="text-lg sm:text-xl mb-8">{location.country}</h1>
                        <img className="size-20" src={currentData.condition.icon} alt="" />
                        {/* <h1 className="text-4xl">☁</h1> */}
                        <h3 className="text-lg sm:text-xl">{currentData.condition.text}</h3>
                        <h1 className="text-5xl sm:text-6xl">{currentData.temp_c}°C</h1>
                    </div>
                    <div className="p-8 pt-0 sm:p-8 flex-1 min-h-100 flex flex-col justify-around sm:text-lg">
                        <li className="flex justify-between"><i>Cảm giác như:</i><i>{currentData.feelslike_c}°C</i></li>
                        <li className="flex justify-between"><i>Độ ẩm:</i><i>{currentData.humidity}%</i></li>
                        <li className="flex justify-between"><i>Mây che phủ:</i><i>{currentData.cloud}%</i></li>
                        <li className="flex justify-between"><i>Tốc độ gió:</i><i>{currentData.wind_kph}km/h</i></li>
                        <li className="flex justify-between"><i>Tầm nhìn:</i><i>{currentData.vis_km}km</i></li>
                        <li className="flex justify-between"><i>Chỉ số UV:</i><i>{currentData.uv}</i></li>
                    </div>
                </div>
            </div>
        </div>
    )
}