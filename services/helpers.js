import { store } from "@/redux/store";
import { CRYPT_KEY } from "./constants";
let CryptoJS = require("crypto-js");


export const requestAuthorization = () =>
  `Bearer ${store.getState().user.user.token || ""}`;

export const requestToken = () => store.getState().user.user.token || "";

export const refreshToken = () => store.getState().user.user.refreshToken || "";

export const requestUserId = () => store.getState().user.user.userId || "x";

export const encryptPayload = (value) => {
  const payload = JSON.stringify(value)
 let ciphertext = CryptoJS.AES.encrypt(payload, CRYPT_KEY).toString();

 return ciphertext
}