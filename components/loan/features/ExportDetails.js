import React from 'react'
import Select from "react-select";
import { Controller, useForm } from 'react-hook-form'
import { InputType, TextInput } from '@/components/UI/textInput'
import { Button } from '@/components/UI/button';
import {  useCSVDownloader } from 'react-papaparse';
import { useGetExportDataQuery } from '@/services/api/loanSlice';


const ExportDetails = () => {
    const { data: repays, isLoading } = useGetExportDataQuery();

  const { CSVDownloader } =  useCSVDownloader();
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
        { value: "SALAD", label: "Salad Loans" },
        { value: "KOLLECT", label: "Kollect Loans" },
      ];
      const filterStatus = [
        { value: "all", label: "All" },
        { value: "disbursed", label: "Disbursed" },
        { value: "pending", label: "Pending" },
        { value: "under-review", label: "Reveiwing" },
      ];
  return (
    <div>
        <div className='lg:flex gap-x-24'>
            <div className='w-6/12'>
            <div className="p-6 right-0 lg:w-full bg-white">
            <div className="my-6">
              <form>
                <div className="lg:grid grid-cols-2 gap-x-4">
                  <div>
                    <label className="fw-500 fs-500 text-gray-500">Loan Type</label>
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
                          label="Organisation"
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
                  <div className='mt-4'>
                 <label className="fw-500 fs-500 text-gray-500">Date</label>
                    <input type="date" className="w-full p-2 rounded border border-gray-400"/>
                 </div>
                </div>
              </form>
            </div>
            <div className="flex justify-end">
              <Button
                title="Appy Filter"
                altClassname="py-2 bg-primary rounded text-white px-4"
              />
            </div>
          </div>
          <div>
          <CSVDownloader
      filename={'Download Repayment Data'}
      data={repays?.data}
    >
      <p className='lg:w-11/12 mx-auto text-white fw-500 lg:tex-lg rounded-lg text-center btn-primary py-2 lg:py-3'>Download Loan Data</p>
    </CSVDownloader>
          </div>
            </div>
            <div className='lg:w-6/12'>
                <div className='bg-gray-50 h-[300px] w-10/12 mx-auto'>

                </div>
                <div className='lg:w-10/12 mx-auto mt-6'>
                    <Button title='Upload Loan Data'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ExportDetails