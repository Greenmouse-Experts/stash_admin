"use client"
import React from 'react'
import dynamic from 'next/dynamic'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
const SuccessfulCatChart = () => {

    const options = { 
        labels: ["Airtime","Data","Bills", "Transfer"] ,
        fill: {
            colors: ['#6B5AED', '#F75555', '#4ADE8080', '#FFC423',]
          },
        colors: ['#7665F3', '#FFC423'],
        legend: {
            show: false
         },
    
    };
    const series = [200, 650, 540, 230]; //our data

  return (
    <div>
        <div className='flex justify-center'>
            {(typeof window !== 'undefined') &&
                <Chart options={options} series={series} type="donut" width="90%" />
            }
        </div>
        <div className='lg:w-10/12 mx-auto mt-3 pb-3 lg:fs-700'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                    <p className='w-4 h-4 circle bg-primary'></p>
                    <p className='pl-2 text-gray-500'>Airtime</p>
                </div>
                <div className='flex items-center '>
                    <p className='ml-3 fw-600'>34%</p>
                </div>
            </div>
            <div className='flex mt-3 items-center justify-between'>
                <div className='flex items-center'>
                    <p className='w-4 h-4 circle bg-red-400'></p>
                    <p className='pl-2 text-gray-500'>Data</p>
                </div>
                <div className='flex items-center lg:fs-700'>
                    <p className='ml-3 fw-600'>34%</p>
                </div>
            </div>
            <div className='flex mt-3 items-center justify-between'>
                <div className='flex items-center'>
                    <p className='w-4 h-4 circle bg-green-500'></p>
                    <p className='pl-2 text-gray-500'>Bills</p>
                </div>
                <div className='flex items-center lg:fs-700'>
                    <p className='ml-3 fw-600'>11%</p>
                </div>
            </div>
            <div className='flex mt-3 items-center justify-between'>
                <div className='flex items-center'>
                    <p className='w-4 h-4 circle bg-yellow-400'></p>
                    <p className='pl-2 text-gray-500'>Wallet</p>
                </div>
                <div className='flex items-center'>
                    <p className='ml-3 fw-600'>14%</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SuccessfulCatChart