import Link from "next/link";
import React from "react";

const FooterAuth = () => {
  return (
    <footer className="py-5 bg-[rgba(32,_35,_42,_.2)] z-50 relative">
      <div className="container flex justify-center items-center">
        <ul className="flex items-center justify-center gap-10 text-white text-xs font-normal">
          <li>
            <Link href={"##"}>خريطة الموقع</Link>
          </li>
          <li>
            <Link href={"##"}>الوصول</Link>
          </li>
          <li>
            <Link href={"##"}>المشاركة</Link>
          </li>
          <li>
            <Link href={"##"}>الخصوصية</Link>
          </li>
          <li>
            <Link href={"##"}>الاستخدام</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default FooterAuth;
