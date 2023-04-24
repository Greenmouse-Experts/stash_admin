import React from 'react'

const LoanRepayTable = () => {
  return (
    <div className='overflow-x-scroll mt-8'>
        <table className="min-w-full text-left">
            <thead className="font-medium">
                <tr>
                    <th scope="col" className="px-4 text-gray-400 align-middle py-3 whitespace-nowrap text-left">S/N</th>
                    <th scope="col" className="px-4 text-gray-400 align-middle py-3 whitespace-nowrap text-left">Name</th>
                    <th scope="col" className="px-4 text-gray-400 align-middle py-3 whitespace-nowrap text-left">Email</th>
                    <th scope="col" className="px-4 text-gray-400 align-middle py-3 whitespace-nowrap text-left">Type</th>
                    <th scope="col" className="px-4 text-gray-400 align-middle py-3 whitespace-nowrap text-left">Loan amount</th>
                    <th scope="col" className="px-4 text-gray-400 align-middle py-3 whitespace-nowrap text-left">Start date</th>
                    <th scope="col" className="px-4 text-gray-400 align-middle py-3 whitespace-nowrap text-left">End date</th>
                    <th scope="col" className="px-4 text-gray-400 align-middle py-3 whitespace-nowrap text-left">Status</th>
                    <th scope="col" className="px-4 text-gray-400 align-middle py-3 whitespace-nowrap text-left">Interest Paid</th>
                    <th scope="col" className="px-4 text-gray-400 align-middle py-3 whitespace-nowrap text-left">Interest Unpaid</th>
                    <th scope="col" className="px-4 text-gray-400 align-middle py-3 whitespace-nowrap text-left">Principal Paid</th>
                    <th scope="col" className="px-4 text-gray-400 align-middle py-3 whitespace-nowrap text-left">Principal Unpaid</th>
                    <th scope="col" className="px-4 text-gray-400 align-middle py-3 whitespace-nowrap text-left">Total Payment</th>
                    <th scope="col" className="px-4 text-gray-400 align-middle py-3 whitespace-nowrap text-left">Total Outstanding</th>
                    <th scope="col" className="px-4 text-gray-400 align-middle py-3 whitespace-nowrap text-left">Loan Balance</th>
                </tr>
            </thead>
            <tbody>
                <tr className="font-medium">
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">1</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Odinchazoihe Kayode</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Odinchazoihekayode@gmail.com</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">KOLLECT</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">100,000,000</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Mar 02, 23 - 9:22</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Mar 02, 23 - 9:22</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left"><p className='px-3 py-1 rounded bg-red-50 text-red-600 border border-red-500'>Default</p></td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">4,000,200</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">8,000,200</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">4,000,200</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">8,000,200</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">4,000,200</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">8,000,200</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">4,000,200</td>
                </tr>
                <tr className="font-medium">
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">2</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Odinchazoihe Kayode</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Odinchazoihekayode@gmail.com</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">KOLLECT</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">100,000,000</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Mar 02, 23 - 9:22</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Mar 02, 23 - 9:22</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left"><p className='px-3 py-1 rounded bg-purple-50 text-purple-600 border border-purple-500'>Settled</p></td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">4,000,200</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">8,000,200</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">4,000,200</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">8,000,200</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">4,000,200</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">8,000,200</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">4,000,200</td>
                </tr>
                <tr className="font-medium">
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">3</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Odinchazoihe Kayode</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Odinchazoihekayode@gmail.com</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">SALAD</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">100,000,000</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Mar 02, 23 - 9:22</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Mar 02, 23 - 9:22</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left"><p className='px-3 py-1 rounded bg-green-50 text-green-600 border border-green-500'>Perform</p></td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">4,000,200</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">8,000,200</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">4,000,200</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">8,000,200</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">4,000,200</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">8,000,200</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">4,000,200</td>
                </tr>
                <tr className="font-medium">
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">4</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Odinchazoihe Kayode</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Odinchazoihekayode@gmail.com</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">KOLLECT</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">100,000,000</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Mar 02, 23 - 9:22</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Mar 02, 23 - 9:22</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left"><p className='px-3 py-1 rounded bg-red-50 text-red-600 border border-red-500'>Default</p></td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">4,000,200</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">8,000,200</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">4,000,200</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">8,000,200</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">4,000,200</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">8,000,200</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">4,000,200</td>
                </tr>
                <tr className="font-medium">
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">5</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Odinchazoihe Kayode</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Odinchazoihekayode@gmail.com</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">SALAD</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">100,000,000</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Mar 02, 23 - 9:22</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Mar 02, 23 - 9:22</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left"><p className='px-3 py-1 rounded bg-red-50 text-red-600 border border-red-500'>Default</p></td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">4,000,200</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">8,000,200</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">4,000,200</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">8,000,200</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">4,000,200</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">8,000,200</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">4,000,200</td>
                </tr>
                <tr className="font-medium">
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">6</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Odinchazoihe Kayode</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Odinchazoihekayode@gmail.com</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">KOLLECT</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">100,000,000</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Mar 02, 23 - 9:22</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Mar 02, 23 - 9:22</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left"><p className='px-3 py-1 rounded bg-red-50 text-red-600 border border-red-500'>Default</p></td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">4,000,200</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">8,000,200</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">4,000,200</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">8,000,200</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">4,000,200</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">8,000,200</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">4,000,200</td>
                </tr>
                <tr className="font-medium">
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">7</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Odinchazoihe Kayode</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Odinchazoihekayode@gmail.com</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">KOLLECT</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">100,000,000</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Mar 02, 23 - 9:22</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Mar 02, 23 - 9:22</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left"><p className='px-3 py-1 rounded bg-purple-50 text-purple-600 border border-purple-500'>Settled</p></td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">4,000,200</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">8,000,200</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">4,000,200</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">8,000,200</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">4,000,200</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">8,000,200</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">4,000,200</td>
                </tr>
                <tr className="font-medium">
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">8</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Odinchazoihe Kayode</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Odinchazoihekayode@gmail.com</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">SALAD</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">100,000,000</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Mar 02, 23 - 9:22</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Mar 02, 23 - 9:22</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left"><p className='px-3 py-1 rounded bg-green-50 text-green-600 border border-green-500'>Perform</p></td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">4,000,200</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">8,000,200</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">4,000,200</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">8,000,200</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">4,000,200</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">8,000,200</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">4,000,200</td>
                </tr>
                <tr className="font-medium">
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">9</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Odinchazoihe Kayode</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Odinchazoihekayode@gmail.com</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">KOLLECT</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">100,000,000</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Mar 02, 23 - 9:22</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Mar 02, 23 - 9:22</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left"><p className='px-3 py-1 rounded bg-red-50 text-red-600 border border-red-500'>Default</p></td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">4,000,200</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">8,000,200</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">4,000,200</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">8,000,200</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">4,000,200</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">8,000,200</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">4,000,200</td>
                </tr>
                <tr className="font-medium">
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">10</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Odinchazoihe Kayode</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Odinchazoihekayode@gmail.com</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">SALAD</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">100,000,000</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Mar 02, 23 - 9:22</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Mar 02, 23 - 9:22</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left"><p className='px-3 py-1 rounded bg-red-50 text-red-600 border border-red-500'>Default</p></td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">4,000,200</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">8,000,200</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">4,000,200</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">8,000,200</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">4,000,200</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">8,000,200</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">4,000,200</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default LoanRepayTable