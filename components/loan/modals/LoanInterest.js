import React, { useState } from "react";
import { Button } from "@/components/UI/button";
import { InputType, TextInput } from "@/components/UI/textInput";
import { useLazyUpdateLoanRateQuery } from "@/services/api/loanSlice";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { FormatLoanType } from "@/components/formats/formatItem";
import { HashSpinner } from "@/components/UI/spinners";
import { encryptPayload } from "@/services/helpers";

const LoanInterest = ({ type, closeModal }) => {
  const [isBusy, setIsBusy] = useState(false);
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      interest_rate: "",
    },
  });
  const [update] = useLazyUpdateLoanRateQuery();

  const onSubmit = async (data) => {
    setIsBusy(true);
    let payload = encryptPayload(data);
    const id = FormatLoanType[type];
    await update({ id, payload })
      .then((res) => {
        if (res.isSuccess) {
          toast.success(res.data.msg);
          setIsBusy(false);
          closeModal();
          // refetch();
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
            value={`3.5% per annum`}
          />
        </div>
        <div className="mt-4">
          <Controller
            name="interest_rate"
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
                error={errors.interest_rate?.message}
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
              isBusy ? (
                <HashSpinner size={25} color="white" />
              ) : (
                "Change interest rate"
              )
            }
            disabled={!isValid}
          />
        </div>
      </form>
    </div>
  );
};

export default LoanInterest;
