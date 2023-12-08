import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { useTheme } from "@mui/material";
Chart.register(...registerables);

const BarChart = ({ title, list, keyLabel, valueLabel }) => {
  const theme = useTheme();
  if (!list) return <div></div>;
  const data = {
    labels: list?.map((item) => item[keyLabel]),
    datasets: [
      {
        label: title,
        data: list?.map((item) => item[valueLabel]),
        backgroundColor: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
        color: theme.palette.secondary.contrastText,
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        ticks: {
          color: theme.palette.secondary.contrastText, // Change the color of x-axis labels
        },
      },
      y: {
        type: "linear",
        beginAtZero: true,
        ticks: {
          color: theme.palette.secondary.contrastText, // Change the color of y-axis labels
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          color: theme.palette.secondary.contrastText, // Change the legend label color here
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
