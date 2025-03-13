import DailyDetail from "./details/DailyDetail";
import HourlyDetail from "./details/HourlyDetail";
import DetailSection from "./DetailSection";

export default function Body({WeatherData}) {
  const todayData = WeatherData?.forecast.forecastday[0];
  const forecastData = WeatherData?.forecast?.forecastday?.slice(1) || [];
  return (
    <div className="bg-gray-200 pt-4 pb-10">
      <div className="max-w-5xl mx-4 lg:mx-auto flex flex-col md:flex-row h-400">
        <div className="md:flex-1 min-w-0">
          <DetailSection title={'Dự báo trong ngày'}>
            <HourlyDetail todayData={todayData}/>
          </DetailSection>
          <DetailSection title={'Dự báo những ngày tới'}>
            <DailyDetail forecastData={forecastData}/>
          </DetailSection>
        </div>
        <div className="min-w-80  ">
          <DetailSection />
          <DetailSection />
        </div>
      </div>
    </div>
  );
}
