import React from "react";

export const Initials = ({ firstName, lastName, big }) => {
  return (
    <div className={`bg-primary grid place-content-center text-white fw-600  circle ${big? "w-24 h-24 lg:text-4xl" : "w-7 h-7 text-xs"}`}>
      {firstName?.charAt(0)} {lastName?.charAt(0)}
    </div>
  );
};
