export default function getWeatherBackground(weatherCode, isDay) {
    
    const backgroundMap = {
        1000: isDay?"sunny.jpg": 'clear_night.jpg',        // Trời nắng
        1003: isDay ==1? "partly_cloudy.jpg" : "partly_cloudy_night.jpg" , // Ít mây
        1006: isDay==1? "cloudy.jpg": 'cloudy_night.jpg',       // Nhiều mây
        1009: "overcast.jpg",     // U ám
        1030: "mist.jpg",         // Sương mù
    
        // Nhóm có thể có mưa
        1063: "rain_possible.jpg", // Có thể có mưa nhỏ
        1072: "rain_possible.jpg", // Mưa phùn nhẹ
        1150: "rain_possible.jpg", // Mưa phùn nhẹ từng cơn
        1153: "rain_possible.jpg", // Mưa phùn nhẹ
        1168: "rain_possible.jpg", // Mưa phùn đóng băng nhẹ
        1171: "rain_possible.jpg", // Mưa phùn đóng băng nặng hạt
    
        // Nhóm có thể có tuyết
        1066: "snow_possible.jpg", // Có thể có tuyết
        1069: "snow_possible.jpg", // Có thể có tuyết và mưa
        1114: "snow_possible.jpg", // Tuyết rơi nhẹ
        1117: "snow_possible.jpg", // Bão tuyết
        1204: "snow_possible.jpg", // Mưa đá nhỏ
        1207: "snow_possible.jpg", // Mưa đá lớn
        1210: "snow_possible.jpg", // Tuyết nhẹ
        1213: "snow_possible.jpg", // Tuyết rơi lác đác
        1216: "snow_possible.jpg", // Tuyết vừa
        1219: "snow_possible.jpg", // Tuyết rơi nhẹ đến trung bình
    
        // Nhóm mưa lớn
        1195: "heavy_rain.png",  // Mưa lớn
        1180: "heavy_rain.png",  // Mưa rào nhẹ
        1183: "heavy_rain.png",  // Mưa nhỏ
        1186: "heavy_rain.png",  // Mưa vừa
        1189: "heavy_rain.png",  // Mưa đều
        1192: "heavy_rain.png",  // Mưa nặng hạt
        1240: "heavy_rain.png",  // Mưa rào
        1243: "heavy_rain.png",  // Mưa rào lớn
        1246: "heavy_rain.png",  // Mưa rào rất lớn
    
        // Nhóm tuyết lớn
        1225: "heavy_snow.png",  // Tuyết rơi dày
        1222: "heavy_snow.png",  // Tuyết nặng hạt
        1237: "heavy_snow.png",  // Mưa đá
        1255: "heavy_snow.png",  // Mưa tuyết nhẹ
        1258: "heavy_snow.png",  // Mưa tuyết lớn
        1261: "heavy_snow.png",  // Mưa đá nhẹ
        1264: "heavy_snow.png",  // Mưa đá lớn
    
        // Nhóm giông bão
        1087: "thunderstorm.png", // Dông
        1273: "thunderstorm.png", // Dông kèm mưa
        1276: "storm.jpg",        // Giông bão mạnh
        1279: "storm.jpg",        // Bão tuyết nhẹ
        1282: "storm.jpg"         // Bão tuyết lớn
    };

    // Mặc định nếu không tìm thấy code phù hợp
    const defaultBackground = "default.jpg";

    return `src/assets/backgrounds/${backgroundMap[weatherCode] || defaultBackground}`;
}

// Ví dụ sử dụng:
// const weatherCode = 1000; // Thay bằng mã thời tiết thực tế
// const backgroundImage = getWeatherBackground(weatherCode);
// document.body.style.backgroundImage = `url('${backgroundImage}')`;
