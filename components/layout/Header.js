import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsBell } from "react-icons/bs";
import { HiMenuAlt2 } from "react-icons/hi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useProSidebar } from "react-pro-sidebar";
import ProfileAvatar from "../UI/profileAvatar";
import {
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Button,
} from "../UI/dropdown";
import useModal from "@/hooks/useModal";
import { LogoutModal } from "../auth/LogoutModal";
import { useSelector } from "react-redux";

const Header = () => {
  const { Modal, setShowModal } = useModal();
  const user = useSelector((state) => state.user.user)
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
            <BsBell className="text-2xl" />
            <p className="w-3 h-3 circle bg-red-600 absolute -top-1 right-0"></p>
          </div>
          <div className="lg:ml-12 ml-5 flex items-center">
            <Link href="/profile">
              <ProfileAvatar />
              {/* <Image src='https://res.cloudinary.com/greenmouse-tech/image/upload/v1679581107/Stash/PHOTO-2022-10-21-09-00-15_1_z2kh53.png' alt='logo' width={300} height={300} className='w-12 circle'/> */}
            </Link>
            <div className="hidden lg:flex items-center mx-4 ">
              <div>
                <p>{user.firstName}</p>
                <p className="text-gray-600 mb-1 fs-500">CEO</p>
              </div>
              <Menu>
                <MenuHandler>
                  <Button className="bg-transparent px-0 mx-0 hover:shadow-none text-md flex items-center font-normal shadow-none text-black capitalize">
                    <RiArrowDropDownLine className="text-2xl" />
                  </Button>
                </MenuHandler>
                <MenuList className="!index-30 w-36">
                  <MenuItem><Link href='/profile'>Profile</Link></MenuItem>
                  <MenuItem>Logout</MenuItem>
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
