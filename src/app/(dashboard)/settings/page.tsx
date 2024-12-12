import React from 'react'
import HeaderStatistics from "@/components/headerStatistics/HeaderStatistics";
import StoreInfo from '@/components/settingsComponents/storeInfo/StoreInfo';

const page = () => {
  return (
    <div>
      <HeaderStatistics
        title={"إعدادات الحساب"}
        des={"تخصيص بيانات الحساب و إدارة الصلاحيات"}
      />
      <StoreInfo />
    </div>
  );
}

export default page