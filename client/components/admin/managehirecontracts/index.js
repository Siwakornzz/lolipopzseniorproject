import React from "react";
import { useQuery } from "@apollo/react-hooks";
import Router from "next/router";
import { QUERY_HIRECONTRACTS } from "../../../apollo/queries";
import ManageHirecontractsItem from "./ManageHirecontractsItem";

const ManageHirecontracts = () => {
  const { data } = useQuery(QUERY_HIRECONTRACTS, { fetchPolicy: "no-cache" });
  console.log(data);
  return (
    <div>
      <p> managehirecontracts</p>
      <button onClick={() => Router.push("/hirecontracts/createhirecontract")}>
        CreateHirecontract
      </button>
      {/* Header */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
          widht: "100%",
        }}
      >
        <h3 style={{ margin: "auto" }}>detail</h3>
        <h3 style={{ margin: "auto" }}>condition</h3>
        <h3 style={{ margin: "auto" }}>typeofwork</h3>
        <h3 style={{ margin: "auto" }}>budget</h3>
        <h3 style={{ margin: "auto" }}> Menu </h3>
      </div>

      {/* Body */}
      {data &&
        data.hirecontracts.length > 0 &&
        data.hirecontracts.map((hirecontract) => (
          <ManageHirecontractsItem
            key={hirecontract.id}
            hirecontract={hirecontract}
          />
        ))}
    </div>
  );
};

export default ManageHirecontracts;
