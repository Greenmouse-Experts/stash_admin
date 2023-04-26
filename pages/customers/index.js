import React from "react";
import CustomersTable from "@/components/customers/tables/Customers";
import Layout from "@/components/layout/Layout";
import { BsFilter } from "react-icons/bs";

const CustomerPage = () => {
  return (
    <Layout>
      <div>
        <div className="flex justify-between items-center">
          <div className="text-3xl fw-600">Customers</div>
          <div className="flex items-center gap-x-4 justify-end">
                <div>
                  <p className="fw-500 fs-400 text-primary">Referral Summary</p>
                </div>
                <div className="px-4 ml-6 flex items-center gap-x-2 h-8 bg-white rounded-md shadow">
                    <p className="fs-400 text-gray-500">Qualified</p>
                    <p className="fs-600 fw-600"> 1,200</p>
                </div>
                <div className="px-4 flex items-center gap-x-2 h-8 bg-white rounded-md shadow">
                    <p className="fs-400 text-gray-500">Unqualified</p>
                    <p className="fs-600 fw-600"> 1,230</p>
                </div>
                <div className="px-4 flex items-center gap-x-2 h-8 bg-white rounded-md shadow">
                    <p className="fs-400 text-gray-500">Bonus</p>
                    <p className="fs-600 fw-600"> 1,100</p>
                </div>
                <div className="px-4 flex items-center gap-x-2 h-8 bg-white rounded-md shadow">
                    <p className="fs-400 text-gray-500">Paid Bonus</p>
                    <p className="fs-600 fw-600"> 1,000</p>
                </div>
            </div>
        </div>
        <div className="mt-12 w-full p-8 bg-white shade rounded-md">
          <div className="flex items-center justify-end">
            <p className="flex items-center border border-gray-400 px-3 ml-10 rounded-md fw-500">
              Filter <BsFilter className="ml-1" />
            </p>
          </div>
          <div>
            <CustomersTable />
          </div>
        </div>
      </div>
    </Layout>
  );
};
const getLayout = (page) => <Layout>{page}</Layout>;

export { getLayout };
export default CustomerPage;
