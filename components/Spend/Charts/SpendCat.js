
import React from 'react'
import dynamic from 'next/dynamic'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const SpendCatChart = () => {

    const series = [{
        name: 'Airtime',
        data: [310, 400, 280, 510, 420, 1290, 100, 310, 400, 280, 510, 420,]
      }, {
        name: 'Date',
        data: [110, 320, 450, 320, 340, 320, 410, 210, 100, 200, 410, 320,]
      }, {
        name: 'Bills',
        data: [110, 320, 400, 300, 300, 240, 310, 110, 100, 200, 310, 220,]
      }, {
        name: 'Transfer',
        data: [150, 300, 400, 310, 310, 300, 390, 200, 90, 120, 120, 120,]
      },
    ]
    
    const options = {
        chart: {
          height: 300,
          type: 'area'
        },
        fill: {
            colors: ['#6B5AED', '#F75555', '#4ADE8080', '#FFC423',]
          },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight',
          width: '2'
        },
        xaxis: {
            categories:["Jan", "Feb", "Mar", "Apr", "May", "Jun" , "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        },
        tooltip: {
          x: {
            format: 'dd/MMM/yy HH:mm'
          },
        },
      }

  return (
    <div>
      {(typeof window !== 'undefined') &&
        <Chart options={options} series={series} type="line" width="100%" height='400px' />
      }
    </div>
  )
}

export default SpendCatChart