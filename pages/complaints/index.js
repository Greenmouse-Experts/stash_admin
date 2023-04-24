import React, {useState} from 'react'
import Resolved from '@/components/complaint/features/Resolved';
import Unresolved from '@/components/complaint/features/Unresolved';
import Layout from '@/components/layout/Layout';
import { MdKeyboardArrowRight } from 'react-icons/md';

const ComplaintPage = () => {

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
          <div className='lg:flex lg:pt-6 items-center'>
              <div className='text-3xl fw-600'>Complaints</div>
              <div className='flex text-gray-500 items-center mt-6 lg:mt-0 lg:ml-16'>
                  <p>complaints</p>
                  <MdKeyboardArrowRight className='text-xl mx-5'/>
                  <p>Unresolved</p>
              </div>
          </div>
          <div className='mt-12'>
            <ul className="flex text-gray-400 fs-500">
                <li
                    className="nav-item px-5 lg:px-16 py-2 lg:py-4 cursor-pointer fs-800"
                    style={(open === 1 ? activeStyle : undefined)}
                    onClick={() => handleOpen(1)}
                >
                  <span className=''>Unresolved</span>
                </li>
                <li
                    className="nav-item px-5 lg:px-16 py-2 lg:py-4 cursor-pointer fs-800"
                    style={(open === 2 ? activeStyle : undefined)}
                    onClick={() => handleOpen(2)}
                >
                    <span className=''>Resolved</span>
                </li>
            </ul>
          </div>
          <div className='bg-white min-h-96 p-8 rounded shade'>
              {
                  open === 1 ? <Unresolved/> : ""
              }
              {
                  open === 2 ? <Resolved/> : ""
              }
          </div>
      </div>
    </Layout>
  )
}
const getLayout = (page) => <Layout>{page}</Layout>;

export { getLayout };
export default ComplaintPage