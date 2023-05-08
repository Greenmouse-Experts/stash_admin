import React from "react";
import { HashLoader } from "react-spinners";

export const HashSpinner = ({ size, color }) => {
  return (
    <HashLoader
      color={color}
      size={size}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export const PreLoader = () => {
  return (
    <div className="w-full grid place-content-center">
      <div className="figure">
        <div className="dote white"></div>
        <div className="dote"></div>
        <div className="dote"></div>
        <div className="dote"></div>
        <div className="dote"></div>
      </div>
    </div>
  );
};
