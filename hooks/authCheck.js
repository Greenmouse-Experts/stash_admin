"use client";


import { selectAuth, resetUser } from "@/redux/reducers/authSlice";
import { useDispatch, useSelector } from "react-redux";

const useAuthCheck = () => {
  const dispatch = useDispatch();
  const authenticatedUser = useSelector(selectAuth);

  const AuthenticatedUserHaveValidToken = authenticatedUser.auth.token || null;

  const IsAuthenticated = !!authenticatedUser.auth.token;

  const LoggedInUser = authenticatedUser.auth;

  const SignOut = () => dispatch(resetUser());

  return {
    AuthenticatedUserHaveValidToken,
    IsAuthenticated,
    SignOut,
    LoggedInUser,
  };
};

export default useAuthCheck;