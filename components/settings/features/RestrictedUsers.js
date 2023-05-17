import React, { useEffect, useMemo, useState } from "react";
import Table from "@/components/UI/table";
import {
  useGetRestrictedQuery,
  useLazyUnRestrictAllQuery,
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

const RestrictedUsers = () => {
  const { data, isLoading, isSuccess, refetch } = useGetRestrictedQuery();
  const [selectedCustomers, setSelectedCustomers] = useState([]);
  const [customer, setCustomer] = useState([]);
  const [datePicker, setDatePicker] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [unRestrict] = useLazyUnRestrictAllQuery();

  useEffect(() => {
    setCustomer(data?.data);
    setSelectedCustomers(data?.data);
  }, [data]);

  const unRestrictUser = async (val, id) => {
    const data = {
      restriction: val,
    };
    const payload = encryptPayload(data);
    await unRestrict({ id, payload })
      .then((res) => {
        if (res.isSuccess) {
          toast.success(res.data.msg);
          refetch();
        }
        if (res.isError) {
          toast.error(res.error.data.msg);
        }
      })
      .catch((error) => {
        toast.error(error.data.msg);
      });
  };

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
        Header: "Reason",
        accessor: "wallet[0].restricted",
        Cell: (row) => row.value.map((item) => FormatRestriction[item]),
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
          <Menu>
            <MenuHandler>
              <Button className="bg-transparent px-0 mx-0 hover:shadow-none text-md flex items-center font-normal shadow-none text-black capitalize">
                <BsThreeDotsVertical className="text-xl" />
              </Button>
            </MenuHandler>
            <MenuList>
              {checkArray(
                row?.row.original?.wallet[0]?.restricted,
                "withdrawal"
              ) && (
                <MenuItem
                  onClick={() => unRestrictUser("withdrawal", row.value)}
                >
                  UnRestrict Withdrawals
                </MenuItem>
              )}
              {checkArray(
                row?.row.original?.wallet[0]?.restricted,
                "transfer"
              ) && (
                <MenuItem onClick={() => unRestrictUser("transfer", row.value)}>
                  UnRestrict Transfer
                </MenuItem>
              )}
            </MenuList>
          </Menu>
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

export default RestrictedUsers;
