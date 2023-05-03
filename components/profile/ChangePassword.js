import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form';
import { InputType, TextInput } from '../UI/textInput';
import { Button } from '../UI/button';
import { HashSpinner } from '../UI/spinners';
import { useUpdateAdminPasswordMutation, useLazyUpdateAdminPasswordQuery } from '@/services/api/authSlice';
import { encryptPayload } from '@/services/helpers';
import { toast } from 'react-toastify';

const ChangePassword = () => {

    const [isBusy, setIsBusy] = useState(false)
    const [updatePassword] = useLazyUpdateAdminPasswordQuery()
 
    const {
        control,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm({
        defaultValues: {
            password: '',
            new_password: '',
            confirm_password: '',
        }
      });

    const onSubmit = async (data) => {
        setIsBusy(true);
        let payload = encryptPayload(data);
        await updatePassword(payload)
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
            toast.error(err?.data?.msg || err.msg);
            setIsBusy(false);
          });
      };
  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="py-8  grid lg:grid-cols-3 gap-x-16">
              <div>
                <p className="fw-600 text-xl">Change Password</p>
              </div>
              <div className="mt-8 lg:mt-0">
              <div>
                  <Controller
                    name="password"
                    control={control}
                    rules={{
                      required: {
                        value: true,
                        message: "Please enter your password",
                      },
                    }}
                    render={({ field }) => (
                      <TextInput
                        type={InputType.password}
                        label="Old Password"
                        error={errors.password?.message}
                        labelClassName="fw-500 lg:fs-700 text-gray-500"
                        altClassName="bg-white w-full p-2 outline-none lg:p-3 rounded"
                        divClassName="bg-white flex items-center  border border-gray-400 mt-2 rounded"
                        {...field}
                      />
                    )}
                  />
                </div>
                <div className="mt-8">
                <div>
                  <Controller
                    name="new_password"
                    control={control}
                    rules={{
                      required: {
                        value: true,
                        message: "Please enter your password",
                      },
                    }}
                    render={({ field }) => (
                      <TextInput
                        type={InputType.password}
                        label="New Password"
                        error={errors.new_password?.message}
                        labelClassName="fw-500 lg:fs-700 text-gray-500"
                        altClassName="bg-white w-full p-2 outline-none lg:p-3 rounded"
                        divClassName="bg-white flex items-center border border-gray-400 mt-2 rounded"
                        {...field}
                      />
                    )}
                  />
                </div>
                </div>
              </div>
              <div className="self-end mt-8 lg:mt-0">
              <Controller
                    name="confirm_password"
                    control={control}
                    rules={{
                      required: {
                        value: true,
                        message: "Please enter your password",
                      },
                      validate: (val) => {
                        if (watch('new_password') != val) {
                          return "Your passwords do no match";
                        }
                      },
                    }}
                    render={({ field }) => (
                      <TextInput
                        type={InputType.password}
                        label="Confirm New Password"
                        error={errors.confirm_password?.message}
                        labelClassName="fw-500 lg:fs-700 text-gray-500"
                        altClassName="bg-white w-full p-2 outline-none lg:p-3 rounded"
                        divClassName="bg-white flex items-center  border border-gray-400 mt-2 rounded"
                        {...field}
                      />
                    )}
                  />
              </div>
            </div>
            <div className="text-end">
            <Button
                altClassname="py-2 lg:px-10 px-6 btn-primary"
                title={
                  isBusy ? <HashSpinner size={25} color="white" /> : "Edit"
                }
              />
            </div>
          </form>
    </div>
  )
}

export default ChangePassword