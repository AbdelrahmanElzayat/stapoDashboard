"use client";
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const Chart = () => {
  const data = {
    labels: [
      "يناير",
      "فبراير",
      "مارس",
      "أبريل",
      "مايو",
      "يونيو",
      "يوليو",
      "أغسطس",
      "سبتمبر",
      "أكتوبر",
      "نوفمبر",
      "ديسمبر",
    ],
    datasets: [
      {
        label: "",
        data: [
          5000, 10000, 20000, 30000, 50000, 55000, 22000, 30000, 40000, 43000,
          15000, 35000,
        ],
        backgroundColor: "#F6682B", // اللون المطلوب
        borderRadius: 5, // لتدوير الأعمدة
        barThickness: 10, // عرض العمود
      },
    ],
  };

  const options: any = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
        position: "top",
        labels: {
          color: "#4CAF50", // لون النص
          font: {
            family: "Almarai", // خط يدعم العربية
          },
        },
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        position: "bottom",
        ticks: {
          color: "#000", // لون النص في المحور السيني
          font: {
            family: "Almarai",
          },
        },
        grid: {
          display: false, // لإخفاء الخطوط العمودية
        },
        reverse: true,
      },
      y: {
        position: "right",
        ticks: {
          color: "#000",
          stepSize: 8000,
          font: {
            family: "Almarai",
          },
        },
        grid: {
          borderDash: [10], // خطوط متقطعة
          color: "#E0E0E0",
        },
      },
    },
    indexAxis: "x", // الاتجاه الأفقي
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      },
    },
  };

  return (
    <div className="bg-white rounded-lg h-full">
      <div className="relative h-[200px]">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default Chart;
