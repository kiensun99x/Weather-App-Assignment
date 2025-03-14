import { useState } from "react";
import HourlyListItem from "./HourlyListItem";
import { useRef } from "react";
import filterFutureHours from "../../utils/filterFutureHours";

export default function HourlyDetail({todayData}) {
  const defaultData = [
    { time: '', temp_c: "--", condition: {icon: ''}, humidity: "" },
    { time: '', temp_c: "--", condition: {icon: ''}, humidity: "" },
    { time: '',  temp_c: "--", condition: {icon: ''},  humidity: ""},
    { time: '', temp_c: "--",  condition: {icon: ''},humidity: ""},
    {time: '', temp_c: "--",   condition: {icon: ''},   humidity: "" }
  ];
    let filteredTodayData 
    if (todayData) {
      filteredTodayData= filterFutureHours(todayData.hour)
      
    }
    
    const hourData = filteredTodayData || defaultData;
    
  return (
    <div className="flex overflow-x-scroll overflow-hidden min-w-0 min-h-0">
      {hourData.map((item, index) => (
        <HourlyListItem key={index} item={item} />
      ))}
    </div>
  );
}
