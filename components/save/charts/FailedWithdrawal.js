import React from 'react'
import dynamic from 'next/dynamic'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });


const FailedWithdrawalChart = () => {
    const options = { 
        // labels: ["Mon", "Tue","Wed","Thu", "Fri", "Sat", "Sun"] ,
        fill: {
            colors: ['#6B5AED', '#FFC423', '#F75555', '#4ADE8080', '#4338ca', '#7e22ce']
          },
        colors: ['#7665F3', '#FFC423'],
        legend: {
            show: false
         },
        stroke: {
            curve: 'straight',
            width: '2'
        },
        dataLabels: {
            enabled: false
        },
        xaxis: {
            categories: ["Mon", "Tue","Wed","Thu", "Fri", "Sat", "Sun"] ,
          }
    
    };
    const series = [{
        name: "Amount",
        data: [14, 11, 25, 14, 19, 12, 19]
    }]
  return (
    <div>
      <div>
        {(typeof window !== 'undefined') &&
          <Chart options={options} series={series} type='area' width='100%' height='300px'/>
        }
      </div>
        <p className='text-center mt-7 fw-600'>1,000,000 (300)</p>
    </div>
  )
}

export default FailedWithdrawalChart