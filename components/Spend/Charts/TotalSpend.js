"use client"
import React from 'react'
import dynamic from 'next/dynamic'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const TotalSpendChart = () => {

    const options = { 
        labels: ["Success", "Failed"] ,
        fill: {
            colors: ['#6B5AED', '#F75555',]
          },
        colors: ['#7665F3', '#FFC423'],
        legend: {
            show: false
         },
    
    };
    const series = [2000, 650,]; //our data

  return (
    <div>
        <div className='flex justify-center'>
            {(typeof window !== 'undefined') &&
                <Chart options={options} series={series} type="donut" width="90%" />
            }
        </div>
        <div className='lg:w-10/12 mx-auto mt-3 pb-6 '>
            <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                    <p className='w-4 h-4 circle bg-primary'></p>
                    <p className='pl-2 text-gray-500'>Success</p>
                </div>
                <div className='flex items-center '>
                    <p className='ml-3 fw-600'>70%</p>
                </div>
            </div>
            <div className='flex mt-3 items-center justify-between'>
                <div className='flex items-center'>
                    <p className='w-4 h-4 circle bg-red-600'></p>
                    <p className='pl-2 text-gray-500'>Failed</p>
                </div>
                <div className='flex items-center '>
                    <p className='ml-3 fw-600'>30%</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TotalSpendChart