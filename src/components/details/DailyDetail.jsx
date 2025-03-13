import { getDateFromString } from "../../utils/formatDate";
import DailyDetailItem from "./DailyDetailItem";

export default function DailyDetail({forecastData}) {
    const defaultData = [
        {"date": "", "day": {maxtemp_c: '',mintemp_c: '', condition: { text: '', icon:''},avghumidity: ''}},
        {"date": "", "day": {maxtemp_c: '',mintemp_c: '', condition: { text: '', icon:''},avghumidity: ''}},
        {"date": "", "day": {maxtemp_c: '',mintemp_c: '', condition: { text: '', icon:''},avghumidity: ''}},
    ]
    const data = forecastData && forecastData.length > 0 ? forecastData : defaultData;
    return(
        <div className="flex flex-col">
            {data.map((item, index) => <DailyDetailItem key={index} item={item}/>)}

            
        </div>
    )
}