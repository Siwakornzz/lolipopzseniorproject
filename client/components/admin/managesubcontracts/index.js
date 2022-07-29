import React from "react";
import { useQuery } from "@apollo/react-hooks";
import Router from "next/router";
import { QUERY_SUBCONTRACTS } from "../../../apollo/queries";
import ManageSubcontractsItem from "./ManageSubcontractsItem";

const Managesubcontracts = () => {
  const { data } = useQuery(QUERY_SUBCONTRACTS, { fetchPolicy: "no-cache" });
  console.log(data);
  return (
    <div>
      <p> managesubcontracts</p>
      <button onClick={() => Router.push("/subcontracts/createsubcontract")}>
        CreateSubcontract
      </button>
      {/* Header */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
          widht: "100%",
        }}
      >
        <h3 style={{ margin: "auto" }}>Name</h3>
        <h3 style={{ margin: "auto" }}>Accountnumber</h3>
        <h3 style={{ margin: "auto" }}>Status</h3>
        <h3 style={{ margin: "auto" }}>Created At</h3>
        <h3 style={{ margin: "auto" }}> Menu </h3>
      </div>

      {/* Body */}
      {data &&
        data.subcontracts.length > 0 &&
        data.subcontracts.map((subcontract) => (
          <ManageSubcontractsItem
            key={subcontract.id}
            subcontract={subcontract}
          />
        ))}
    </div>
  );
};

export default Managesubcontracts;
