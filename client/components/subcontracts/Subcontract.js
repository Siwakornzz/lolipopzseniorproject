import { useQuery } from "@apollo/react-hooks";
import { useRouter } from "next/router";
import React from "react";
import { QUERY_SUBCONTRACT } from "../../apollo/queries";

const Subcontract = () => {
  const route = useRouter();
  console.log(route);
  const { data, loading, error } = useQuery(QUERY_SUBCONTRACT, {
    variables: { id: route.query.subcontractId },
  });

  if (error) {
    return <p> Something went wrong</p>;
  }

  if (loading) {
    return <p> Loading...</p>;
  }

  // if (!user) {
  //   return <><p> Something went wrong</p> <p> Try to login !</p></>;

  // } else {
  return (
    <div class="card">
      <div class="card-header mt-1 text-center">
        SUBCONTRACT
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
                      name="name"
                      value={data?.subcontract.name}
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
                      name="username"
                      value={data?.subcontract.username}
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
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={data?.subcontract.email}
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
                      name="yearskill"
                      placeholder="Year skill"
                      value={data?.subcontract.yearskill}
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
                      type="tel"
                      name="tel"
                      placeholder="Phone Number"
                      value={data?.subcontract.tel}
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
                      type="text"
                      name="skill"
                      placeholder="Skill (HTML,PHP,CSS)"
                      value={data?.subcontract.skill}
                      readOnly
                      className="form-control bg-white border-left-0 border-md col-md-6"
                    />
                  </div>
                  {/* <!-- Nature of work --> */}
                  <div className="input-group col-md-6 mb-4">
                    <div className="input-group-prepend">
                      <span className="input-group-text bg-white px-4 border-md border-right-0">
                        <i class="bi bi-file-person"></i>
                      </span>
                    </div>
                    <input
                      type="text"
                      name="natureofwork"
                      placeholder="Nature of work"
                      value={data?.subcontract.natureofwork}
                      readOnly
                      className="form-control bg-white border-left-0 border-md col-md-6"
                    />
                  </div>
                  {/* <!-- Member --> */}
                  <div className="input-group col-md-6 mb-4">
                    <div className="input-group-prepend">
                      <span className="input-group-text bg-white px-4 border-md border-right-0">
                        <i class="bi bi-file-earmark-text-fill"></i>
                      </span>
                    </div>
                    <input
                      type="number"
                      name="member"
                      placeholder="Member"
                      value={data?.subcontract.member}
                      readOnly
                      className="form-control bg-white border-left-0 border-md col-md-6"
                    />
                  </div>
                  {/* <!-- Id card --> */}
                  <div className="input-group col-md-6 mb-4">
                    <div className="input-group-prepend">
                      <span className="input-group-text bg-white px-4 border-md border-right-0">
                        <i class="bi bi-postcard-fill"></i>
                      </span>
                    </div>
                    <input
                      type="text"
                      name="idcard"
                      placeholder="ID Card"
                      value={data?.subcontract.idcard}
                      readOnly
                      className="form-control bg-white border-left-0 border-md col-md-6"
                    />
                  </div>
                  {/* <!-- Line ID --> */}
                  <div className="input-group col-md-6 mb-4">
                    <div className="input-group-prepend">
                      <span className="input-group-text bg-white px-4 border-md border-right-0">
                        <i class="bi bi-line"></i>
                      </span>
                    </div>
                    <input
                      type="text"
                      name="lineid"
                      placeholder="Line ID"
                      value={data?.subcontract.lineid}
                      readOnly
                      className="form-control bg-white border-left-0 border-md col-md-6"
                    />
                  </div>
                  {/* <!-- CITY--> */}
                  <div className="input-group col-md-6 mb-4">
                    <div className="input-group-prepend">
                      <span className="input-group-text bg-white px-4 border-md border-right-0">
                        <i class="bi bi-geo-alt-fill"></i>
                      </span>
                    </div>
                    <input
                      type="text"
                      name="city"
                      placeholder="City"
                      value={data?.subcontract.city}
                      readOnly
                      className="form-control bg-white border-left-0 border-md col-md-6"
                    />
                  </div>

                  {/* <!-- Province --> */}
                  <div className="input-group col-md-6 mb-4">
                    <div className="input-group-prepend">
                      <span className="input-group-text bg-white px-4 border-md border-right-0">
                        <i class="bi bi-geo-alt-fill"></i>
                      </span>
                    </div>
                    <input
                      type="text"
                      name="province"
                      placeholder="Province"
                      value={data?.subcontract.province}
                      readOnly
                      className="form-control bg-white border-left-0 border-md col-md-6"
                    />
                  </div>
                  {/* <!-- District --> */}
                  <div className="input-group col-md-6 mb-4">
                    <div className="input-group-prepend">
                      <span className="input-group-text bg-white px-4 border-md border-right-0">
                        <i class="bi bi-pin-map-fill"></i>
                      </span>
                    </div>
                    <input
                      type="text"
                      name="district"
                      placeholder="District"
                      value={data?.subcontract.district}
                      readOnly
                      className="form-control bg-white border-left-0 border-md col-md-6"
                    />
                  </div>
                  {/* <!-- Subdistrict --> */}
                  <div className="input-group col-md-6 mb-4">
                    <div className="input-group-prepend">
                      <span className="input-group-text bg-white px-4 border-md border-right-0">
                        <i class="bi bi-geo-fill"></i>
                      </span>
                    </div>
                    <input
                      type="text"
                      name="subdistrict"
                      placeholder="Subdistrict"
                      value={data?.subcontract.subdistrict}
                      readOnly
                      className="form-control bg-white border-left-0 border-md col-md-6"
                    />
                  </div>
                  {/* <!-- Zip --> */}
                  <div className="input-group col-md-6 mb-4">
                    <div className="input-group-prepend">
                      <span className="input-group-text bg-white px-4 border-md border-right-0">
                        <i class="bi bi-file-earmark-text-fill"></i>
                      </span>
                    </div>
                    <input
                      type="text"
                      name="zip"
                      placeholder="Zip"
                      value={data?.subcontract.zip}
                      readOnly
                      className="form-control bg-white border-left-0 border-md col-md-6"
                    />
                  </div>
                  {/* <!-- Name of Bank --> */}
                  <div className="input-group col-md-6 mb-4">
                    <div className="input-group-prepend">
                      <span className="input-group-text bg-white px-4 border-md border-right-0">
                        <i class="bi bi-bank2"></i>
                      </span>
                    </div>
                    <input
                      type="text"
                      name="nameofbank"
                      placeholder="Name of Bank"
                      value={data?.subcontract.nameofbank}
                      readOnly
                      className="form-control bg-white border-left-0 border-md col-md-6"
                    />
                  </div>
                  {/* <!-- Account Number --> */}
                  <div className="input-group col-md-6 mb-4">
                    <div className="input-group-prepend">
                      <span className="input-group-text bg-white px-4 border-md border-right-0">
                        <i class="bi bi-credit-card-2-back-fill"></i>
                      </span>
                    </div>
                    <input
                      type="text"
                      name="accountnumber"
                      placeholder="Account Number"
                      value={data?.subcontract.accountnumber}
                      readOnly
                      className="form-control bg-white border-left-0 border-md col-md-6"
                    />
                  </div>
                  {/* <!-- Name of Account --> */}
                  <div className="input-group col-md-6 mb-4">
                    <div className="input-group-prepend">
                      <span className="input-group-text bg-white px-4 border-md border-right-0">
                        <i class="bi bi-credit-card-2-front-fill"></i>
                      </span>
                    </div>
                    <input
                      type="text"
                      name="nameofaccount"
                      placeholder="nameofaccount"
                      value={data?.subcontract.nameofaccount}
                      readOnly
                      className="form-control bg-white border-left-0 border-md col-md-6"
                    />
                  </div>
                  {/* <!-- Promptpay --> */}
                  <div className="input-group col-md-6 mb-4">
                    <div className="input-group-prepend">
                      <span className="input-group-text bg-white px-4 border-md border-right-0">
                        <i class="bi bi-paypal"></i>
                      </span>
                    </div>
                    <input
                      type="text"
                      name="promptpay"
                      placeholder="Promptpay"
                      value={data?.subcontract.promptpay}
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

export default Subcontract;
