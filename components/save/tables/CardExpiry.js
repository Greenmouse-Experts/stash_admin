import React from 'react'

const CardExpiryTable = () => {
  return (
    <div>
        <div className="flex flex-col overflow-x-auto">
            <div className="sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div className="overflow-x-auto">
                    <table className="min-w-full text-left">
                        <thead className="font-medium">
                            <tr>
                                <th scope="col" className="px-6 py-4 text-gray-400">S/N</th>
                                <th scope="col" className="px-6 py-4 text-gray-400">Name</th>
                                <th scope="col" className="px-6 py-4 text-gray-400">Email</th>
                                <th scope="col" className="px-6 py-4 text-gray-400">Phone Number</th>
                                <th scope="col" className="px-6 py-4 text-gray-400">Expiry date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="font-medium">
                                <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                                <td className="whitespace-nowrap px-6 py-4">Tochi Odinchazoihe</td>
                                <td className="whitespace-nowrap px-6 py-4">esther.dioka@gmail.com</td>
                                <td className="whitespace-nowrap px-6 py-4">08123456789</td>
                                <td className="whitespace-nowrap px-6 py-4">08/24</td>
                            </tr>
                            <tr className="font-medium">
                                <td className="whitespace-nowrap px-6 py-4 font-medium">2</td>
                                <td className="whitespace-nowrap px-6 py-4">Tochi Odinchazoihe</td>
                                <td className="whitespace-nowrap px-6 py-4">esther.dioka@gmail.com</td>
                                <td className="whitespace-nowrap px-6 py-4">08123456789</td>
                                <td className="whitespace-nowrap px-6 py-4">08/24</td>
                            </tr>
                            <tr className="font-medium">
                                <td className="whitespace-nowrap px-6 py-4 font-medium">3</td>
                                <td className="whitespace-nowrap px-6 py-4">Tochi Odinchazoihe</td>
                                <td className="whitespace-nowrap px-6 py-4">esther.dioka@gmail.com</td>
                                <td className="whitespace-nowrap px-6 py-4">08123456789</td>
                                <td className="whitespace-nowrap px-6 py-4">08/24</td>
                            </tr>
                            <tr className="font-medium">
                                <td className="whitespace-nowrap px-6 py-4 font-medium">4</td>
                                <td className="whitespace-nowrap px-6 py-4">Tochi Odinchazoihe</td>
                                <td className="whitespace-nowrap px-6 py-4">esther.dioka@gmail.com</td>
                                <td className="whitespace-nowrap px-6 py-4">08123456789</td>
                                <td className="whitespace-nowrap px-6 py-4">08/24</td>
                            </tr>
                            <tr className="font-medium">
                                <td className="whitespace-nowrap px-6 py-4 font-medium">5</td>
                                <td className="whitespace-nowrap px-6 py-4">Tochi Odinchazoihe</td>
                                <td className="whitespace-nowrap px-6 py-4">esther.dioka@gmail.com</td>
                                <td className="whitespace-nowrap px-6 py-4">08123456789</td>
                                <td className="whitespace-nowrap px-6 py-4">08/24</td>
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

export default CardExpiryTable