import Table, { SelectColumnFilter } from "@/components/UI/table";
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

const CustomersTable = () => {
  const { data, isLoading, isSuccess } = useGetCustomersQuery();
  const [selectedCustomers, setSelectedCustomers] = useState([]);
  const [customer, setCustomer] = useState([]);
  const [datePicker, setDatePicker] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  useEffect(() => {
    setCustomer(data?.data);
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
          <div className="flex items-center gap-x-2">
            <Initials
              firstName={row.value}
              lastName={row?.row.original.last_name}
            />
            <p className="cursor-pointer">
              <Link
                href={{
                  pathname: `/customers/${row?.row.original._id}`,
                  query: {
                    sort: row?.row.original._id,
                  },
                }}
              >
                {row.value} {row?.row.original.last_name}
              </Link>
            </p>
          </div>
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
          <p>
            {props.value ? FormatStatus["Active"] : FormatStatus["inactive"]}
          </p>
        ),
      },
      {
        Header: "Date",
        accessor: "createdAt",
        Cell: (props) => formatDate(props.value),
      },
    ], // eslint-disable-next-line
    []
  );

  const list = useMemo(() => customer, []);

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
    setCustomer(filtered);
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
      {isLoading && <PreLoader/>}
      {!isLoading && !data?.data.length && (
        <EmptyState1 message="No data available" />
      )}
      {isSuccess && !!data?.data.length && (
        <div>
          <div className="flex justify-end relative top-12">
            <div
              className="border border-2 items-center flex gap-x-2 fs-500 rounded px-3 py-2 bg-light"
              onClick={() => setDatePicker(!datePicker)}
            >
              <BsCalendarRangeFill className="text-primary" />
              Filter Date Range{" "}
            </div>
            {datePicker && (
              <div className="absolute top-12 border">
                <DateRangePicker
                  showSelectionPreview={true}
                  showDateDisplay={false}
                  ranges={[selectionRange]}
                  onChange={handleSelect}
                />
              </div>
            )}
          </div>
          <Table columns={columns} data={data?.data} />
        </div>
      )}
      {/* <table className="min-w-full text-left">
            <thead className="font-medium">
                <tr>
                    <th scope="col" className="px-4 text-gray-400 align-middle py-3 whitespace-nowrap text-left">S/N</th>
                    <th scope="col" className="px-4 text-gray-400 align-middle py-3 whitespace-nowrap text-left">Name</th>
                    <th scope="col" className="px-4 text-gray-400 align-middle py-3 whitespace-nowrap text-left">Email</th>
                    <th scope="col" className="px-4 text-gray-400 align-middle py-3 whitespace-nowrap text-left">Phone no</th>
                    <th scope="col" className="px-4 text-gray-400 align-middle py-3 whitespace-nowrap text-left">Levels</th>
                    <th scope="col" className="px-4 text-gray-400 align-middle py-3 whitespace-nowrap text-left">Status</th>
                    <th scope="col" className="px-4 text-gray-400 align-middle py-3 whitespace-nowrap text-left">Date</th>
                </tr>
            </thead>
            <tbody>
                <tr className="font-medium">
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">1</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left"><Link href='/customers/details'>Odinchazoihe Kayode</Link></td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Odinchazoihekayode@gmail.com</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">08123456789</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Tier 1</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left"><p className='px-3 py-1 rounded text-center bg-green-50 text-green-600 border border-green-500'>Active</p></td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Mar 02, 23 - 9:22</td>
                </tr>
                <tr className="font-medium">
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">2</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Odinchazoihe Kayode</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Odinchazoihekayode@gmail.com</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">08123456789</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Tier 2</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left"><p className='px-3 py-1 rounded text-center bg-green-50 text-green-600 border border-green-500'>Active</p></td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Mar 02, 23 - 9:22</td>
                </tr>
                <tr className="font-medium">
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">3</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Odinchazoihe Kayode</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Odinchazoihekayode@gmail.com</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">08123456789</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Tier 1</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left"><p className='px-3 py-1 rounded text-center bg-red-50 text-red-600 border border-red-500'>Inactive</p></td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Mar 02, 23 - 9:22</td>
                </tr>
                <tr className="font-medium">
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">4</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Odinchazoihe Kayode</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Odinchazoihekayode@gmail.com</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">08123456789</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">1Tier 1</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left"><p className='px-3 py-1 rounded text-center bg-green-50 text-green-600 border border-green-500'>Active</p></td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Mar 02, 23 - 9:22</td>
                </tr>
                <tr className="font-medium">
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">5</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Odinchazoihe Kayode</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Odinchazoihekayode@gmail.com</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">08123456789</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Tier 1</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left"><p className='px-3 py-1 rounded text-center bg-green-50 text-green-600 border border-green-500'>Active</p></td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Mar 02, 23 - 9:22</td>
                </tr>
                <tr className="font-medium">
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">6</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Odinchazoihe Kayode</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Odinchazoihekayode@gmail.com</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">08123456789</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Tier 2</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left"><p className='px-3 py-1 rounded text-center bg-green-50 text-green-600 border border-green-500'>Active</p></td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Mar 02, 23 - 9:22</td>
                </tr>
                <tr className="font-medium">
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">7</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Odinchazoihe Kayode</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Odinchazoihekayode@gmail.com</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">08123456789</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Tier 1</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left"><p className='px-3 py-1 rounded text-center bg-red-50 text-red-600 border border-red-500'>Inactive</p></td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Mar 02, 23 - 9:22</td>
                </tr>
                <tr className="font-medium">
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">8</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Odinchazoihe Kayode</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Odinchazoihekayode@gmail.com</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">08123456789</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">1Tier 1</td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left"><p className='px-3 py-1 rounded text-center bg-green-50 text-green-600 border border-green-500'>Active</p></td>
                    <td className="align-middle fs-500 whitespace-nowrap px-4 py-4 text-left">Mar 02, 23 - 9:22</td>
                </tr>
            </tbody>
        </table> */}
    </div>
  );
};

export default CustomersTable;
