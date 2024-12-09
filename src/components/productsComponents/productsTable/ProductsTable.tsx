"use client";
import React from "react";
import { TableColumn } from "react-data-table-component";
import { Products } from "@/utils/types/HeaderInfoType";
import Table from "@/components/HomeComponents/RequirementssTable/Table";
import HeadTableProducts from "./HeadTableProducts";
import actions from "../../../assets/icons/actions.svg";
import Image from "next/image";
import DeleteFromStore from "@/components/modals/DeleteFromStore";
import DeleteProduct from "@/components/modals/DeleteProduct";

interface ReqTableProps<T> {
  data: T[];
  label: string;
}

const ProductsTable = <T extends Products>({
  data,
  label,
}: ReqTableProps<T>) => {
  const [openRowId, setOpenRowId] = React.useState<number | null>(null);

  const toggleDropdown = (rowId: number) => {
    setOpenRowId((prev) => (prev === rowId ? null : rowId));
  };

  const [openModalAccept, setOpenModalAccept] = React.useState(false);
  const [openModalCancel, setOpenModalCancel] = React.useState(false);
  const acceptOrder = () => {
    setOpenModalAccept(true);
  };
  const cancelOrder = () => {
    setOpenModalCancel(true);
  };
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
                  onClick={() => toggleDropdown(row.id)}
                >
                  تعديل المنتج
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    acceptOrder();
                    toggleDropdown(row.id);
                  }}
                >
                  رفع من المتجر
                </li>

                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    cancelOrder();
                    toggleDropdown(row.id);
                  }}
                >
                  حذف المنتج
                </li>
              </ul>
            </div>
          )}
        </>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];

  return (
    <div className="w-full rounded-[14px] mt-4 border-[1px] border-[#e6e6e6] mx-auto p-4 text-right">
      <HeadTableProducts label={label} />
      <div className="overflow-x-auto w-full">
        <Table data={data} columns={columns} />
        <DeleteFromStore open={openModalAccept} setOpen={setOpenModalAccept} />
        <DeleteProduct open={openModalCancel} setOpen={setOpenModalCancel} />
      </div>
    </div>
  );
};

export default ProductsTable;
