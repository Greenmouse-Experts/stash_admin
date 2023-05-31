import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const DashboardAnalyticsSkeleton = () => {
    return (
      <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-6 lg:gap-y-16'>
          <div>
              <Skeleton className='h-44'/>
          </div>
          <div className=''>
              <Skeleton className='h-44'/>
          </div>
          <div className='hidden md:block'>
              <Skeleton className='h-44'/>
          </div>
          <div className='hidden lg:block'>
              <Skeleton className='h-44'/>
          </div>
          <div className='hidden xl:block'>
              <Skeleton className='h-44'/>
          </div>
          <div className='hidden xl:block'>
              <Skeleton className='h-44'/>
          </div>
          <div className='hidden xl:block'>
              <Skeleton className='h-44'/>
          </div>
          <div className='hidden xl:block'>
              <Skeleton className='h-44'/>
          </div>
      </div>
    )
  }
  
  export default DashboardAnalyticsSkeleton
