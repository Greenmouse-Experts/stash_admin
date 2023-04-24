import React from 'react'
import { BsFilter } from 'react-icons/bs'

const RestrictedUsers = () => {
  return (
    <div>
        <div className='flex justify-end items-center'>
            <p className='flex items-center border border-gray-400 px-3 ml-10 rounded-md fw-500'>Filter <BsFilter className='ml-1'/></p>
        </div>
        <div className='overflow-x-auto mt-8'>
            <table className="min-w-full text-left">
                <thead className="font-medium">
                    <tr>
                        <th scope="col" className="px-4 text-gray-400 align-middle py-3 whitespace-nowrap text-left">S/N</th>
                        <th scope="col" className="px-4 text-gray-400 align-middle py-3 whitespace-nowrap text-left">Name</th>
                        <th scope="col" className="px-4 text-gray-400 align-middle py-3 whitespace-nowrap text-left">Email</th>
                        <th scope="col" className="px-4 text-gray-400 align-middle py-3 whitespace-nowrap text-left">Reason</th>
                        <th scope="col" className="px-4 text-gray-400 align-middle py-3 whitespace-nowrap text-left">Date</th>
                        <th scope="col" className="px-4 text-gray-400 align-middle py-3 whitespace-nowrap text-left">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="font-medium">
                        <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">1</td>
                        <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Evans Envageline</td>
                        <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">evansangelica@gmail.com</td>
                        <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">withdraw</td>
                        <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Mar 02, 23 - 9:22</td>
                        <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left"><span className='fw-600 text-primary'>Unrestrict</span></td>
                    </tr>
                    <tr className="font-medium">
                        <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">2</td>
                        <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Evans Envageline</td>
                        <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">evansangelica@gmail.com</td>
                        <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">withdraw</td>
                        <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Mar 02, 23 - 9:22</td>
                        <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left"><span className='fw-600 text-primary'>Unrestrict</span></td>
                    </tr>
                    <tr className="font-medium">
                        <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">3</td>
                        <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Evans Envageline</td>
                        <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">evansangelica@gmail.com</td>
                        <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">withdraw</td>
                        <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Mar 02, 23 - 9:22</td>
                        <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left"><span className='fw-600 text-primary'>Unrestrict</span></td>
                    </tr>
                    <tr className="font-medium">
                        <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">4</td>
                        <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Evans Envageline</td>
                        <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">evansangelica@gmail.com</td>
                        <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">withdraw</td>
                        <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Mar 02, 23 - 9:22</td>
                        <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left"><span className='fw-600 text-primary'>Unrestrict</span></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default RestrictedUsers