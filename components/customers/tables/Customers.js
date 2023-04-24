import Link from 'next/link'
import React from 'react'

const CustomersTable = () => {
  return (
    <div className='overflow-x-auto mt-8'>
        <table className="min-w-full text-left">
            <thead className="font-medium">
                <tr>
                    <th scope="col" className="px-4 text-gray-400 align-middle py-3 whitespace-nowrap text-left">S/N</th>
                    <th scope="col" className="px-4 text-gray-400 align-middle py-3 whitespace-nowrap text-left">Name</th>
                    <th scope="col" className="px-4 text-gray-400 align-middle py-3 whitespace-nowrap text-left">Email</th>
                    <th scope="col" className="px-4 text-gray-400 align-middle py-3 whitespace-nowrap text-left">Phone no</th>
                    <th scope="col" className="px-4 text-gray-400 align-middle py-3 whitespace-nowrap text-left">Levels</th>
                    <th scope="col" className="px-4 text-gray-400 align-middle py-3 whitespace-nowrap text-left">Status</th>
                    <th scope="col" className="px-4 text-gray-400 align-middle py-3 whitespace-nowrap text-left">Date</th>
                </tr>
            </thead>
            <tbody>
                <tr className="font-medium">
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">1</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left"><Link href='/customers/details'>Odinchazoihe Kayode</Link></td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Odinchazoihekayode@gmail.com</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">08123456789</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Tier 1</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left"><p className='px-3 py-1 rounded text-center bg-green-50 text-green-600 border border-green-500'>Active</p></td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Mar 02, 23 - 9:22</td>
                </tr>
                <tr className="font-medium">
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">2</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Odinchazoihe Kayode</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Odinchazoihekayode@gmail.com</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">08123456789</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Tier 2</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left"><p className='px-3 py-1 rounded text-center bg-green-50 text-green-600 border border-green-500'>Active</p></td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Mar 02, 23 - 9:22</td>
                </tr>
                <tr className="font-medium">
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">3</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Odinchazoihe Kayode</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Odinchazoihekayode@gmail.com</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">08123456789</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Tier 1</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left"><p className='px-3 py-1 rounded text-center bg-red-50 text-red-600 border border-red-500'>Inactive</p></td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Mar 02, 23 - 9:22</td>
                </tr>
                <tr className="font-medium">
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">4</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Odinchazoihe Kayode</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Odinchazoihekayode@gmail.com</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">08123456789</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">1Tier 1</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left"><p className='px-3 py-1 rounded text-center bg-green-50 text-green-600 border border-green-500'>Active</p></td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Mar 02, 23 - 9:22</td>
                </tr>
                <tr className="font-medium">
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">5</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Odinchazoihe Kayode</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Odinchazoihekayode@gmail.com</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">08123456789</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Tier 1</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left"><p className='px-3 py-1 rounded text-center bg-green-50 text-green-600 border border-green-500'>Active</p></td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Mar 02, 23 - 9:22</td>
                </tr>
                <tr className="font-medium">
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">6</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Odinchazoihe Kayode</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Odinchazoihekayode@gmail.com</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">08123456789</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Tier 2</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left"><p className='px-3 py-1 rounded text-center bg-green-50 text-green-600 border border-green-500'>Active</p></td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Mar 02, 23 - 9:22</td>
                </tr>
                <tr className="font-medium">
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">7</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Odinchazoihe Kayode</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Odinchazoihekayode@gmail.com</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">08123456789</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Tier 1</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left"><p className='px-3 py-1 rounded text-center bg-red-50 text-red-600 border border-red-500'>Inactive</p></td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Mar 02, 23 - 9:22</td>
                </tr>
                <tr className="font-medium">
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">8</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Odinchazoihe Kayode</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Odinchazoihekayode@gmail.com</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">08123456789</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">1Tier 1</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left"><p className='px-3 py-1 rounded text-center bg-green-50 text-green-600 border border-green-500'>Active</p></td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Mar 02, 23 - 9:22</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default CustomersTable