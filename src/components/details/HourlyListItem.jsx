export default function HourlyListItem({item}) {
  return (
    <div className="flex flex-col items-center mx-2.5 my-5 px-2.5 w-20">
      <span>{item.time}:00H</span>
      <img className="size-[40px]" src={item.icon} alt="" />
      <span> {item.temp}</span>
      <div className="flex ">
        <img className="w-[12px]" src="https://www.awxcdn.com/adc-assets/images/components/weather/hourly-card-nfl/drop-icon.svg" alt="" />
        <span>12%</span>
      </div>
    </div>
  );
}
