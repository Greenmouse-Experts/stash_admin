import React, {useState} from 'react'
import Layout from '@/components/layout/Layout';
import { MdKeyboardArrowRight } from 'react-icons/md';
import RestrictedUsers from '@/components/settings/features/RestrictedUsers';
import FlaggedUsers from '@/components/settings/features/FlaggedUsers';
import DeactivatedUser from '@/components/settings/features/DeactivatedUser';

const CustomerSettings = () => {

    const [open, setOpen] = useState(1);

    const handleOpen = (value) => {
        setOpen(open === value ? value : value);
    };
    const activeStyle = {
        borderBottom: "4px solid #6B5AED",
        color: "black",
        transition: "0.6s"
    }
  return (
    <Layout>
         <div>
            <div className='lg:flex items-center lg:pt-6'>
                <div className='text-3xl fw-600'>Manage customers</div>
                <div className='flex text-gray-500 items-center mt-6 lg:mt-0 lg:ml-16'>
                    <p>Manage customers</p>
                    <MdKeyboardArrowRight className='text-xl mx-5'/>
                    {open === 1 && <p>Restricted</p>}
                    {open === 2 && <p>Flagged</p>}
                    {open === 3 && <p>Deactivated</p>}
                </div>
            </div>
            <div className='mt-12 lg:mt-16'>
            <div>
            <ul className="flex text-gray-400 fs-500">
                <li
                    className="nav-item px-5 lg:px-16 py-2 lg:py-4 cursor-pointer fs-800"
                    style={(open === 1 ? activeStyle : undefined)}
                    onClick={() => handleOpen(1)}
                >
                    <span className=''>Restricted</span>
                </li>
                <li
                    className="nav-item px-5 lg:px-16 py-2 lg:py-4 cursor-pointer fs-800"
                    style={(open === 2 ? activeStyle : undefined)}
                    onClick={() => handleOpen(2)}
                >
                    <span className=''>Flagged</span>
                </li>
                <li
                    className="nav-item px-5 lg:px-16 py-2 lg:py-4 cursor-pointer fs-800"
                    style={(open === 3 ? activeStyle : undefined)}
                    onClick={() => handleOpen(3)}
                >
                    <span className=''>Deactivated</span>
                </li>
            </ul>
            </div>
            <div className='bg-white min-h-96 p-8 rounded shade'>
                {
                    open === 1 ? <RestrictedUsers/> : ""
                }
                {
                    open === 2 ? <FlaggedUsers/> : ""
                }
                {
                    open === 3 ? <DeactivatedUser/> : ""
                }
            </div>
        </div>
        </div>
    </Layout>
  )
}
const getLayout = (page) => <Layout>{page}</Layout>;

export { getLayout };
export default CustomerSettings