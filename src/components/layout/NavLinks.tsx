"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import homeIcon from "../../assets/icons/home.svg";
import talabat from "../../assets/icons/talabat.svg";
import clients from "../../assets/icons/clients.svg";
import fwater from "../../assets/icons/fwater.svg";
import marketing from "../../assets/icons/marketing.svg";
import products from "../../assets/icons/products.svg";
import aboutStore from "../../assets/icons/aboutStore.svg";
import user from "../../assets/icons/user.svg";
import mobile from "../../assets/icons/mobile.svg";
import whatsapp from "../../assets/icons/whatsapp.svg";

// import { useRouter } from "next/router";
import style from "./header.module.css";
import { usePathname } from "next/navigation";
const NavLinks = () => {
  //   const router = useRouter();
  //   const { pathname } = router;
  const pathname = usePathname();
  return (
    <>
      <nav>
        <ul className="flex flex-col gap-5">
          <li className="mr-3">
            <Link
              href={"/"}
              className={`flex items-center gap-2 text-sm font-normal text-textPrimary ${
                pathname === "/" ? style.active : ""
              }`}
            >
              <Image src={homeIcon} alt="home icon" />
              الرئيسية
            </Link>
          </li>
          <li className="mr-3">
            <Link
              href={"/orders"}
              className={`flex items-center gap-2 text-sm font-normal text-textPrimary ${
                pathname === "/orders" ? style.active : ""
              }`}
            >
              <Image src={talabat} alt="talabat icon" />
              الطلبـات
            </Link>
          </li>
          <li className="mr-3">
            <Link
              href={"/products"}
              className={`flex items-center gap-2 text-sm font-normal text-textPrimary ${
                pathname === "/products" ? style.active : ""
              }`}
            >
              <Image src={products} alt="products icon" />
              المنتجـات
            </Link>
          </li>
          <li className="mr-3">
            <Link
              href={"/marketing"}
              className={`flex items-center gap-2 text-sm font-normal text-textPrimary ${
                pathname === "/marketing" ? style.active : ""
              }`}
            >
              <Image src={marketing} alt="marketing icon" />
              التسويـق
            </Link>
          </li>
          <li className="mr-3">
            <Link
              href={"/clients"}
              className={`flex items-center gap-2 text-sm font-normal text-textPrimary ${
                pathname === "/clients" ? style.active : ""
              }`}
            >
              <Image src={clients} alt="clients icon" />
              العمـلاء
            </Link>
          </li>
          <li className="mr-3">
            <Link
              href={"/invoices"}
              className={`flex items-center gap-2 text-sm font-normal text-textPrimary ${
                pathname === "/invoices" ? style.active : ""
              }`}
            >
              <Image src={fwater} alt="fwater icon" />
              الفواتيـر
            </Link>
          </li>
        </ul>
      </nav>
      <div className="settings mr-3">
        <span className="text-textSecondary text-sm font-light relative">
          الاعدادات
          <span className="absolute bottom-1 right-20 w-32 h-[1.5px] bg-[#D5DCE1]"></span>
        </span>
        <ul className="flex flex-col gap-5 mt-6">
          <li>
            <Link
              href={"/branding"}
              className={`flex items-center gap-2 text-sm font-normal text-textPrimary ${
                pathname === "/branding" ? style.active : ""
              }`}
            >
              <Image src={aboutStore} alt="aboutStore icon" />
              هوية المتجر
            </Link>
          </li>
          <li>
            <Link
              href={"/settings"}
              className={`flex items-center gap-2 text-sm font-normal text-textPrimary ${
                pathname === "/settings" ? style.active : ""
              }`}
            >
              <Image src={user} alt="user icon" />
              إعددادات الحساب
            </Link>
          </li>
          <li>
            <Link
              href={"/mobile-app"}
              className={`flex items-center gap-2 text-sm font-normal text-textPrimary ${
                pathname === "/mobile-app" ? style.active : ""
              }`}
            >
              <Image src={mobile} alt="mobile icon" />
              تطبيق الجوال
            </Link>
          </li>
          <li>
            <Link
              href={"/whatsapp-settings"}
              className={`flex items-center gap-2 text-sm font-normal text-textPrimary ${
                pathname === "/whatsapp-settings" ? style.active : ""
              }`}
            >
              <Image src={whatsapp} alt="whatsapp icon" />
              إعدادات واتساب
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavLinks;
