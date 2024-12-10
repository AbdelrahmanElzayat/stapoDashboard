"use client";
import React from "react";
import HeadDiscountTable from "./HeadDiscountTable";
import { TableColumn } from "react-data-table-component";
import { DiscountsType } from "@/utils/types/HeaderInfoType";
import Table from "@/components/HomeComponents/RequirementssTable/Table";
import Image from "next/image";
import actions from "../../../assets/icons/actions.svg";
import EditDiscount from "@/components/modals/EditDiscount";
import DeleteDiscount from "@/components/modals/DeleteDiscount";

interface QouponTableProps<T> {
  data: T[];
  label: string;
}

const DiscountTable = <T extends DiscountsType>({
  data,
  label,
}: QouponTableProps<T>) => {
  const [openRowId, setOpenRowId] = React.useState<number | null>(null);

  const toggleDropdown = (rowId: number) => {
    setOpenRowId((prev) => (prev === rowId ? null : rowId));
  };

  const [openModalCancel, setOpenModalCancel] = React.useState(false);
  const [openModalEdit, setOpenModalEdit] = React.useState(false);
  const editDiscount = () => {
    setOpenModalEdit(true);
  };
  const deleteDiscount = () => {
    setOpenModalCancel(true);
  };
  const columns: TableColumn<DiscountsType>[] = [
    {
      name: "نسبة الخصم",
      selector: (row) => row.discountPercentage,
      sortable: true,
    },
    {
      name: "فئـة المنتجـات",
      selector: (row) => row.category,
      sortable: true,
    },
    {
      name: "تاريخ النهاية",
      selector: (row) => row.endDate,
      sortable: true,
    },
    {
      name: "حالة الكود",
      selector: (row) => row.couponStatus,
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
                    editDiscount();
                    toggleDropdown(row.id);
                  }}
                >
                  تعديل الخصم
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    deleteDiscount();
                    toggleDropdown(row.id);
                  }}
                >
                  حذف الخصم
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
      <HeadDiscountTable label={label} />
      <div className="overflow-x-auto w-full">
        <Table data={data} columns={columns} />
        <DeleteDiscount open={openModalCancel} setOpen={setOpenModalCancel} />
        <EditDiscount open={openModalEdit} setOpen={setOpenModalEdit} />
      </div>
    </div>
  );
};

export default DiscountTable;
