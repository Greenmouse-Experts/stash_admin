import React from "react";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const MainBusinChart = () => {
  const series = [
    {
      name: "MAIN",
      data: [310, 400, 280, 510, 420, 1090, 100],
    },
    {
      name: "BUSIN",
      data: [110, 320, 450, 320, 340, 520, 410],
    },
  ];

  const options = {
    chart: {
      height: 300,
      type: "area",
    },
    colors: ["#6B5AED", "#7e22ce"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: "2",
    },
    xaxis: {
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
  };
  return (
    <div>
      <div className="w-full">
        {typeof window !== "undefined" && (
          <Chart
            options={options}
            series={series}
            type="area"
            width="100%"
            height="400px"
          />
        )}
      </div>
    </div>
  );
};

export default MainBusinChart;
