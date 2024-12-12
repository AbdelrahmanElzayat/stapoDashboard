import React from "react";
import HeaderStatistics from "@/components/headerStatistics/HeaderStatistics";
import StoreInfo from "@/components/settingsComponents/storeInfo/StoreInfo";
import UserPermissionsTable from "@/components/settingsComponents/usersPermissions/UserPermissionsTable";
import { Permissions } from "@/utils/types/HeaderInfoType";
import permissionData from "../../../Data/UserPermissions.json";

const page = () => {
  const data: Permissions[] = permissionData;
  return (
    <div>
      <HeaderStatistics
        title={"إعدادات الحساب"}
        des={"تخصيص بيانات الحساب و إدارة الصلاحيات"}
      />
      <StoreInfo />
      <UserPermissionsTable data={data} label={"صلاحيات المستخدمين"} />
    </div>
  );
};

export default page;
