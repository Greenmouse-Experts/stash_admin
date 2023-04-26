import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import {
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Button,
} from "../../UI/dropdown";

const LoanInsuranceTable = () => {
  return (
    <div className="overflow-x-scroll mt-8">
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
              Email
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
              Amount requested
            </th>
            <th
              scope="col"
              className="px-4 text-gray-400 align-middle py-3 whitespace-nowrap text-left"
            >
              Document
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
              Amount approved
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
              Odinchazoihekayode@gmail.com
            </td>
            <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
              KOLLECT
            </td>
            <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
              100,000,000
            </td>
            <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
              <p className="text-primary underline fw-600">View</p>
            </td>
            <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
              <p className="px-3 py-1 rounded bg-green-50 text-green-600 border border-green-500">
                Approved
              </p>
            </td>
            <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
              4,000,200
            </td>
            <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
              Mar 02, 23 - 9:22
            </td>
            <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-center">
              <Menu>
                <MenuHandler>
                  <Button className="bg-transparent px-0 mx-0 hover:shadow-none text-md flex items-center font-normal shadow-none text-black capitalize">
                    <BsThreeDotsVertical className="text-xl" />
                  </Button>
                </MenuHandler>
                <MenuList>
                  <MenuItem>Accept</MenuItem>
                  <MenuItem>Decline</MenuItem>
                  <MenuItem>Review</MenuItem>
                </MenuList>
              </Menu>
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
              Odinchazoihekayode@gmail.com
            </td>
            <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
              SALAD
            </td>
            <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
              100,000,000
            </td>
            <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
              <p className="text-primary underline fw-600">View</p>
            </td>
            <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
              <p className="px-3 py-1 rounded bg-green-50 text-green-600 border border-green-500">
                Approved
              </p>
            </td>
            <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
              4,000,200
            </td>
            <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
              Mar 02, 23 - 9:22
            </td>
            <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-center">
              <Menu>
                <MenuHandler>
                  <Button className="bg-transparent px-0 mx-0 hover:shadow-none text-md flex items-center font-normal shadow-none text-black capitalize">
                    <BsThreeDotsVertical className="text-xl" />
                  </Button>
                </MenuHandler>
                <MenuList>
                  <MenuItem>Accept</MenuItem>
                  <MenuItem>Decline</MenuItem>
                  <MenuItem>Review</MenuItem>
                </MenuList>
              </Menu>
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
              Odinchazoihekayode@gmail.com
            </td>
            <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
              SALAD
            </td>
            <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
              100,000,000
            </td>
            <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
              <p className="text-primary underline fw-600">View</p>
            </td>
            <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
              <p className="px-3 py-1 rounded bg-red-50 text-red-600 border border-red-500">
                Declined
              </p>
            </td>
            <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
              4,000,200
            </td>
            <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
              Mar 02, 23 - 9:22
            </td>
            <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-center">
              <Menu>
                <MenuHandler>
                  <Button className="bg-transparent px-0 mx-0 hover:shadow-none text-md flex items-center font-normal shadow-none text-black capitalize">
                    <BsThreeDotsVertical className="text-xl" />
                  </Button>
                </MenuHandler>
                <MenuList>
                  <MenuItem>Accept</MenuItem>
                  <MenuItem>Decline</MenuItem>
                  <MenuItem>Review</MenuItem>
                </MenuList>
              </Menu>
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
              Odinchazoihekayode@gmail.com
            </td>
            <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
              KOLLECT
            </td>
            <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
              100,000,000
            </td>
            <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
              <p className="text-primary underline fw-600">View</p>
            </td>
            <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
              <p className="px-3 py-1 rounded bg-yellow-50 text-yellow-600 border border-yellow-500">
                Pending
              </p>
            </td>
            <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
              4,000,200
            </td>
            <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
              Mar 02, 23 - 9:22
            </td>
            <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-center">
              <Menu>
                <MenuHandler>
                  <Button className="bg-transparent px-0 mx-0 hover:shadow-none text-md flex items-center font-normal shadow-none text-black capitalize">
                    <BsThreeDotsVertical className="text-xl" />
                  </Button>
                </MenuHandler>
                <MenuList>
                  <MenuItem>Accept</MenuItem>
                  <MenuItem>Decline</MenuItem>
                  <MenuItem>Review</MenuItem>
                </MenuList>
              </Menu>
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
              Odinchazoihekayode@gmail.com
            </td>
            <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
              KOLLECT
            </td>
            <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
              100,000,000
            </td>
            <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
              <p className="text-primary underline fw-600">View</p>
            </td>
            <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
              <p className="px-3 py-1 rounded bg-green-50 text-green-600 border border-green-500">
                Approved
              </p>
            </td>
            <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
              4,000,200
            </td>
            <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
              Mar 02, 23 - 9:22
            </td>
            <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-center">
              <Menu>
                <MenuHandler>
                  <Button className="bg-transparent px-0 mx-0 hover:shadow-none text-md flex items-center font-normal shadow-none text-black capitalize">
                    <BsThreeDotsVertical className="text-xl" />
                  </Button>
                </MenuHandler>
                <MenuList>
                  <MenuItem>Accept</MenuItem>
                  <MenuItem>Decline</MenuItem>
                  <MenuItem>Review</MenuItem>
                </MenuList>
              </Menu>
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
              Odinchazoihekayode@gmail.com
            </td>
            <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
              KOLLECT
            </td>
            <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
              100,000,000
            </td>
            <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
              <p className="text-primary underline fw-600">View</p>
            </td>
            <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
              <p className="px-3 py-1 rounded bg-green-50 text-green-600 border border-green-500">
                Approved
              </p>
            </td>
            <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
              4,000,200
            </td>
            <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
              Mar 02, 23 - 9:22
            </td>
            <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-center">
              <Menu>
                <MenuHandler>
                  <Button className="bg-transparent px-0 mx-0 hover:shadow-none text-md flex items-center font-normal shadow-none text-black capitalize">
                    <BsThreeDotsVertical className="text-xl" />
                  </Button>
                </MenuHandler>
                <MenuList>
                  <MenuItem>Accept</MenuItem>
                  <MenuItem>Decline</MenuItem>
                  <MenuItem>Review</MenuItem>
                </MenuList>
              </Menu>
            </td>
          </tr>
          <tr className="font-medium">
            <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
              7
            </td>
            <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
              Odinchazoihe Kayode
            </td>
            <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
              Odinchazoihekayode@gmail.com
            </td>
            <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
              SALAD
            </td>
            <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
              100,000,000
            </td>
            <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
              <p className="text-primary underline fw-600">View</p>
            </td>
            <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
              <p className="px-3 py-1 rounded bg-green-50 text-green-600 border border-green-500">
                Approved
              </p>
            </td>
            <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
              4,000,200
            </td>
            <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
              Mar 02, 23 - 9:22
            </td>
            <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-center">
              <Menu>
                <MenuHandler>
                  <Button className="bg-transparent px-0 mx-0 hover:shadow-none text-md flex items-center font-normal shadow-none text-black capitalize">
                    <BsThreeDotsVertical className="text-xl" />
                  </Button>
                </MenuHandler>
                <MenuList>
                  <MenuItem>Accept</MenuItem>
                  <MenuItem>Decline</MenuItem>
                  <MenuItem>Review</MenuItem>
                </MenuList>
              </Menu>
            </td>
          </tr>
          <tr className="font-medium">
            <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
              8
            </td>
            <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
              Odinchazoihe Kayode
            </td>
            <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
              Odinchazoihekayode@gmail.com
            </td>
            <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
              SALAD
            </td>
            <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
              100,000,000
            </td>
            <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
              <p className="text-primary underline fw-600">View</p>
            </td>
            <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
              <p className="px-3 py-1 rounded bg-red-50 text-red-600 border border-red-500">
                Declined
              </p>
            </td>
            <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
              4,000,200
            </td>
            <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
              Mar 02, 23 - 9:22
            </td>
            <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-center">
              <Menu>
                <MenuHandler>
                  <Button className="bg-transparent px-0 mx-0 hover:shadow-none text-md flex items-center font-normal shadow-none text-black capitalize">
                    <BsThreeDotsVertical className="text-xl" />
                  </Button>
                </MenuHandler>
                <MenuList>
                  <MenuItem>Accept</MenuItem>
                  <MenuItem>Decline</MenuItem>
                  <MenuItem>Review</MenuItem>
                </MenuList>
              </Menu>
            </td>
          </tr>
          <tr className="font-medium">
            <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
              9
            </td>
            <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
              Odinchazoihe Kayode
            </td>
            <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
              Odinchazoihekayode@gmail.com
            </td>
            <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
              SALAD
            </td>
            <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
              100,000,000
            </td>
            <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
              <p className="text-primary underline fw-600">View</p>
            </td>
            <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
              <p className="px-3 py-1 rounded bg-green-50 text-green-600 border border-green-500">
                Approved
              </p>
            </td>
            <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
              4,000,200
            </td>
            <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
              Mar 02, 23 - 9:22
            </td>
            <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-center">
              <Menu>
                <MenuHandler>
                  <Button className="bg-transparent px-0 mx-0 hover:shadow-none text-md flex items-center font-normal shadow-none text-black capitalize">
                    <BsThreeDotsVertical className="text-xl" />
                  </Button>
                </MenuHandler>
                <MenuList>
                  <MenuItem>Accept</MenuItem>
                  <MenuItem>Decline</MenuItem>
                  <MenuItem>Review</MenuItem>
                </MenuList>
              </Menu>
            </td>
          </tr>
          <tr className="font-medium">
            <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
              10
            </td>
            <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
              Odinchazoihe Kayode
            </td>
            <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
              Odinchazoihekayode@gmail.com
            </td>
            <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
              SALAD
            </td>
            <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
              100,000,000
            </td>
            <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
              <p className="text-primary underline fw-600">View</p>
            </td>
            <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
              <p className="px-3 py-1 rounded bg-red-50 text-red-600 border border-red-500">
                Declined
              </p>
            </td>
            <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
              4,000,200
            </td>
            <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">
              Mar 02, 23 - 9:22
            </td>
            <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-center">
              <Menu>
                <MenuHandler>
                  <Button className="bg-transparent px-0 mx-0 hover:shadow-none text-md flex items-center font-normal shadow-none text-black capitalize">
                    <BsThreeDotsVertical className="text-xl" />
                  </Button>
                </MenuHandler>
                <MenuList>
                  <MenuItem>Accept</MenuItem>
                  <MenuItem>Decline</MenuItem>
                  <MenuItem>Review</MenuItem>
                </MenuList>
              </Menu>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default LoanInsuranceTable;
