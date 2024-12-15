"use client";
import Image from "next/image";
import React from "react";
import notification from "../../assets/icons/notification.svg";
import arrow from "../../assets/icons/arrow.svg";
import messages from "../../assets/icons/messages.svg";
import user from "../../assets/images/user.png";
import Link from "next/link";
import { useMenu } from "@/utils/MenuContext";
import ProfileModal from "../modals/ProfileModal";
const Header = () => {
  const { isMenuOpen, toggleMenu } = useMenu();
  const [openModalProfile, setOpenModalProfile] = React.useState(false);
  const openProfileModal = () => {
    setOpenModalProfile(true);
  };
  return (
    <>
      <header className="header flex justify-between items-center w-full xl:gap-24 gap-4">
        <div className="menu cursor-pointer lg:hidden" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="20"
            height="20"
            viewBox="0 0 50 50"
          >
            <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path>
          </svg>
        </div>
        <div className="notifyRequirement hidden sm:flex flex-col lg:flex-row gap-2 justify-between items-center bg-[#FFF7EA] p-2 md:p-3 rounded-lg lg:flex-1">
          <div className="requirment-number flex justify-center items-center gap-4">
            <Image src={notification} alt="requirment-number" />
            <span className="font-normal text-[11px] sm:text-[13px]">
              الطلب <sub className="mx-1">S 7384-293741</sub> في انتظار اجرائك
            </span>
          </div>
          <div className="check-requirement">
            <Link
              href={"/"}
              className="flex items-center gap-4 text-textPrimary font-bold text-[13px]"
            >
              تحقق من الطلب <Image src={arrow} alt="arrow-icon" />
            </Link>
          </div>
        </div>
        <div className="user flex justify-center items-center gap-2 sm:gap-4 lg:gap-12 relative">
          <span className="md:absolute top-[50%] left-[75%] -translate-x-[50%] -translate-y-[50%] w-[1px] h-4 bg-[#E8E8E8]"></span>
          <Link href={"/"}>
            <Image src={messages} alt="messages-icon" />
          </Link>
          <div className="userInfo flex justify-center items-center gap-4">
            <div
              className="userImage cursor-pointer rounded-full w-8 h-8 md:w-10 md:h-10 overflow-hidden relative z-50 border-2 border-white"
              onClick={() => {
                openProfileModal();
              }}
            >
              <Image
                src={user}
                alt="user"
                width={100}
                height={100}
                objectFit="cover"
              />
            </div>
              <ProfileModal
                open={openModalProfile}
                setOpen={setOpenModalProfile}
              />
            <div className="userData md:flex flex-col hidden">
              <h6
                className="text-textSecondary text-sm font-semibold m-0"
                style={{ lineHeight: "1" }}
              >
                khalid saied
              </h6>
              <Link href={"/"} className="text-xs text-[#A5A5A5] font-normal">
                الإعدادات
              </Link>
            </div>
          </div>
        </div>
      </header>
      <div className="notifyRequirement flex sm:hidden mt-4 flex-col lg:flex-row gap-2 justify-between items-center bg-[#FFF7EA] p-2 md:p-3 rounded-lg lg:flex-1">
        <div className="requirment-number flex justify-center items-center gap-4">
          <Image src={notification} alt="requirment-number" />
          <span className="font-normal text-[11px] sm:text-[13px]">
            الطلب <sub className="mx-1">S 7384-293741</sub> في انتظار اجرائك
          </span>
        </div>
        <div className="check-requirement">
          <Link
            href={"/"}
            className="flex items-center gap-4 text-textPrimary font-bold text-[13px]"
          >
            تحقق من الطلب <Image src={arrow} alt="arrow-icon" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
