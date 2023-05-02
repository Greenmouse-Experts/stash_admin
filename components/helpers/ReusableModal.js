import React from "react";
import { Button } from "../UI/button";

const ReusableModal = ({
  title,
  closeModal,
  action,
  cancelTitle,
  actionTitle,
}) => {
  return (
    <div>
      <div className="px-6">{title}</div>
      <div className="w-full mt-8 flex justify-between">
        <Button altClassname='py-2 px-3 lg:px-6 rounded  bg-red-600 text-white' title={cancelTitle} onClick={closeModal} />
        <Button altClassname='py-2 px-3 lg:px-6 rounded bg-primary text-white' title={actionTitle} onClick={action} />
      </div>
    </div>
  );
};

export default ReusableModal;
