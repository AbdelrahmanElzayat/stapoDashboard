import SettingStore from "@/components/brandingComponents/SettingStore";
import HeaderStatistics from "@/components/headerStatistics/HeaderStatistics";
const page = () => {
  return (
    <div>
      <HeaderStatistics
        title={"هوية المتجر"}
        des={"إعدادات هويـة المتجـر الخـاص بـك"}
      />
      <SettingStore />
    </div>
  );
};

export default page;
