import Image from "next/image";
import React from "react";
import searchIcon from "../../../assets/icons/search.svg";
import action from "../../../assets/icons/actions.svg";
import imgUser from "../../../assets/images/user.png";
import { Whatsapp } from "@/utils/types/HeaderInfoType";
interface whatsprops {
  data: Whatsapp[];
}
const ChatsList = ({ data }: whatsprops) => {
  return (
    <div className="w-full rounded-[14px] border-[1px] border-[#e6e6e6] mx-auto p-4 text-right">
      <div className="flex items-center justify-between flex-wrap gap-2">
        <h4 className="text-[#414141] text-sm lg:text-lg font-bold">
          عرض محادثات الواتساب
        </h4>
        <div className="search relative">
          <input
            className="border-b-[1px] pr-5 block border-[#DCDFE4] outline-none w-full"
            type="text"
            placeholder="ابحث هنا"
          />
          <div className="absolute top-1/2 -translate-y-1/2 right-0">
            <Image src={searchIcon} alt="search" />
          </div>
        </div>
      </div>
      <div className="chatsList max-h-[800px] overflow-y-auto mt-4 flex flex-col gap-4">
        {data?.map((item: Whatsapp) => (
          <div
            className="chatCard flex justify-between items-center gap-4"
            key={item?.id}
          >
            <div className="userData flex items-center gap-2 md:gap-4">
              <div className="userImg w-8 h-8 sm:w-11 sm:h-11 overflow-hidden rounded-xl shrink-0">
                <Image
                  src={imgUser}
                  alt="user"
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                />
              </div>
              <div className="userContent flex flex-col">
                <h5 className="text-[#484849] text-xs md:text-sm font-semibold text-right leading-tight">
                  {item?.userName}
                </h5>
                <p className="line-clamp-1 text-xs font-normal text-[#484849] text-right opacity-[.6]">
                  {item?.userMessage}
                </p>
              </div>
            </div>
            <div className="userAction flex flex-col items-end gap-2  shrink-0">
              <button>
                <Image src={action} alt="action" />
              </button>
              <span className="text-xs font-normal text-[#484849] text-right opacity-[.6]">
                {item?.timeAgo}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatsList;
