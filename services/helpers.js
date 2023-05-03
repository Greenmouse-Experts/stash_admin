import { store } from "@/redux/store";
import { CRYPT_KEY } from "./constants";
let CryptoJS = require("crypto-js");


export const requestAuthorization = () =>
  `Bearer ${store.getState().auth.auth.token || ""}`;

export const requestToken = () => store.getState().auth.auth.token || "";

export const refreshToken = () => store.getState().auth.auth.refreshToken || "";

export const requestauthId = () => store.getState().auth.auth.userId || "x";

export const encryptPayload = (value) => {
  const payload = JSON.stringify(value)
 let ciphertext = CryptoJS.AES.encrypt(payload, CRYPT_KEY).toString();

 return ciphertext
}