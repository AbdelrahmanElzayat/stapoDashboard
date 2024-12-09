import Image from "next/image";
import React, { useState } from "react";
import Visa from "../../../assets/icons/visa.svg";
import Apple from "../../../assets/icons/apple.svg";
import Mada from "../../../assets/icons/mada.svg";
import Selected from "../../../assets/icons/Selected.svg";
import NotSelected from "../../../assets/icons/notSelected.svg";
const PaymentOption = () => {
  const [payment, setPayment] = useState(1);
  return (
    <div className="PaymentOption w-full text-right">
      <h4 className="font-bold text-sm">طريقة الدفع</h4>
      <ul className="flex justify-center items-center gap-4 mt-5">
        <li
          className={`flex items-center justify-between gap-3 text-sm font-normal text-textPrimary px-4 py-3 rounded-lg transition-all ${
            payment === 1 ? "bg-[#FEF8DD] flex-1" : "#F3F6F5"
          } bg-[#F3F6F5] cursor-pointer`}
          onClick={() => setPayment(1)}
        >
          <div className="Paytype flex items-center gap-3">
            <Image src={Visa} alt="visa" />
            بطاقات الائتمان
          </div>
          <Image
            src={payment === 1 ? Selected : NotSelected}
            alt="Selected"
            style={{ justifySelf: "flex-end" }}
          />
        </li>
        <li
          className={`flex items-center justify-between gap-3 text-sm font-normal text-textPrimary px-4 py-3 rounded-lg transition-all ${
            payment === 2 ? "bg-[#FEF8DD] flex-1" : "#F3F6F5"
          } bg-[#F3F6F5] cursor-pointer`}
          onClick={() => setPayment(2)}
        >
          <div className="Paytype flex items-center gap-3 ">
            <Image src={Apple} alt="visa" />
            ابل باى
          </div>
          <Image
            src={payment === 2 ? Selected : NotSelected}
            alt="Selected"
            style={{ justifySelf: "flex-end" }}
          />
        </li>
        <li
          className={`flex items-center justify-between gap-3 text-sm font-normal text-textPrimary px-4 py-3 rounded-lg transition-all ${
            payment === 3 ? "bg-[#FEF8DD] flex-1" : "#F3F6F5"
          } bg-[#F3F6F5] cursor-pointer`}
          onClick={() => setPayment(3)}
        >
          <div className="Paytype flex items-center gap-3 ">
            <Image src={Mada} alt="visa" />
            مدى
          </div>
          <Image
            src={payment === 3 ? Selected : NotSelected}
            alt="Selected"
            style={{ justifySelf: "flex-end" }}
          />
        </li>
      </ul>
    </div>
  );
};

export default PaymentOption;
