import React from 'react'
import Layout from '@/components/layout/Layout';
import Link from 'next/link';
import { BsDownload, BsFilter } from 'react-icons/bs';
import { MdKeyboardArrowRight } from 'react-icons/md';
import LoanInsuranceTable from '@/components/loan/tables/LoanInsurance';


const LoanIssuancePage = () => {
  return (
    <Layout>
        <div>
            <div className='flex lg:pt-6 mb-12 items-end'>
                <div className='text-3xl fw-600'>Loan Issuance</div>
                <div className='flex text-gray-500 items-center lg:ml-7'>
                    <p className='fs-700'><Link href='/loans'>Loans</Link></p>
                    <MdKeyboardArrowRight className='text-xl mx-5'/>
                    <p className='text-primary fw-500'>Loan Issuance</p>
                </div>
            </div>
            <div className='bg-white w-full min-h-[300px] p-5 rounded shade'>
                <div className=' py-5 px-3 w-full overflow-x-hidden'>
                    <LoanInsuranceTable />
                </div>
            </div>
        </div>
    </Layout>
  )
}
const getLayout = (page) => <Layout>{page}</Layout>;

export { getLayout };
export default LoanIssuancePage