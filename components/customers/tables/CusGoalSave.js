import React, { useEffect, useMemo, useState } from 'react'
import { PreLoader } from '@/components/UI/spinners';
import Table from '@/components/UI/table';
import { FormatStatus, formatAsNgnMoney, formatDate } from '@/components/formats/formatItem';
import { useGetCustomerGoalSaveQuery, useLazyGetCustomerGoalSaveQuery } from '@/services/api/saveSlice'
import { Controller, useForm } from 'react-hook-form';
import { BsFilter } from 'react-icons/bs';
import Select from "react-select";
import { InputType, TextInput } from '@/components/UI/textInput';
import { Button } from '@/components/UI/button';

const CustomerGoalSavingsTable = ({ exports, filter, id }) => {

  const [page, setPage] = useState();
  const [save, setSave] = useState([]);
  const [isBusy, setIsBusy] = useState(false);
  const [pageId, setPageId] = useState();
  const [queryModal, setQueryModal] = useState(false);
  const [getSave] = useLazyGetCustomerGoalSaveQuery();

  const fetchSave = async (page) => {
    setIsBusy(true);
    const getResponse = await getSave(id, page);

    if (getResponse?.data?.data) {
      setSave(getResponse.data.data);
      setPageId(getResponse.data);
    }
    setIsBusy(false);
  };
  useEffect(() => {
    fetchSave(page);
  }, []);

  const NextPage = () => {
    fetchSave(pageId.next_cursor);
  };
  const PrevPage = () => {
    fetchSave(pageId.next_cursor);
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
        Header: "Title",
        accessor: "title",
        Cell: (props) => <p className='capitalize'>{props.value}</p>,
      },
      {
        Header: "Amount",
        accessor: "amount",
        Cell: (props) => formatAsNgnMoney(props.value),
      },
      {
        Header: "Tenor",
        accessor: "period",
        Cell: (props) => `${props.value} months`,
      },
      {
        Header: "Start Date",
        accessor: "start_date",
        Cell: (props) => formatDate(props.value),
      },
      {
        Header: "End Date",
        accessor: "end_date",
        Cell: (props) => formatDate(props.value),
      },
      {
        Header: "Status",
        accessor: "status",
        Cell: (props) => (
          <div>
            {props.value ? FormatStatus["Active"] : FormatStatus["Inactive"]}
          </div>
        ),
      },
      {
        Header: "Interest Rate",
        accessor: "interest_rate",
        Cell: (props) => `${props.value}%`,
      },
    ], // eslint-disable-next-line
    []
  );

  const list = useMemo(() => save, [save]);

  return (
    <div className="min-h-[300px]">
      <div className='flex gap-x-6'>
        <div className='flex gap-x-2 items-center fw-600'>
          <p className='h-4 w-8 bg-primary'></p>
          <p>Total Amount: <span>{pageId && formatAsNgnMoney(pageId.details.total_amount)}</span></p>
        </div>
        <div className='flex gap-x-2 items-center fw-600'>
          <p className='h-4 w-8 bg-[#5CB189]'></p>
          <p>Total Count: <span>{pageId && pageId.details.count}</span></p>
        </div>
      </div>
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
  )
}

export default CustomerGoalSavingsTable