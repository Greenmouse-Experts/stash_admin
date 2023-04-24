import React from 'react'
import Layout from '@/components/layout/Layout';
import { BsFilter } from 'react-icons/bs';
import Link from 'next/link';
import TotalSpendChart from '@/components/Spend/Charts/TotalSpend';
import SuccessfulCatChart from '@/components/Spend/Charts/SuccessfulCat';
import TopSpendTable from '@/components/Spend/tables/TopSpend';
import SpendCatChart from '@/components/Spend/Charts/SpendCat';
import SpendersDataTable from '@/components/Spend/tables/SpenderData';

const SpendPage = () => {
  return (
    <Layout>
        <div>
            <div className='text-3xl fw-600'>Spend</div>
            <div className='lg:flex mt-12'>
                <div className='lg:w-4/12 lg:pr-4'>
                    <div className=''>
                        <div className='p-8 pl-0 bg-white shade rounded-md'>
                            <div className='pl-8 flex items-center justify-between'>
                                <p className='text-xl fw-600'>Total Spend</p>
                                <select className='px-2 border border-gray-300 rounded fs-500'>
                                    <option>All Time</option>
                                    <option>Yearly</option>
                                </select>
                            </div>
                            <div className='mt-8 pl-2'>
                                <TotalSpendChart/>
                            </div>
                        </div>
                        <div className='p-8 pl-0 mt-6 bg-white shade rounded-md'>
                            <div className='pl-8 flex items-center justify-between'>
                                <p className='text-xl fw-600'>Successful Categories</p>
                                <select className='px-2 border border-gray-300 rounded fs-500'>
                                    <option>All Time</option>
                                    <option>Yearly</option>
                                </select>
                            </div>
                            <div className='mt-8 pl-2'>
                                <SuccessfulCatChart/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='lg:w-8/12 lg:pl-4 mt-8 lg:mt-0'>
                    <div className='p-6 pt-8 bg-white shade rounded-md'>
                        <div className='flex items-start md:items-center justify-between'>
                            <p className='text-xl fw-600'>Top Spenders</p>
                            <div className='md:flex items-center text-end lg:text-left'>
                                <Link href='spend/top-spender' className='fs-700 text-primary fw-500 mr-6'>See All</Link>
                                <select className='px-2 border mt-6 md:mt-0 border-gray-300 rounded fs-500'>
                                    <option>All Time</option>
                                    <option>Yearly</option>
                                </select>
                            </div>
                        </div>
                        <div className='w-full overflow-x-auto'>
                            <TopSpendTable/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-12 bg-white shade rounded-md p-8'>
                <div className='flex items-center justify-between'>
                    <p className='text-xl fw-600 text-gray-500'>Spend Categories</p>
                    <div className='flex items-center'>
                        <select className='px-2 border border-gray-300 rounded fs-500'>
                            <option>All Time</option>
                            <option>Yearly</option>
                        </select>
                    </div>
                </div>
                <div className='mt-7 '>
                    <SpendCatChart/>
                </div>
            </div>
            <div className='mt-12 rounded-md bg-white shade p-8'>
                <div className='flex md:items-center justify-between'>
                    <p className='text-xl fw-600'>Spenders Data</p>
                    <div className='md:flex items-center text-end md:text-left'>
                        <Link href='spend/spender-data' className='text-primary fw-600'>See all</Link>
                        <p className='flex mt-6 md:mt-0 items-center border border-gray-400 px-3 ml-10 rounded-md fw-500'>Filter <BsFilter className='ml-1'/></p>
                    </div>
                </div>
                <div className='mt-7 w-full overflow-x-auto'>
                    <SpendersDataTable/>
                </div>
            </div>
        </div>
    </Layout>
  )
}
const getLayout = (page) => <Layout>{page}</Layout>;

export { getLayout };
export default SpendPage