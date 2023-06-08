import React, { useMemo, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import {
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Button,
} from "../../UI/dropdown";
import useModal from "@/hooks/useModal";
import ReusableModal from "@/components/helpers/ReusableModal";
import { toast } from "react-toastify";
import ReviewModal from "../modals/ReviewModal";
import {
  FormatStatus,
  formatAsNgnMoney,
  formatDate,
} from "@/components/formats/formatItem";
import Table from "@/components/UI/table";
import { PreLoader } from "@/components/UI/spinners";
import { useGetAllLoansQuery } from "@/services/api/loanSlice";
import Link from "next/link";
import Image from "next/image";
import { Initials } from "@/components/UI/tableInitials";

const LoanInsuranceTable = () => {
  const { data: loans, isLoading: isBusy } = useGetAllLoansQuery();
  const { Modal, setShowModal } = useModal();
  const { Modal: DeclineModal, setShowModal: setShowDeclineModal } = useModal();
  const { Modal: AcceptModal, setShowModal: setShowAcceptModal } = useModal();
  const [val, setVal] = useState();

  const acceptOption = (value) => {
    setShowAcceptModal(true);
    setVal(value);
  };
  const declineOption = (value) => {
    setShowDeclineModal(true);
    setVal(value);
  };
  const acceptLoan = (value) => {
    toast.success(value);
    setShowAcceptModal(false);
  };
  const declineLoan = (value) => {
    toast.success(value);
    setShowDeclineModal(false);
  };

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
        Header: "Type",
        accessor: "type",
      },
      {
        Header: "Amount Requested",
        accessor: "loan.amount",
        Cell: (props) => formatAsNgnMoney(props.value),
      },
      {
        Header: "Document",
        accessor: "document.recent_payslip",
        Cell: (row) => (
          <Link
            href={{
              pathname: `/loans/${row?.row.original.user_id}`,
              query: {
                sort: row?.value,
              },
            }}
            className="text-primary underline fw-600"
          >
            View
          </Link>
        ),
      },
      {
        Header: "Status",
        accessor: "status",
        Cell: (props) => FormatStatus[props.value],
      },
      {
        Header: "Amount Approved",
        accessor: "",
        Cell: (props) => formatAsNgnMoney[props.value],
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
              <MenuItem
                onClick={() => acceptOption("user loan has been accepted")}
              >
                Accept
              </MenuItem>
              <MenuItem
                onClick={() => declineOption("user loan has been declined")}
              >
                Decline
              </MenuItem>
              <MenuItem onClick={() => setShowModal(true)}>Review</MenuItem>
            </MenuList>
          </Menu>
        ),
      },
    ], // eslint-disable-next-line
    []
  );

  const list = useMemo(() => loans?.data, [loans?.data]);

  return (
    <div className="mt-8">
      {isBusy && (
        <div>
          <PreLoader />
        </div>
      )}
      {loans && (
        <Table
          columns={columns}
          data={list}
          // next={NextPage}
          // prev={PrevPage}
          nofilter
        />
      )}
      <Modal title="Review Loan">
        <ReviewModal />
      </Modal>
      <AcceptModal title="" noHead>
        <ReusableModal
          title="Are you sure you want to accept this request?"
          cancelTitle="No, cancel"
          actionTitle="Yes, accept"
          closeModal={() => setShowAcceptModal(false)}
          action={() => acceptLoan(val)}
        />
      </AcceptModal>
      <DeclineModal title="" noHead>
        <ReusableModal
          title="Are you sure you want to decline this request?"
          cancelTitle="No, cancel"
          actionTitle="Yes, decline"
          closeModal={() => setShowDeclineModal(false)}
          action={() => declineLoan(val)}
        />
      </DeclineModal>
    </div>
  );
};

export default LoanInsuranceTable;
