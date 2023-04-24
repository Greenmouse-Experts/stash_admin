"use client"
import React from "react";
import dynamic from 'next/dynamic'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function UsersChart() {
    
    const options = { 
        labels: ["Active Users", "Inactive Users",] ,
        fill: {
            colors: ['#7665F3', '#FFC423']
          },
        colors: ['#7665F3', '#FFC423'],
        legend: {
          colors: ['#7665F3', '#FFC423'],
          fontSize: '17px',
          fontWeight: 500,
          labels: {
              colors: ['#7665F3', '#FFC423'],
          },
          onItemHover: {
              highlightDataSeries: true
          },
        },
        responsive: [
          {
            breakpoint: 960,
            options: {
              legend: {
                position: "bottom"
              }
            }
          }
        ]
    
    };
    const series = [2000, 650,]; //our data

  return (
    <div className="">
        {(typeof window !== 'undefined') &&
            <Chart options={options} series={series} type="donut" width="100%" className='' />
        }
    </div>
  );
}