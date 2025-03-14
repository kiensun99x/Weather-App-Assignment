import DailyDetail from "./details/DailyDetail";
import HourlyDetail from "./details/HourlyDetail";
import DetailSection from "./details/DetailSection";
import LineChart from "./details/LineChart";
import BarChart from "./details/BarChart";
import SunStatus from "./details/SunStatus";
import WeatherMap from "./details/WeatherMap";
import AirQuality from "./details/AirQuality";

export default function Body({WeatherData}) {
  const todayData = WeatherData?.forecast.forecastday[0];
  const forecastData = WeatherData?.forecast?.forecastday?.slice(1) || [];
  return (
    <div id="body" className="bg-gray-200 pt-4 pb-10">
      <div className="max-w-5xl mx-4 lg:mx-auto flex flex-col md:flex-row ">
        <div className="md:flex-1 min-w-0">
          <DetailSection title={'Dự báo trong ngày'}>
            <HourlyDetail todayData={todayData}/>
          </DetailSection>
          <DetailSection title={'Dự báo những ngày tới'}>
            <DailyDetail forecastData={forecastData}/>
          </DetailSection>
          <DetailSection title={'Nhiệt độ và khả năng có mưa trong ngày'}>
            <LineChart data={todayData.hour}/>
          </DetailSection>
          <DetailSection title={"Lượng mưa những ngày tới"}>
            <BarChart data={forecastData}/>
          </DetailSection>
        </div>
        <div className="min-w-80  ">
          <DetailSection title={'Chất lượng không khí'}>
            <AirQuality data={WeatherData}/>  
          </DetailSection>
          <DetailSection title={'Bình minh/Hoàng hôn'}>
            <SunStatus data={todayData}/>
          </DetailSection>
          <DetailSection title={"Bản đồ lượng mưa/nhiệt độ"}>
            <WeatherMap data={WeatherData}/>
          </DetailSection>
        </div>
      </div>
    </div>
  );
}
