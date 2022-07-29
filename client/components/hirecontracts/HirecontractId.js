import { useQuery } from "@apollo/react-hooks";
import { useRouter } from "next/router";
import React from "react";
import { QUERY_HIRECONTRACT } from "../../apollo/queries";

const HirecontractId = () => {
  const route = useRouter();

  const { data, loading, error } = useQuery(QUERY_HIRECONTRACT, {
    variables: { id: route.query.hirecontractId },
  });

  if (error) {
    return <p> Something went wrong</p>;
  }

  if (loading) {
    return <p> Loading...</p>;
  }

  return (
    <div class="card">
      <div class="card-header mt-1 text-center">
        HIRECONTRACT
        <div class="card-body">
          <div className="row d-flex align-items-center justify-content-center h-100">
            {/* <!-- Create Subcontract Form --> */}
            <div className="col-md-7 col-lg-6 ml-auto">
              <form className="row g-3">
                <div className="row">
                  {/* <!--  Name --> */}
                  <div className="input-group col-md-6 mb-4">
                    <div className="input-group-prepend ">
                      <span className="input-group-text bg-white px-4 border-md border-right-0">
                        <i class="bi bi-person-fill"></i>
                      </span>
                    </div>
                    <input
                      className="form-control bg-white border-left-0 border-md col-md-6"
                      type="text"
                      name="condition"
                      placeholder="condition"
                      value={data?.hirecontract.condition}
                      readOnly
                    />
                  </div>
                  {/* <!-- Uesrname --> */}
                  <div className="input-group col-md-6 mb-4">
                    <div className="input-group-prepend">
                      <span className="input-group-text bg-white px-4 border-md border-right-0">
                        <i class="bi bi-person-circle"></i>
                      </span>
                    </div>
                    <input
                      type="text"
                      name="detail"
                      placeholder="detail"
                      value={data?.hirecontract.detail}
                      readOnly
                      className="form-control bg-white border-left-0 border-md col-md-6"
                    />
                  </div>
                  {/* <!-- Email Address --> */}
                  <div className="input-group col-md-6 mb-4">
                    <div className="input-group-prepend">
                      <span className="input-group-text bg-white px-4 border-md border-right-0">
                        <i class="bi bi-envelope-fill"></i>
                      </span>
                    </div>
                    <input
                      type="text"
                      name="typeofwork"
                      placeholder="typeofwork"
                      value={data?.hirecontract.typeofwork}
                      readOnly
                      className="form-control bg-white border-left-0 border-md col-md-6"
                    />
                  </div>
                  {/* <!-- Year skill --> */}
                  <div className="input-group col-md-6 mb-4">
                    <div className="input-group-prepend">
                      <span className="input-group-text bg-white px-4 border-md border-right-0">
                        <i class="bi bi-award-fill"></i>
                      </span>
                    </div>
                    <input
                      type="number"
                      name="budget"
                      placeholder="budget"
                      value={data?.hirecontract.budget}
                      readOnly
                      className="form-control bg-white border-left-0 border-md col-md-6"
                    />
                  </div>
                  {/* <!-- Phone Number --> */}
                  <div className="input-group col-md-6 mb-4">
                    <div className="input-group-prepend">
                      <span className="input-group-text bg-white px-4 border-md border-right-0">
                        <i class="bi bi-phone-fill"></i>
                      </span>
                    </div>

                    <input
                      type="text"
                      name="zone"
                      placeholder="zone"
                      value={data?.hirecontract.zone}
                      readOnly
                      className="form-control bg-white border-md border-left-0 pl-3"
                    />
                  </div>
                  {/* <!-- skill --> */}
                  <div className="input-group col-md-6 mb-4">
                    <div className="input-group-prepend">
                      <span className="input-group-text bg-white px-4 border-md border-right-0">
                        <i class="bi bi-laptop-fill"></i>
                      </span>
                    </div>
                    <input
                      type="number"
                      name="duration"
                      placeholder="duration (  Days )"
                      value={data?.hirecontract.duration}
                      readOnly
                      className="form-control bg-white border-left-0 border-md col-md-6"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HirecontractId;
