import { formatDateMonth, getDateFromString, getDayOfWeek } from "../../utils/formatDate"

export default function DailyDetailItem({item}){
    const dayData = item.day;
    const formattedDate = formatDateMonth(item.date);
    const date = getDateFromString(item.date)
    const weekDay = getDayOfWeek(date);
    return(
        <div className="flex p-3 border-t items-center justify-around">
            <div className="flex flex-col sm:px-1">
                <span className="font-bold text-md">{weekDay}</span>
                <span className="text-sm">{formattedDate}</span>
            </div>
            <img className="pl-2 h-[50px]" src={dayData.condition.icon} alt="" />
            <div className="flex flex-col">
                <span className="text-xl min-[850px]:text-2xl font-semibold w-[60px] min-[850px]:w-[70px]">{dayData.maxtemp_c}°C </span>
                <span className="text-sm min-[850px]:text-md">{dayData.mintemp_c}°C </span>

            </div>
            
            <span className="flex-1 px-5 max-[385px]:hidden">{dayData.condition.text}</span>
            <img className="w-[18px] " src="https://www.awxcdn.com/adc-assets/images/components/weather/hourly-card-nfl/drop-icon.svg" alt="" />
            <span>{dayData.avghumidity}%</span>
        </div>
    )
}