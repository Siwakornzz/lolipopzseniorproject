import React from "react";
import { useQuery } from "@apollo/react-hooks";
import Router from "next/router";
import { QUERY_HIRECONTRACTS } from "../../../apollo/queries";
import ManageHirecontractsItem from "./ManageHirecontractsItem";

const ManageHirecontracts = () => {
  const { data } = useQuery(QUERY_HIRECONTRACTS, { fetchPolicy: "no-cache" });
  console.log(data);
  return (
    <>
      <div className="card">
        <div className="card-header text-center mt-1">
          จัดการคำร้องขอการจ้างงาน (ผู้ประสานงาน)
        </div>
      </div>
      <div className="text-end">
        <button
          type="button"
          class="btn btn-warning ms-1 mt-2 mb-2 me-3 "
          onClick={() => Router.push("/hirecontracts/createhirecontract")}
        >
          <i class="bi bi-plus-circle-fill"></i> สร้างคำร้องขอการจ้างงาน
        </button>
      </div>

      {/* Body */}
      <div class="row row-cols-1 row-cols-md-3 g-4  ">
        {data &&
          data.hirecontracts.length > 0 &&
          data.hirecontracts.map((hirecontract, index) => (
            <div class="col">
              <div class="card mx-auto" style={{ width: "30rem" }}>
                <ManageHirecontractsItem
                  key={hirecontract.id}
                  hirecontract={hirecontract}
                  num={index + 1}
                />
              </div>
            </div>
          ))}
      </div>

     
    </>
  );
};

export default ManageHirecontracts;
