import React from 'react'
import { BsFilter } from 'react-icons/bs'

const LogsTable = () => {
  return (
    <div>
        <div className="flex justify-end items-center">
        <div className="lg:flex gap-x-4 items-center text-end lg:text-left">
          <p className="flex mt-3 lg:mt-0 items-center border border-gray-400 px-3 cursor-pointer rounded-md fw-500">
            Filter <BsFilter className="ml-1" />
          </p>
        </div>
      </div>
      <div className="overflow-x-auto mt-8">
        <table className="min-w-full text-left">
          <thead className="font-medium">
            <tr>
              <th
                scope="col"
                className="px-4 text-gray-400 align-middle py-3 whitespace-nowrap text-left"
              >
                S/N
              </th>
              <th
                scope="col"
                className="px-4 text-gray-400 align-middle py-3 whitespace-nowrap text-left"
              >
                Name
              </th>
              <th
                scope="col"
                className="px-4 text-gray-400 align-middle py-3 whitespace-nowrap text-left"
              >
                D & T of T
              </th>
              <th
                scope="col"
                className="px-4 text-gray-400 align-middle py-3 whitespace-nowrap text-left"
              >
                Role
              </th>
              <th
                scope="col"
                className="px-4 text-gray-400 align-middle py-3 whitespace-nowrap text-left"
              >
                Action Taken
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="font-medium">
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                1
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                Odinchazoihe Kayode
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                Mar 02, 22 - 09:22 PM
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                Admin
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                Customer/profile-info/Paul Adigun/check name
              </td>
            </tr>
            <tr className="font-medium">
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                2
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                Odinchazoihe Kayode
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                Mar 02, 22 - 09:22 PM
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                Support
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                Customer/profile-info/Paul Adigun/check name
              </td>
            </tr>
            <tr className="font-medium">
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                3
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                Odinchazoihe Kayode
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                Mar 02, 22 - 09:22 PM
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                Account
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                Customer/profile-info/Paul Adigun/check name
              </td>
            </tr>
            <tr className="font-medium">
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                4
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                Odinchazoihe Kayode
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                Mar 02, 22 - 09:22 PM
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                Admin
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                Customer/profile-info/Paul Adigun/check name
              </td>
            </tr>
            <tr className="font-medium">
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                5
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                Odinchazoihe Kayode
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                Mar 02, 22 - 09:22 PM
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                Account
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                Customer/profile-info/Paul Adigun/check name
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default LogsTable