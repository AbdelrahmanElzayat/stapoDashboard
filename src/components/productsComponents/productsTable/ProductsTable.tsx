"use client";
import React from "react";
import { TableColumn } from "react-data-table-component";
import { Products } from "@/utils/types/HeaderInfoType";
import Table from "@/components/HomeComponents/RequirementssTable/Table";
import HeadTableProducts from "./HeadTableProducts";

interface ReqTableProps<T> {
  data: T[];
  label: string;
}

const ProductsTable = <T extends Products>({
  data,
  label,
}: ReqTableProps<T>) => {
  const columns: TableColumn<Products>[] = [
    {
      name: "كود المنتج",
      selector: (row) => row.orderNumber,
      sortable: true,
    },
    {
      name: "اسم المنتـج",
      selector: (row) => row.productName,
      sortable: true,
    },
    {
      name: "رمز المنتج SKU",
      selector: (row) => row.SKU,
      sortable: true,
    },
    {
      name: "إجمالي المخـزون",
      selector: (row) => row.totalProducts,
      sortable: true,
    },
    {
      name: "حالـة المنتـج",
      selector: (row) => row.orderStatus,
      sortable: true,
    },
  ];

  return (
    <div className="w-full rounded-[14px] mt-4 border-[1px] border-[#e6e6e6] mx-auto p-4 text-right">
      <HeadTableProducts label={label} />
      <div className="overflow-x-auto w-full">
        <Table data={data} columns={columns} />
      </div>
    </div>
  );
};

export default ProductsTable;
