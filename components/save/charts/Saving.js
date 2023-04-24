"use client"
import React from 'react'
import dynamic from 'next/dynamic'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const SavingChart = () => {

    const options = { 
        labels: ["Goal", "Fixed","USD","SAYS", "SAYE", "Wallet"] ,
        fill: {
            colors: ['#6B5AED', '#FFC423', '#F75555', '#4ADE8080', '#4338ca', '#7e22ce']
          },
        colors: ['#7665F3', '#FFC423'],
        legend: {
            show: false
         },
    
    };
    const series = [2000, 650, 540, 230, 650,450]; //our data

  return (
    <div>
        <div>
            {(typeof window !== 'undefined') &&
                <Chart options={options} series={series} type="donut" width="100%" />
            }
        </div>
        <div className='lg:w-10/12 mx-auto mt-8 pb-6 lg:fs-800'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                    <p className='w-4 h-4 circle bg-primary'></p>
                    <p className='pl-2 text-gray-500'>Goal</p>
                </div>
                <div className='flex items-center lg:fs-800'>
                    <p className='text-gray-500'>(33)</p>
                    <p className='ml-3 fw-600'>1,900,000</p>
                </div>
            </div>
            <div className='flex mt-8 items-center justify-between'>
                <div className='flex items-center'>
                    <p className='w-4 h-4 circle bg-yellow-400'></p>
                    <p className='pl-2 text-gray-500'>Fixed</p>
                </div>
                <div className='flex items-center lg:fs-800'>
                    <p className='text-gray-500'>(30)</p>
                    <p className='ml-3 fw-600'>1,200,000</p>
                </div>
            </div>
            <div className='flex mt-8 items-center justify-between'>
                <div className='flex items-center'>
                    <p className='w-4 h-4 circle bg-red-400'></p>
                    <p className='pl-2 text-gray-500'>Business</p>
                </div>
                <div className='flex items-center lg:fs-800'>
                    <p className='text-gray-500'>(3)</p>
                    <p className='ml-3 fw-600'>800,000</p>
                </div>
            </div>
            <div className='flex mt-8 items-center justify-between'>
                <div className='flex items-center'>
                    <p className='w-4 h-4 circle bg-green-500'></p>
                    <p className='pl-2 text-gray-500'>SAYS</p>
                </div>
                <div className='flex items-center lg:fs-800'>
                    <p className='text-gray-500'>(19)</p>
                    <p className='ml-3 fw-600'>850,000</p>
                </div>
            </div>
            <div className='flex mt-8 items-center justify-between'>
                <div className='flex items-center'>
                    <p className='w-4 h-4 circle bg-indigo-700'></p>
                    <p className='pl-2 text-gray-500'>SAFO</p>
                </div>
                <div className='flex items-center lg:fs-800'>
                    <p className='text-gray-500'>(15)</p>
                    <p className='ml-3 fw-600'>801,000</p>
                </div>
            </div>
            <div className='flex mt-8 items-center justify-between'>
                <div className='flex items-center'>
                    <p className='w-4 h-4 circle bg-purple-700'></p>
                    <p className='pl-2 text-gray-500'>Main</p>
                </div>
                <div className='flex items-center lg:fs-800'>
                    <p className='text-gray-500'>(15)</p>
                    <p className='ml-3 fw-600'>801,000</p>
                </div>
            </div>
            <div className='flex mt-8 items-center justify-between'>
                <div className='flex items-center'>
                    <p className='pl-2 fw-600'>Total</p>
                </div>
                <div className='flex items-center lg:fs-800'>
                    <p className='text-gray-500'>(15)</p>
                    <p className='ml-3 fw-600'>1,801,000</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SavingChart