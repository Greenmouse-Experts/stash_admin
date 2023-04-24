import React from 'react'
import CustomersTable from '@/components/customers/tables/Customers';
import Layout from '@/components/layout/Layout';
import { BsFilter } from 'react-icons/bs';

const CustomerPage = () => {
  return (
    <Layout>
        <div>
            <div className='text-3xl fw-600'>Customers</div>
            <div className='mt-12 w-full p-8 bg-white shade rounded-md'>
                    <div className='flex items-center justify-end'>
                        <p className='flex items-center border border-gray-400 px-3 ml-10 rounded-md fw-500'>Filter <BsFilter className='ml-1'/></p>
                    </div>
                    <div>
                        <CustomersTable/>
                    </div>
            </div>
        </div>
    </Layout>
  )
}
const getLayout = (page) => <Layout>{page}</Layout>;

export { getLayout };
export default CustomerPage