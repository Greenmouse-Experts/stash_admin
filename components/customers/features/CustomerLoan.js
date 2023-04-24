import React from 'react'
import { BsFilter } from 'react-icons/bs'

const CustomerLoan = () => {
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
                        <th scope="col" className="px-4 text-gray-400 align-middle py-3 whitespace-nowrap text-left">Loan Type</th>
                        <th scope="col" className="px-4 text-gray-400 align-middle py-3 whitespace-nowrap text-left">Loan amount</th>
                        <th scope="col" className="px-4 text-gray-400 align-middle py-3 whitespace-nowrap text-left">Tenor</th>
                        <th scope="col" className="px-4 text-gray-400 align-middle py-3 whitespace-nowrap text-left">Loan Fee</th>
                        <th scope="col" className="px-4 text-gray-400 align-middle py-3 whitespace-nowrap text-left">Staus</th>
                        <th scope="col" className="px-4 text-gray-400 align-middle py-3 whitespace-nowrap text-left">Total outstanding</th>
                        <th scope="col" className="px-4 text-gray-400 align-middle py-3 whitespace-nowrap text-left">Loan balance</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="font-medium">
                        <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">1</td>
                        <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">SALAD</td>
                        <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">1,000,000</td>
                        <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">12 months</td>
                        <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">1,000</td>
                        <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left"><p className='px-3 py-1 rounded text-center bg-green-50 text-green-600 border border-green-500'>Approved</p></td>
                        <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">0.00</td>
                        <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">88,000.00</td>
                    </tr>
                    <tr className="font-medium">
                        <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">1</td>
                        <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">SALAD</td>
                        <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">1,000,000</td>
                        <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">12 months</td>
                        <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">1,000</td>
                        <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left"><p className='px-3 py-1 rounded text-center bg-red-50 text-red-600 border border-red-500'>Declined</p></td>
                        <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">0.00</td>
                        <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">88,000.00</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default CustomerLoan