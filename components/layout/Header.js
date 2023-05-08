import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";
import { BsBell } from "react-icons/bs";
import { HiMenuAlt2 } from "react-icons/hi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useProSidebar } from "react-pro-sidebar";
import ProfileAvatar from "../UI/profileAvatar";
import { Menu, MenuHandler, MenuItem, MenuList, Button } from "../UI/dropdown";
import useModal from "@/hooks/useModal";
import { LogoutModal } from "../auth/LogoutModal";
import {  useSelector } from "react-redux";
import NotifyList from "../notification/NotifyList";
import { useGetProfileQuery } from "@/services/api/authSlice";

const Header = () => {
  const { Modal, setShowModal } = useModal();
  const auth = useSelector((state) => state.auth.auth);
  const { isLoading, isSuccess, data } = useGetProfileQuery();
  const [image, setImage] = useState(auth.image)
  
  useEffect(() => {
    setImage(data && data.data.image)
  },[data])

  const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } =
    useProSidebar();
  return (
    <div className="w-full px-4 py-3">
      <div className="flex w-full  items-center justify-between">
        <div className="flex items-center">
          <div className="lg:hidden">
            <HiMenuAlt2 onClick={() => toggleSidebar()} />
          </div>
          <div className="flex ml-3 items-center p-2 lg:w-72 border rounded-lg">
            <AiOutlineSearch className="text-xl mr-2" />
            <input
              className="w-full outline-none"
              placeholder="Search for data, user, docs"
            />
          </div>
        </div>
        <div className="flex items-center">
          <div className="relative">
            {/* <BsBell className="text-2xl" /> */}
            <p className="w-4 h-4 circle bg-red-600 absolute top-2 index-20 -right-1 grid place-content-center text-xs fw-600 text-white">
              3
            </p>
            <Menu placement="bottom-end">
              <MenuHandler>
                <Button className="bg-transparent px-0 mx-0 hover:shadow-none text-md flex items-center font-normal shadow-none text-black capitalize">
                  <BsBell className="text-2xl" />
                </Button>
              </MenuHandler>
              <MenuList className="!index-30 lg:w-72 p-0 rounded-none">
                <div className="bg-primary mb-3 text-white p-3 py-2">
                  <p className="fs-500">Notifications</p>
                </div>
                <NotifyList />
                <MenuItem className="border-t">
                  <Link
                    href="/"
                    className="w-full block text-primary fw-500 text-center"
                  >
                    See all recent activity
                  </Link>
                </MenuItem>
              </MenuList>
            </Menu>
          </div>
          <div className="lg:ml-12 ml-5 flex items-center">
            <Link href="/profile">
              {auth.photo ? (
                <Image
                  src={auth && image}
                  alt="logo"
                  width={300}
                  height={300}
                  className="w-12 h-12 circle"
                />
              ) : (
                <ProfileAvatar />
              )}
            </Link>
            <div className="hidden lg:flex items-center mx-4 ">
              <div>
                <p>{auth.firstName}</p>
                <p className="text-gray-600 mb-1 fs-500">CEO</p>
              </div>
              <Menu>
                <MenuHandler>
                  <Button className="bg-transparent px-0 mx-0 hover:shadow-none text-md flex items-center font-normal shadow-none text-black capitalize">
                    <RiArrowDropDownLine className="text-2xl" />
                  </Button>
                </MenuHandler>
                <MenuList className="!index-30 w-36">
                  <MenuItem>
                    <Link href="/profile">Profile</Link>
                  </MenuItem>
                  <MenuItem onClick={() => setShowModal(true)}>Logout</MenuItem>
                </MenuList>
              </Menu>
            </div>
          </div>
        </div>
      </div>
      <Modal title="" noHead>
        <LogoutModal CloseModal={() => setShowModal(false)} />
      </Modal>
    </div>
  );
};

export default Header;
