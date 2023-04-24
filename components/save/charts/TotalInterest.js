import React from 'react'
import dynamic from 'next/dynamic'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const TotalInterestChart = () => {
   const series = [{
        name: 'Paid',
        data: [310, 400, 280, 510, 420, 1290, 100, 310, 400, 280, 510, 420,]
      }, {
        name: 'Accrued',
        data: [110, 320, 450, 320, 340, 320, 410, 210, 100, 200, 410, 320,]
      }]

   const options = {
        chart: {
          height: 300,
          type: 'area'
        },
        colors: ['#6B5AED', '#F75555'],
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
            format: 'dd/MM/yy HH:mm'
          },
        },
      }
  return (
    <div>
      <div className="w-full">
        {(typeof window !== 'undefined') &&
          <Chart options={options} series={series} type="line" width="100%" height='300px' />
        }
      </div>
      <div className='flex justify-center items-center'>
        <div className='flex items-center'>
            <p className='fw-600 fs-400'>1,000,000 (300)</p>
        </div>
        <div className='flex items-center ml-5'>
            <p className='fw-600 fs-400'>1,000,000 (300)</p>
        </div>
      </div>
    </div>
  )
}

export default TotalInterestChart