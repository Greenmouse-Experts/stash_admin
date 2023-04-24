"use client"
import React from 'react'
import dynamic from 'next/dynamic'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const SaveSpendChart = () => {
   const series = [{
        name: 'Save',
        data: [3100, 40000, 28000, 51000, 42000, 109000, 100000]
      }, {
        name: 'Spend',
        data: [11000, 32000, 45000, 32000, 34000, 52000, 41000]
      }]

   const options = {
        chart: {
          height: 350,
          type: 'area'
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
            categories:["Mon", "Tue", "Wed", "Thu", "Fri", "Sat" , "Sun"]
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          },
        },
      }
  return (
    <div className="w-full">
      {(typeof window !== 'undefined') &&
        <Chart options={options} series={series} type="area" width="100%" height='400px' />
      }
    </div>
  )
}

export default SaveSpendChart