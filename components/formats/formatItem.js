import dayjs from "dayjs"

export const FormatStatus =  {
    "pending": <p className="w-28 fs-500 rounded fw-500 text-center border border-yellow-800 bg-yellow-50 text-yellow-800 py-1">Pending</p>,
    "under-review" : <p className="w-28 fs-500 rounded fw-500 text-center border border-blue-800 bg-blue-50 text-blue-800 py-1">Reviewing</p>,
    "approved" : <p className="w-28 fs-500 rounded fw-500 text-center border border-green-800 bg-green-50 text-green-800 py-1">Approved</p>,
    "declined": <p className="w-28 fs-500 rounded fw-500 text-center border border-red-800 bg-red-50 text-red-800 py-1">Declined</p>,
    "default": <p className="w-28 fs-500 rounded fw-500 text-center border border-red-800 bg-red-50 text-red-800 py-1">Default</p>,
    "settled": <p className="w-28 fs-500 rounded fw-500 text-center border border-purple-800 bg-purple-50 text-purple-800 py-1">Settled</p>,
    "perform": <p className="w-28 fs-500 rounded fw-500 text-center border border-green-800 bg-green-50 text-green-800 py-1">Perform</p>,
    "success" : <p className="w-28 fs-500 rounded fw-500 text-center border border-green-800 bg-green-50 text-green-800 py-1">Success</p>,
    "requested" : <p className="w-28 fs-500 rounded fw-500 text-center border border-voilet-800 bg-voilet-50 text-voilet-800 py-1">Requested</p>,
    "disbursed" : <p className="w-28 fs-500 rounded fw-500 text-center border border-voilet-800 bg-voilet-50 text-voilet-800 py-1">Disbursed</p>,
    "failed": <p className="w-28 fs-500 rounded fw-500 text-center border border-red-800 bg-red-50 text-red-800 py-1">Failed</p>,
    "deployed": <p className="w-28 fs-500 rounded fw-500 text-center border border-yellow-800 bg-yellow-50 text-yellow-800 py-1">Deployed</p>,
    "Active" : <p className="w-28 fs-500 rounded fw-500 text-center border border-green-800 bg-green-50 text-green-800 py-1">Active</p>,
    "Inactive": <p className="w-28 fs-500 rounded fw-500 text-center border border-red-800 bg-red-50 text-red-800 py-1">Inactive</p>,
    "retrieved": <p className="w-28 fs-500 rounded fw-500 text-center border border-red-800 bg-red-50 text-red-800 py-1">Retrieved</p>,
    "withdrawn": <p className="w-28 fs-500 rounded fw-500 text-center border border-green-800 bg-green-50 text-green-800 py-1">Withdrawn</p>,
    "unwithdrawn": <p className="w-28 fs-500 rounded fw-500 text-center border border-red-800 bg-red-50 text-red-800 py-1">Unwithdrawn</p>,
    "paid": <p className="w-28 fs-500 rounded fw-500 text-center border border-green-800 bg-green-50 text-green-800 py-1">Paid</p>,
    "unpaid": <p className="w-28 fs-500 rounded fw-500 text-center border border-red-800 bg-red-50 text-red-800 py-1">Unpaid</p>,
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