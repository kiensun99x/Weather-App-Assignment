export default function AirQuality({data}) {
    if(data){
        const airData = data.current.air_quality;
        const labels =[ 'Tốt', 'Trung bình', 'Kém' , 'Xấu', 'Rất xấu', 'Nguy hại'
        ]
        const colors =['text-green-400','text-yellow-400','text-orange-500','text-red-600','text-purple-600','text-rose-900',]
    return(
        <div id="air-quality" className="p-5">
            <div className="flex justify-between">
                <span>CO</span>  <span>{airData.co}μg/m<sup>3</sup></span>
            </div>
            <div className="flex justify-between">
                <span>NO<sub>2</sub></span>  <span>{airData.no2}μg/m<sup>3</sup></span>
            </div>
            <div className="flex justify-between">
                <span>O<sub>3</sub></span>  <span>{airData.o3}μg/m<sup>3</sup></span>
            </div>
            <div className="flex justify-between">
                <span>SO<sub>2</sub>   </span><span>{airData.so2}μg/m<sup>3</sup></span>
            </div>
            <div className="flex justify-between">
                <span>PM2.5</span>  <span>{airData.pm2_5}μg/m<sup>3</sup></span>
            </div>
            <div className="flex justify-between">
                <span>PM10</span>  <span>{airData.pm10}μg/m<sup>3</sup></span>
            </div>
            <hr />
            <h1 className={colors[airData['us-epa-index']-1]+ ' text-xl font-bold '}>{labels[airData['us-epa-index']-1]}</h1>
        </div>
    )}
}