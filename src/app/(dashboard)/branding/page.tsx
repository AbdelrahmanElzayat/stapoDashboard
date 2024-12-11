import SettingStore from "@/components/brandingComponents/SettingStore";
import ThemeStore from "@/components/brandingComponents/ThemeStore";
import HeaderStatistics from "@/components/headerStatistics/HeaderStatistics";
import ThemesData from "../../../Data/Themes.json";
import { ThemesType } from "@/utils/types/HeaderInfoType";
const page = () => {
  const themesData: ThemesType[] = ThemesData;
  return (
    <div>
      <HeaderStatistics
        title={"هوية المتجر"}
        des={"إعدادات هويـة المتجـر الخـاص بـك"}
      />
      <SettingStore />
      <ThemeStore themes={themesData} />
    </div>
  );
};

export default page;
