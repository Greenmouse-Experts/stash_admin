"use client";


import { selectUser, resetUser } from "@/redux/reducers/userSlice";
import { useDispatch, useSelector } from "react-redux";

const useAuthCheck = () => {
  const dispatch = useDispatch();
  const authenticatedUser = useSelector(selectUser);

  const AuthenticatedUserHaveValidToken = authenticatedUser.user.token || null;

  const IsAuthenticated = !!authenticatedUser.user.token;

  const LoggedInUser = authenticatedUser.user;

  const SignOut = () => dispatch(resetUser());

  return {
    AuthenticatedUserHaveValidToken,
    IsAuthenticated,
    SignOut,
    LoggedInUser,
  };
};

export default useAuthCheck;