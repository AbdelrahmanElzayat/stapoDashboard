import React from "react";
import HeadReqTable from "./HeadReqTable";
import Table from "./Table";

const ReqTable = () => {
  return (
    <div className="w-full rounded-[14px] mt-4 border-[1px] border-[#e6e6e6] mx-auto p-4 text-right">
      <HeadReqTable />
      <div className="overflow-x-auto w-full">
        <Table />
      </div>
    </div>
  );
};

export default ReqTable;
