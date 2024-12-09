"use client";
import Image from "next/image";
import React from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import actions from "../../../assets/icons/actions.svg";
import { useState } from "react";
interface ReqTableProps<T> {
  data: T[];
  columns: TableColumn<T>[];
}

const Table = <T extends { id: number }>({
  data,
  columns,
}: ReqTableProps<T>) => {
  const [openRowId, setOpenRowId] = React.useState<number | null>(null);

  const toggleDropdown = (rowId: number) => {
    setOpenRowId((prev) => (prev === rowId ? null : rowId));
  };

  const [openModalAccept, setOpenModalAccept] = useState(false);
  const [openModalCancel, setOpenModalCancel] = useState(false);
  const acceptOrder = () => {
    setOpenModalAccept(true);
  };
  const cancelOrder = () => {
    setOpenModalCancel(true);
  };
  // const actionsColumn: TableColumn<T> = {
  //   name: "الإجراءات",
  //   cell: (row) => (
  //     <>
  //       <div
  //         className="cursor-pointer"
  //         onClick={() => toggleDropdown(row.id)} // استخدام معرف الصف
  //       >
  //         <Image src={actions} alt="actions" />
  //       </div>
  //       {openRowId === row.id && ( // تحقق إذا كان هذا الصف هو المفتوح
  //         <div className="absolute -right-24 bottom-0 mt-2 w-fit bg-white border border-gray-200 rounded-md shadow-lg z-[1000]">
  //           <ul className="py-1 text-[10px]">
  //             <li
  //               className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
  //               onClick={() => {
  //                 acceptOrder();
  //                 toggleDropdown(row.id);
  //               }}
  //             >
  //               تأكيد الطلب
  //             </li>
  //             <li
  //               className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
  //               onClick={() => toggleDropdown(row.id)}
  //             >
  //               تعديل الطلب
  //             </li>
  //             <li
  //               className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
  //               onClick={() => {
  //                 cancelOrder();
  //                 toggleDropdown(row.id);
  //               }}
  //             >
  //               إلغاء الطلب
  //             </li>
  //           </ul>
  //         </div>
  //       )}
  //     </>
  //   ),
  //   ignoreRowClick: true,
  //   allowOverflow: true,
  //   button: true,
  // };
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null; // Render nothing during SSR
  return (
    <>
      <DataTable
        columns={columns}
        data={data}
        pagination
        highlightOnHover
        customStyles={{
          rows: {
            style: {
              minHeight: "40px", // تصغير الطول
              fontSize: "12px",
              color: "#000",
              fontWeight: "400",
            },
          },
          headCells: {
            style: {
              fontWeight: "300",
              fontSize: "11px",
              color: "#4C4C4C",
            },
          },
        }}
        responsive
      />
    </>
  );
};

export default Table;
