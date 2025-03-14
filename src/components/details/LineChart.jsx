import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Line } from "react-chartjs-2";
import filterFutureHours from "../../utils/filterFutureHours";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  ChartDataLabels
);
export default function LineChart({ data }) {
  if (data) {
    const filteredData = filterFutureHours(data);
    const labels = filteredData.map((item) => item.time.slice(-5));
    const temps = filteredData.map((item) => item.temp_c);
    const rainChances = filteredData.map((item) => item.chance_of_rain);
    return (
      <div id="line-chart" className="p-2">
        <Line
          role="img"
          className="min-h-70"
          options={{
            responsive: true, // Tự động co giãn theo thẻ cha
            maintainAspectRatio: false, // Không giữ tỷ lệ khung hình mặc định
            scales: {
                y: {
                  beginAtZero: true,
                  suggestedMax: Math.max(...temps, ...rainChances) + 5, // Tăng khoảng trên
                },
              },
            plugins: {
              legend: {
                display: true, // Hiển thị chú thích
                position: "top", // Chú thích nằm ở trên cùng
              },
              datalabels: {
                display: true, // Hiển thị số liệu
                color: "black", // Màu chữ
                font: {
                  size: 12, // Cỡ chữ
                  weight: "bold",
                },
                // formatter: (value) => `${value}°C`, // Format số liệu
                anchor: "end", // Căn phía trên điểm
                align: "top", // Đẩy lên trên
                offset: -4
              },
              
            },
          }}
          data={{
            labels: labels,
            datasets: [
              {
                label: "Nhiệt độ",
                data: temps,
                borderColor: "red",
                backgroundColor: "rgba(255, 99, 132, 0.5)",
                tension: 0.4,
                datalabels:{
                    formatter: (value) => `${value}°C`, // Hiển thị nhiệt độ
                }
              },
              {
                label: "Khả năng có mưa",
                data: rainChances,
                borderColor: "blue",
                backgroundColor: "rgba(54, 162, 235, 0.5)",
                // tension: 0.4,
                datalabels:{
                    formatter: (value) => `${value}%`, // Hiển thị nhiệt độ
                }
              },
            ],
          }}
        />
      </div>
    );
  }
}
