import convertWindDirection from "../../utils/convertWindDir";

export default function DailyPageDetail({ data }) {
    const labels =[ 'Tốt', 'Trung bình', 'Kém' , 'Xấu', 'Rất xấu', 'Nguy hại'
    ]
    const colors =['text-green-400','text-yellow-400','text-orange-500','text-red-600','text-purple-600','text-rose-900',]
  return (
    <div className="flex flex-col gap-2 mb-5">
      <h1 className="text-xl font-bold ">{data.time.slice(-5)}</h1>
      <div className="flex justify-between">
        <div className="flex">
          <img src={data.day.condition.icon} alt="" />
          <div className="flex flex-col">
          <span className="text-3xl font-semibold">{data.day.maxtemp_c}°C</span>
          <span className="">{data.day.mintemp_c}°C</span>

          </div>
        </div>

        <span className="text-lg font-semibold">{data.day.condition.text}</span>
      </div>
      <div className="flex flex-col xs:flex-row gap-5">
        <div className="flex flex-1 flex-col gap-2">
        <div className="flex  justify-between ">
            <span>Khả năng mưa</span>
            <span>{data.day.daily_chance_of_rain}%</span>
          </div>
          <div className="flex  justify-between ">
            <span>Độ ẩm</span>
            <span>{data.day.avghumidity}%</span>
          </div>
          <div className="flex  justify-between ">
            <span>Lượng mưa</span>
            <span>{data.day.totalprecip_mm}mm</span>
          </div>
          
        </div>
        
        <div className="flex flex-1 flex-col gap-2">
          <div className="flex  justify-between ">
            <span>Tầm nhìn</span>
            <span>{data.day.avgvis_km}km</span>
          </div>
          <div className="flex  justify-between ">
            <span>Chỉ số UV</span>
            <span>{data.uv}</span>
          </div>
          <div className="flex  justify-between ">
            <span>Chất lượng không khí</span>
            <span className={colors[data.day.air_quality['us-epa-index']-1]+ ' text-xl font-bold '}>{labels[data.day.air_quality['us-epa-index']-1]}</span>
          </div>
        </div>
      </div>
      <hr />

    </div>
  );
}

