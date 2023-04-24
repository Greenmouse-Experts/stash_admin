import React from 'react'
import { BsFilter } from 'react-icons/bs'

const Resolved = () => {
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
                        <th scope="col" className="px-4 text-gray-400 align-middle py-3 whitespace-nowrap text-left">D of T</th>
                        <th scope="col" className="px-4 text-gray-400 align-middle py-3 whitespace-nowrap text-left">Amount</th>
                        <th scope="col" className="px-4 text-gray-400 align-middle py-3 whitespace-nowrap text-left">D & T of T</th>
                        <th scope="col" className="px-4 text-gray-400 align-middle py-3 whitespace-nowrap text-left">TN</th>
                        <th scope="col" className="px-4 text-gray-400 align-middle py-3 whitespace-nowrap text-left">Complain</th>
                        <th scope="col" className="px-4 text-gray-400 align-middle py-3 whitespace-nowrap text-left">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="font-medium">
                        <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">1</td>
                        <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Evans Angelinosco</td>
                        <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">21/01/2023</td>
                        <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">N15,000</td>
                        <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Mar 02, 22 - 09:22 PM</td>
                        <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">0819</td>
                        <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Double debit</td>
                        <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Debited</td>
                    </tr>
                    <tr className="font-medium">
                        <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">2</td>
                        <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Evans Angelinosco</td>
                        <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">21/01/2023</td>
                        <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">N15,000</td>
                        <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Mar 02, 22 - 09:22 PM</td>
                        <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">0819</td>
                        <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Double debit</td>
                        <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Debited</td>
                    </tr>
                    <tr className="font-medium">
                        <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">3</td>
                        <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Evans Angelinosco</td>
                        <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">21/01/2023</td>
                        <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">N15,000</td>
                        <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Mar 02, 22 - 09:22 PM</td>
                        <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">0819</td>
                        <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Double debit</td>
                        <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Debited</td>
                    </tr>
                    <tr className="font-medium">
                        <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">4</td>
                        <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Evans Angelinosco</td>
                        <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">21/01/2023</td>
                        <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">N15,000</td>
                        <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Mar 02, 22 - 09:22 PM</td>
                        <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">0819</td>
                        <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Double debit</td>
                        <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Debited</td>
                    </tr>
                    <tr className="font-medium">
                        <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">5</td>
                        <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Evans Angelinosco</td>
                        <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">21/01/2023</td>
                        <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">N15,000</td>
                        <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Mar 02, 22 - 09:22 PM</td>
                        <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">0819</td>
                        <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Double debit</td>
                        <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Debited</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Resolved