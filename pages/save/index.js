import React from 'react'
import Layout from '@/components/layout/Layout';
import { BsDownload, BsFilter, BsThreeDotsVertical } from 'react-icons/bs';
import Image from 'next/image';
import Link from 'next/link';
import useModal from '@/hooks/useModal';
import TopSavers from '@/components/save/tables/TopSavers';
import SavingChart from '@/components/save/charts/Saving';
import WithdrawalChart from '@/components/save/charts/Withdrawal';
import MaturedSavingsChart from '@/components/save/charts/MaturedSavings';
import ImmaturedSavingsChart from '@/components/save/charts/ImmaturedSavings';
import TotalInterestChart from '@/components/save/charts/TotalInterest';
import TotalWithdrawalChart from '@/components/save/charts/TotalWithdrawal';
import WithholdingTaxChart from '@/components/save/charts/WithholdingTax';
import FailedWithdrawalChart from '@/components/save/charts/FailedWithdrawal';
import CardExpiryTable from '@/components/save/tables/CardExpiry';
import MainBusinChart from '@/components/save/charts/MainBusin';
import SaversDataTable from '@/components/save/tables/SaversData';
import WithdrawalDataTable from '@/components/save/tables/WithdrawalsData';
import GoalSavings from '@/components/save/modals/GoalSavings';
import FixedSavings from '@/components/save/modals/FixedSavings';

const SavePage = () => {
    const { Modal, setShowModal, showModal, setModalBusy } = useModal();
    const { 
        Modal:WalletModal, 
        setShowModal:setShowWalletModal, 
        showModal: showWalletModal, 
        setModalBusy:setWalletModalBusy } = useModal();
    const { 
        Modal:FixedModal, 
        setShowModal:setShowFixedModal, 
        showModal: showFixedModal, 
        setModalBusy:setFixedModalBusy } = useModal();
    const { 
        Modal:SaysModal, 
        setShowModal:setShowSaysModal, 
        showModal: showSaysModal, 
        setModalBusy:setSaysModalBusy } = useModal();
    const { 
        Modal:DollarModal, 
        setShowModal:setShowDollarModal, 
        showModal: showDollarModal, 
        setModalBusy:setDollarModalBusy } = useModal();
    const { 
        Modal:SayeModal, 
        setShowModal:setShowSayeModal, 
        showModal: showSayeModal, 
        setModalBusy:setSayeModalBusy } = useModal();

  return (
    <Layout>
        <div className='w-full'>
            <div className='text-3xl fw-600'>Save</div>
            <div className='lg:flex mt-12'>
                <div className='lg:w-5/12 lg:pr-4'>
                    <div className='p-8 lg:pb-12 bg-white shade rounded-md'>
                        <p className='text-xl fw-500'>Change Interest Rate</p>
                        <div className='mt-10 flex'>
                            <div className='border-r pr-4 w-6/12 border-gray-400'>
                                <div className='flex justify-between items-center'>
                                    <Image src='https://res.cloudinary.com/greenmouse-tech/image/upload/v1680019319/Stash/Types_of_savings_jwvwmb.png' alt='banner' width={200} height={100} className='w-6'/>
                                    <BsThreeDotsVertical className='cursor-pointer' onClick={() => setShowModal(true)}/>
                                </div>
                                <div className='mt-6 fs-500 fw-500'>
                                    <p className=''>Goal Savings</p>
                                    <p className='fs-400 mt-2'>14%</p>
                                </div>
                            </div>
                            <div className='pl-4 w-6/12'>
                                <div className='flex justify-between items-center'>
                                    <Image src='https://res.cloudinary.com/greenmouse-tech/image/upload/v1680019305/Stash/Types_of_savings_ik23q7.png' alt='banner' width={200} height={100} className='w-6'/>
                                    <BsThreeDotsVertical className='cursor-pointer' onClick={() => setShowWalletModal(true)}/>
                                </div>
                                <div className='mt-6 fs-500 fw-500'>
                                    <p className=''>Main Savings</p>
                                    <p className='fs-400 mt-2'>14%</p>
                                </div>
                            </div>
                        </div>
                        <div className='mt-20 flex'>
                            <div className='border-r pr-4 w-6/12 border-gray-400'>
                                <div className='flex justify-between items-center'>
                                    <Image src='https://res.cloudinary.com/greenmouse-tech/image/upload/v1680019348/Stash/Types_of_savings_z6pvel.png' alt='banner' width={200} height={100} className='w-6'/>
                                    <BsThreeDotsVertical className='cursor-pointer' onClick={() => setShowFixedModal(true)}/>
                                </div>
                                <div className='mt-6 fs-500 fw-500'>
                                    <p className=''>Fixed Savings</p>
                                    <p className='fs-400 mt-2'>14% to 22%</p>
                                </div>
                            </div>
                            <div className='pl-4 w-6/12'>
                                <div className='flex justify-between items-center'>
                                    <Image src='https://res.cloudinary.com/greenmouse-tech/image/upload/v1680019374/Stash/Types_of_savings_ed8nme.png' alt='banner' width={200} height={100} className='w-6'/>
                                    <BsThreeDotsVertical className='cursor-pointer' onClick={() => setShowSaysModal(true)}/>
                                </div>
                                <div className='mt-6 fs-500 fw-500'>
                                    <p className=''>Save as you spend</p>
                                    <p className='fs-400 mt-2'>14% <span className='text-gray-400'>(SAYS)</span></p>
                                </div>
                            </div>
                        </div>
                        <div className='mt-20 flex'>
                            <div className='border-r pr-4 w-6/12 border-gray-400'>
                                <div className='flex justify-between items-center'>
                                    <Image src='https://res.cloudinary.com/greenmouse-tech/image/upload/v1680019395/Stash/Types_of_savings_xcbi1i.png' alt='banner' width={200} height={100} className='w-6'/>
                                    <BsThreeDotsVertical className='cursor-pointer' onClick={() => setShowDollarModal(true)}/>
                                </div>
                                <div className='mt-6 fs-500 fw-500'>
                                    <p className=''>Business Savings</p>
                                    <p className='fs-400 mt-2'>14%</p>
                                </div>
                            </div>
                            <div className='pl-4 w-6/12'>
                                <div className='flex justify-between items-center'>
                                    <Image src='https://res.cloudinary.com/greenmouse-tech/image/upload/v1680019374/Stash/Types_of_savings_ed8nme.png' alt='banner' width={200} height={100} className='w-6'/>
                                    <BsThreeDotsVertical className='cursor-pointer' onClick={() => setShowSayeModal(true)}/>
                                </div>
                                <div className='mt-6 fs-500 fw-500'>
                                    <p className=''>Save for Others</p>
                                    <p className='fs-400 mt-2'>14% <span className='text-gray-400'>(SAFO)</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='lg:w-7/12 mt-6 lg:mt-0 lg:pl-4 '>
                    <div className='p-6 pt-8 bg-white shade rounded-md'>
                        <div className='flex items-center justify-between'>
                            <p className='text-xl fw-600'>Top Savers</p>
                            <div className='flex items-center'>
                                <Link href='save/top-savers' className='fs-700 text-primary fw-500 mr-6'>See All</Link>
                                <select className='px-2 border border-gray-300 rounded fs-500'>
                                    <option>All Time</option>
                                    <option>Yearly</option>
                                </select>
                            </div>
                        </div>
                        <div className='w-full overflow-x-auto'>
                            <TopSavers/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='lg:grid grid-cols-2 gap-x-12 mt-12'>
                <div className='p-8 bg-white shade rounded-md'>
                    <div className='flex items-center justify-between'>
                        <p className='text-xl fw-600'>Savings</p>
                        <select className='px-2 border border-gray-300 rounded fs-500'>
                            <option>All Time</option>
                            <option>Yearly</option>
                        </select>
                    </div>
                    <div className='mt-8'>
                        <SavingChart/>
                    </div>
                </div>
                <div className='p-8 mt-8 lg:mt-0 bg-white shade rounded-md'>
                    <div className='flex items-center justify-between'>
                        <p className='text-xl fw-600'>Withdrawals</p>
                        <select className='px-2 border border-gray-300 rounded fs-500'>
                            <option>All Time</option>
                            <option>Yearly</option>
                        </select>
                    </div>
                    <div className='mt-8'>
                        <WithdrawalChart/>
                    </div>
                </div>
            </div>
            <div className='lg:grid grid-cols-2 gap-x-12 mt-7 lg:mt-12'>
                <div className='p-8 pl-0 bg-white shade rounded-md'>
                    <div className='pl-8 flex items-center justify-between'>
                        <p className='text-xl fw-600'>Matured Savings</p>
                        <select className='px-2 border border-gray-300 rounded fs-500'>
                            <option>Monthly</option>
                            <option>Yearly</option>
                            <option>All time</option>
                        </select>
                    </div>
                    <div className='mt-8 pl-2'>
                        <MaturedSavingsChart/>
                    </div>
                </div>
                <div className='py-6 lg:p-8 mt-8 lg:mt-0 bg-white shade rounded-md'>
                    <div className='flex px-6 lg:px-0 items-center justify-between'>
                        <p className='text-xl fw-600'>Immature Savings</p>
                        <select className='px-2 border border-gray-300 rounded fs-500'>
                            <option>Monthly</option>
                            <option>Yearly</option>
                            <option>All time</option>
                        </select>
                    </div>
                    <div className='mt-8'>
                        <ImmaturedSavingsChart/>
                    </div>
                </div>
            </div>
            <div className='lg:grid grid-cols-2 gap-x-12 mt-8 lg:mt-12'>
                <div className='p-8 pl-0 bg-white shade rounded-md'>
                    <div className='flex px-4 lg:pl-8 items-center justify-between'>
                        <p className='text-xl fw-600'>Total Interest</p>
                        <select className='px-2 border border-gray-300 rounded fs-500'>
                            <option>Monthly</option>
                            <option>Yearly</option>
                            <option>All time</option>
                        </select>
                    </div>
                    <div className='mt-8 pl-2'>
                        <TotalInterestChart/>
                    </div>
                </div>
                <div className='p-4 lg:p-8 mt-7 lg:mt-0 bg-white shade rounded-md'>
                    <div className='flex items-center justify-between'>
                        <p className='text-xl fw-600'>Maturing Savings</p>
                        <select className='px-2 border border-gray-300 rounded fs-500'>
                            <option>Monthly</option>
                            <option>Yearly</option>
                            <option>All time</option>
                        </select>
                    </div>
                    <div className='mt-8'>
                        <TotalWithdrawalChart/>
                    </div>
                </div>
            </div>
            <div className='lg:grid grid-cols-2 gap-x-12 mt-12'>
                <div className='p-8 bg-white shade rounded-md'>
                    <div className='flex items-center justify-between'>
                        <p className='text-xl fw-600'>Total Withdrawal</p>
                        <select className='px-2 border border-gray-300 rounded fs-500'>
                            <option>Monthly</option>
                            <option>Yearly</option>
                            <option>All time</option>
                        </select>
                    </div>
                    <div className='mt-8'>
                        <TotalWithdrawalChart/>
                    </div>
                </div>
                <div className='lg:p-8 p-4 mt-7 lg:mt-0 bg-white shade rounded-md'>
                    <div className='flex items-center justify-between'>
                        <p className='text-xl fw-600'>Withholding Tax</p>
                        <select className='px-2 border border-gray-300 rounded fs-500'>
                            <option>Monthly</option>
                            <option>Yearly</option>
                            <option>All time</option>
                        </select>
                    </div>
                    <div className='mt-8'>
                        <WithholdingTaxChart/>
                    </div>
                </div>
            </div>
            <div className='lg:grid grid-cols-2 gap-x-12 mt-12'>
                <div className='p-8 pl-0 bg-white shade rounded-md'>
                    <div className='flex lg:pl-8 pl-4 items-center justify-between'>
                        <p className='text-xl fw-600'>Failed Withdrawals</p>
                        <select className='px-2 border border-gray-300 rounded fs-500'>
                            <option>Monthly</option>
                            <option>Yearly</option>
                            <option>All time</option>
                        </select>
                    </div>
                    <div className='mt-8 pl-2'>
                        <FailedWithdrawalChart/>
                    </div>
                </div>
                <div className='p-4 lg:p-8 mt-7 lg:mt-0 bg-white shade rounded-md'>
                    <div className='flex items-center justify-between'>
                        <p className='text-xl fw-600'>Cards Expiry Dates</p>
                        <div className='flex'>
                            <div className='flex  rounded px-3 py-1 items-center fw-500'>
                                <p className='text-primary fw-500'>See All</p>
                            </div>
                            <div className='flex items-center border border-gray-400 px-3 ml-10 rounded-md fw-500'>
                                <p>Export</p>
                                <BsDownload className='ml-2'/>
                            </div>
                        </div>
                    </div>
                    <div className='mt-8'>
                        <CardExpiryTable/>
                    </div>
                </div>
            </div>
            <div className='mt-12 rounded-md bg-white shade py-6 lg:p-8'>
                <div className='flex px-4 lg:px-0 items-center justify-between'>
                    <p className='text-xl fw-600'>Main and Business</p>
                    <select className='px-2 border border-gray-300 rounded fs-500'>
                        <option>Monthly</option>
                        <option>Yearly</option>
                        <option>All time</option>
                    </select>
                </div>
                <div className='mt-4 px-4 lg:px-0 mx-auto lg:w-6/12 flex items-center justify-between'>
                    <div className='lg:flex items-center'>
                        <div className='flex items-center'>
                            <p className='w-6 h-2 bg-secondary mt-1'></p>
                            <p className='px-4'>MAIN</p>
                        </div>
                        <p className='fw-600 fs-700'>1,000,000 (300)</p>
                    </div>
                    <div className='lg:flex items-center'>
                        <div className='flex items-center'>
                            <p className='w-6 h-2 bg-secondary mt-1'></p>
                            <p className='px-4'>BUSIN</p>
                        </div>
                        <p className='fw-600 fs-700'>1,000,000 (300)</p>
                    </div>
                </div>
                <div className='mt-7'>
                    <MainBusinChart/>
                </div>
            </div>
            <div className='mt-12 rounded-md bg-white shade p-4 lg:p-8'>
                <div className='flex lg:items-center justify-between'>
                    <p className='text-xl fw-600'>Savers Data</p>
                    <div className='lg:flex items-center text-end lg:text-left'>
                        <Link href='save/savers-data' className='text-primary fw-600'>See all</Link>
                        <p className='flex mt-3 lg:mt-0 items-center border border-gray-400 px-3 ml-10 rounded-md fw-500'>Filter <BsFilter className='ml-1'/></p>
                    </div>
                </div>
                <div className='mt-7 w-full overflow-x-auto'>
                    <SaversDataTable/>
                </div>
            </div>
            <div className='mt-12 overflow-hidden rounded-md bg-white shade p-4 lg:p-8'>
                <div className='flex lg:items-center justify-between'>
                    <p className='text-xl fw-600'>Withdrawal Data</p>
                    <div className='lg:flex items-center text-end lg:text-left'>
                        <Link href='save/withdrawal-data' className='text-primary fw-600'>See all</Link>
                        <p className='flex mt-3 lg:mt-0 items-center border border-gray-400 px-3 ml-10 rounded-md fw-500'>Filter <BsFilter className='ml-1'/></p>
                    </div>
                </div>
                <div className='mt-7 !max-w-full overflow-hidden'>
                    <WithdrawalDataTable/>
                </div>
            </div>
        </div>
        <Modal title="Change Goal Savings Interest Rate">
            <GoalSavings/>
        </Modal>
        <WalletModal title="Change Wallet Savings Interest Rate">
            <GoalSavings/>
        </WalletModal>
        <FixedModal title="Change Fixed Savings Interest Rate">
            <FixedSavings/>
        </FixedModal>
        <SaysModal title="Change SAYS Interest Rate">
            <GoalSavings/>
        </SaysModal>
        <SayeModal title="Change SAYE Interest Rate">
            <GoalSavings/>
        </SayeModal>
        <DollarModal title="Change US Dollar Savings Interest Rate">
            <GoalSavings/>
        </DollarModal>
    </Layout>
  )
}
const getLayout = (page) => <Layout>{page}</Layout>;

export { getLayout };
export default SavePage