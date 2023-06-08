import { EmptyState1 } from "@/components/UI/emptyStates";
import React, { useState } from "react";
import CustomerGoalSavingsTable from "../tables/CusGoalSave";
import CustomerMainSavingTable from "../tables/CusMainSave";
import CustomerFixedSavingsTable from "../tables/CusFixedSave";
import CustomerBusinessSavingsTable from "../tables/CusBusinessSave";
import CustomerSafoTable from "../tables/CusSafo";
import CustomerSaysTable from "../tables/CusSays";
// import { BsFilter } from "react-icons/bs";

const CustomerSave = ({id}) => {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => {
    setOpen(open === value ? value : value);
  };
  const activeStyle = {
    background: "#6B5AED",
    color: "white",
    paddingLeft: "8px",
    fontWeight: 500,
    transition: "0.6s",
  };
  return (
    <div>
      {/* <EmptyState1 message="No Savings Data Yet" /> */}
      <div className="mt-1 lg:flex ">
        <div className="w-full lg:w-2/12 bg-gray-50 rounded">
          <ul className="text-gray-400 fs-500 p-4 mt-4">
            <li
              className="nav-item py-2 lg:py-2 rounded-lg cursor-pointer fs-600 mb-2"
              style={open === 1 ? activeStyle : undefined}
              onClick={() => handleOpen(1)}
            >
              <span className="">Goal Savings</span>
            </li>
            <li
              className="nav-item py-2 lg:py-2 rounded-lg cursor-pointer fs-600 mb-2"
              style={open === 2 ? activeStyle : undefined}
              onClick={() => handleOpen(2)}
            >
              <span className="">Fixed Savings</span>
            </li>
            <li
              className="nav-item py-2 lg:py-2 rounded-lg cursor-pointer fs-600 mb-2"
              style={open === 3 ? activeStyle : undefined}
              onClick={() => handleOpen(3)}
            >
              <span className="">Business Savings</span>
            </li>
            <li
              className="nav-item py-2 lg:py-2 rounded-lg cursor-pointer fs-600 mb-2"
              style={open === 4 ? activeStyle : undefined}
              onClick={() => handleOpen(4)}
            >
              <span className="">SAYS</span>
            </li>
            <li
              className="nav-item py-2 lg:py-2 rounded-lg cursor-pointer fs-600 mb-2"
              style={open === 5 ? activeStyle : undefined}
              onClick={() => handleOpen(5)}
            >
              <span className="">SAFO</span>
            </li>
            <li
              className="nav-item py-2 lg:py-2 rounded-lg cursor-pointer fs-600 mb-2"
              style={open === 6 ? activeStyle : undefined}
              onClick={() => handleOpen(6)}
            >
              <span className="">Main Savings</span>
            </li>
          </ul>
        </div>
        <div className="bg-white min-h-96 p-8 rounded lg:w-10/12">
          {open === 1 ? <CustomerGoalSavingsTable id={id} filter/> : ""}
          {open === 2 ? <CustomerFixedSavingsTable /> : ""}
          {open === 3 ? <CustomerBusinessSavingsTable /> : ""}
          {open === 4 ? <CustomerSaysTable /> : ""}
          {open === 5 ? <CustomerSafoTable /> : ""}
          {open === 6 ? <CustomerMainSavingTable /> : ""}
        </div>
      </div>
    </div>
  );
};

export default CustomerSave;
