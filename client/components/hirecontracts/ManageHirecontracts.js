import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { Me } from "../../apollo/queries";
import Router from "next/router";
import HirecontractItem from "./HirecontractItem";

const Managehirecontracts = () => {
  const { data } = useQuery(Me, { fetchPolicy: "no-cache" });

  console.log(data);
  return (
    <div>
      <div className="card">
        <div className="card-header text-center mt-1">MANAGEHIRECONTRACTS</div>
      </div>
      <div className="text-end">
        <button
          type="button"
          class="btn btn-warning ms-1 mt-1 me-3 "
          onClick={() => Router.push("/hirecontracts/createhirecontract")}
        >
          <i class="bi bi-plus-circle-fill"></i> CREATEHIRECONTRACT
        </button>
      </div>

      {/* Header */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr",
          widht: "100%",
          border: "1px solid black",
          marginTop : '10px',
        }}
      >
        <h5 style={{ margin: "auto" }}> ID </h5>
        <h5 style={{ margin: "auto" }}> รายละเอียด</h5>
        <h5 style={{ margin: "auto" }}>เงื่อนไข</h5>
        <h5 style={{ margin: "auto" }}>ประเภทของงาน</h5>
        <h5 style={{ margin: "auto" }}>งบประมาณ</h5>
        <h5 style={{ margin: "auto" }}>สร้างเมื่อ</h5>
        <h5 style={{ margin: "auto" }}> เมนู </h5>
      </div>

      {/* Body */}
      {data &&
        data.user &&
        data.user.hirecontracts.length > 0 &&
        data.user.hirecontracts.map((hirecontract) => (
          <HirecontractItem key={hirecontract.id} hirecontract={hirecontract} />
        ))}
    </div>
  );
};

export default Managehirecontracts;
