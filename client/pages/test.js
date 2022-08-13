import { useQuery } from "@apollo/client";
import { DataArray } from "@mui/icons-material";
import MUIDataTable from "mui-datatables";
import React, { useState } from "react";
import { QUERY_HIRECONTRACTS } from "../apollo/queries";

const test = () => {
  const { data, loading, error } = useQuery(QUERY_HIRECONTRACTS, {});
  const columns = ["Name", "Company", "City", "State"];
  const datas = [
    ["Joe James", "Test Corp", "Yonkers", "NY"],
    ["John Walsh", "Test Corp", "Hartford", "CT"],
    ["Bob Herm", "Test Corp", "Tampa", "FL"],
    ["James Houston", "Test Corp", "Dallas", "TX"],
  ];

  const options = {
    filterType: "checkbox",
  };

  return (
    <>
      <MUIDataTable
        title={"ตารางคำร้องของผู้ว่าจ้าง"}
        data={datas}
        columns={columns}
        options={options}
      />
    </>
  );
};

export default test;
