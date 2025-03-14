import { useOutletContext } from "react-router-dom";
 import DetailSection from "../components/details/DetailSection";
 import HourlyPageDetail from "../components/pageDetail/HourlyDetail";
 import filterFutureHours from "../utils/filterFutureHours";
 import LineChart from "../components/details/LineChart";
 
 export default function Tomorrow() {
   const outletContext = useOutletContext();
   const WeatherData = outletContext.WeatherData;
   if (WeatherData) {
     const todayData = WeatherData.forecast.forecastday[1];
     const fiteredData = filterFutureHours(todayData.hour);
     const firstHalf = todayData.hour.slice(0, 12);     // Mảng đầu tiên
     const secondHalf = todayData.hour.slice(12); 
     return (
       <div id="hourly-page" className="bg-gray-200 min-h-screen py-28 ">
         <div id="page-container" className="max-w-5xl mx-auto">
           <DetailSection title={"Dự báo ngày mai"}>
             <div className="flex flex-col p-4">
               {fiteredData.map((item, index) => 
                 <HourlyPageDetail key={index} data={item}/>
               )}
             </div>
           </DetailSection>
           <DetailSection title={'Nhiệt độ và khả năng có mưa ngày mai'}>
             <LineChart data={firstHalf}/>
             <LineChart data={secondHalf}/>
             
           </DetailSection>
 
 
         </div>
       </div>
     );
   }
 }