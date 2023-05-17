import Table, {
  BooleanFilter,
  SelectColumnFilter,
} from "@/components/UI/table";
import {
  useGetCustomersQuery,
  useLazyGetCustomersQuery,
} from "@/services/api/routineSlice";
import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { FormatStatus, formatDate } from "@/components/formats/formatItem";
import { EmptyState1 } from "@/components/UI/emptyStates";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { BsCalendarRangeFill } from "react-icons/bs";
import { Initials } from "@/components/UI/tableInitials";
import { PreLoader } from "@/components/UI/spinners";
import Image from "next/image";

const CustomersTable = () => {
  const { data, isLoading, isSuccess } = useGetCustomersQuery();
  const [selectedCustomers, setSelectedCustomers] = useState([]);
  const [customer, setCustomer] = useState([]);
  const [datePicker, setDatePicker] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  useEffect(() => {
    setCustomer(data?.data);
    setSelectedCustomers(data?.data);
  }, [data]);

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
          <Link
            href={{
              pathname: `/customers/${row?.row.original._id}`,
              query: {
                sort: row?.row.original._id,
              },
            }}
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
                firstName={row.value}
                lastName={row?.row.original.last_name}
              />
            )}
            <p className="cursor-pointer">
              {row.value} {row?.row.original.last_name}
            </p>
          </Link>
        ),
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Phone no",
        accessor: "phone",
      },
      {
        Header: "Levels",
        accessor: "products[0].role.name",
        Filter: SelectColumnFilter,
        filter: "includes",
      },
      {
        Header: "Status",
        accessor: "active",
        Cell: (props) => (
          <div>
            {props.value ? FormatStatus["Active"] : FormatStatus["Inactive"]}
          </div>
        ),
        Filter: BooleanFilter,
      },
      {
        Header: "Date",
        accessor: "createdAt",
        Cell: (props) => formatDate(props.value),
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

export default CustomersTable;
