"use client";
import React from "react";
import { TableColumn } from "react-data-table-component";
import { AbandonedData } from "@/utils/types/HeaderInfoType";
import Table from "@/components/HomeComponents/RequirementssTable/Table";
import HeadAbandTable from "./HeadAbandTable";
import Image from "next/image";
import Delete from "../../../assets/icons/deleteIcon.svg";
import Notify from "../../../assets/icons/notifyRing.svg";
interface ReqTableProps<T> {
  data: T[];
  label: string;
}

const AbandonedTable = <T extends AbandonedData>({
  data,
  label,
}: ReqTableProps<T>) => {
  const columnsAbandoned: TableColumn<AbandonedData>[] = [
    {
      name: "العميل",
      selector: (row) => row.client,
      sortable: true,
    },
    {
      name: "المصدر",
      selector: (row) => row.store,
      sortable: true,
    },
    {
      name: "الإجمالي",
      selector: (row) => row.totalAmount,
      sortable: true,
    },
    {
      name: "تاريخ الطلب",
      selector: (row) => row.orderDate,
      sortable: true,
    },
    {
      name: "رقم الطلب",
      selector: (row) => row.cart,
      sortable: true,
    },
    {
      name: "الإجراءات",
      cell: (row) => (
        <div className="flex items-center gap-2">
          <div className="cursor-pointer">
            <Image src={Notify} alt="Notify" />
          </div>
          <div className="cursor-pointer">
            <Image src={Delete} alt="delete" />
          </div>
        </div>
      ),
      ignoreRowClick: true,
      // allowOverflow: true,
      // button: true,
    },
  ];
  return (
    <div className="w-full rounded-[14px] mt-4 border-[1px] border-[#e6e6e6] mx-auto p-4 text-right">
      <HeadAbandTable label={label} />
      <div className="overflow-x-auto w-full">
        <Table data={data} columns={columnsAbandoned} />
      </div>
    </div>
  );
};

export default AbandonedTable;
