import React from 'react'
import Layout from '@/components/layout/Layout';
import Link from 'next/link';
import { MdKeyboardArrowRight } from 'react-icons/md';
import LoanInsuranceTable from '@/components/loan/tables/LoanInsurance';
import { useRouter } from 'next/router';
import Image from 'next/image';


const ViewDocument = () => {

    const router = useRouter()
    const img = router.query.sort

  return (
    <Layout>
        <div>
            <div className='flex lg:pt-6 mb-12 items-end'>
                <div className='text-3xl fw-600'>View Document</div>
                <div className='flex text-gray-500 items-center lg:ml-7'>
                    <p className='fs-700'><Link href='/loans'>Loans</Link></p>
                    <MdKeyboardArrowRight className='text-xl mx-5'/>
                    <p className='text-gray-500  fw-500'><Link href='/loans/loan-issuance'>Loan Issuance</Link></p>
                    <MdKeyboardArrowRight className='text-xl mx-5'/>
                    <p className='text-primary fw-500'>View Document</p>
                </div>
            </div>
            <div className='bg-white w-full min-h-[300px] p-5 rounded shade'>
                <div className=' py-5 px-3 w-full overflow-x-hidden'>
                    <Image src={img} alt='document' width={800} height={800} className='w-full'/>
                </div>
            </div>
        </div>
    </Layout>
  )
}
const getLayout = (page) => <Layout>{page}</Layout>;

export { getLayout };
export default ViewDocument