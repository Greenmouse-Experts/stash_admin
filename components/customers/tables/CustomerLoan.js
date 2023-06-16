import Table, {
    BooleanFilter,
    SelectColumnFilter,
  } from "@/components/UI/table";
  import React, { useEffect, useMemo, useState } from "react";
  import { FormatStatus, formatDate } from "@/components/formats/formatItem";
  import { DateRangePicker } from "react-date-range";
  import "react-date-range/dist/styles.css"; // main style file
  import "react-date-range/dist/theme/default.css"; // theme css file
  import { BsCalendarRangeFill } from "react-icons/bs";
  import { formatAsNgnMoney } from "@/components/formats/formatItem";
  
  const CustomersLoanTable = ({ data }) => {
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
          accessor: "type",
        },
        {
          Header: "Description",
          accessor: "description",
        },
        {
          Header: "Amount (₦)",
          accessor: "amount",
          Cell: (props) => formatAsNgnMoney(props.value)
        },
        {
          Header: "Status",
          accessor: "status",
          Cell: (props) => FormatStatus[props.value],
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
      </div>
    );
  };
  
  export default CustomersLoanTable;
  