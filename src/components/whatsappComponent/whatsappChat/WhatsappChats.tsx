import Image from "next/image";
import React from "react";
import whatsapp from "../../../assets/icons/whatsappChat.svg";
import ChatsList from "./ChatsList";
import { Whatsapp } from "@/utils/types/HeaderInfoType";

interface whatsprops {
  data: Whatsapp[];
}
const WhatsappChats = ({ data }: whatsprops) => {
  return (
    <div className="w-full flex flex-col gap-5  mt-4 mx-auto">
      <div className="whatsappHeader w-full p-3 bg-[#A6CD61] rounded-lg flex justify-between">
        <Image src={whatsapp} alt="whatsapp" />
        <h3 className="text-white font-bold text-sm text-center flex-1">
          ربط التطبيق بواتساب للأعمال
        </h3>
      </div>
      <ChatsList data={data} />
    </div>
  );
};

export default WhatsappChats;
