"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Logo from "../logo/Logo";
import NavLinks from "./NavLinks";
import logoutIcon from "../../assets/icons/logouticon.svg";
import closeIcon from "../../assets/icons/close.svg";
import logo from "../../assets/images/cirtify.png";
import { useMenu } from "@/utils/MenuContext";

const SideBar = () => {
  const { isMenuOpen, toggleMenu } = useMenu();
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isMenuOpen]);
  return (
    <>
      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden"
          onClick={toggleMenu}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:relative top-0 left-0 z-50 bg-white lg:bg-transparent shadow-lg lg:shadow-none transform flex flex-col gap-6 pt-5 pb-7 lg:min-h-[calc(100vh-32px)] h-[100vh] lg:max-h-full overflow-y-auto lg:overflow-visible ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 transition-transform duration-300 ease-in-out `}
      >
        {/* close */}
        <div
          className="close lg:hidden mx-4 absolute top-3 -right-1"
          onClick={toggleMenu}
        >
          <Image src={closeIcon} alt="close" />
        </div>
        {/* Logo */}
        <div className="mx-4 mt-4 lg:mx-0 lg:mt-0">
          <Logo />
        </div>

        {/* Points Card */}
        <div className="mx-4 lg:mx-0 p-4 pl-16 rounded-[14px] bg-gradient-to-b from-[#E4E9F8] via-[#FBEAFE] to-[#FBEAFE] flex items-center gap-4">
          <div className="w-16 h-16 bg-[#A78CD3] flex justify-center items-center rounded-full border-4 border-white">
            <Image src={logo} alt="Points Icon" width={30} height={30} />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="font-extrabold text-sm text-textSecondary text-right">
              نقاط شريـك
            </h4>
            <span className="font-light text-textPrimary">5000 نقطة</span>
            <div className="bg-[#A78CD3] rounded-full py-1 px-5 text-white text-sm font-light">
              150 ر.س
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <NavLinks />

        {/* Logout Button */}
        <div className="mt-auto lg:mt-24 px-4">
          <button
            className="flex items-center gap-3 text-textSecondary text-sm font-normal"
            onClick={() => alert("Logging out...")}
          >
            <Image src={logoutIcon} alt="Logout Icon" width={20} height={20} />
            تسجيل الخروج
          </button>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
