// import React from 'react'
// import { BsFilter } from 'react-icons/bs'

// const DeactivatedUser = () => {
//   return (
//     <div>
//         <div className='flex justify-end items-center'>
//             <p className='flex items-center border border-gray-400 px-3 ml-10 rounded-md fw-500'>Filter <BsFilter className='ml-1'/></p>
//         </div>
//         <div className='overflow-x-auto mt-8'>
//             <table className="min-w-full text-left">
//                 <thead className="font-medium">
//                     <tr>
//                         <th scope="col" className="px-4 text-gray-400 align-middle py-3 whitespace-nowrap text-left">S/N</th>
//                         <th scope="col" className="px-4 text-gray-400 align-middle py-3 whitespace-nowrap text-left">Name</th>
//                         <th scope="col" className="px-4 text-gray-400 align-middle py-3 whitespace-nowrap text-left">Email</th>
//                         <th scope="col" className="px-4 text-gray-400 align-middle py-3 whitespace-nowrap text-left">Phone No</th>
//                         <th scope="col" className="px-4 text-gray-400 align-middle py-3 whitespace-nowrap text-left">Date</th>
//                         <th scope="col" className="px-4 text-gray-400 align-middle py-3 whitespace-nowrap text-left">Action</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <tr className="font-medium">
//                         <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">1</td>
//                         <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Evans Envageline</td>
//                         <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">evansangelica@gmail.com</td>
//                         <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">08012345678</td>
//                         <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Mar 02, 23 - 9:22</td>
//                         <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left"><span className='fw-600 text-primary'>Activate</span></td>
//                     </tr>
//                     <tr className="font-medium">
//                         <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">2</td>
//                         <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Evans Envageline</td>
//                         <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">evansangelica@gmail.com</td>
//                         <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">08098765432</td>
//                         <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Mar 02, 23 - 9:22</td>
//                         <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left"><span className='fw-600 text-primary'>Activate</span></td>
//                     </tr>
//                 </tbody>
//             </table>
//         </div>
//     </div>
//   )
// }

// export default DeactivatedUser

import React, { useEffect, useMemo, useState } from "react";
import Table from "@/components/UI/table";
import {
    useGetDeactivatedQuery,
  useLazyActvateCustomerQuery,
  useLazyUnflagAccountQuery,
} from "@/services/api/routineSlice";
import Link from "next/link";
import {
  FormatRestriction,
  formatDate,
} from "@/components/formats/formatItem";
import { EmptyState1 } from "@/components/UI/emptyStates";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { BsCalendarRangeFill, BsThreeDotsVertical } from "react-icons/bs";
import { Initials } from "@/components/UI/tableInitials";
import { PreLoader } from "@/components/UI/spinners";
import Image from "next/image";
import {
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Button,
} from "../../UI/dropdown";
import { checkArray, encryptPayload } from "@/services/helpers";
import { toast } from "react-toastify";

const DeactivatedUsers = () => {
  const { data, isLoading, isSuccess, refetch } = useGetDeactivatedQuery();
  const [selectedCustomers, setSelectedCustomers] = useState([]);
  const [customer, setCustomer] = useState([]);
  const [datePicker, setDatePicker] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [activate] = useLazyActvateCustomerQuery();

  useEffect(() => {
    setCustomer(data?.data);
    setSelectedCustomers(data?.data);
  }, [data]);

  const activateCustomer = async(id) => {
    await activate(id)
      .then((res) => {
        if (res.isSuccess) {
          toast.success(res.data.msg);
          refetch()
        }
        if (res.isError) {
          toast.error(res.error.data.msg);
          setIsBusy(false)
        }
      })
      .catch((error) => {
        toast.error(error.data.msg);
      });
  }

  const columns = useMemo(
    () => [
      {
        Header: "S/N",
        accessor: (row, index) => index + 1, //RDT provides index by default
      },
      {
        Header: "Name",
        accessor: "first_name",
        Cell: (row) => (
          <div
            className="flex items-center gap-x-2"
          >
            {row?.row.original.image ? (
              <Image
                src={row?.row.original.image}
                alt="profile"
                width={100}
                height={100}
                className=" w-7 h-7 circle"
              />
            ) : (
              <Initials
                firstName={row?.value}
                lastName={row?.row.original.last_name}
              />
            )}
            <p className="cursor-pointer">
              {row.value} {row?.row.original.last_name}
            </p>
          </div>
        ),
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Phone Number",
        accessor: "phone",
      },
      {
        Header: "Date",
        accessor: "createdAt",
        Cell: (props) => formatDate(props.value),
      },
      {
        Header: "Action",
        accessor: "_id",
        Cell: (row) => (
          <p className="text-primary fw-600" onClick={() => activateCustomer(row.value)}>Activate</p>
        ),
      },
    ], // eslint-disable-next-line
    []
  );

  const list = useMemo(() => selectedCustomers, [selectedCustomers]);

  // date range

  const handleSelect = (date) => {
    setStartDate(date.selection.startDate);
    setEndDate(date.selection.endDate);
    let filtered = customer.filter((product) => {
      let productDate = new Date(product["createdAt"]);
      return (
        productDate >= date.selection.startDate &&
        productDate <= date.selection.endDate
      );
    });
    closeModal();
    setSelectedCustomers(filtered);
    console.log(filtered);
  };

  const selectionRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  };

  const closeModal = () => {
    setDatePicker(false);
  };

  return (
    <div className="min-h-[300px] ">
      {isLoading && <PreLoader />}
      {!isLoading && !data?.data.length && (
        <EmptyState1 message="No data available" />
      )}
      {isSuccess && !!data?.data.length && (
        <div>
          <div className="flex justify-end relative md:top-12 mb-2 lg:mb-0">
            <div
              className="border border-2 items-center flex gap-x-2 fs-500 rounded px-3 py-2 bg-light cursor-pointer"
              onClick={() => setDatePicker(!datePicker)}
            >
              <BsCalendarRangeFill className="text-primary" />
              Filter Date Range{" "}
            </div>
            {datePicker && (
              <div className="md:absolute md:top-12 border">
                <DateRangePicker
                  showSelectionPreview={true}
                  showDateDisplay={false}
                  ranges={[selectionRange]}
                  onChange={handleSelect}
                />
              </div>
            )}
          </div>
          {selectedCustomers && <Table columns={columns} data={list} />}
        </div>
      )}
    </div>
  );
};

export default DeactivatedUsers;
