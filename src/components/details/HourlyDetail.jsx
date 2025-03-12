import { useState } from "react";
import HourlyListItem from "./HourlyListItem";
import { useRef } from "react";

export default function HourlyDetail() {
  const hourlyData = [
    {
      time: 12,
      temp: "24°",
      icon: "https://www.awxcdn.com/adc-assets/images/weathericons/15.svg",
    },
    {
      time: 13,
      temp: "24°",
      icon: "https://www.awxcdn.com/adc-assets/images/weathericons/7.svg",
    },
    {
      time: 14,
      temp: "24°",
      icon: "https://www.awxcdn.com/adc-assets/images/weathericons/7.svg",
    },
    {
      time: 15,
      temp: "25°",
      icon: "https://www.awxcdn.com/adc-assets/images/weathericons/7.svg",
    },
    {
      time: 16,
      temp: "24°",
      icon: "https://www.awxcdn.com/adc-assets/images/weathericons/7.svg",
    },
    {
      time: 17,
      temp: "24°",
      icon: "https://www.awxcdn.com/adc-assets/images/weathericons/7.svg",
    },
    {
      time: 18,
      temp: "23°",
      icon: "https://www.awxcdn.com/adc-assets/images/weathericons/7.svg",
    },
    {
      time: 19,
      temp: "23°",
      icon: "https://www.awxcdn.com/adc-assets/images/weathericons/7.svg",
    },
    {
      time: 20,
      temp: "23°",
      icon: "https://www.awxcdn.com/adc-assets/images/weathericons/7.svg",
    },
    {
      time: 21,
      temp: "23°",
      icon: "https://www.awxcdn.com/adc-assets/images/weathericons/7.svg",
    },
    {
      time: 22,
      temp: "23°",
      icon: "https://www.awxcdn.com/adc-assets/images/weathericons/7.svg",
    },
    {
      time: 23,
      temp: "23°",
      icon: "https://www.awxcdn.com/adc-assets/images/weathericons/7.svg",
    },
    // Thêm nhiều phần tử nếu cần
  ];

  return (
      <div
        className="flex overflow-x-scroll overflow-hidden min-w-0 min-h-0"
      >
        {
          hourlyData.map((item, index) => 
            <HourlyListItem 
              key={index}
              item={item}
            />
          )
        }
      </div>
  );
}
