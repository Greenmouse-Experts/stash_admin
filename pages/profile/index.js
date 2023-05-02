import React, { useEffect, useState } from "react";
import Image from "next/image";
import Layout from "@/components/layout/Layout";
import { InputType, TextInput } from "@/components/UI/textInput";
import { Button } from "@/components/UI/button";
import { useGetProfileQuery } from "@/services/api/authSlice";
import { Controller, useForm } from "react-hook-form";

const ProfilePage = () => {
  const [profileImage, setProfileImage] = useState();
  const [preview, setPreview] = useState();
  const { isLoading, isSuccess, data } = useGetProfileQuery();

  const changeProfileImage = (e) => {
    e.preventDefault();
    setProfileImage(e.target.files[0]);
    const objectUrl = URL.createObjectURL(e.target.files[0]);
    setPreview(objectUrl);
  };

  const [isBusy, setIsBusy] = useState(false);
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues: {
      first_name: data?.data.first_name || "",
      last_name: data?.data.last_name || "",
      phone: data?.data.phone || "",
      email: data?.data.email || "",
    },
  });

  return (
    <Layout>
      <div>
        <div className="text-3xl fw-600">Edit profile</div>
        <div className="p-8 lg:p-12 rounded-md shade bg-white mt-12">
          <div className="flex items-center">
            <Image
              src={
                preview
                  ? preview
                  : data?.data?.image
                  ? data?.data?.image
                  : "https://res.cloudinary.com/greenmouse-tech/image/upload/v1680190106/Stash/PHOTO-2022-10-21-09-00-15_1_sy91nw.png"
              }
              alt="profile"
              width={400}
              height={400}
              className="w-40 h-40 circle"
            />
            <p className="relative fw-500 ml-6 text-primary cursor-pointer lg:text-lg">
              {" "}
              Add picture
              <input
                type="file"
                className="opacity-0 cursor-pointer left-0 absolute w-full h-full z-10"
                onChange={(e) => changeProfileImage(e)}
              />
            </p>
          </div>
          <form className="border-b pb-12">
            <div className="mt-8  grid lg:grid-cols-3 gap-y-8 gap-x-16">
              <div>
                <p className="fw-600 text-xl">Edit Name</p>
              </div>
              <div>
                <div>
                  <Controller
                    name="first_name"
                    control={control}
                    rules={{
                      required: {
                        value: true,
                        message: "Please enter your email",
                      },
                    }}
                    render={({ field }) => (
                      <TextInput
                        type={InputType.text}
                        label="First Name"
                        labelClassName="fw-500 lg:fs-700 text-gray-500"
                        altClassName="bg-white w-full p-2 outline-none lg:p-3 rounded"
                        divClassName="bg-white border border-gray-400 mt-2 rounded"
                        {...field}
                      />
                    )}
                  />
                </div>
                <div className="mt-4 lg:mt-8">
                  <Controller
                    name="last_name"
                    control={control}
                    rules={{
                      required: {
                        value: true,
                        message: "Please enter your email",
                      },
                    }}
                    render={({ field }) => (
                      <TextInput
                        type={InputType.email}
                        label="Email"
                        labelClassName="fw-500 lg:fs-700 text-gray-500"
                        altClassName="bg-white w-full p-2 outline-none lg:p-3 rounded"
                        divClassName="bg-white border border-gray-400 mt-2 rounded"
                      />
                    )}
                  />
                </div>
              </div>
              <div>
                <div>
                  <TextInput
                    type={InputType.text}
                    label="Last Name"
                    labelClassName="fw-500 lg:fs-700 text-gray-500"
                    altClassName="bg-white w-full p-2 lg:p-3 outline-none rounded"
                    divClassName="bg-white border border-gray-400 mt-2 rounded"
                  />
                </div>
                <div className="mt-4 lg:mt-8">
                  <TextInput
                    type={InputType.number}
                    label="Phone Number"
                    labelClassName="fw-500 lg:fs-700 text-gray-500"
                    altClassName="bg-white w-full p-2 outline-none lg:p-3 rounded"
                    divClassName="bg-white border border-gray-400 mt-2 rounded"
                  />
                </div>
              </div>
            </div>
            <div className="text-end mt-8">
              <Button
                title="Edit"
                altClassname="py-2 lg:px-10 px-6 btn-primary"
              />
            </div>
          </form>
          <form>
            <div className="py-8  grid lg:grid-cols-3 gap-x-16">
              <div>
                <p className="fw-600 text-xl">Change Password</p>
              </div>
              <div className="mt-8 lg:mt-0">
                <div>
                  <label className="fw-500 lg:fs-700 text-gray-500">
                    Old password
                  </label>
                  <input
                    type="password"
                    className="p-3 rounded border mt-2 border-gray-400 w-full"
                  />
                </div>
                <div className="mt-8">
                  <label className="fw-500 lg:fs-70 text-gray-500">
                    New password
                  </label>
                  <input
                    type="password"
                    className="p-3 rounded border mt-2 border-gray-400 w-full"
                  />
                </div>
              </div>
              <div className="self-end mt-8 lg:mt-0">
                <label className="fw-500 lg:fs-700 text-gray-500">
                  Confirm password
                </label>
                <input
                  type="text"
                  className="p-3 rounded border mt-2 border-gray-400 w-full"
                />
              </div>
            </div>
            <div className="text-end">
              <button className="btn-primary px-7 py-2">Edit</button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};
const getLayout = (page) => <Layout>{page}</Layout>;

export { getLayout };
export default ProfilePage;
