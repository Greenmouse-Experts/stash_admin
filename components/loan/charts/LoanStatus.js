"use client"
import React from "react";
import dynamic from 'next/dynamic'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function LoanStatusChart() {
    
    const options = { 
        labels: ["Disbursed", "Declined",] ,
        fill: {
            colors: ['#6B5AED', '#F75555']
          },
        colors: ['#6B5AED', ' #F75555'],
        legend: {
          colors: ['#6B5AED', ' #F75555'],
          fontSize: '17px',
          fontWeight: 500,
          labels: {
              colors: ['#7665F3', ' #F75555'],
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
        <Chart options={options} series={series} type="donut" width="90%" />
      }
    </div>
  );
}