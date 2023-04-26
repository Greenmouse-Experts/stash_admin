"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { MdLockOutline } from "react-icons/md";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Login = () => {
  const [passwordType, setPasswordType] = useState("password");
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  return (
    <div>
      <div className="lg:bg-secondary min-h-screen font-primary">
        <div className="flex lg:pt-16 text-sm h-screen items-center justify-center">
          <div className="lg:w-4/12 rounded shadow bg-white w-11/12 p-6 pb-8">
            <Link href="/">
              <Image
                src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1679573442/Stash/Group_48096160_2_sax9kt.png"
                alt="logo"
                width={300}
                height={300}
                className="w-36 lg:w-48 pr-6 mx-auto"
              />
            </Link>
            <div className="mt-4">
              <p className="fw-500 text-center lg:text-xl mb-12">
                Login to your account{" "}
              </p>
              <form>
                <div>
                  <div className="bg-input p-2 flex items-center rounded fs-600">
                    <AiOutlineMail className="text-xl lg:text-3xl mx-2 text-input mt-1" />
                    <input
                      type="text"
                      placeholder="Email"
                      className="p-1 w-full focus:bg-input bg-input placeholder-gray-400 outline-none"
                    />
                  </div>
                </div>
                <div className="mt-6">
                  <div className="bg-input p-2 flex items-center rounded fs-600">
                    <MdLockOutline className="text-xl lg:text-3xl mx-2 text-input " />
                    <input
                      type={passwordType}
                      placeholder="Password"
                      className="p-1 w-full focus:bg-input bg-input placeholder-gray-400 outline-none"
                    />
                    <div onClick={togglePassword} className="px-3">
                      {passwordType === "password" ? (
                        <FaRegEyeSlash className="text-xl text-input" />
                      ) : (
                        <FaRegEye className="text-xl text-input" />
                      )}
                    </div>
                  </div>
                  <p className="mt-4 text-end">
                    <Link href="/auth/forget" className="fw-500 ">
                      Forgot password?
                    </Link>
                  </p>
                </div>
                <div className="mt-12">
                <Link href='dashboard'>
                  <button className="py-3 lg:text-lg w-full btn-primary">
                    Login
                  </button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
