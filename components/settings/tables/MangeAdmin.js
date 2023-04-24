import React from 'react'
import { MdOutlineModeEditOutline } from 'react-icons/md'

const MangeAdminTable = () => {
  return (
    <div>
        <div className='overflow-x-auto mt-8'>
            <table className="min-w-full text-left">
                <thead className="font-medium">
                    <tr>
                        <th scope="col" className="px-4 text-gray-400 align-middle py-3 whitespace-nowrap text-left">Name</th>
                        <th scope="col" className="px-4 text-gray-400 align-middle py-3 whitespace-nowrap text-left">Email</th>
                        <th scope="col" className="px-4 text-gray-400 align-middle py-3 whitespace-nowrap text-left">Role</th>
                        <th scope="col" className="px-4 text-gray-400 align-middle py-3 whitespace-nowrap text-left">Manage Access</th>
                        <th scope="col" className="px-4 text-gray-400 align-middle py-3 whitespace-nowrap text-left">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="font-medium">
                        <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Timi Obisesan</td>
                        <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">timi@stash.ng</td>
                        <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Business owner</td>
                    </tr>
                    <tr className="font-medium">
                        <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Paul Oseghale</td>
                        <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">paul@stash.ng</td>
                        <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Senior admin</td>
                    </tr>
                    <tr className="font-medium">
                        <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Timi Obisesan</td>
                        <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">timi@stash.ng</td>
                        <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Business owner</td>
                        <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left"><span className='px-4 py-1 text-primary border border-indigo-500 fw-500 flex items-center justify-center w-24'>Edit <MdOutlineModeEditOutline className='ml-2'/></span></td>
                        <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left"><span className='text-gray-500'>Remove</span></td>
                    </tr>
                    <tr className="font-medium">
                        <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Timi Obisesan</td>
                        <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">timi@stash.ng</td>
                        <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Business owner</td>
                        <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left"><span className='px-4 py-1 text-primary border border-indigo-500 fw-500 flex items-center justify-center w-24'>Edit <MdOutlineModeEditOutline className='ml-2'/></span></td>
                        <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left"><span className='text-gray-500'>Remove</span></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default MangeAdminTable