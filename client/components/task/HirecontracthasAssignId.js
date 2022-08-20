import Router, { useRouter } from "next/router";
import React from "react";
import { useMutation, useQuery } from "@apollo/client";
import { Me, QUERY_HIRECONTRACT } from "../../apollo/queries";
import Swal from "sweetalert2";
import {
  SUBCONTRACT_ACCEPTHIRECONTRACT,
  SUBCONTRACT_DENIEDTHIRECONTRACT,
} from "../../apollo/mutations";

const HirecontracthasAssignId = () => {
  const route = useRouter();
  const id = route?.query?.hirecontracthasAssignId;
  const { data, loading, error } = useQuery(QUERY_HIRECONTRACT, {
    variables: { id: id },
  });

  const handleAcceptwork = async () => {
    Swal.fire({
      title: "LOLIPOPZ",
      text: "คุณจะรับงานใช่หรือไม่ ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "ใช่",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await acceptHirecontract({
            variables: {
              id: id,
            },
          })
            .then(() => {
              Swal.fire("LOLIPOPZ", "รับคำร้องการจ้าง สำเร็จ !", "success");
            })
            .then(() => Router.push("/task"));
        } catch (error) {
          console.log(error);
        }
      }
    });
  };

  const handleDeniedwork = async () => {
    Swal.fire({
      title: "LOLIPOPZ",
      text: "คุณจะปฎิเสธงานใช่หรือไม่ ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "ใช่",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await deniedHirecontract({
            variables: {
              id: id,
            },
          })
            .then(() => {
              Swal.fire("LOLIPOPZ", "ปฎิเสธคำร้องการจ้าง สำเร็จ !", "success");
            })
            .then(() => Router.push("/task"));
        } catch (error) {
          console.log(error);
        }
      }
    });
  };

  const [acceptHirecontract] = useMutation(SUBCONTRACT_ACCEPTHIRECONTRACT, {
    onCompleted: (data, loading, error) => {
      if (data) {
        console.log(data);
      }
    },
  });
  const [deniedHirecontract] = useMutation(SUBCONTRACT_DENIEDTHIRECONTRACT, {
    onCompleted: (data, loading, error) => {
      if (data) {
        console.log(data);
      }
    },
  });

  if (loading) {
    return <p> Loading...</p>;
  }
  if (error) {
    return <p> Something went wrong</p>;
  }

  return (
    <>
      <div class="container">
        <div class="card mx-auto mt-2" style={{ width: "50rem" }}>
          <div class="card-header mt-1 text-center">
            HIRECONTRACT
            <div class="card">
              <div class="card-body mt-4">
                <div className="row d-flex align-items-center justify-content-center h-100">
                  {/* <!-- Create Subcontract Form --> */}
                  <div className="col-md-7 col-lg-6 ml-auto">
                    <div className="row g-3">
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
                            defaultValue={data?.hirecontract.condition}
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
                        <div class="text-end">
                          <div class="card-footer mt-2 ">
                            <small class="text-muted">
                              <button
                                class="btn btn-primary me-2 ms-2"
                                onClick={async () => await handleAcceptwork()}
                              >
                                รับงาน
                              </button>
                            </small>
                            <button
                              class="btn btn-danger me-2 ms-2"
                              onClick={async () => await handleDeniedwork()}
                            >
                              ปฎิเสธงาน
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HirecontracthasAssignId;
