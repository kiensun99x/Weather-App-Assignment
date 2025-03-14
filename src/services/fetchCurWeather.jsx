export default async function fetchCurWeather(city){
  const key = import.meta.env.VITE_WEATHERAPI_KEY;
    try {
      const URL = `http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${city}&days=15&lang=vi&aqi=yes`;
      
      const response = await fetch(URL );
      const data = await response.json();
      
      return data;
    } catch (error) {
      console.error("Lỗi lấy dữ liệu thời tiết:", error);
      return null;
    }
  };