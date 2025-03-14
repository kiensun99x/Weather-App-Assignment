import { MapContainer, TileLayer, LayersControl, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";

// 🔹 Component giúp di chuyển bản đồ khi `center` thay đổi
const MapUpdater = ({ center }) => {
  const map = useMap();
  useEffect(() => {
    if (center) {
      map.setView(center, map.getZoom(), { animate: true }); // Di chuyển mượt
    }
  }, [center, map]);
  return null;
};

const WeatherMap = ({ data }) => {
  const apiKey = import.meta.env.VITE_OPENWEATHERMAP_KEY;

  if (!data || !data.location) return <p>Đang tải dữ liệu...</p>; // Kiểm tra dữ liệu trước

  const { lat, lon } = data.location;
  const center = [lat, lon];

  return (
    <MapContainer center={center} zoom={6.3} className="w-full h-120 z-0">
      {/* Gọi MapUpdater để cập nhật vị trí khi city thay đổi */}
      <MapUpdater center={center} />

      <LayersControl position="topright">
        {/* Bản đồ nền */}
        <LayersControl.BaseLayer checked name="Bản đồ mặc định">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="© OpenStreetMap contributors"
          />
        </LayersControl.BaseLayer>

        {/* Lớp hiển thị lượng mưa */}
        <LayersControl.Overlay checked name="Lượng mưa">
          <TileLayer
            url={`https://tile.openweathermap.org/map/precipitation/{z}/{x}/{y}.png?appid=${apiKey}`}
            attribution="© OpenWeatherMap"
          />
        </LayersControl.Overlay>

        {/* Lớp hiển thị nhiệt độ */}
        <LayersControl.Overlay name="Nhiệt độ">
          <TileLayer
            url={`https://tile.openweathermap.org/map/temp/{z}/{x}/{y}.png?appid=${apiKey}`}
            attribution="© OpenWeatherMap"
          />
        </LayersControl.Overlay>
      </LayersControl>

      {/* Marker tại vị trí mới */}
      <Marker position={center}>
        <Popup>
          📍 {data.location.city || "Vị trí"} <br />
          🌡 Thời tiết hiện tại: [Dữ liệu API]
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default WeatherMap;
