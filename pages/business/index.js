import React from 'react'
import Layout from '@/components/layout/Layout';
import { BusinessTable } from '@/components/business/table/Business';

const BusinessPage = () => {
  return (
    <Layout>
        <div className='w-full'>
            <div className='text-3xl fw-600'>Business</div>
            <div className='mt-12'>
                <p className='pl-6 fw-500'>Business Account Users</p>
                <p className='mt-2 w-24 ml-12 w-16 lg:w-24 h-1 bg-primary rounded'></p>
                <div className='p-5 bg-white shadow'>
                    <BusinessTable/>
                </div>
            </div>
        </div>
    </Layout>
  )
}

const getLayout = (page) => <Layout>{page}</Layout>;

export { getLayout };
export default BusinessPage