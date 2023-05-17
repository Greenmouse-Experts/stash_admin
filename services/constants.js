// NB: Lifetime is in seconds
export const CACHE_LIFETIME = {
    DEFAULT: 0,
    TINY: 20,
    MEDIUM: 180,
    EXTENDED: 3600,
  }
  
  export const HTTP_METHODS = {
    GET: "GET",
    POST: "POST",
    PUT: "PUT",
    PATCH: "PATCH",
    DELETE: "DELETE",
  }

export const BASE_URL = process.env.NEXT_PUBLIC_DEV_BASE_URL;
export const CRYPT_KEY = process.env.NEXT_PUBLIC_CRYPT_KEY;
export const LOGIN = "/admin-service/admin/signin";
export const REFRESH_TOKEN = "/admin-service/admin/token/refresh"
export const VERIFY_TOKEN = "/admin-service/admin/verify"
export const GET_PROFILE = "/admin-service/admin/details";
export const EDIT_PROFILE = "/admin-service/admin/profile";
export const CHANGE_PASSWORD = "/admin-service/admin/password";

// customers url
export const GET_ALL_CUSTOMERS = "/admin-service/admin/customer/all"
export const GET_CUSTOMER_DETAIL = "/admin-service/admin/customer"
export const FLAG_USER = "/customer-service/admin/flag"
export const UNFLAG_USER = "/customer-service/admin/unflag"
export const GET_ALL_FLAGGED = "/customer-service/admin/flagged/customers"
export const RESTRICT_SINGLE_WALLET = "/customer-service/admin/restrict/single"
export const RESTRICT_ALL_WALLET = "/customer-service/admin/restrict/all"
export const UNRESTRICT_SINGLE_WALLET = "/customer-service/admin/unrestrict/single"
export const UNRESTRICT_ALL_WALLET = "/customer-service/admin/unrestrict/all"
export const GET_ALL_RESTRICTED = "/customer-service/admin/restricted/customers"
export const DEACTIVATE_USER = "/customer-service/admin/deactivate"
export const ACTIVATE_USER = "/customer-service/admin/activate"
export const GET_ALL_DEACTIVATED = "/customer-service/admin/deactivated/customers"





// routine urls
export const UPLOAD_IMAGE = "/upload";