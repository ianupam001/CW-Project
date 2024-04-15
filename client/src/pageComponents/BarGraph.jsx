import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";

const BarGraph = () => {
  const optionCounts = [65, 35, 50, 30, 50,70];
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef && chartRef.current && optionCounts) {
      const ctx = chartRef.current.getContext("2d");

      // Destroy previous chart if exists
      if (chartRef.current.chart) {
        chartRef.current.chart.destroy();
      }

      // Create the chart
      chartRef.current.chart = new Chart(ctx, {
        type: "bar",
        data: {
          labels: [
            "Conventional",
            "Enterprising",
            "Social",
            "Artistic",
            "Investigative",
            "Realistic",
          ],
          datasets: [
            {
              label: "Answer's Garph",
              data: optionCounts,
              backgroundColor: [
                "rgba(0, 128, 128, 0.5)", // Teal
                "rgba(0, 0, 128, 0.5)", // Navy
                "rgba(255, 165, 0, 0.5)", // Orange
                "rgba(128, 128, 128, 0.5)", // Grey
                "rgba(0, 128, 0, 0.5)", // Green
                "rgba(255, 0, 0, 0.5)", // Green
              ],
              borderColor: [
                "rgb(0, 128, 128)", // Teal
                "rgb(0, 0, 128)", // Navy
                "rgb(255, 165, 0)", // Orange
                "rgb(128, 128, 128)", // Grey
                "rgb(0, 128, 0)", // Green
                "rgb(255, 0, 0)", // Green
              ],
              borderWidth: 2,
              barThickness: 60,
            },
          ],
        },
        options: {
          scales: {
            y: {
              min:0,
              max:100,
              beginAtZero: true,
            },
          },
        },
      });
    }
  }, [chartRef, optionCounts]);

  return (
    <div className="mt-10 flex flex-col justify-center items-center print:w-full">
      <h2 className="text-3xl font-bold text-purple-700">
        Over All Performance Score
      </h2>
      <p className="font-semibold text-rose-700">
        Here is the graph for your answers
      </p>
      <div className="w-10/12 mt-10 md:w-8/12">
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  );
};

export default BarGraph;
