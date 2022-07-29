import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { Me } from "../../apollo/queries";
import Router from "next/router";
import SubcontractItem from "./SubcontractItem";

const ManageSubcontracts = () => {
  const { data } = useQuery(Me, { fetchPolicy: "no-cache" });
  console.log(data);
  return (
    <div>
      <div className="card">
        <div className="card-header text-center mt-1">MANAGESUBCONTRACTS</div>
        <div className="text-end">
          <button
            type="button"
            class="btn btn-warning ms-1 mt-1 me-3 "
            onClick={() => Router.push("/subcontracts/createsubcontract")}
          >
            <i class="bi bi-plus-circle-fill"></i> CREATESUBCONTRACT
          </button>
        </div>

        {/* Header */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr ",
            widht: "100%",
            border: "1px solid black",
            marginTop : '10px',
          }}
        >
          <h5 style={{ margin: "auto" }}>ID</h5>
          <h5 style={{ margin: "auto" }}>ชื่อทีม</h5>
          <h5 style={{ margin: "auto" }}>EMAIL</h5>
          <h5 style={{ margin: "auto" }}>สถานะ</h5>
          <h5 style={{ margin: "auto" }}>สร้างเมื่อ</h5>
          <h5 style={{ margin: "auto" }}> Menu </h5>
        </div>

        {/* Body */}
        {data &&
          data.user &&
          data.user.subcontracts.length > 0 &&
          data.user.subcontracts.map((subcontract) => (
            <SubcontractItem key={subcontract.id} subcontract={subcontract} />
          ))}
      </div>
    </div>
  );
};

export default ManageSubcontracts;
