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
export const LOGIN = "/admin/signin";
export const GET_PROFILE = "/admin/details";
export const EDIT_PROFILE = "/admin/profile";
export const CHANGE_PASSWORD = "/admin/password";

// customers url
export const GET_ALL_CUSTOMERS = "admin/customer/all"
export const GET_CUSTOMER_DETAIL = "/admin/customer"




// routine urls
export const UPLOAD_IMAGE = "/upload";