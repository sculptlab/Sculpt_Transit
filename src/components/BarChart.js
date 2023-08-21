import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const BarChart = ({ title, list, keyLabel, valueLabel }) => {
  if (!list) return <div></div>;
  const data = {
    labels: list?.map((item) => item[keyLabel]),
    datasets: [
      {
        label: title,
        data: list?.map((item) => item[valueLabel]),
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        color: "white",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        ticks: {
          color: "white", // Change the color of x-axis labels
        },
      },
      y: {
        type: "linear",
        beginAtZero: true,
        ticks: {
          color: "white", // Change the color of y-axis labels
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          color: "white", // Change the legend label color here
          font: {
            size: 12,
          },
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default BarChart;
