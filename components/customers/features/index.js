import React, {useState} from "react";
import Image from "next/image";
import { RiArrowDropDownLine } from "react-icons/ri";
import {
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Button,
} from "../../../components/UI/dropdown";
import CustomerSave from "./CustomerSave";
import CustomerSpend from "./CustomerSpend";
import CustomerLoan from "./CustomerLoan";
import ProfileInfo from "./ProfileInfo";
import Transaction from "./Transaction";

const Details = ({data}) => {
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
      <div className="md:flex items-center justify-between">
        <div className="flex items-center">
          <Image
            src={data.image? data.image : "https://res.cloudinary.com/greenmouse-tech/image/upload/v1680003695/Stash/profile_rl7x7s.jpg"}
            alt="banner"
            width={200}
            height={100}
            className="w-28 h-28 circle"
          />
          <div className="ml-6">
            <p className="text-2xl fw-500">{data.first_name} {data.last_name}</p>
            <p className="fs-500">{data?.products[0].role.name}</p>
            <p className="mt-3 fw-600 fs-400 text-primary">
              Account No: {data?.wallet[0].account_number}
            </p>
          </div>
        </div>
        <div className="flex gap-x-4 mt-6 md:mt-0 items-center">
          <div className="fw-500 border rounded border-gray-300">
            <Button className="bg-transparent text-md flex items-center font-normal shadow-none text-black capitalize">
              Reset
            </Button>
          </div>
          <div className="fw-500 border rounded border-gray-300">
            <Menu>
              <MenuHandler>
                <Button className="bg-transparent text-md flex items-center font-normal shadow-none text-black capitalize">
                  Restrict <RiArrowDropDownLine className="ml-3 text-2xl" />
                </Button>
              </MenuHandler>
              <MenuList>
                <div
                  className="my-3 outline-none fw-500 text-black"
                  role="button"
                >
                  Restrict from:
                </div>
                <MenuItem>Withdrawals</MenuItem>
                <MenuItem>Transfer</MenuItem>
              </MenuList>
            </Menu>
          </div>
          <div className="fw-500 border rounded border-gray-300">
            <Menu>
              <MenuHandler>
                <Button className="bg-transparent text-md flex items-center font-normal shadow-none text-black capitalize">
                  Flag <RiArrowDropDownLine className="ml-3 text-2xl" />
                </Button>
              </MenuHandler>
              <MenuList>
                <div
                  className="my-3 outline-none fw-500 text-black"
                  role="button"
                >
                  Flag from:
                </div>
                <MenuItem>Withdrawals</MenuItem>
                <MenuItem>Transfer</MenuItem>
              </MenuList>
            </Menu>
          </div>
        </div>
      </div>
      {/* 5 cols in flex */}
      <div className="w-full overflow-x-auto pb-4 scroll-pro">
        <div className="w-180 grid gap-y-12 grid-cols-1  md:grid-cols-2 lg:grid-cols-5 gap-x-10 mt-12">
          <div className="p-8 bg-white bord-b border-purple-700 rounded-t-lg">
            <p className="fw-500 text-gray-500">Main Balance</p>
            <p className="fw-600 text-xl mt-8 mb-4">₦ {data?.wallet[0].amount.balance.toFixed(2)}</p>
            <p className="ml-8 fw-600 text-gray-500">(70)</p>
          </div>
          <div className="p-8 bg-white bord-b border-orange-300 rounded-t-lg">
            <p className="fw-500 text-gray-500">Total Savings Balance</p>
            <p className="fw-600 text-xl mt-8 mb-4">₦ {data?.wallet[0].amount.fixed_savings.toFixed(2)}</p>
            <p className="ml-8 fw-600 text-gray-500">(70)</p>
          </div>
          <div className="p-8 bg-white bord-b border-green-500 rounded-t-lg">
            <p className="fw-500 text-gray-500">Fixed Savings Balance</p>
            <p className="fw-600 text-xl mt-8 mb-4">₦ {data?.wallet[0].amount.fixed_savings.toFixed(2)}</p>
            <p className="ml-8 fw-600 text-gray-500">(70)</p>
          </div>
          <div className="p-8 bg-white bord-b border-red-600 rounded-t-lg">
            <p className="fw-500 text-gray-500">Goal Savings Balance</p>
            <p className="fw-600 text-xl mt-8 mb-4">₦ {data?.wallet[0].amount.goal_savings.toFixed(2)}</p>
            <p className="ml-8 fw-600 text-gray-500">(70)</p>
          </div>
          <div className="p-8 bg-white bord-b border-red-600 rounded-t-lg">
            <p className="fw-500 text-gray-500">Loan Balance</p>
            <p className="fw-600 text-xl mt-8 mb-4">₦ {data?.wallet[0].amount.loans.toFixed(2)}</p>
            <p className="ml-8 fw-600 text-gray-500">(70)</p>
          </div>
        </div>
      </div>
      <div className="mt-12 lg:mt-16">
        <div className="w-full oveflow-x-auto">
          <ul className="flex w-full oveflow-x-auto text-gray-400 fs-500">
            <li
              className="nav-item px-5 lg:px-16 py-2 lg:py-4 cursor-pointer fs-800"
              style={open === 1 ? activeStyle : undefined}
              onClick={() => handleOpen(1)}
            >
              <span className="">Save</span>
            </li>
            <li
              className="nav-item px-5 lg:px-16 py-2 lg:py-4 cursor-pointer fs-800"
              style={open === 2 ? activeStyle : undefined}
              onClick={() => handleOpen(2)}
            >
              <span className="">Spend</span>
            </li>
            <li
              className="nav-item px-5 lg:px-16 py-2 lg:py-4 cursor-pointer fs-800"
              style={open === 3 ? activeStyle : undefined}
              onClick={() => handleOpen(3)}
            >
              <span className="">Loans</span>
            </li>
            <li
              className="nav-item px-5 lg:px-16 py-2 lg:py-4 cursor-pointer fs-800"
              style={open === 4 ? activeStyle : undefined}
              onClick={() => handleOpen(4)}
            >
              <span className="">Profile Info</span>
            </li>
            <li
              className="nav-item px-5 lg:px-16 py-2 lg:py-4 cursor-pointer fs-800"
              style={open === 5 ? activeStyle : undefined}
              onClick={() => handleOpen(5)}
            >
              <span className="">Transactions</span>
            </li>
          </ul>
        </div>
        <div className="bg-white min-h-96 p-8 rounded shade">
          {open === 1 ? <CustomerSave /> : ""}
          {open === 2 ? <CustomerSpend /> : ""}
          {open === 3 ? <CustomerLoan /> : ""}
          {open === 4 ? <ProfileInfo data={data}/> : ""}
          {open === 5 ? <Transaction /> : ""}
        </div>
      </div>
    </div>
  );
};

export default Details;
