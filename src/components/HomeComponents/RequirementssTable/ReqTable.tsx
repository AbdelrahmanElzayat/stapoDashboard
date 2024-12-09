"use client";
import React, { useState } from "react";
import HeadReqTable from "./HeadReqTable";
import Table from "./Table";
import { TableColumn } from "react-data-table-component";
import { Order } from "@/utils/types/HeaderInfoType";
import AcceptModalExample from "@/components/modals/AcceptModal";
import CancelModal from "@/components/modals/CancelModal";
import Image from "next/image";
import actions from "../../../assets/icons/actions.svg";
import EditOrder from "@/components/modals/EditOrder";

interface ReqTableProps<T> {
  data: T[];
  label: string;
}

const ReqTable = <T extends Order>({ data, label }: ReqTableProps<T>) => {
  const [openRowId, setOpenRowId] = React.useState<number | null>(null);

  const toggleDropdown = (rowId: number) => {
    setOpenRowId((prev) => (prev === rowId ? null : rowId));
  };

  const [openModalAccept, setOpenModalAccept] = useState(false);
  const [openModalCancel, setOpenModalCancel] = useState(false);
  const [openModalEdit, setOpenModalEdit] = React.useState(false);

  const acceptOrder = () => {
    setOpenModalAccept(true);
  };
  const cancelOrder = () => {
    setOpenModalCancel(true);
  };
  const editOrder = () => {
    setOpenModalEdit(true);
  };
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
                    acceptOrder();
                    toggleDropdown(row.id);
                  }}
                >
                  تأكيد الطلب
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => toggleDropdown(row.id)}
                >
                  تعديل الطلب
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    cancelOrder();
                    toggleDropdown(row.id);
                  }}
                >
                  إلغاء الطلب
                </li>
              </ul>
            </div>
          )}
        </>
      ),
      ignoreRowClick: true,
      // allowOverflow: true,
      // button: true,
    },
  ];

  return (
    <div className="w-full rounded-[14px] mt-4 border-[1px] border-[#e6e6e6] mx-auto p-4 text-right">
      <HeadReqTable label={label} />
      <div className="overflow-x-auto w-full">
        <Table data={data} columns={columns} />
        <AcceptModalExample
          open={openModalAccept}
          setOpen={setOpenModalAccept}
        />
        <CancelModal open={openModalCancel} setOpen={setOpenModalCancel} />
        <EditOrder open={openModalEdit} setOpen={setOpenModalEdit} />
      </div>
    </div>
  );
};

export default ReqTable;
