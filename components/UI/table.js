import React from "react";
import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaAngleLeft,
  FaAngleRight,
  FaSearch,
} from "react-icons/fa";
import "regenerator-runtime/runtime";
import {
  useTable,
  useGlobalFilter,
  useAsyncDebounce,
  useFilters,
  usePagination,
} from "react-table";

function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) {
  const count = preGlobalFilteredRows.length;
  const [value, setValue] = React.useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 200);

  return (
    <div className="border p-[6px] w-64 md:w-full lg:w-64 rounded border-gray-400">
      <input
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={`${count} records...`}
        className="outline-none"
        icon={<FaSearch />}
        label="Search Order"
      />
    </div>
  );
}

const Table = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    state,
    preGlobalFilteredRows,
    setGlobalFilter,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    exportData,
  } = useTable(
    {
      columns,
      data,
    },
    useFilters,
    useGlobalFilter,
    usePagination
  );

  return (
    <>
      <div className="lg:flex items-center mb-5 relative z-10 w-6/12">
        <GlobalFilter
          preGlobalFilteredRows={preGlobalFilteredRows}
          globalFilter={state.globalFilter}
          setGlobalFilter={setGlobalFilter}
        />
        <div className="flex justify-between relative -left-6 md:left-0 mt-3 lg:mt-0 lg:justify-end">
          {headerGroups.map((headerGroup) =>
            headerGroup.headers.map((column) =>
              column.Filter ? (
                <div className="fs-500 px-3 py-2 " key={column.id}>
                  {column.render("Filter")}
                </div>
              ) : null
            )
          )}
        </div>
      </div>
      <div className="mt-2 flex flex-col">
        <div className="-my-2 overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden  sm:rounded-lg">
              <table
                {...getTableProps()}
                className="items-center w-full bg-transparent border-collapse"
              >
                <thead className="thead-light bg-light">
                  {headerGroups.map((headerGroup, index) => (
                    <tr {...headerGroup.getHeaderGroupProps()} key={index}>
                      {headerGroup.headers.map((column, index) => (
                        <th
                          scope="col"
                          key={index}
                          className="px-2 pl-3 text-black align-middle border-b border-solid border-gray-200 py-3 fs-500 whitespace-nowrap text-left"
                          {...column.getHeaderProps()}
                        >
                          {column.render("Header")}
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody className="bg-white" {...getTableBodyProps()}>
                  {page.map((row, i) => {
                    prepareRow(row);
                    return (
                      <tr key={i} {...row.getRowProps()}>
                        {row.cells.map((cell, index) => {
                          return (
                            <td
                              key={index}
                              className="border-b border-gray-200 align-middle fs-500 whitespace-nowrap px-2 py-4 text-left"
                              {...cell.getCellProps()}
                            >
                              {cell.render("Cell")}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="pagination mt-8 lg:flex justify-between items-center bg-light fs-500 px-3 py-2 lg:py-2 rounded-lg">
        <div className="flex items-center lg:w-6/12">
          <div className="pr-5">
            <span>
              Page{" "}
              <strong>
                {state.pageIndex + 1} of {pageOptions.length}
              </strong>{" "}
            </span>
          </div>
          <div className="w-20">
            <select
              value={state.pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
              }}
              className="bg-light border border-gray-400 rounded-md p-1"
            >
              {[5, 10, 20].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  Show {pageSize}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex lg:mt-0 mt-4 justify-center gap-2">
          <button
            className="border border-gray-400 w-7 h-7 grid place-content-center circle bg-primary text-white text-xl"
            onClick={() => gotoPage(0)}
            disabled={!canPreviousPage}
          >
            <FaAngleDoubleLeft />
          </button>{" "}
          <button
            className="border border-gray-400 w-7 h-7 grid place-content-center circle bg-primary text-white text-xl"
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
          >
            <FaAngleLeft />
          </button>{" "}
          <button
            className="border border-gray-400 w-7 h-7 grid place-content-center circle bg-primary text-white text-xl"
            onClick={() => nextPage()}
            disabled={!canNextPage}
          >
            <FaAngleRight />
          </button>{" "}
          <button
            className="border border-gray-400 w-7 h-7 grid place-content-center circle bg-primary text-white text-xl"
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          >
            <FaAngleDoubleRight />
          </button>
        </div>
      </div>
    </>
  );
};

export default Table;

// dropdown filter for table

export function SelectColumnFilter({
  column: { filterValue, setFilter, preFilteredRows, id },
  name,
}) {
  // Calculate the options for filtering
  // using the preFilteredRows
  const options = React.useMemo(() => {
    const options = new Set();
    preFilteredRows.forEach((row) => {
      options.add(row.values[id]);
    });
    return [...options.values()];
  }, [id, preFilteredRows]);

  // Render a multi-select box
  return (
    <select
      name={id}
      id={id}
      value={filterValue}
      onChange={(e) => {
        setFilter(e.target.value || undefined);
      }}
      className="text-gray-700 outline-none font-light border border-gray-400 rounded-md p-2"
      label="Filter by Level"
    >
      <option value="">Filter by Level</option>
      {options.map((option, i) => (
        <option key={i} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

export const BooleanFilter = ({ column }) => {
  const [filterValue, setFilterValue] = React.useState(column.filterValue || '');

  const onChange = event => {
    setFilterValue(event.target.value);
    column.setFilter(event.target.value || undefined);
  };

  return (
    <select value={filterValue} onChange={onChange}
    className="text-gray-700 outline-none font-light border border-gray-400 rounded-md p-2">
      <option value="">Filter by Status</option>
      <option value="true">Active</option>
      <option value="false">InActive</option>
    </select>
  );
};
