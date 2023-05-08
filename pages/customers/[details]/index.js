"use client";
import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import { useRouter } from "next/router";
import { useGetCustomerDetailQuery } from "@/services/api/routineSlice";
import Details from "@/components/customers/features";
import { PreLoader } from "@/components/UI/spinners";

const CustomerDetails = () => {
  const router = useRouter();
  const {
    query: { sort: id },
  } = router;
  const { isLoading, isSuccess, isError, data } = useGetCustomerDetailQuery(id);
  
  
  return (
    <Layout>
      {isLoading && <PreLoader/>}
      {isError  && "Error ecountered"}
      {isSuccess && <Details data={data.data[0]}/>}
    </Layout>
  );
};
const getLayout = (page) => <Layout>{page}</Layout>;

export { getLayout };
export default CustomerDetails;
