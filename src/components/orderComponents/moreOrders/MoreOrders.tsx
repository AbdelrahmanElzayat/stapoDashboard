import Image from "next/image";
import React from "react";
import closeMore from "../../../assets/icons/closeMore.svg";
import stapo from "../../../assets/images/logo.svg";
import style from "./More.module.css";
const MoreOrders = () => {
  return (
    <section className="MoreOrders my-4 w-full px-4 py-1 flex justify-between items-center rounded-[14px] bg-gradient-to-b from-[#E4E9F8] via-[#FBEAFE] to-[#FBEAFE]">
      <div className="contentMore">
        <span
          className={`font-bold text-[#414141] ${style.moreTitle} custom-stroke`}
        >
          المزيـد من المبيعـات؟
        </span>
        <p
          className={`${style.moreDesc} custom-stroke text-sm font-light text-[#414141]`}
        >
          انضم لمزيد الحين و خلى الكل يشوف منتجاتـك
        </p>
      </div>
      <Image
        src={stapo}
        alt="logo"
        width={200}
        height={80}
        style={{ opacity: 0.04 }}
      />
      <div className="btnsMore flex items-center gap-2">
        <button className="bg-[#A78CD3] rounded-lg text-white text-sm py-[6px] px-5 font-normal">
          اشترك في مزيـد
        </button>
        <button>
          <Image src={closeMore} alt="close" />
        </button>
      </div>
    </section>
  );
};

export default MoreOrders;
