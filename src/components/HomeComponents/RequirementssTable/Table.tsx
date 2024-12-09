"use client";
import React from "react";
import DataTable, { TableColumn } from "react-data-table-component";

interface ReqTableProps<T> {
  data: T[];
  columns: TableColumn<T>[];
}

const Table = <T extends { id: number }>({
  data,
  columns,
}: ReqTableProps<T>) => {
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
