"use client";
import Image from "next/image";
import Link from "next/link";
import { BsBank, BsGear } from "react-icons/bs";
import { MdOutlineDashboard } from "react-icons/md";
import { HiOutlineCreditCard } from "react-icons/hi";
import { Sidebar, SubMenu, Menu, MenuItem } from "react-pro-sidebar";
import { FaRegUser } from "react-icons/fa";
import { FiLifeBuoy } from "react-icons/fi";
import { TfiShiftLeft } from "react-icons/tfi";
import { RiBriefcaseLine } from "react-icons/ri";
import useModal from "@/hooks/useModal";
import { LogoutModal } from "../auth/LogoutModal";

export default function SidebarLayout() {
  const { Modal, setShowModal } = useModal();

  return (
    <div className="left-0 fixed index-30 h-screen bg-secondary">
      <Sidebar
        customBreakPoint="960px"
        className="h-screen w-64 fs-700 fw-500 text-white "
        backgroundColor="linear-gradient(90deg, #6B5AED 0%, #8D7EFF 100%)"
      >
        <div className="pb-5">
          <Link href="/dashboard">
            <Image
              src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1679578815/Stash/Group_48096158_1_c9v8u8.png"
              alt="logo"
              width={300}
              height={300}
              className="w-36 mb-5 ml-6 pt-5 "
            />
          </Link>
        </div>
        <Menu
          transitionDuration={600}
          menuItemStyles={{
            button: ({ level, active, disabled }) => {
              if (level === 0)
                return {
                  color: disabled ? "#ffff" : "#fff",
                  backgroundColor: active ? "#6151DD" : undefined,
                  "&:hover": {
                    backgroundColor: "#6151DD !important",
                    color: "white !important",
                    borderRadius: "10px !important",
                    fontWeight: "bold !important",
                  },
                };
            },
          }}
        >
          <MenuItem
            component={<Link href="/dashboard" />}
            icon={<MdOutlineDashboard />}
          >
            Dashboard
          </MenuItem>
          <MenuItem component={<Link href="/save" />} icon={<BsBank />}>
            Savings
          </MenuItem>
          <MenuItem
            component={<Link href="/spend" />}
            icon={<HiOutlineCreditCard />}
          >
            Spend
          </MenuItem>
          <MenuItem
            component={<Link href="/loans" />}
            icon={
              <Image
                src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1681819742/Stash/Borrow_icon_wjpmd3.png"
                alt="pos"
                width={80}
                height={80}
                className="w-5"
              />
            }
          >
            Loans
          </MenuItem>
          <MenuItem component={<Link href="/customers" />} icon={<FaRegUser />}>
            Customers
          </MenuItem>
          <MenuItem
            component={<Link href="/pos" />}
            icon={
              <Image
                src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1681819742/Stash/pos-machine-2_2_1_ddcvsu.png"
                alt="pos"
                width={80}
                height={80}
                className="w-45"
              />
            }
          >
            POS
          </MenuItem>
          <MenuItem
            component={<Link href="/business" />}
            icon={<RiBriefcaseLine />}
          >
            Business
          </MenuItem>
          <MenuItem
            component={<Link href="/complaints" />}
            icon={<FiLifeBuoy />}
          >
            Complaints
          </MenuItem>
          <SubMenu
            label="Settings"
            icon={<BsGear />}
          >
            <MenuItem
              className="!hover:bg-[#6151DD]"
              component={<Link href="/settings" />}
            >
              Manage Staff
            </MenuItem>
            <MenuItem component={<Link href="/settings/customers" />}>
              Manage Clients
            </MenuItem>
            <MenuItem component={<Link href="/settings/logs" />}>Logs</MenuItem>
          </SubMenu>
          <MenuItem
            className="mt-12"
            icon={<TfiShiftLeft />}
            onClick={() => setShowModal(true)}
          >
            Logout
          </MenuItem>
        </Menu>
      </Sidebar>
      <Modal title="" noHead>
        <LogoutModal CloseModal={() => setShowModal(false)} />
      </Modal>
    </div>
  );
}
