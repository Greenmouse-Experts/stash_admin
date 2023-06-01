import React from 'react'
import Layout from '@/components/layout/Layout';
import { BsFilter } from 'react-icons/bs';
import Link from 'next/link';
import LoanStatusChart from '@/components/loan/charts/LoanStatus';
import ReqAppChart from '@/components/loan/charts/ReqApp';
import LoanFeesChart from '@/components/loan/charts/LoanFees';
import LoanInterestChart from '@/components/loan/charts/LoanInterest';
import LoanInsuranceTable from '@/components/loan/tables/LoanInsurance';
import LoanRepayTable from '@/components/loan/tables/LoanRepay';
import Image from 'next/image';
import useModal from '@/hooks/useModal';
import LoanInterest from '@/components/loan/modals/LoanInterest';

const LoanPage = () => {

    const {Modal, setShowModal, showModal,} = useModal()
    const {Modal:KollectModal, setShowModal: setShowKollectModal, showModal: showKollectModal} = useModal()

  return (
    <Layout>
        <div>
            <div>
                <div className='flex items-center justify-between'>
                    <div className='text-3xl fw-600'>SALAD Loans</div>
                    <div className='pr-12'>
                        <div className='cursor-pointer' onClick={() => setShowModal(true)}>
                            <Image
                                src='https://res.cloudinary.com/greenmouse-tech/image/upload/v1685548867/Stash/rate_l1cpu6.png'
                                alt='rate'
                                className='w-10 h-10 mx-auto'
                                width={100}
                                height={100}
                                />
                            <p className='fw-600 text-primary'>3.5% monthly</p>
                        </div>
                    </div>
                </div>
                <div className='lg:grid grid-cols-2 gap-x-12 mt-12'>
                    <div className='p-8 pl-0 bg-white shade rounded-md'>
                        <div className='pl-8 flex items-center justify-between'>
                            <p className='text-xl fw-600 text-gray-500'>Loan Status</p>
                            <select className='px-2 border border-gray-300 rounded fs-500'>
                                <option>All Time</option>
                                <option>Yearly</option>
                            </select>
                        </div>
                        <div className='mt-8 pl-2'>
                            <LoanStatusChart/>
                        </div>
                    </div>
                    <div className='p-8 pl-0 mt-8 lg:mt-0 bg-white shade rounded-md'>
                        <div className='pl-8 flex items-center justify-between'>
                            <p className='text-xl fw-600 text-gray-500'>Request and Approval</p>
                            <select className='px-2 border border-gray-300 rounded fs-500'>
                                <option>All Time</option>
                                <option>Yearly</option>
                            </select>
                        </div>
                        <div className='pl-2 mt-8'>
                            <ReqAppChart/>
                        </div>
                    </div>
                </div>
                <div className='lg:grid grid-cols-2 gap-x-12 mt-8 lg:mt-12'>
                    <div className='p-8 pl-0 bg-white shade rounded-md'>
                        <div className='pl-8 flex items-center justify-between'>
                            <p className='text-xl fw-600 text-gray-500'>Loan Fees</p>
                            <select className='px-2 border border-gray-300 rounded fs-500'>
                                <option>All Time</option>
                                <option>Yearly</option>
                            </select>
                        </div>
                        <div className='mt-8 pl-2'>
                            <LoanFeesChart/>
                        </div>
                    </div>
                    <div className='p-8 pl-0 bg-white mt-8 lg:mt-0 shade rounded-md'>
                        <div className='pl-8 flex items-center justify-between'>
                            <p className='text-xl fw-600 text-gray-500'>Loan Interest</p>
                            <select className='px-2 border border-gray-300 rounded fs-500'>
                                <option>All Time</option>
                                <option>Yearly</option>
                            </select>
                        </div>
                        <div className='pl-2 mt-8'>
                            <LoanInterestChart/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-16'>
                <div className='flex items-center justify-between'>
                    <div className='text-3xl fw-600'>KOLLECT Loans</div>
                    <div className='pr-12'>
                        <div className='cursor-pointer' onClick={() => setShowKollectModal(true)}>
                            <Image
                                src='https://res.cloudinary.com/greenmouse-tech/image/upload/v1685548867/Stash/rate_l1cpu6.png'
                                alt='rate'
                                className='w-10 h-10 mx-auto'
                                width={100}
                                height={100}
                                />
                            <p className='fw-600 text-primary'>3.3% monthly</p>
                        </div>
                    </div>
                </div>
                <div className='lg:grid grid-cols-2 gap-x-12 mt-12'>
                    <div className='p-8 pl-0 bg-white shade rounded-md'>
                        <div className='pl-8 flex items-center justify-between'>
                            <p className='text-xl fw-600 text-gray-500'>Loan Status</p>
                            <select className='px-2 border border-gray-300 rounded fs-500'>
                                <option>All Time</option>
                                <option>Yearly</option>
                            </select>
                        </div>
                        <div className='mt-8 pl-2'>
                            <LoanStatusChart/>
                        </div>
                    </div>
                    <div className='p-8 pl-0 mt-8 lg:mt-0 bg-white shade rounded-md'>
                        <div className='pl-8 flex items-center justify-between'>
                            <p className='text-xl fw-600 text-gray-500'>Request and Approval</p>
                            <select className='px-2 border border-gray-300 rounded fs-500'>
                                <option>Yearly</option>
                                <option>Monthly</option>
                            </select>
                        </div>
                        <div className='pl-2 mt-8'>
                            <ReqAppChart/>
                        </div>
                    </div>
                </div>
                <div className='lg:grid grid-cols-2 gap-x-12 mt-8 lg:mt-12'>
                    <div className='p-8 pl-0 bg-white shade rounded-md'>
                        <div className='pl-8 flex items-center justify-between'>
                            <p className='text-xl fw-600 text-gray-500'>Loan Fees</p>
                            <select className='px-2 border border-gray-300 rounded fs-500'>
                                <option>All Time</option>
                                <option>Yearly</option>
                            </select>
                        </div>
                        <div className='mt-8 pl-2'>
                            <LoanFeesChart/>
                        </div>
                    </div>
                    <div className='p-8 pl-0 bg-white mt-8 lg:mt-0 shade rounded-md'>
                        <div className='pl-8 flex items-center justify-between'>
                            <p className='text-xl fw-600 text-gray-500'>Loan Interest</p>
                            <select className='px-2 border border-gray-300 rounded fs-500'>
                                <option>All Time</option>
                                <option>Yearly</option>
                            </select>
                        </div>
                        <div className='pl-2 mt-8'>
                            <LoanInterestChart/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-8 lg:mt-12 w-full p-8 bg-white shade rounded-md'>
                <div className='flex items-center justify-between'>
                    <p className='text-xl text-gray-500 fw-600'>Loan Issuance</p>
                    <div className='flex items-center'>
                        <Link href='loans/loan-issuance' className='text-primary fw-600'>See all</Link>
                        <p className='flex items-center border border-gray-400 px-3 ml-10 rounded-md fw-500'>Filter <BsFilter className='ml-1'/></p>
                    </div>
                </div>
                <div className=''>
                    <LoanInsuranceTable/>
                </div>
            </div>
            <div className='mt-12 w-full p-8 bg-white shade rounded-md'>
                <div className='flex items-center justify-between'>
                    <p className='text-xl text-gray-500 fw-600'>Loan Repayment</p>
                    <div className='flex items-center'>
                        <Link href='loans/loan-repay' className='text-primary fw-600'>See all</Link>
                        <p className='flex items-center border border-gray-400 px-3 ml-10 rounded-md fw-500'>Filter <BsFilter className='ml-1'/></p>
                    </div>
                </div>
                <div className=''>
                    <LoanRepayTable/>
                </div>
            </div>
            <Modal title='Change Salad Loan Interest Rate'>
                <LoanInterest closeModal={() => setShowModal(false)} type="salad"/>
            </Modal>
            <KollectModal title='Change Kollect Loan Interest Rate'>
                <LoanInterest closeModal={() => setShowKollectModal(false)} type="kollect"/>
            </KollectModal>
        </div>
    </Layout>
  )
}
const getLayout = (page) => <Layout>{page}</Layout>;

export { getLayout };
export default LoanPage