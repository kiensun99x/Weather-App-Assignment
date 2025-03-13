export default function HourlyListItem({item}) {
  return (
    <div className="flex flex-col items-center mx-2.5 my-5 px-2.5 w-20">
      <span className="text-lg font-semibold ">{item.time.slice(-5)}</span>
      <img className="size-[40px]" src={item.condition.icon} alt="" />
      <span className="text-lg font-bold"> {item.temp_c}°C </span>
      <div className="flex ">
        <img className="w-[12px]" src="https://www.awxcdn.com/adc-assets/images/components/weather/hourly-card-nfl/drop-icon.svg" alt="" />
        <span>{item.humidity}%</span>
      </div>
    </div>
  );
}
