import React from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { BsFilter, BsThreeDots } from "react-icons/bs";
import { FiEye } from "react-icons/fi";

export const BusinessTable = () => {
  return (
    <div>
      <div className="flex justify-end items-center">
        <div className="lg:flex gap-x-4 items-center text-end lg:text-left">
          <p className="flex mt-3 lg:mt-0 items-center border border-gray-400 px-3 cursor-pointer rounded-md fw-500">
            Export <AiOutlineDownload className="ml-1" />
          </p>
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
                User Name
              </th>
              <th
                scope="col"
                className="px-4 text-gray-400 align-middle py-3 whitespace-nowrap text-left"
              >
                Business Name
              </th>
              <th
                scope="col"
                className="px-4 text-gray-400 align-middle py-3 whitespace-nowrap text-left"
              >
                RC/RN
              </th>
              <th
                scope="col"
                className="px-4 text-gray-400 align-middle py-3 whitespace-nowrap text-left"
              >
                Registration Type
              </th>
              <th
                scope="col"
                className="px-4 text-gray-400 align-middle py-3 whitespace-nowrap text-left"
              >
                Nature of Business
              </th>
              <th
                scope="col"
                className="px-4 text-gray-400 align-middle py-3 whitespace-nowrap text-left"
              >
                E-mail of User
              </th>
              <th
                scope="col"
                className="px-4 text-gray-400 align-middle py-3 whitespace-nowrap text-left"
              >
                PN of User
              </th>
              <th
                scope="col"
                className="px-4 text-gray-400 align-middle py-3 whitespace-nowrap text-left"
              >
                Date
              </th>
              <th
                scope="col"
                className="px-4 text-gray-400 align-middle py-3 whitespace-nowrap text-left"
              >
                Status
              </th>
              <th
                scope="col"
                className="px-4 text-gray-400 align-middle py-3 whitespace-nowrap text-left"
              >
                Location
              </th>
              <th
                scope="col"
                className="px-4 text-gray-400 align-middle py-3 whitespace-nowrap text-left"
              >
                1st Director
              </th>
              <th
                scope="col"
                className="px-4 text-gray-400 align-middle py-3 whitespace-nowrap text-left"
              >
                1st Shareholder
              </th>
              <th
                scope="col"
                className="px-4 text-gray-400 align-middle py-3 whitespace-nowrap text-left"
              >
                1st Shareholding
              </th>
              <th
                scope="col"
                className="px-4 text-gray-400 align-middle py-3 whitespace-nowrap text-left"
              >
                2nd Director
              </th>
              <th
                scope="col"
                className="px-4 text-gray-400 align-middle py-3 whitespace-nowrap text-left"
              >
                2nd Shareholder
              </th>
              <th
                scope="col"
                className="px-4 text-gray-400 align-middle py-3 whitespace-nowrap text-left"
              >
                2nd Shareholding
              </th>
              <th
                scope="col"
                className="px-4 text-gray-400 align-middle py-3 whitespace-nowrap text-left"
              >
                3rd Director
              </th>
              <th
                scope="col"
                className="px-4 text-gray-400 align-middle py-3 whitespace-nowrap text-left"
              >
                3rd Shareholder
              </th>
              <th
                scope="col"
                className="px-4 text-gray-400 align-middle py-3 whitespace-nowrap text-left"
              >
                3rd Shareholding
              </th>
              <th
                scope="col"
                className="px-4 text-gray-400 align-middle py-3 whitespace-nowrap text-left"
              >
                POS
              </th>
              <th
                scope="col"
                className="px-4 text-gray-400 align-middle py-3 whitespace-nowrap text-left"
              >
                View Doc
              </th>
              <th
                scope="col"
                className="px-4 text-gray-400 align-middle py-3 whitespace-nowrap text-left"
              >
                Action
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
                Ginjabox Ltd
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                RC2000567
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                Limited Liability
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                Supermarket
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                ginjabox@gmail.com
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                08123456789
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                12/02/2023
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                <p className="px-3 py-1 rounded text-center bg-green-50 text-green-600 border border-green-500">
                  Requested
                </p>
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                Epe, Lagos
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                Opeyemi Badmus
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                Opeyemi Badmus
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                70%
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                Damilare Oyinloye
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                Damilare Oyinloye
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                20%
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                Elliot Obajana
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                Elliot Obajana
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                10%
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                YES
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                <p className="flex mt-3 lg:mt-0 items-center gap-x-1 border border-gray-400 px-3 cursor-pointer rounded-md fw-500">
                  View <FiEye className="ml-1" />
                </p>
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                <BsThreeDots />
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
                Ginjabox Ltd
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                RC2000567
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                Limited Liability
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                Supermarket
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                ginjabox@gmail.com
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                08123456789
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                12/02/2023
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                <p className="px-3 py-1 rounded text-center bg-green-50 text-green-600 border border-green-500">
                  Requested
                </p>
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                Epe, Lagos
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                Opeyemi Badmus
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                Opeyemi Badmus
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                70%
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                Damilare Oyinloye
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                Damilare Oyinloye
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                20%
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                Elliot Obajana
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                Elliot Obajana
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                10%
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                YES
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                <p className="flex mt-3 lg:mt-0 items-center gap-x-1 border border-gray-400 px-3 cursor-pointer rounded-md fw-500">
                  View <FiEye className="ml-1" />
                </p>
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                <BsThreeDots />
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
                Ginjabox Ltd
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                RC2000567
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                Limited Liability
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                Supermarket
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                ginjabox@gmail.com
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                08123456789
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                12/02/2023
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                <p className="px-3 py-1 rounded text-center bg-green-50 text-green-600 border border-green-500">
                  Requested
                </p>
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                Epe, Lagos
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                Opeyemi Badmus
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                Opeyemi Badmus
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                70%
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                Damilare Oyinloye
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                Damilare Oyinloye
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                20%
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                Elliot Obajana
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                Elliot Obajana
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                10%
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                YES
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                <p className="flex mt-3 lg:mt-0 items-center gap-x-1 border border-gray-400 px-3 cursor-pointer rounded-md fw-500">
                  View <FiEye className="ml-1" />
                </p>
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                <BsThreeDots />
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
                Ginjabox Ltd
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                RC2000567
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                Limited Liability
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                Supermarket
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                ginjabox@gmail.com
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                08123456789
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                12/02/2023
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                <p className="px-3 py-1 rounded text-center bg-green-50 text-green-600 border border-green-500">
                  Requested
                </p>
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                Epe, Lagos
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                Opeyemi Badmus
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                Opeyemi Badmus
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                70%
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                Damilare Oyinloye
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                Damilare Oyinloye
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                20%
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                Elliot Obajana
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                Elliot Obajana
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                10%
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                YES
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                <p className="flex mt-3 lg:mt-0 items-center gap-x-1 border border-gray-400 px-3 cursor-pointer rounded-md fw-500">
                  View <FiEye className="ml-1" />
                </p>
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                <BsThreeDots />
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
                Ginjabox Ltd
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                RC2000567
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                Limited Liability
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                Supermarket
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                ginjabox@gmail.com
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                08123456789
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                12/02/2023
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                <p className="px-3 py-1 rounded text-center bg-green-50 text-green-600 border border-green-500">
                  Requested
                </p>
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                Epe, Lagos
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                Opeyemi Badmus
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                Opeyemi Badmus
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                70%
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                Damilare Oyinloye
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                Damilare Oyinloye
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                20%
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                Elliot Obajana
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                Elliot Obajana
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                10%
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                YES
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                <p className="flex mt-3 lg:mt-0 items-center gap-x-1 border border-gray-400 px-3 cursor-pointer rounded-md fw-500">
                  View <FiEye className="ml-1" />
                </p>
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                <BsThreeDots />
              </td>
            </tr>
            <tr className="font-medium">
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                6
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                Odinchazoihe Kayode
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                Ginjabox Ltd
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                RC2000567
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                Limited Liability
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                Supermarket
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                ginjabox@gmail.com
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                08123456789
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                12/02/2023
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                <p className="px-3 py-1 rounded text-center bg-green-50 text-green-600 border border-green-500">
                  Requested
                </p>
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                Epe, Lagos
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                Opeyemi Badmus
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                Opeyemi Badmus
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                70%
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                Damilare Oyinloye
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                Damilare Oyinloye
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                20%
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                Elliot Obajana
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                Elliot Obajana
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                10%
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                YES
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                <p className="flex mt-3 lg:mt-0 items-center gap-x-1 border border-gray-400 px-3 cursor-pointer rounded-md fw-500">
                  View <FiEye className="ml-1" />
                </p>
              </td>
              <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
                <BsThreeDots />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
