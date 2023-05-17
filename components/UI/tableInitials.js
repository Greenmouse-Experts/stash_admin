import React from "react";

export const Initials = ({ firstName, lastName }) => {
  return (
    <div className="bg-primary w-7 h-7 grid place-content-center text-white fw-600 text-xs circle">
      {firstName?.charAt(0)} {lastName?.charAt(0)}
    </div>
  );
};
