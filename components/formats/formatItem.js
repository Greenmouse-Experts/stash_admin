import dayjs from "dayjs"

export const FormatStatus =  {
    "Pending": <p className="w-28 fs-500 rounded fw-500 text-center border border-yellow-800 bg-yellow-50 text-yellow-800 py-1">Pending</p>,
    "Approved" : <p className="w-28 fs-500 rounded fw-500 text-center border border-green-800 bg-green-50 text-green-800 py-1">Approved</p>,
    "Declined": <p className="w-28 fs-500 rounded fw-500 text-center border border-red-800 bg-red-50 text-red-800 py-1">Declined</p>,
    "Default": <p className="w-28 fs-500 rounded fw-500 text-center border border-red-800 bg-red-50 text-red-800 py-1">Default</p>,
    "Settled": <p className="w-28 fs-500 rounded fw-500 text-center border border-purple-800 bg-purple-50 text-purple-800 py-1">Settled</p>,
    "Perform": <p className="w-28 fs-500 rounded fw-500 text-center border border-green-800 bg-green-50 text-green-800 py-1">Perform</p>,
    "Success" : <p className="w-28 fs-500 rounded fw-500 text-center border border-green-800 bg-green-50 text-green-800 py-1">Success</p>,
    "Requested" : <p className="w-28 fs-500 rounded fw-500 text-center border border-voilet-800 bg-voilet-50 text-voilet-800 py-1">Requested</p>,
    "Disbursed" : <p className="w-28 fs-500 rounded fw-500 text-center border border-voilet-800 bg-voilet-50 text-voilet-800 py-1">Disbursed</p>,
    "Failed": <p className="w-28 fs-500 rounded fw-500 text-center border border-red-800 bg-red-50 text-red-800 py-1">Failed</p>,
    "Deployed": <p className="w-28 fs-500 rounded fw-500 text-center border border-yellow-800 bg-yellow-50 text-yellow-800 py-1">Deployed</p>,
    "Active" : <p className="w-28 fs-500 rounded fw-500 text-center border border-green-800 bg-green-50 text-green-800 py-1">Active</p>,
    "Inactive": <p className="w-28 fs-500 rounded fw-500 text-center border border-red-800 bg-red-50 text-red-800 py-1">Inactive</p>,
    "Retrieved": <p className="w-28 fs-500 rounded fw-500 text-center border border-red-800 bg-red-50 text-red-800 py-1">Retrieved</p>,
    "Withdrawn": <p className="w-28 fs-500 rounded fw-500 text-center border border-green-800 bg-green-50 text-green-800 py-1">Withdrawn</p>,
    "Unwithdrawn": <p className="w-28 fs-500 rounded fw-500 text-center border border-red-800 bg-red-50 text-red-800 py-1">Unwithdrawn</p>,
    "Paid": <p className="w-28 fs-500 rounded fw-500 text-center border border-green-800 bg-green-50 text-green-800 py-1">Paid</p>,
    "Unpaid": <p className="w-28 fs-500 rounded fw-500 text-center border border-red-800 bg-red-50 text-red-800 py-1">Unpaid</p>,
  }

  export const formatDate = (value) => {
    return dayjs(value).format("MMM DD, YY - HH:mm")
  }

  export const FormatRestriction = {
    "withdrawal": <p className="fw-500 py-1 fs-500">Withdrawal</p>,
    "transfer": <p className="fw-500 py-1 fs-500">Transfer</p>,
    "documentation": <p className="fw-500 py-1 fs-500">Documentation</p>,
    "fraud": <p className="fw-500 py-1 fs-500">Fraud</p>
  }

  export const formatAsNgnMoney = (value) => {
    if (!value) return "";
    return `₦${value
      .toLocaleString("en-US")
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
  };

  export const FormatLoanType = {
    "salad": "64775cb007185fff1c5e2e99",
    "kollect": "647632fb5c09f9b87f624e6c"
  }