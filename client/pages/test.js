import { useQuery } from "@apollo/client";
import { DataArray } from "@mui/icons-material";
import MUIDataTable from "mui-datatables";
import React, { useEffect, useState } from "react";
import { QUERY_HIRECONTRACTS } from "../apollo/queries";

const test = () => {
  const [dataHirecontract, setDataHirecontract] = useState({});

  useEffect(() => {
    () =>
      useQuery(QUERY_HIRECONTRACTS, {
        onCompleted: (data) => {
          setDataHirecontract(data.hirecontracts);
        },
      });
  });

  if (dataHirecontract) {
    // console.log(data.hirecontracts);
    console.log(dataHirecontract);
    // console.table(data.hirecontracts)
  }

  console.log(dataHirecontract);
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
