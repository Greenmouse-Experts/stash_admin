import { EmptyState1 } from "@/components/UI/emptyStates";
import React, { useState } from "react";
import CustomerGoalSavingsTable from "../tables/CusGoalSave";
import CustomerMainSavingTable from "../tables/CusMainSave";
import CustomerFixedSavingsTable from "../tables/CusFixedSave";
// import { BsFilter } from "react-icons/bs";

const CustomerSave = () => {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => {
    setOpen(open === value ? value : value);
  };
  const activeStyle = {
    borderBottom: "4px solid #6B5AED",
    color: "black",
    transition: "0.6s",
  };
  return (
    <div>
      {/* <EmptyState1 message="No Savings Data Yet" /> */}
      <div className="mt-1 lg:flex ">
        <div className="w-full lg:w-2/12 bg-gray-50 rounded">
          <ul className="text-gray-400 fs-500 p-4">
            <li
              className="nav-item py-2 lg:py-2 cursor-pointer fs-800"
              style={open === 1 ? activeStyle : undefined}
              onClick={() => handleOpen(1)}
            >
              <span className="">Goal Savings</span>
            </li>
            <li
              className="nav-item py-2 lg:py-2 cursor-pointer fs-800"
              style={open === 2 ? activeStyle : undefined}
              onClick={() => handleOpen(2)}
            >
              <span className="">Main Savings</span>
            </li>
            <li
              className="nav-item py-2 lg:py-2 cursor-pointer fs-800"
              style={open === 3 ? activeStyle : undefined}
              onClick={() => handleOpen(3)}
            >
              <span className="">Fixed Savings</span>
            </li>
            <li
              className="nav-item py-2 lg:py-2 cursor-pointer fs-800"
              style={open === 4 ? activeStyle : undefined}
              onClick={() => handleOpen(4)}
            >
              <span className="">SAYS</span>
            </li>
            <li
              className="nav-item py-2 lg:py-2 cursor-pointer fs-800"
              style={open === 5 ? activeStyle : undefined}
              onClick={() => handleOpen(5)}
            >
              <span className="">SAFO</span>
            </li>
            <li
              className="nav-item py-2 lg:py-2 cursor-pointer fs-800"
              style={open === 6 ? activeStyle : undefined}
              onClick={() => handleOpen(6)}
            >
              <span className="">SAFO</span>
            </li>
          </ul>
        </div>
        <div className="bg-white min-h-96 p-8 rounded lg:w-10/12">
          {open === 1 ? <CustomerGoalSavingsTable /> : ""}
          {open === 2 ? <CustomerMainSavingTable /> : ""}
          {open === 3 ? <CustomerFixedSavingsTable /> : ""}
          {open === 4 ? <CustomerMainSavingTable /> : ""}
          {open === 5 ? <CustomerMainSavingTable /> : ""}
        </div>
      </div>
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
