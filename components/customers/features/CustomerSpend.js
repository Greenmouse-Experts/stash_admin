import { EmptyState1 } from "@/components/UI/emptyStates";
import { useGetCustomerSpendQuery } from "@/services/api/customerSlice";
import React from "react";
import CustomersSpendTable from "../tables/CustomerSpend";
import { PreLoader } from "@/components/UI/spinners";

const CustomerSpend = ({id}) => {

  const {data, isLoading, isError} = useGetCustomerSpendQuery(id)
  return (
    <div className="min-h-[300px] ">
      {isLoading && <PreLoader />}
      {!isLoading && !data?.data.length && (
        <EmptyState1 message="No Spend Data Yet" />
      )}
      {
        data  && !!data?.data.length && <CustomersSpendTable data={data}/>
      }
    </div>
  );
};

export default CustomerSpend;
