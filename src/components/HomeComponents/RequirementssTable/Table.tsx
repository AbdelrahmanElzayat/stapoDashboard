"use client";
import Image from "next/image";
import React from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import actions from "../../../assets/icons/actions.svg";
interface Order {
  id: number;
  orderNumber: string;
  client: string;
  orderDate: string;
  store: string;
  ship: string;
  price: string;
  totalAmount: string;
  orderStatus: string;
  payStatus: string;
}

const Table = () => {
  const data: Order[] = [
    {
      id: 1,
      orderNumber: "43231",
      client: "عبدالرحمن الزيات",
      orderDate: "13th Jan 2021",
      store: "لوحة التحكم",
      ship: "شركة الشحن",
      price: "50 ر.س",
      totalAmount: "2500 SR",
      orderStatus: "جاهز",
      payStatus: "غير مدفوع",
    },
    {
      id: 1,
      orderNumber: "43231",
      client: "عبدالرحمن الزيات",
      orderDate: "13th Jan 2021",
      store: "لوحة التحكم",
      ship: "شركة الشحن",
      price: "50 ر.س",
      totalAmount: "2500 SR",
      orderStatus: "جاهز",
      payStatus: "غير مدفوع",
    },
    {
      id: 1,
      orderNumber: "43231",
      client: "عبدالرحمن الزيات",
      orderDate: "13th Jan 2021",
      store: "لوحة التحكم",
      ship: "شركة الشحن",
      price: "50 ر.س",
      totalAmount: "2500 SR",
      orderStatus: "جاهز",
      payStatus: "غير مدفوع",
    },
  ];

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
        <div className="cursor-pointer">
          <Image src={actions} alt="actions" />
        </div>
      ),
    },
  ];
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null; // Render nothing during SSR
  return (
    <DataTable
    //   title="طلبات المتجر"
      columns={columns}
      data={data}
      pagination
      highlightOnHover
      //   customStyles={{
      //     rows: {
      //       style: {
      //         minHeight: "40px", // تصغير الطول
      //         fontSize: "12px",
      //         color: "#000",
      //         fontWeight: "400",
      //       },
      //     },
      //     headCells: {
      //       style: {
      //         fontWeight: "300",
      //         fontSize: "11px",
      //         color: "#4C4C4C",
      //       },
      //     },
      //   }}
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
      style={{
        overflowX: "auto", // التمرير الأفقي في حالة تجاوز العرض
        width: "100%",
        maxWidth: "100%",
      }}
    />
  );
};

export default Table;
