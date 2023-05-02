import React from "react";
import { MenuItem } from "../UI/dropdown";
import Image from "next/image";

const NotifyList = () => {
  const list = [
    {
      image:
        "https://res.cloudinary.com/greenmouse-tech/image/upload/v1683040974/Stash/tar2_vlnzzf.png",
      id: 4,
      message: "started a save as you earn plan",
      name: "Avarta aang",
      time: "1 hour ago",
    },
    {
      image:
        "https://res.cloudinary.com/greenmouse-tech/image/upload/v1683040975/Stash/tar4_hj3eie.png",
      id: 445,
      message: "requested a POS terminal",
      name: "Blonde Mash",
      time: "5 mins ago",
    },
    {
      image:
        "https://res.cloudinary.com/greenmouse-tech/image/upload/v1683040975/Stash/tar1_jrb7gc.png",
      id: 4903,
      message: "requested a loan amout for business",
      name: "Cart Nome",
      time: "23 mins ago",
    },
  ];

  return (
    <>
      {list.map((item) => (
        <MenuItem key={item.id}>
          <div className="flex gap-x-4">
            <Image
              src={item.image}
              alt="profile"
              width={150}
              height={150}
              className='w-10 h-10 cicle'
            />
            <div>
                <p className="fs-300"><span>{item.name}</span> {item.message}</p>
                <p className="text-xs ">{item.time}</p>
            </div>
          </div>
        </MenuItem>
      ))}
    </>
  );
};

export default NotifyList;
