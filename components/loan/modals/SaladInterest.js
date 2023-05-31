import { Button } from "@/components/UI/button";
import { InputType, TextInput } from "@/components/UI/textInput";
import React from "react";

const SaladInterest = () => {
  return (
    <div>
      <form>
      <div className="text-gray-400">
          <label>From</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-400 rounded mt-2"
            value={`3.5% per annum`}
          />
        </div>
        <div className="mt-4">
          <TextInput
            type={InputType.number}
            label="To"
          />
        </div>
        <div className="mt-6">
          <Button title="Change Interest Rate" />
        </div>
      </form>
    </div>
  );
};

export default SaladInterest;
