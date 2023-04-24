/* eslint-disable */

import React from 'react'
import Layout from '@/components/layout/Layout';
import useModal from '@/hooks/useModal';
import { MdKeyboardArrowRight } from 'react-icons/md';
import MangeAdminTable from '@/components/settings/tables/MangeAdmin';
import InviteAdmin from '@/components/settings/modals/inviteAdmin';

const index = () => {
    const { Modal, setShowModal, showModal, setModalBusy } = useModal();
  return (
    <Layout>
        <div>
            <div className='lg:flex items-center'>
                <div className='text-3xl fw-600'>Manage Admin</div>
                <div className='flex text-gray-500 mt-6 lg:mt-0 items-center lg:ml-16'>
                    <p>Settings</p>
                    <MdKeyboardArrowRight className='text-xl mx-5'/>
                    <p>Manage admin</p>
                </div>
            </div>
            <div className='mt-12 overflow-hidden rounded-md bg-white shade p-8'>
                <div className='text-end'>
                    <button className='btn-primary px-8 py-2' onClick={() => setShowModal(true)}>Invite</button>
                </div>
                <div className='mt-7 !max-w-full overflow-hidden'>
                    <MangeAdminTable/>
                </div>
            </div>
            <Modal title="Invite Team Member">
                <InviteAdmin/>
            </Modal>
        </div>
    </Layout>
  )
}
const getLayout = (page) => <Layout>{page}</Layout>;

export { getLayout };
export default index