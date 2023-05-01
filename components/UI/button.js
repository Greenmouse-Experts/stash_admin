import React from "react";

export const Button = ({ title, onClick, capitalize, disabled, isBusy, altClassname }) => {
  return (
    <div className={disabled? "opacity-75 " : ""}>
      <button className={altClassname || `py-3 lg:text-lg w-full btn-primary ${disabled? 'cursor-not-allowed' : ''}`} onClick={onClick ? onClick : undefined} >
      {isBusy ? (
          "loading"
        ) : capitalize ? (
          title.toUpperCase()
        ) : (
          title
        )}
      </button>
    </div>
  );
};
