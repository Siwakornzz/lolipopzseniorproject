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

      {/* Body */}
      <div class="container">
        <div class="row">
          {data &&
            data.user &&
            data.user.hirecontracts.length > 0 &&
            data.user.hirecontracts.map((hirecontract) => (
              <div class="col-md-4">
                <HirecontractItem
                  key={hirecontract.id}
                  hirecontract={hirecontract}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Managehirecontracts;
