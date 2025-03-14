
import { useOutletContext } from "react-router-dom";
import DetailSection from "../components/details/DetailSection";
import HourlyPageDetail from "../components/pageDetail/HourlyDetail";
import filterFutureHours from "../utils/filterFutureHours";
import LineChart from "../components/details/LineChart";
import DailyPageDetail from "../components/pageDetail/DailyDetail";
import { formatDateMonth } from "../utils/formatDate";

export default function ThreeDays() {
  const outletContext = useOutletContext();
  const WeatherData = outletContext.WeatherData;
  if (WeatherData) {
    const arr3days = WeatherData.forecast.forecastday.slice(1,4); //3 ngay tới
    const formatByDays = arr3days.map((i) => (

    
        {
            ...i,
            'time_epoch': i.date_epoch,
            'time':  formatDateMonth(i.date),
            'temp_c': i.day.avgtemp_c,
            'chance_of_rain': i.day.daily_chance_of_rain,
        }

    ))

    return (
      <div id="hourly-page" className="bg-gray-200 min-h-screen py-28 ">
        <div id="page-container" className="max-w-5xl mx-auto">
          <DetailSection title={"Dự báo 3 ngày tới"}>
            <div className="flex flex-col p-4">
              {formatByDays.map((item, index) => 
                <DailyPageDetail key={index} data={item}/>
              )}
            </div>
          </DetailSection>
          <DetailSection title={'Nhiệt độ và khả năng có mưa 3 ngày tới'}>
            <LineChart data={formatByDays}/>
          </DetailSection>
        </div>
      </div>
    );
  }
}