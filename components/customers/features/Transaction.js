import React from "react";
// import TransactionTable from "../tables/Transaction";
import { EmptyState1 } from "@/components/UI/emptyStates";

const Transaction = () => {
  return (
    <div>
      <EmptyState1 message="No Transactions Data Yet"/>
      {/* <div>
        <div className="flex items-center gap-x-4">
          <div className="flex items-center gap-x-2">
            <p className="bg-primary w-6 h-3"></p>
            <p className="fs-500 fw-500">Total Inflow: N5,000,000 (38)</p>
          </div>
          <div className="flex items-center gap-x-2">
            <p className="bg-red-500 w-6 h-3"></p>
            <p className="fs-500">Total Outflow: N4,000,000 (38)</p>
          </div>
        </div>
        <div className="flex justify-end items-center">
          
        </div>
      </div>
      <div>
        <TransactionTable/>
      </div> */}
    </div>
  );
};

export default Transaction;
