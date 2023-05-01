"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { MdLockOutline } from "react-icons/md";
import { Button } from "@/components/UI/button";
import { InputType, TextInput } from "@/components/UI/textInput";
import { Controller, useForm } from "react-hook-form";
import { useLazyLoginQuery } from "@/services/api/authSlice";
import { saveUser } from "@/redux/reducers/userSlice";
import { toast } from "react-toastify";
import { encryptPayload } from "@/services/helpers";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import getCallBackRoute from "@/hooks/getCallBackRoute";

const Login = () => {

  const dispatch = useDispatch()
  const router = useRouter()
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      user: "",
      password: "",
    },
  });
  const [login] = useLazyLoginQuery();

  const onSubmit = async (data) => {
    let payload = encryptPayload(data)
    await login(payload)
      .then((res) => {
        if (res.isSuccess
          ) {
          dispatch(
            saveUser({
              userId: res.data.data.profile.user_id,
              email: res.data.data.profile.email,
              lastName: res.data.data.profile.last_name,
              firstName: res.data.data.profile.first_name,
              token: res.data.data.token,
              refreshToken: res.data.data.refreshToken,
              phone_number: res.data.data.phone_number,
            })
          );
          toast.success(res.data.msg);
          router.push(getCallBackRoute(router.asPath));
        }

        if (res.isError) {
          toast.error(res.error.data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Login Failed");
      });
  };

  return (
    <div>
      <div className="bg-secondary min-h-screen font-primary">
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
              <form onSubmit={handleSubmit(onSubmit)} className="fs-700">
                <div>
                  <Controller
                    name="user"
                    control={control}
                    rules={{
                      required: {
                        value: true,
                        message: "Please enter your email",
                      },
                    }}
                    render={({ field }) => (
                      <TextInput
                        placeholder="Email"
                        icon={
                          <AiOutlineMail className="text-2xl text-gray-600" />
                        }
                        error={errors.user?.message}
                        type={InputType.email}
                        {...field}
                      />
                    )}
                  />
                </div>
                <div className="mt-6">
                  <Controller
                    name="password"
                    control={control}
                    rules={{
                      required: {
                        value: true,
                        message: "Password is required",
                      },
                      minLength: {
                        value: 5,
                        message: "Password is too short",
                      },
                    }}
                    render={({ field }) => (
                      <TextInput
                        placeholder="Password"
                        icon={
                          <MdLockOutline className="text-xl lg:text-2xl text-input " />
                        }
                        error={errors.password?.message}
                        type={InputType.password}
                        {...field}
                      />
                    )}
                  />
                </div>
                <div className="mt-12">
                  <Button title="Login" disabled={!isValid} />
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
