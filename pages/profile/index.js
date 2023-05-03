import React, { useEffect, useState } from "react";
import Image from "next/image";
import Layout from "@/components/layout/Layout";
import { InputType, TextInput } from "@/components/UI/textInput";
import { Button } from "@/components/UI/button";
import { Controller, useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { encryptPayload } from "@/services/helpers";
import {
  useEditProfileMutation,
  useGetProfileQuery,
  useLazyEditProfileQuery,
} from "@/services/api/authSlice";
import "react-phone-number-input/style.css";
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form";
import { toast } from "react-toastify";
import { HashSpinner } from "@/components/UI/spinners";
import { useLazyUploadImageQuery } from "@/services/api/routineSlice";
import ChangePassword from "@/components/profile/ChangePassword";

const ProfilePage = () => {
  const [profileImage, setProfileImage] = useState();
  const [preview, setPreview] = useState();
  const user = useSelector((state) => state.auth.auth);

  const [upload] = useLazyUploadImageQuery();
  const { isLoading, isSuccess, data } = useGetProfileQuery();

  const changeProfileImage = async (e) => {
    e.preventDefault();
    setProfileImage(e.target.files[0]);
    const objectUrl = URL.createObjectURL(e.target.files[0]);
    setPreview(objectUrl);
    const formData = new FormData();
    formData.append("image", e.target.files[0]);
    await upload(formData)
      .then((res) => {
        if (res.isSuccess) {
          editProfile({
            photo: res.data.data.profile.user_id,
          });
          toast.success(res.data.msg);
          setIsBusy(false);
        }

        if (res.isError) {
          toast.error(res.error.data.msg);
          setIsBusy(false);
        }
      })
      .catch((err) => {
        toast.error("Ecountered error");
        setIsBusy(false);
      });
  };

  const [editProfile] = useLazyEditProfileQuery();

  const [isBusy, setIsBusy] = useState(false);


  const {
    control,
    handleSubmit,
    setError,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      first_name: user.firstName || "",
      last_name: user.lastName || "",
      phone_number: user.phone_number || "",
      email: user.email || "",
    },
  });

  useEffect(() => {
    if (data) {
      let defaults = {
        first_name: data.data.first_name,
        last_name: data.data.last_name,
        phone_number: data.data.phone,
        email: data.data.email
      };
      reset(defaults);
    }
  }, [data]);

  const onSubmit = async (data) => {
    setIsBusy(true);
    let payload = encryptPayload(data);
    await editProfile(payload)
      .then((res) => {
        if (res.isSuccess) {
          toast.success(res.data.msg);
          setIsBusy(false);
        }

        if (res.isError) {
          toast.error(res.error.data.msg);
          setIsBusy(false);
        }
      })
      .catch((err) => {
        toast.error(err?.data?.msg);
        setIsBusy(false);
      });
  };

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
                  : user?.photo
                  ? user?.photo
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
          <form onSubmit={handleSubmit(onSubmit)} className="border-b pb-12">
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
                    name="email"
                    control={control}
                    rules={{
                      required: {
                        value: true,
                        message: "Please input a value",
                      },
                    }}
                    render={({ field }) => (
                      <TextInput
                        type={InputType.email}
                        label="Email"
                        disabled
                        labelClassName="fw-500 lg:fs-700 text-gray-500"
                        altClassName="bg-white w-full p-2 outline-none lg:p-3 rounded"
                        divClassName="bg-white border border-gray-400 mt-2 rounded"
                        {...field}
                      />
                    )}
                  />
                </div>
              </div>
              <div>
                <div>
                  <Controller
                    name="last_name"
                    control={control}
                    rules={{
                      required: {
                        value: true,
                        message: "Please input a value",
                      },
                    }}
                    render={({ field }) => (
                      <TextInput
                        type={InputType.text}
                        label="Last Name"
                        labelClassName="fw-500 lg:fs-700 text-gray-500"
                        altClassName="bg-white w-full p-2 outline-none lg:p-3 rounded"
                        divClassName="bg-white border border-gray-400 mt-2 rounded"
                        {...field}
                      />
                    )}
                  />
                </div>
                <div className="mt-4 lg:mt-8">
                  <label className="mb-2 block text-gray-500">Phone Number</label>
                  <PhoneInputWithCountry
                    international
                    defaultCountry="NG"
                    name="phone_number"
                    disabled
                    control={control}
                    defaultValue={data?.data.phone_number}
                    rules={{ required: true }}
                    className="border lg:p-3 p-2 border-gray-400 rounded outline-none"
                  />
                  {errors.phone_number && (
                    <p className="error text-red-500 fw-500">
                      Invalid Phone Number
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="text-end mt-8">
              <Button
                altClassname="py-2 lg:px-10 px-6 btn-primary"
                title={
                  isBusy ? <HashSpinner size={25} color="white" /> : "Edit"
                }
              />
            </div>
          </form>
          <div>
            <ChangePassword/>
          </div>
        </div>
      </div>
    </Layout>
  );
};
const getLayout = (page) => <Layout>{page}</Layout>;

export { getLayout };
export default ProfilePage;
