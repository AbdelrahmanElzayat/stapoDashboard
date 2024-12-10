"use client";
import React from "react";
import HeadLoyaltyTable from "./HeadLoyaltyTable";
import { TableColumn } from "react-data-table-component";
import { LoyaltyData } from "@/utils/types/HeaderInfoType";
import Table from "@/components/HomeComponents/RequirementssTable/Table";
import Image from "next/image";
import actions from "../../../assets/icons/actions.svg";
import AcceptModalExample from "@/components/modals/AcceptModal";
import CancelModal from "@/components/modals/CancelModal";
import EditOrder from "@/components/modals/EditOrder";

interface QouponTableProps<T> {
  data: T[];
  label: string;
}

const LoyaltyTable = <T extends LoyaltyData>({
  data,
  label,
}: QouponTableProps<T>) => {
  const [openRowId, setOpenRowId] = React.useState<number | null>(null);

  const toggleDropdown = (rowId: number) => {
    setOpenRowId((prev) => (prev === rowId ? null : rowId));
  };

  const [openModalCancel, setOpenModalCancel] = React.useState(false);
  const cancelOrder = () => {
    setOpenModalCancel(true);
  };
  const columns: TableColumn<LoyaltyData>[] = [
    {
      name: "كود البرنامـج",
      selector: (row) => row.programCode,
      sortable: true,
    },
    {
      name: "النوع",
      selector: (row) => row.type,
      sortable: true,
    },
    {
      name: "كمية المبيعات",
      selector: (row) => row.qty,
      sortable: true,
    },
    {
      name: "تاريخ الانشاء",
      selector: (row) => row.startDate,
      sortable: true,
    },
    {
      name: "حالة الرنامج",
      selector: (row) => row.programStatus,
      sortable: true,
    },
    {
      name: "الإجراءات",
      cell: (row) => (
        <>
          <div
            className="cursor-pointer"
            onClick={() => toggleDropdown(row.id)} // استخدام معرف الصف
          >
            <Image src={actions} alt="actions" />
          </div>
          {openRowId === row.id && ( // تحقق إذا كان هذا الصف هو المفتوح
            <div className="absolute -right-24 bottom-0 mt-2 w-fit bg-white border border-gray-200 rounded-md shadow-lg z-[1000]">
              <ul className="py-1 text-[10px]">
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    toggleDropdown(row.id);
                  }}
                >
                  تعديل البرنامج
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    cancelOrder();
                    toggleDropdown(row.id);
                  }}
                >
                  حذف البرنامج
                </li>
              </ul>
            </div>
          )}
        </>
      ),
      ignoreRowClick: true,
    },
  ];

  return (
    <div className="w-full rounded-[14px] mt-4 border-[1px] border-[#e6e6e6] mx-auto py-4 px-2 text-right">
      <HeadLoyaltyTable label={label} />
      <div className="overflow-x-auto w-full">
        <Table data={data} columns={columns} />
        <CancelModal open={openModalCancel} setOpen={setOpenModalCancel} />
      </div>
    </div>
  );
};

export default LoyaltyTable;
