import React from "react";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { BsDownload, BsFilter } from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";
import SpendersDataTable from "@/components/Spend/tables/SpenderData";

const SpendersDataPage = () => {
  return (
    <Layout>
      <div>
        <div className="flex lg:pt-6 mb-12 items-end">
          <div className="text-3xl fw-600">Spenders Data</div>
          <div className="flex text-gray-500 items-center lg:ml-7">
            <p className="fs-700">
              <Link href="/spend">Spend</Link>
            </p>
            <MdKeyboardArrowRight className="text-xl mx-5" />
            <p className="text-primary fw-500">Spenders Data</p>
          </div>
        </div>
        <div className="bg-white p-5 rounded shade">
          <SpendersDataTable filter exports/>
        </div>
      </div>
    </Layout>
  );
};
const getLayout = (page) => <Layout>{page}</Layout>;

export { getLayout };
export default SpendersDataPage;
