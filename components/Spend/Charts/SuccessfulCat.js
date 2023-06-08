"use client"
import React from 'react'
import dynamic from 'next/dynamic'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
const SuccessfulCatChart = ({data}) => {

    const options = { 
        labels: ["Airtime","Data","Cable Tv", "Electricity", "Internet"] ,
        fill: {
            colors: ['#6B5AED', '#F75555', '#4ADE8080', '#FFC423','#f6ad55']
          },
        colors: ['#7665F3', '#FFC423'],
        legend: {
            show: false
         },
    
    };
    const series = [Number(data?.percentage.spend.airtime), Number(data?.percentage.spend.data), Number(data?.percentage.spend.cabletv), Number(data?.percentage.spend.electricity), Number(data?.percentage.spend.internet)]; //our data

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
                    <p className='ml-3 fw-600'>{data?.percentage.spend.airtime}%</p>
                </div>
            </div>
            <div className='flex mt-3 items-center justify-between'>
                <div className='flex items-center'>
                    <p className='w-4 h-4 circle bg-red-400'></p>
                    <p className='pl-2 text-gray-500'>Data</p>
                </div>
                <div className='flex items-center lg:fs-700'>
                    <p className='ml-3 fw-600'>{data?.percentage.spend.data}%</p>
                </div>
            </div>
            <div className='flex mt-3 items-center justify-between'>
                <div className='flex items-center'>
                    <p className='w-4 h-4 circle bg-green-500'></p>
                    <p className='pl-2 text-gray-500'>Cable Tv</p>
                </div>
                <div className='flex items-center lg:fs-700'>
                    <p className='ml-3 fw-600'>{data?.percentage.spend.cabletv}%</p>
                </div>
            </div>
            <div className='flex mt-3 items-center justify-between'>
                <div className='flex items-center'>
                    <p className='w-4 h-4 circle bg-yellow-400'></p>
                    <p className='pl-2 text-gray-500'>Electricity</p>
                </div>
                <div className='flex items-center'>
                    <p className='ml-3 fw-600'>{data?.percentage.spend.electricity}%</p>
                </div>
            </div>
            <div className='flex mt-3 items-center justify-between'>
                <div className='flex items-center'>
                    <p className='w-4 h-4 circle bg-orange-400'></p>
                    <p className='pl-2 text-gray-500'>Internet</p>
                </div>
                <div className='flex items-center'>
                    <p className='ml-3 fw-600'>{data?.percentage.spend.internet}%</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SuccessfulCatChart