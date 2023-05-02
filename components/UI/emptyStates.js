import Image from "next/image";
import React from "react";

export const EmptyState1 = ({ message }) => {
  return (
    <div className="w-full py-8">
      <Image
        src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1683024584/Stash/empty_states_1_apiyki.png"
        alt="empty"
        width={400}
        height={400}
        className="lg:w-56 w-40 mx-auto"
      />
      <p className="text-center mt-5 mr-3">{message}</p>
    </div>
  );
};
