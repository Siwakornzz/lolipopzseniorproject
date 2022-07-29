import { useMutation } from "@apollo/react-hooks";
import { Router } from "next/router";
import React, { useState } from "react";
import { CREATE_HIRECONTRACT } from "../../apollo/mutations";
import { QUERY_HIRECONTRACTS } from "../../apollo/queries";

const CreateHirecontract = () => {
  const [hirecontractData, setHirecontractData] = useState({});
  console.log(hirecontractData);
  const [createHirecontract, { loading, error }] = useMutation(
    CREATE_HIRECONTRACT,
    {
      variables: {
        ...hirecontractData,
        budget: +hirecontractData.budget,
        duration: +hirecontractData.duration,
      },
      refetchQueries: [{ query: QUERY_HIRECONTRACTS }],
    }
  );

  const handleChange = (e) => {
    setHirecontractData({
      ...hirecontractData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const result = await createHirecontract();
      console.log(result);
      alert("Create Hirecontract Success");
      Router.reload(window.location.pathname);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div class="card">
      <div class="card-header mt-1 text-center">
        CREATE HIRECONTRACT
        <div class="card-body">
          <div className="row d-flex align-items-center justify-content-center h-100">
            {/* <!-- Create Subcontract Form --> */}
            <div className="col-md-7 col-lg-6 ml-auto">
              <form className="row g-3" onSubmit={handleSubmit}>
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
                      placeholder="รายละเอียดงาน"
                      value={hirecontractData.condition}
                      onChange={handleChange}
                      required
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
                      placeholder="ภาษาโปรแกรมที่ใช้"
                      value={hirecontractData.detail}
                      onChange={handleChange}
                      required
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
                      placeholder="รูปแบบการทำงาน"
                      value={hirecontractData.typeofwork}
                      onChange={handleChange}
                      required
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
                      placeholder="งบประมาณ"
                      value={hirecontractData.budget}
                      onChange={handleChange}
                      required
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
                      placeholder="พื้นที่รับงาน"
                      value={hirecontractData.zone}
                      onChange={handleChange}
                      required
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
                      placeholder="ระยะเวลาการทำงาน (เดือน) "
                      value={hirecontractData.duration}
                      onChange={handleChange}
                      required
                      className="form-control bg-white border-left-0 border-md col-md-6"
                    />
                  </div>

                  {/* <!-- Submit Button --> */}
                  <div className="form-group col-lg-12 text-center">
                    <button
                      className="btn btn-primary btn-block py-2 w-100" type="submit"
                    >
                      <span className="font-weight-bold">
                        CREATE YOUR HIRECONTRACT
                      </span>
                    </button>
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

export default CreateHirecontract;
