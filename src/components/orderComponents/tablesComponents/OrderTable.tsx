"use client";
import React from "react";
import HeadReqTable from "./HeadOrderTable";
import { TableColumn } from "react-data-table-component";
import { Order } from "@/utils/types/HeaderInfoType";
import Table from "@/components/HomeComponents/RequirementssTable/Table";

interface ReqTableProps<T> {
  data: T[];
  label: string;
}

const OrderTable = <T extends Order>({
  data,
  label,
}: ReqTableProps<T>) => {
  const columns: TableColumn<Order>[] = [
    {
      name: "رقم الطلب",
      selector: (row) => row.orderNumber,
      sortable: true,
    },
    {
      name: "العميل",
      selector: (row) => row.client,
      sortable: true,
    },
    {
      name: "تاريخ الطلب",
      selector: (row) => row.orderDate,
      sortable: true,
    },
    {
      name: "المصدر",
      selector: (row) => row.store,
      sortable: true,
    },
    {
      name: "الشحن",
      selector: (row) => row.ship,
      sortable: true,
    },
    {
      name: "الرسوم",
      selector: (row) => row.price,
      sortable: true,
    },
    {
      name: "الإجمالي",
      selector: (row) => row.totalAmount,
      sortable: true,
    },
    {
      name: "حالة الطلب",
      selector: (row) => row.orderStatus,
      sortable: true,
    },
    {
      name: "حالة الدفع",
      selector: (row) => row.payStatus,
      sortable: true,
    },
  ];

  return (
    <div className="w-full rounded-[14px] mt-4 border-[1px] border-[#e6e6e6] mx-auto p-4 text-right">
      <HeadReqTable label={label} />
      <div className="overflow-x-auto w-full">
        <Table data={data} columns={columns} />
      </div>
    </div>
  );
};

export default OrderTable;
