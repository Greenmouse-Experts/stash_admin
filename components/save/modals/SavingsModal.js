import React, { useState } from "react";
import { useLazyUpdateSavingsRateQuery } from "@/services/api/saveSlice";
import { Controller, useForm } from "react-hook-form";
import { InputType, TextInput } from "@/components/UI/textInput";
import { Button } from "@/components/UI/button";
import { HashSpinner } from "@/components/UI/spinners";
import { encryptPayload } from "@/services/helpers";
import { toast } from "react-toastify";

const SavingsModal = ({ type,rate, closeModal, refetch }) => {
  const [isBusy, setIsBusy] = useState(false);
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      interest: "",
    },
  });
  const [update] = useLazyUpdateSavingsRateQuery();

  const onSubmit = async (data) => {
    setIsBusy(true);
    let payload = encryptPayload(data);
    await update({ type, payload })
      .then((res) => {
        if (res.isSuccess) {
          toast.success(res.data.msg);
          setIsBusy(false);
          closeModal()
          refetch()
        }

        if (res.isError) {
          toast.error(res.error.data.msg);
          setIsBusy(false);
        }
      })
      .catch((err) => {
        toast.error("Update Failed");
        setIsBusy(false);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="text-gray-400">
          <label>From</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-400 rounded mt-2"
            value={`${rate}% per annum`}
          />
        </div>
        <div className="mt-4">
          <Controller
            name="interest"
            control={control}
            rules={{
              required: {
                value: true,
                message: "Please enter your email",
              },
            }}
            render={({ field }) => (
              <TextInput
              label="To"
                placeholder=""
                error={errors.interest?.message}
                type={InputType.text}
                        labelClassName="fw-500 lg:fs-700 text-gray-500"
                        altClassName="bg-white w-full p-2 outline-none lg:px-3 rounded"
                        divClassName="bg-white flex items-center  border border-gray-400 mt-2 rounded"
                {...field}
              />
            )}
          />
        </div>
        <div className="text-end mt-8">
          <Button
            title={
              isBusy ? <HashSpinner size={25} color="white" /> : "Save Change"
            }
            disabled={!isValid}
          />
        </div>
      </form>
    </div>
  );
};

export default SavingsModal;
