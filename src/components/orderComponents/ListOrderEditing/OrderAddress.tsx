"use client";
import React, { useState } from "react";
import EditAddress from "../../../assets/icons/editAddress.svg";
import Image from "next/image";
import style from "./productList.module.css";
const OrderAddress = () => {
  const [editable, setEditable] = useState<boolean>(false);
  const [address, setAddress] = useState<string>(
    "مبنى رقم 456، شارع الملك فهد، حي العليا مدينـة الرياض المملكة العربية السعودية"
  );
  return (
    <div className="ProductInfo-address flex justify-between items-center w-full border-b-[1px] pb-3">
      <div className="addressInput flex flex-col items-start gap-2  w-full">
        <label
          htmlFor="address"
          className="text-textPrimary font-bold text-sm text-right capitalize"
        >
          عنوان التوصيـل
        </label>
        <textarea
          className={`w-[50%] min-h-[50px] text-sm  resize-none font-light text-textPrimary bg-transparent p-1 outline-none rounded-lg ${
            editable
              ? "border-[1px] border-[#E8E8E8] focus:border-gray-400"
              : ""
          } ${style.noscrollbar}`}
          value={address}
          disabled={!editable}
          onChange={(e) => setAddress(e.target.value)}
          onInput={(e) => {
            const target = e.target as HTMLTextAreaElement;
            target.style.height = "auto"; // إعادة التهيئة للطول الافتراضي
            target.style.height = `${target.scrollHeight}px`; // تحديث الطول بناءً على المحتوى
          }}
        />
      </div>
      <button className="editAddress" onClick={() => setEditable(!editable)}>
        <Image src={EditAddress} alt="edit" />
      </button>
    </div>
  );
};

export default OrderAddress;
