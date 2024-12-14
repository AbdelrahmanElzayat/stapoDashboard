import HeaderStatistics from "@/components/headerStatistics/HeaderStatistics";
import AutoMessages from "@/components/whatsappComponent/customMessages/AutoMessages";
import WhatsappChats from "@/components/whatsappComponent/whatsappChat/WhatsappChats";
import whatsData from "../../../Data/Whatsapp.json";
import { Whatsapp } from "@/utils/types/HeaderInfoType";
const page = () => {
  const whatsappData: Whatsapp[] = whatsData;
  return (
    <div className="">
      <HeaderStatistics
        title={"إعدادات واتساب"}
        des={"إدارة التكامل مع واتساب و تخصيص الرسائل"}
      />
      <div className="grid grid-cols-3 gap-5">
        <div className="col-span-3 lg:col-span-1 h-full">
          <AutoMessages />
        </div>
        <div className="col-span-3 lg:col-span-2">
          <WhatsappChats data={whatsappData} />
        </div>
      </div>
    </div>
  );
};

export default page;
