import React from 'react'
import Image from 'next/image';
import Layout from '@/components/layout/Layout';

const ProfilePage = () => {
  return (
    <Layout>
        <div>
            <div className='text-3xl fw-600'>Edit profile</div>
            <div className='p-8 lg:p-12 rounded-md shade bg-white mt-12'>
                <div className='flex items-center'>
                    <Image src='https://res.cloudinary.com/greenmouse-tech/image/upload/v1680190106/Stash/PHOTO-2022-10-21-09-00-15_1_sy91nw.png' alt='profile' width={400} height={400} className='w-40 circle' />
                    <p className='fw-500 ml-6 text-primary cursor-pointer lg:text-lg'> Add picture</p>
                </div>
                <form>
                    <div className='mt-8 border-b pb-12 grid lg:grid-cols-3 gap-y-8 gap-x-16'>
                        <div>
                            <p className='fw-600 text-xl'>Edit Name</p>
                        </div>
                        <div>
                            <label className='fw-500 lg:fs-700 text-gray-500'>First Name</label>
                            <input type='text' className='p-3 rounded border mt-2 border-gray-400 w-full' placeholder='Timi'/>
                        </div>
                        <div>
                            <label className='fw-500 lg:fs-700 text-gray-500'>Last Name</label>
                            <input type='text' className='p-3 rounded border mt-2 border-gray-400 w-full' placeholder='Timi'/>
                        </div>
                    </div>
                    <div className='py-8  grid lg:grid-cols-3 gap-x-16'>
                        <div>
                            <p className='fw-600 text-xl'>Change Password</p>
                        </div>
                        <div className='mt-8 lg:mt-0'>
                            <div>
                                <label className='fw-500 lg:fs-700 text-gray-500'>Old password</label>
                                <input type='password' className='p-3 rounded border mt-2 border-gray-400 w-full'/>
                            </div>
                            <div className='mt-8'>
                                <label className='fw-500 lg:fs-70 text-gray-500'>New password</label>
                                <input type='password' className='p-3 rounded border mt-2 border-gray-400 w-full'/>
                            </div>
                        </div>
                        <div className='self-end mt-8 lg:mt-0'>
                            <label className='fw-500 lg:fs-700 text-gray-500'>Confirm password</label>
                            <input type='text' className='p-3 rounded border mt-2 border-gray-400 w-full'/>
                        </div>
                    </div>
                    <div className='text-end'>
                        <button className='btn-primary px-7 py-2'>Edit</button>
                    </div>
                </form>
            </div>
        </div>
    </Layout>
  )
}
const getLayout = (page) => <Layout>{page}</Layout>;

export { getLayout };
export default ProfilePage