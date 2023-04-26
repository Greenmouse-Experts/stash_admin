import React from "react";
import Layout from "@/components/layout/Layout";
import { PosTable } from "@/components/pos/table/PosTable";

const PosPage = () => {
  return (
    <Layout>
      <div className="w-full">
        <div className="text-3xl fw-600">POS</div>
        <div className="mt-12">
          <div className="w-full grid grid-cols-2 jusitfy-between items-end">
            <div>
              <p className="px-6 fw-500">Requests</p>
              <p className="mt-2 w-24 ml-3 w-16 lg:w-24 h-1 bg-primary rounded"></p>
            </div>
            <div className="flex mb-1 gap-x-3 lg:gap-x-8 justify-end">
                <div className="px-2 flex items-center gap-x-1 h-8 bg-white rounded-md shadow">
                    <p className="fs-200 text-gray-400">Requested</p>
                    <p className="fs-400 fw-600"> 1,200</p>
                </div>
                <div className="px-2 flex items-center gap-x-1 h-8 bg-white rounded-md shadow">
                    <p className="fs-200 text-gray-400">Deployed</p>
                    <p className="fs-400 fw-600"> 1,230</p>
                </div>
                <div className="px-2 flex items-center gap-x-1 h-8 bg-white rounded-md shadow">
                    <p className="fs-200 text-gray-400">Active</p>
                    <p className="fs-400 fw-600"> 1,100</p>
                </div>
                <div className="px-2 flex items-center gap-x-1 h-8 bg-white rounded-md shadow">
                    <p className="fs-200 text-gray-400">Inactive</p>
                    <p className="fs-400 fw-600"> 1,000</p>
                </div>
                <div className="px-2 flex items-center gap-x-1 h-8 bg-white rounded-md shadow">
                    <p className="fs-200 text-gray-400">Retrived</p>
                    <p className="fs-400 fw-600"> 1,000</p>
                </div>
            </div>
          </div>
          <div className="p-5 pt-10 bg-white shadow"><PosTable/></div>
        </div>
      </div>
    </Layout>
  );
};

const getLayout = (page) => <Layout>{page}</Layout>;

export { getLayout };
export default PosPage;
