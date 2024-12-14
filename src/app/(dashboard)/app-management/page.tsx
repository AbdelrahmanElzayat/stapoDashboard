import NotificationsTable from "@/components/appComponents/notificationsTable/NotificationsTable";
import StartScreen from "@/components/appComponents/startScreenFile/StartScreen";
import HeaderStatistics from "@/components/headerStatistics/HeaderStatistics";
import NotificationsData from "../../../Data/NotificationsData.json";
import AdsData from "../../../Data/AdsData.json";
import { Ads, Notifications } from "@/utils/types/HeaderInfoType";
import AdsTable from "@/components/appComponents/AdsTable/AdsTable";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stapo - App-management",
};

const page = () => {
  const data: Notifications[] = NotificationsData;
  const Adsdata: Ads[] = AdsData;

  return (
    <div className="">
      <HeaderStatistics
        title={"إعدادات تطبيق الجوال"}
        des={"إعداد وتخصيص واجهة المستخدم و إدارة الإعلانات"}
      />
      <div className="grid grid-cols-3 gap-5">
        <div className="col-span-3 lg:col-span-1 h-full max-h-screen">
          <StartScreen />
        </div>
        <div className="col-span-3 lg:col-span-2 flex flex-col">
          <NotificationsTable data={data} label={"الاشعارات"} />
          <AdsTable data={Adsdata} label={"الإعلانـات"} />
        </div>
      </div>
    </div>
  );
};

export default page;
