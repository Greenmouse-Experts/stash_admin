import React from 'react'

const WithdrawalDataTable = () => {
  return (
    <div>
        <div className="flex flex-col overflow-x-auto">
            <div className="sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div className="overflow-x-auto">
                    <table className="min-w-full text-left">
                        <thead className="font-medium">
                            <tr>
                                <th scope="col" className="px-4 text-gray-400 align-middle py-3 whitespace-nowrap text-left">S/N</th>
                                <th scope="col" className="px-4 text-gray-400 align-middle py-3 whitespace-nowrap text-left">Name</th>
                                <th scope="col" className="px-4 text-gray-400 align-middle py-3 whitespace-nowrap text-left">Email</th>
                                <th scope="col" className="px-4 text-gray-400 align-middle py-3 whitespace-nowrap text-left">Type</th>
                                <th scope="col" className="px-4 text-gray-400 align-middle py-3 whitespace-nowrap text-left">Principal savings</th>
                                <th scope="col" className="px-4 text-gray-400 align-middle py-3 whitespace-nowrap text-left">Interest paid</th>
                                <th scope="col" className="px-4 text-gray-400 align-middle py-3 whitespace-nowrap text-left">Penal Interest</th>
                                <th scope="col" className="px-4 text-gray-400 align-middle py-3 whitespace-nowrap text-left">Total Withdrawal</th>
                                <th scope="col" className="px-4 text-gray-400 align-middle py-3 whitespace-nowrap text-left">Tax</th>
                                <th scope="col" className="px-4 text-gray-400 align-middle py-3 whitespace-nowrap text-left">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="font-medium">
                                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">1</td>
                                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Odinchazoihe Kayode</td>
                                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Odinchazoihekayode@gmail.com</td>
                                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Wallet</td>
                                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">100,000,000</td>
                                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">4,000,000</td>
                                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">2,000,200</td>
                                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">4,000,200</td>
                                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">0.00</td>
                                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Mar 02, 23 - 9:22</td>
                            </tr>
                            <tr className="font-medium">
                                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">2</td>
                                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Odinchazoihe Kayode</td>
                                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Odinchazoihekayode@gmail.com</td>
                                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Fixed</td>
                                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">100,000,000</td>
                                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">4,000,000</td>
                                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">2,000,200</td>
                                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">4,000,200</td>
                                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">200.00</td>
                                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Mar 02, 23 - 9:22</td>
                            </tr>
                            <tr className="font-medium">
                                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">3</td>
                                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Odinchazoihe Kayode</td>
                                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Odinchazoihekayode@gmail.com</td>
                                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">USD</td>
                                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">100,000,000</td>
                                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">4,000,000</td>
                                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">2,000,200</td>
                                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">4,000,200</td>
                                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">0.00</td>
                                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Mar 02, 23 - 9:22</td>
                            </tr>
                            <tr className="font-medium">
                                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">4</td>
                                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Odinchazoihe Kayode</td>
                                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Odinchazoihekayode@gmail.com</td>
                                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Wallet</td>
                                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">100,000,000</td>
                                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">4,000,000</td>
                                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">2,000,200</td>
                                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">4,000,200</td>
                                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">0.00</td>
                                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Mar 02, 23 - 9:22</td>
                            </tr>
                            <tr className="font-medium">
                                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">5</td>
                                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Odinchazoihe Kayode</td>
                                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Odinchazoihekayode@gmail.com</td>
                                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Fixed</td>
                                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">100,000,000</td>
                                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">5,000,000</td>
                                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">1,000,200</td>
                                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">4,000,200</td>
                                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">300.00</td>
                                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Mar 02, 23 - 9:22</td>
                            </tr>
                            <tr className="font-medium">
                                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">6</td>
                                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Odinchazoihe Kayode</td>
                                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Odinchazoihekayode@gmail.com</td>
                                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Fixed</td>
                                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">100,000,000</td>
                                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">4,000,000</td>
                                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">2,000,200</td>
                                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">4,000,200</td>
                                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">0.00</td>
                                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Mar 02, 23 - 9:22</td>
                            </tr>
                            <tr className="font-medium">
                                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">7</td>
                                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Odinchazoihe Kayode</td>
                                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Odinchazoihekayode@gmail.com</td>
                                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Wallet</td>
                                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">100,000,000</td>
                                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">4,000,000</td>
                                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">2,000,200</td>
                                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">4,000,200</td>
                                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">0.00</td>
                                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Mar 02, 23 - 9:22</td>
                            </tr>
                            <tr className="font-medium">
                                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">8</td>
                                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Odinchazoihe Kayode</td>
                                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Odinchazoihekayode@gmail.com</td>
                                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">USD</td>
                                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">100,000,000</td>
                                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">4,000,000</td>
                                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">2,000,200</td>
                                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">4,000,200</td>
                                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">0.00</td>
                                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Mar 02, 23 - 9:22</td>
                            </tr>
                            <tr className="font-medium">
                                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">9</td>
                                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Odinchazoihe Kayode</td>
                                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Odinchazoihekayode@gmail.com</td>
                                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Wallet</td>
                                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">100,000,000</td>
                                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">4,000,000</td>
                                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">2,000,200</td>
                                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">4,000,200</td>
                                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">0.00</td>
                                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Mar 02, 23 - 9:22</td>
                            </tr>
                            <tr className="font-medium">
                                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">10</td>
                                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Odinchazoihe Kayode</td>
                                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Odinchazoihekayode@gmail.com</td>
                                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Wallet</td>
                                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">100,000,000</td>
                                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">4,000,000</td>
                                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">2,000,200</td>
                                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">4,000,200</td>
                                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">0.00</td>
                                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Mar 02, 23 - 9:22</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                </div>
            </div>
            </div>
    </div>
  )
}

export default WithdrawalDataTable