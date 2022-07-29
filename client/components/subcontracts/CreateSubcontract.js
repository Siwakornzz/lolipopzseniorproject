import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { QUERY_SUBCONTRACTS } from "../../apollo/queries";
import { CREATE_SUBCONTRACT } from "../../apollo/mutations";
import Router from "next/router";
import Swal from "sweetalert2";

const CreateSubcontracts = () => {
  const [subcontractData, setSubcontractData] = useState({
    name: "",
    username: "",
    email: "",
    yearskill: null,
    tel: "",
    skill: "",
    natureofwork: "",
    member: null,
    idcard: "",
    budget: null,
    lineid: "",
    province: "",
    district: "",
    subdistrict: "",
    zip: "",
    nameofbank: "",
    accountnumber: "",
    nameofaccount: "",
    promptpay: "",
  });

  const [createSubcontract, { loading, error }] = useMutation(
    CREATE_SUBCONTRACT,
    {
      variables: {
        ...subcontractData,
        yearskill: +subcontractData.yearskill,
        member: +subcontractData.member,
        budget: +subcontractData.budget,
      },
      refetchQueries: [{ query: QUERY_SUBCONTRACTS }],
    }
  );

  const handleChange = (e) => {
    setSubcontractData({ ...subcontractData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const result = await createSubcontract();
      console.log(result);
      Swal.fire({
        icon: 'success',
        title: 'LOLIPOPZ',
        text: 'สร้าง SUBCONTRACT สำเร็จ '
      })

      Router.reload(window.location.pathname);
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: 'error',
        title: 'LOLIPOPZ',
        text: error.graphQLErrors[0]?.message 
      })
    }
  };

  return (
    <>
      <div class="card">
        <div class="card-header mt-1 text-center">
          CREATE SUBCONTRACT
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
                        name="name"
                        placeholder="ชื่อทีม"
                        value={subcontractData.name}
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
                        name="username"
                        placeholder="ชื่อตัวแทนของทีม"
                        value={subcontractData.username}
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
                        type="email"
                        name="email"
                        placeholder="Email ติดต่อ "
                        value={subcontractData.email}
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
                        name="yearskill"
                        placeholder="ประสบการณ์ในการทำงาน (ปี) "
                        value={subcontractData.yearskill}
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
                        type="tel"
                        name="tel"
                        placeholder="เบอร์โทรศัพท์ในการติดต่อ"
                        value={subcontractData.tel}
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
                        type="text"
                        name="skill"
                        placeholder="ความสามารถ (HTML,PHP,CSS)"
                        value={subcontractData.skill}
                        onChange={handleChange}
                        required
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
                        placeholder="ประเภทงานที่รับ (Web Development,Programing,Wordpress)"
                        value={subcontractData.natureofwork}
                        onChange={handleChange}
                        required
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
                        placeholder="สมาชิกทีม (คน) "
                        value={subcontractData.member}
                        onChange={handleChange}
                        required
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
                        value={subcontractData.idcard}
                        onChange={handleChange}
                        required
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
                        placeholder="LINEID"
                        value={subcontractData.lineid}
                        onChange={handleChange}
                        required
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
                        type="number"
                        name="budget"
                        placeholder="งบประมาณเริ่มต้น"
                        value={subcontractData.budget}
                        onChange={handleChange}
                        required
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
                        placeholder="จังหวัด"
                        value={subcontractData.province}
                        onChange={handleChange}
                        required
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
                        placeholder="อำเภอ"
                        value={subcontractData.district}
                        onChange={handleChange}
                        required
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
                        placeholder="ตำบล"
                        value={subcontractData.subdistrict}
                        onChange={handleChange}
                        required
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
                        placeholder="รหัสไปรษณีย์"
                        value={subcontractData.zip}
                        onChange={handleChange}
                        required
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
                        placeholder="ชื่อธนาคาร"
                        value={subcontractData.nameofbank}
                        onChange={handleChange}
                        required
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
                        placeholder="เลขที่บัญชี"
                        value={subcontractData.accountnumber}
                        onChange={handleChange}
                        required
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
                        placeholder="ชื่อบัญชี"
                        value={subcontractData.nameofaccount}
                        onChange={handleChange}
                        required
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
                        placeholder="หมายเลขพร้อมเพย์"
                        value={subcontractData.promptpay}
                        onChange={handleChange}
                        required
                        className="form-control bg-white border-left-0 border-md col-md-6"
                      />
                    </div>

                    {/* <!-- Submit Button --> */}
                    <div className="form-group col-lg-12 text-center">
                      <button
                        className="btn btn-primary btn-block py-2 w-100"
                        type="submit"
                      >
                        <span className="font-weight-bold">
                          สร้าง SUBCONTRACT
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
    </>
  );
};

export default CreateSubcontracts;
