import {
    Chart as ChartJS,
    BarElement,
    LinearScale,
    CategoryScale,
  } from "chart.js";
  import ChartDataLabels from "chartjs-plugin-datalabels";
  import { Bar } from "react-chartjs-2";
  import filterFutureHours from "../../utils/filterFutureHours";
import { formatDateMonth } from "../../utils/formatDate";
  
  ChartJS.register(
    BarElement,
    LinearScale,
    CategoryScale,
    ChartDataLabels
  );
  
  export default function BarChart({ data }) {
    if (data) {
      const next7Days = data.slice(0,7);

      const labels = next7Days.map((item) => formatDateMonth(item.date));
      const precip = next7Days.map((item) => item.day.totalprecip_mm);
  
      return (
        <div id="bar-chart" className="p-2">
          <Bar
            role="img"
            className="min-h-70"
            options={{
              responsive: true, // Tự động co giãn theo thẻ cha
              maintainAspectRatio: false, // Không giữ tỷ lệ khung hình mặc định
              scales: {
                y: {
                  beginAtZero: true,
                  suggestedMax: Math.max(...precip) + 5, // Tăng khoảng trên
                },
              },
              plugins: {
                legend: {
                  display: true, // Hiển thị chú thích
                  position: "top",
                },
                datalabels: {
                  display: true, // Hiển thị số liệu trên cột
                  color: "black",
                  font: {
                    size: 12,
                    weight: "bold",
                  },
                  anchor: "end",
                  align: "top",
                  offset: 4, // Đẩy số liệu lên trên một chút
                  formatter: (value) => `${value}mm`, // Hiển thị mm
                },
              },
            }}
            data={{
              labels: labels,
              datasets: [
                {
                  label: "Lượng mưa (mm)",
                  data: precip,
                  backgroundColor: "rgba(54, 162, 235, 0.5)",
                  borderColor: "blue",
                  borderWidth: 1,
                  barThickness: 30, // Độ dày cột
                },
              ],
            }}
          />
        </div>
      );
    }
  }
  