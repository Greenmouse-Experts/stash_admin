import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SpendSkeleton = () => {
  return (
    <div className='grid lg:grid-cols-4 gap-x-10 gap-y-6 lg:gap-y-16'>
          <div>
              <div>
              <Skeleton className='h-[250px]'/>
              </div>
              <div className='mt-8'>
              <Skeleton className='h-[270px]'/>
              </div>
          </div>
          <div className='lg:col-span-3'>
              <Skeleton className='h-[600px]'/>
          </div>
          {/* <div className='hidden md:block'>
              <Skeleton className='h-44'/>
          </div> */}
      </div>
  )
}

export default SpendSkeleton