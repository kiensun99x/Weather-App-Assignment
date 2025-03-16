import { useOutletContext } from "react-router-dom";
import DetailSection from "../components/details/DetailSection";
import HourlyPageDetail from "../components/pageDetail/HourlyDetail";
import filterFutureHours from "../utils/filterFutureHours";
import LineChart from "../components/details/LineChart";
import convertTzidToUtc from "../utils/convertTzidToUtc";

export default function Hourly() {
  const outletContext = useOutletContext();
  const WeatherData = outletContext.WeatherData;
  if (WeatherData) {
    const todayData = WeatherData.forecast.forecastday[0];
    const fiteredData = filterFutureHours(todayData.hour);
    const location= `(${WeatherData.location.name}/${convertTzidToUtc(WeatherData.location.tz_id) })`
    return (
      <div id="hourly-page" className="bg-gray-200 min-h-screen py-28 ">
        <div id="page-container" className="max-w-5xl mx-auto">
          <DetailSection title={"Dự báo trong ngày" + location}>
            <div className="flex flex-col p-4">
              {fiteredData.map((item, index) => 
                <HourlyPageDetail key={index} data={item}/>
              )}
            </div>
          </DetailSection>
          <DetailSection title={'Nhiệt độ và khả năng có mưa trong ngày' + location}>
            <LineChart data={fiteredData}/>
          </DetailSection>
        </div>
      </div>
    );
  }
}
