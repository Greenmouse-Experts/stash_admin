"use client"

import React from "react";
import { useRouter } from "next/router";
import useAuthCheck from "@/hooks/authCheck";

const WithAuth = (Component) => {
    const Wrapper = (props) => {
      const router = useRouter();
      const { IsAuthenticated } = useAuthCheck();
  
      if (!IsAuthenticated) {
        router.push("/", { query: { callback: router.pathname } });
        return null;
      }
  
      return <Component {...props} />;
    };
  
    Wrapper.displayName = `withAuth(${
      Component.displayName || Component.name || "Component"
    })`;
  
    return Wrapper;
  };
  
  export default WithAuth;