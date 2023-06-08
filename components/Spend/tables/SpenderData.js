import React, { useState, useEffect, useMemo } from "react";
import { useLazyGetAllSpendQuery } from "@/services/api/spendSlice";
import {
  FormatStatus,
  formatAsNgnMoney,
  formatDate,
} from "@/components/formats/formatItem";
import Table from "@/components/UI/table";
import Select from "react-select";
import { BsFilter } from "react-icons/bs";
import { Button } from "@/components/UI/button";
import { Controller, useForm } from "react-hook-form";
import { InputType, TextInput } from "@/components/UI/textInput";
import { PreLoader } from "@/components/UI/spinners";
import Image from "next/image";
import { Initials } from "@/components/UI/tableInitials";
import Link from "next/link";

const SpendersDataTable = ({ exports, filter }) => {
  const [page, setPage] = useState("6477774ed625076ec02bd451");
  const [spend, setSpend] = useState([]);
  const [isBusy, setIsBusy] = useState(false);
  const [pageId, setPageId] = useState();
  const [queryModal, setQueryModal] = useState(false);
  const [getSpend] = useLazyGetAllSpendQuery();

  const fetchSpend = async (page) => {
    setIsBusy(true);
    const getResponse = await getSpend(page);

    if (getResponse?.data?.data) {
      setSpend(getResponse.data.data.data);
      setPageId(getResponse.data.data);
    }
    setIsBusy(false);
  };
  useEffect(() => {
    fetchSpend(page);
  }, []);

  const NextPage = () => {
    fetchSpend(pageId.next_cursor);
  };
  const PrevPage = () => {
    fetchSpend(pageId.next_cursor);
  };

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      type: "",
      status: "",
      amount: "",
      email: "",
      date: "",
    },
  });
  const filterTypes = [
    { value: "all", label: "All Types" },
    { value: "airtime", label: "Airtime" },
    { value: "data", label: "Data" },
    { value: "cabletv", label: "Cable Tv" },
    { value: "internet", label: "Internet" },
    { value: "electricity", label: "Electricity" },
  ];
  const filterStatus = [
    { value: "all", label: "All" },
    { value: "success", label: "Success" },
    { value: "pending", label: "Pending" },
    { value: "failed", label: "Failed" },
  ];

  const columns = useMemo(
    () => [
      {
        Header: "S/N",
        accessor: (row, index) => index + 1, //RDT provides index by default
      },
      {
        Header: "Name",
        accessor: "user.first_name",
        Cell: (row) => (
          <Link
            href={{
              pathname: `/customers/${row?.row.original.user_id}`,
              query: {
                sort: row?.row.original.user_id,
              },
            }}
            className="flex items-center gap-x-2"
          >
            {row?.row.original.user.image ? (
              <Image
                src={row?.row.original.user.image}
                alt="profile"
                width={100}
                height={100}
                className=" w-7 h-7 circle"
              />
            ) : (
              <Initials
                firstName={row.value}
                lastName={row?.row.original.user.last_name}
              />
            )}
            <p className="cursor-pointer">
              {row.value} {row?.row.original.user.last_name}
            </p>
          </Link>
        ),
      },
      {
        Header: "Email",
        accessor: "user.email",
      },
      {
        Header: "Amount",
        accessor: "amount",
        Cell: (props) => formatAsNgnMoney(props.value),
      },
      {
        Header: "Type",
        accessor: "type",
        Cell: (props) => <p className="capitalize">{props.value}</p>,
      },
      {
        Header: "Status",
        accessor: "status",
        Cell: (props) => FormatStatus[props.value],
      },
      {
        Header: "Date",
        accessor: "createdAt",
        Cell: (props) => formatDate(props.value),
      },
    ], // eslint-disable-next-line
    []
  );

  const list = useMemo(() => spend, [spend]);

  return (
    <div className="min-h-[300px]">
      <div className="relative md:flex justify-end mb-5 items-center text-end md:text-left">
        {exports && (
          <p className="flex mt-6 md:mt-0 items-center border border-gray-400 px-3 py-1 ml-10 rounded-md fw-500">
            Export <BsFilter className="ml-1" />
          </p>
        )}
        {filter && (
          <p
            className="flex cursor-pointer mt-6 md:mt-0 items-center border border-gray-400 px-3 py-1 ml-10 rounded-md fw-500"
            onClick={() => setQueryModal(!queryModal)}
          >
            Filter <BsFilter className="ml-1" />
          </p>
        )}
        {queryModal && (
          <div className="shade p-6 absolute top-[50px] right-0 lg:w-[400px] bg-white">
            <p className="fw-500">FILTER</p>
            <div className="my-6">
              <form>
                <div className="lg:grid grid-cols-2 gap-x-4">
                  <div>
                    <label className="fw-500 fs-500 text-gray-500">Spend Type</label>
                    <Controller
                      control={control}
                      name="type"
                      render={({
                        field: { onChange, onBlur, value, name, ref },
                      }) => (
                        <Select
                          options={filterTypes}
                          onChange={onChange}
                          isMulti={false}
                          onBlur={onBlur}
                          value={value}
                          name={name}
                          ref={ref}
                        />
                      )}
                    />
                  </div>
                  <div>
                    <label className="fw-500 fs-500 text-gray-500">
                      Status
                    </label>
                    <Controller
                      control={control}
                      name="status"
                      render={({
                        field: { onChange, onBlur, value, name, ref },
                      }) => (
                        <Select
                          options={filterStatus}
                          onChange={onChange}
                          isMulti={false}
                          onBlur={onBlur}
                          value={value}
                          name={name}
                          ref={ref}
                          className="w-full"
                        />
                      )}
                    />
                  </div>
                </div>
                <div className="mt-2 lg:grid grid-cols-2 gap-x-4">
                  <div>
                    <Controller
                      name="amount"
                      control={control}
                      render={({ field }) => (
                        <TextInput
                          label="Amount"
                          error={errors.user?.message}
                          type={InputType.number}
                          labelClassName="fw-500 fs-500 text-gray-500"
                          altClassName="bg-white w-full p-2 outline-none lg:px-3 rounded"
                          divClassName="bg-white flex items-center  border border-gray-400 mt-2 rounded"
                          {...field}
                        />
                      )}
                    />
                  </div>
                  <div>
                    <Controller
                      name="email"
                      control={control}
                      render={({ field }) => (
                        <TextInput
                          label="Customer Email"
                          error={errors.user?.message}
                          type={InputType.text}
                          labelClassName="fw-500 fs-500 text-gray-500"
                          altClassName="bg-white w-full p-2 outline-none lg:px-3 rounded"
                          divClassName="bg-white flex items-center  border border-gray-400 mt-2 rounded"
                          {...field}
                        />
                      )}
                    />
                  </div>
                </div>
                <div className="mt-2 lg:grid grid-cols-2 gap-x-4">
                 <div>
                 <label className="fw-500 fs-500 text-gray-500">Date</label>
                    <input type="date" className="w-full p-2 rounded border border-gray-400"/>
                 </div>
                </div>
              </form>
            </div>
            <div className="flex justify-between">
              <Button
                title="Cancel"
                onClick={() => setQueryModal(false)}
                altClassname="py-2 px-4 border border-gray-400 rounded"
              />
              <Button
                title="Appy Filter"
                altClassname="py-2 bg-primary rounded text-white px-4"
              />
            </div>
          </div>
        )}
      </div>
      {isBusy && <div><PreLoader/></div>}
      {!isBusy && (
        <Table
          columns={columns}
          data={list}
          next={NextPage}
          prev={PrevPage}
          nofilter
        />
      )}
    </div>
  );
};

export default SpendersDataTable;
