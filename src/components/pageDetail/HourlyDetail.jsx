import convertWindDirection from "../../utils/convertWindDir";

export default function HourlyPageDetail({ data }) {
  return (
    <div className="flex flex-col gap-2 mb-5">
      <h1 className="text-xl font-bold ">{data.time.slice(-5)}</h1>
      <div className="flex justify-between">
        <div className="flex">
          <img src={data.condition.icon} alt="" />
          <span className="text-3xl font-semibold">{data.temp_c}°C</span>
        </div>

        <span className="text-lg">{data.condition.text}</span>
      </div>
      <div className="flex flex-col xs:flex-row gap-5">
        <div className="flex flex-1 flex-col gap-2">
        <div className="flex  justify-between ">
            <span>Cảm giác nhiệt</span>
            <span>{data.feelslike_c}°C</span>
          </div>
          <div className="flex  justify-between ">
            <span>Độ ẩm</span>
            <span>{data.humidity}%</span>
          </div>
          <div className="flex  justify-between ">
            <span>Lượng mưa</span>
            <span>{data.precip_mm}mm</span>
          </div>
          <div className="flex  justify-between ">
            <span>Tầm nhìn</span>
            <span>{data.vis_km}km</span>
          </div>
        </div>
        
        <div className="flex flex-1 flex-col gap-2">
          <div className="flex  justify-between ">
            <span>Gió</span>
            <span>{data.wind_kph}km/h</span>
          </div>
          <div className="flex  justify-between ">
            <span>Hướng gió</span>
            <span>{convertWindDirection(data.wind_dir)}</span>
          </div>
          <div className="flex  justify-between ">
            <span>Chỉ số UV</span>
            <span>{data.uv}</span>
          </div>
          <div className="flex  justify-between ">
            <span>Áp suất</span>
            <span>{data.pressure_mb}mb</span>
          </div>
        </div>
      </div>
      <hr />

    </div>
  );
}

