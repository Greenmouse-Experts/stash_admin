import React, {useState} from "react";
import { Button } from "@/components/UI/button";
import { HashSpinner } from "@/components/UI/spinners";
import { InputType, TextInput } from "@/components/UI/textInput";
import { useLazyUpdateSavingsRateQuery } from "@/services/api/saveSlice";
import { encryptPayload } from "@/services/helpers";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";

const FixedSavings = ({ type, rate, rate2, closeModal, refetch }) => {
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
      interest2: "",
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
          closeModal();
          refetch();
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
            value={`${rate}% to ${rate2}% per annum`}
          />
        </div>
        <div className="mt-4">
          <label>To</label>
          <div className="lg:flex items-center">
            <div className="mt-2 w-6/12 pr-5">
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
            <div className="mt-2 w-6/12 pl-5">
              <Controller
                name="interest2"
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: "Please enter your email",
                  },
                }}
                render={({ field }) => (
                  <TextInput
                    error={errors.interest2?.message}
                    type={InputType.text}
                    labelClassName="fw-500 lg:fs-700 text-gray-500"
                    altClassName="bg-white w-full p-2 outline-none lg:px-3 rounded"
                    divClassName="bg-white flex items-center  border border-gray-400 mt-2 rounded"
                    {...field}
                  />
                )}
              />
            </div>
          </div>
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

export default FixedSavings;
