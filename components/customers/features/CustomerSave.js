import { EmptyState1 } from "@/components/UI/emptyStates";
import React from "react";
// import { BsFilter } from "react-icons/bs";

const CustomerSave = () => {
  return (
    <div>
        <EmptyState1 message="No Savings Data Yet"/>
      {/* <div>
        <div className="flex justify-end items-center">
          <p className="flex items-center border border-gray-400 px-3 ml-10 rounded-md fw-500">
            Filter <BsFilter className="ml-1" />
          </p>
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
                  Type
                </th>
                <th
                  scope="col"
                  className="px-4 text-gray-400 align-middle py-3 whitespace-nowrap text-left"
                >
                  Amount
                </th>
                <th
                  scope="col"
                  className="px-4 text-gray-400 align-middle py-3 whitespace-nowrap text-left"
                >
                  Tenor
                </th>
                <th
                  scope="col"
                  className="px-4 text-gray-400 align-middle py-3 whitespace-nowrap text-left"
                >
                  Start date
                </th>
                <th
                  scope="col"
                  className="px-4 text-gray-400 align-middle py-3 whitespace-nowrap text-left"
                >
                  End date
                </th>
                <th
                  scope="col"
                  className="px-4 text-gray-400 align-middle py-3 whitespace-nowrap text-left"
                >
                  Staus
                </th>
                <th
                  scope="col"
                  className="px-4 text-gray-400 align-middle py-3 whitespace-nowrap text-left"
                >
                  Interest rate
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="font-medium">
                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                  1
                </td>
                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                  Fixed
                </td>
                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                  10,000
                </td>
                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                  3 months
                </td>
                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                  Mar 02, 23 - 9:22
                </td>
                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                  Mar 02, 23 - 9:22
                </td>
                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                  <p className="px-3 py-1 rounded text-center bg-green-50 text-green-600 border border-green-500">
                    Withdrawn
                  </p>
                </td>
                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                  14%
                </td>
              </tr>
              <tr className="font-medium">
                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                  2
                </td>
                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                  Fixed
                </td>
                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                  10,000
                </td>
                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                  3 months
                </td>
                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                  Mar 02, 23 - 9:22
                </td>
                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                  Mar 02, 23 - 9:22
                </td>
                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                  <p className="px-3 py-1 rounded text-center bg-green-50 text-green-600 border border-green-500">
                    Withdrawn
                  </p>
                </td>
                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                  14%
                </td>
              </tr>
              <tr className="font-medium">
                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                  3
                </td>
                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                  Fixed
                </td>
                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                  10,000
                </td>
                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                  3 months
                </td>
                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                  Mar 02, 23 - 9:22
                </td>
                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                  Mar 02, 23 - 9:22
                </td>
                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                  <p className="px-3 py-1 rounded text-center bg-green-50 text-green-600 border border-green-500">
                    Withdrawn
                  </p>
                </td>
                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                  14%
                </td>
              </tr>
              <tr className="font-medium">
                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                  4
                </td>
                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                  Fixed
                </td>
                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                  10,000
                </td>
                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                  3 months
                </td>
                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                  Mar 02, 23 - 9:22
                </td>
                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                  Mar 02, 23 - 9:22
                </td>
                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                  <p className="px-3 py-1 rounded text-center bg-green-50 text-green-600 border border-green-500">
                    Withdrawn
                  </p>
                </td>
                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                  14%
                </td>
              </tr>
              <tr className="font-medium">
                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                  5
                </td>
                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                  Fixed
                </td>
                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                  10,000
                </td>
                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                  3 months
                </td>
                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                  Mar 02, 23 - 9:22
                </td>
                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                  Mar 02, 23 - 9:22
                </td>
                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                  <p className="px-3 py-1 rounded text-center bg-green-50 text-green-600 border border-green-500">
                    Withdrawn
                  </p>
                </td>
                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                  14%
                </td>
              </tr>
              <tr className="font-medium">
                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                  6
                </td>
                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                  Fixed
                </td>
                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                  10,000
                </td>
                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                  3 months
                </td>
                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                  Mar 02, 23 - 9:22
                </td>
                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                  Mar 02, 23 - 9:22
                </td>
                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                  <p className="px-3 py-1 rounded text-center bg-green-50 text-green-600 border border-green-500">
                    Withdrawn
                  </p>
                </td>
                <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                  14%
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div> */}
    </div>
  );
};

export default CustomerSave;
