// "use Client"
import React from 'react';
import Layout from '@/components/layout/Layout';
import UsersChart from '@/components/dashboard/UserChart';
import RevenueLoan from '@/components/dashboard/RevenueLoan';
import SaveSpendChart from '@/components/dashboard/SaveSpendChart';

const index = () => {
  return (
    <Layout>
        <div>
            <div className='flex justify-between'>
                <p className='text-3xl fw-600'>Dashboard</p>
                <select className='px-2 border mt-6 md:mt-0 border-gray-300 rounded fs-500'>
                    <option>All Time</option>
                    <option>Yearly</option>
                </select>
            </div>
            <div className='mt-10'>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-16'>
                <div className='p-8 bg-white bord-b border-purple-700 rounded-t-lg'>
                    <p className='fw-500 text-gray-500'>Total Signups</p>
                    <p className='fw-600 text-xl mt-8 mb-4'>₦ 1,000,800</p>
                    <p className='ml-8 fw-600 text-gray-500'>(70)</p>
                </div>
                <div className='p-8 bg-white bord-b border-orange-300 rounded-t-lg'>
                    <p className='fw-500 text-gray-500'>Total Funds Received</p>
                    <p className='fw-600 text-xl mt-8 mb-4'>₦ 1,000,800</p>
                    <p className='ml-8 fw-600 text-gray-500'>(70)</p>
                </div>
                <div className='p-8 bg-white bord-b border-green-500 rounded-t-lg'>
                    <p className='fw-500 text-gray-500'>Total Wallet Balance</p>
                    <p className='fw-600 text-xl mt-8 mb-4'>₦ 1,000,800</p>
                    <p className='ml-8 fw-600 text-gray-500'>(70)</p>
                </div>
                <div className='p-8 bg-white bord-b border-red-600 rounded-t-lg'>
                    <p className='fw-500 text-gray-500'>Total Active Loans</p>
                    <p className='fw-600 text-xl mt-8 mb-4'>₦ 1,000,800</p>
                    <p className='ml-8 fw-600 text-gray-500'>(70)</p>
                </div>
                <div className='p-8 bg-white bord-b border-purple-700 rounded-t-lg'>
                    <p className='fw-500 text-gray-500'>Total Savings</p>
                    <p className='fw-600 text-xl mt-8 mb-4'>₦ 1,000,800</p>
                    <p className='ml-8 fw-600 text-gray-500'>(70)</p>
                </div>
                <div className='p-8 bg-white bord-b border-orange-300 rounded-t-lg'>
                    <p className='fw-500 text-gray-500'>Total Spend</p>
                    <p className='fw-600 text-xl mt-8 mb-4'>₦ 1,000,800</p>
                    <p className='ml-8 fw-600 text-gray-500'>(70)</p>
                </div>
                <div className='p-8 bg-white bord-b border-green-500 rounded-t-lg'>
                    <p className='fw-500 text-gray-500'>Total Withdrawals</p>
                    <p className='fw-600 text-xl mt-8 mb-4'>₦ 1,000,800</p>
                    <p className='ml-8 fw-600 text-gray-500'>(70)</p>
                </div>
                <div className='p-8 bg-white bord-b border-red-600 rounded-t-lg'>
                    <p className='fw-500 text-gray-500'>Total Transaction Fees</p>
                    <p className='fw-600 text-xl mt-8 mb-4'>₦ 1,000,800</p>
                    <p className='ml-8 fw-600 text-gray-500'>(70)</p>
                </div>
                </div>
            </div>
            <div className='mt-16 w-full overflow-hidden grid md:grid-cols-2 lg:grid-cols-4 gap-x-10'>
                <div className='bg-white md:col-span-2 p-8 rounded'>
                    <div>
                        <p className='fw-600 text-lg'>Status of Users</p>
                        <div className='mt-7'>
                            <UsersChart/>
                        </div>
                    </div>
                </div>
                <div className='bg-white mt-6 lg:mt-0 grid content-between rounded-t-lg'>
                    <div className='p-8 '>
                        <p className='fw-500 text-gray-500'>Revenue from Loans</p>
                        <p className='fw-600 text-xl mt-8 mb-4'>₦ 1,000,800</p>
                        <p className='ml-8 fw-600 text-gray-500'>(70)</p>
                    </div>
                    <div>
                        <RevenueLoan/>
                    </div>
                </div>
                <div className=' grid mt-6 lg:mt-0 content-between bg-white rounded-t-lg'>
                    <div className='p-8'>
                        <p className='fw-500 text-gray-500'>Revenue from Loans</p>
                        <p className='fw-600 text-xl mt-8 mb-4'>₦ 1,000,800</p>
                        <p className='ml-8 fw-600 text-gray-500'>(70)</p>
                    </div>
                    <div>
                        <RevenueLoan/>
                    </div>
                </div>
            </div>
            <div className='mt-16 rounded-md w-full bg-white px-0 py-6 lg:p-8'>
                <div className='lg:flex items-center justify-between'>
                <p className='text-xl fw-600 px-3 lg:px-0'>Total Save and Spend</p>
                <div className='lg:w-6/12 px-3 lg:px-0 mt-6 lg:mt-0 flex items-center justify-between'>
                    <div className='md:flex items-center'>
                        <div className='flex items-center'>
                            <p className='w-6 h-2 bg-secondary mt-1'></p>
                            <p className='px-4'>Save</p>
                        </div>
                        <p className='fw-600 fs-700'>1,000,000 (300)</p>
                    </div>
                    <div className='md:flex items-center'>
                        <div className='flex items-center'>
                            <p className='w-6 h-2 bg-secondary mt-1'></p>
                            <p className='px-4'>Spend</p>
                        </div>
                        <p className='fw-600 fs-700'>1,000,000 (300)</p>
                    </div>
                </div>
                </div>
                <div className='mt-7'>
                    <SaveSpendChart/>
                </div>
            </div>
        </div>
    </Layout>
  )
}
const getLayout = (page) => <Layout>{page}</Layout>;

export { getLayout };
export default index