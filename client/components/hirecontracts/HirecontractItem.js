import React, { useState } from "react";
import moment from "moment";
import { useMutation } from "@apollo/react-hooks";
import Router from "next/router";
import {
  DELETE_HIRECONTRACT,
  UPDATE_HIRECONTRACT,
} from "../../apollo/mutations";
import {
  Me,
  QUERY_HIRECONTRACT,
  QUERY_HIRECONTRACTS,
} from "../../apollo/queries";
import Swal from "sweetalert2";

const HirecontractItem = ({ hirecontract, num }) => {
  console.log("hirecon", hirecontract);
  const [edit, setEdit] = useState(false);
  const [hirecontractData, setHirecontractData] = useState(hirecontract);

  const [updateHirecontract, { loading }] = useMutation(UPDATE_HIRECONTRACT, {
    onCompleted: (data) => {
      console.log(data);
      setHirecontractData(data.updateHirecontract);
      setEdit(false);
    },
    refetchQueries: [{ query: QUERY_HIRECONTRACT }, { query: Me }],
  });

  const handleChange = (e) =>
    setHirecontractData({
      ...hirecontractData,
      [e.target.name]: e.target.value,
    });
  console.log("change ", hirecontractData);

  const handleSubmit = async (e) => {
    if (hirecontractData === hirecontract) {
      setHirecontractData(hirecontract);
      setEdit(false);
      Swal.fire({
        icon: "info",
        title: "LOLIPOPZ",
        text: "ไม่มีอะไรเปลี่ยนแปลง",
      });
      return;
    }
    try {
      e.preventDefault();
      await updateHirecontract({
        variables: {
          ...hirecontractData,
          budget: +hirecontractData.budget,
          duration: +hirecontractData.duration,
          condition: hirecontractData.condition?.replace(/\s/g, ""),
          typeofwork: hirecontractData.typeofwork?.replace(/\s/g, ""),
        },
      });
      Swal.fire({
        icon: "success",
        title: "LOLIPOPZ",
        text: "อัพเดทคำร้องการจ้างสำเร็จแล้ว",
      });
      Router.reload(window.location.pathname);
    } catch (error) {
      console.log(error);
    }
  };

  const [deleteHirecontract] = useMutation(DELETE_HIRECONTRACT, {
    refetchQueries: [{ query: QUERY_HIRECONTRACTS }, { query: Me }],
  });

  const handleDelete = async () => {
    Swal.fire({
      title: "LOLIPOPZ",
      text: "คุณจะลบใช่หรือไม่ ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "ใช่",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await deleteHirecontract({
            variables: {
              id: hirecontract.id,
            },
          });
          Swal.fire("LOLIPOPZ", "ลบ ข้อมูลคำร้องการจ้าง สำเร็จ !", "success");
          Router.reload(window.location.pathname);
        } catch (error) {
          console.log(error);
        }
      }
    });
  };

  return (
    <>
      <div class="card-header text-center">คำร้องขอที่ : {num}</div>
      <div class="me-2 ms-2 mt-2 mb-2 ">
        <img
          src="https://thumbs.gfycat.com/BriefLightheartedIberianmole-size_restricted.gif"
          style={{
            maxWidth: "100%",
            height: "220px",
            objectFit: "cover",
            borderRadius: "5px",
          }}
          class="card-img-top"
          alt={hirecontract.id}
        />
      </div>
      <div class="card-body">
        {!edit ? (
          <>
            <fieldset disabled>
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="basic-addon1">
                    @
                  </span>
                </div>
                <input
                  type="text"
                  class="form-control"
                  value={hirecontract.detail}
                />
              </div>
            </fieldset>
          </>
        ) : (
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">
                @
              </span>
            </div>
            <input
              type="text"
              name="detail"
              class="form-control"
              value={hirecontractData.detail}
              onChange={handleChange}
            />
          </div>
        )}

        {!edit ? (
          <>
            <fieldset disabled>
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="basic-addon1">
                    @
                  </span>
                </div>
                <input
                  type="text"
                  class="form-control"
                  value={hirecontract.condition}
                />
              </div>
            </fieldset>
          </>
        ) : (
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">
                @
              </span>
            </div>
            <input
              type="text"
              name="condition"
              class="form-control"
              value={hirecontractData.condition}
              onChange={handleChange}
            />
          </div>
        )}

        {!edit ? (
          <>
            <fieldset disabled>
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="basic-addon1">
                    @
                  </span>
                </div>
                <input
                  type="text"
                  class="form-control"
                  value={hirecontract.typeofwork}
                />
              </div>
            </fieldset>
          </>
        ) : (
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">
                @
              </span>
            </div>
            <input
              type="text"
              name="typeofwork"
              class="form-control"
              value={hirecontractData.typeofwork}
              onChange={handleChange}
            />
          </div>
        )}

        {!edit ? (
          <>
            <fieldset disabled>
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="basic-addon1">
                    @
                  </span>
                </div>
                <input
                  type="text"
                  class="form-control"
                  value={hirecontract.zone}
                />
              </div>
            </fieldset>
          </>
        ) : (
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">
                @
              </span>
            </div>
            <input
              type="text"
              name="zone"
              class="form-control"
              value={hirecontractData.zone}
              onChange={handleChange}
            />
          </div>
        )}

        {!edit ? (
          <>
            <fieldset disabled>
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="basic-addon1">
                    @
                  </span>
                </div>
                <input
                  type="text"
                  class="form-control"
                  value={hirecontract.budget}
                />
              </div>
            </fieldset>
          </>
        ) : (
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">
                @
              </span>
            </div>
            <input
              type="number"
              name="budget"
              class="form-control"
              value={hirecontractData.budget}
              onChange={handleChange}
            />
          </div>
        )}

        <>
          <fieldset disabled>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">
                  @
                </span>
              </div>
              <input
                type="text"
                class="form-control"
                value={hirecontract.status}
              />
            </div>
          </fieldset>
        </>

        <div class="text-end">
          {/* ถ้ากำลังรอจะไม่แสดงปุ่ม delete กับ ปุ่ม Edit */}
          {hirecontract?.status != "กำลังรอการตอบรับจากผู้รับเหมาช่วง" && (
            <>
              {!edit ? (
                <>
                  <button
                    className="btn btn-warning me-1"
                    onClick={() => setEdit(true)}
                  >
                    <i class="bi bi-pencil-square"></i> แก้ไข
                  </button>
                  <button
                    className="btn btn-danger ms-1"
                    onClick={handleDelete}
                  >
                    <i class="bi bi-trash"></i> ลบ
                  </button>
                </>
              ) : (
                <>
                  <button
                    class="btn btn-danger me-2 ms-2"
                    onClick={() => {
                      setHirecontractData(hirecontract);
                      setEdit(false);
                    }}
                  >
                    <>
                      <i class="bi bi-x"></i> ยกเลิก
                    </>
                  </button>
                  <button
                    class="btn btn-primary me-2 ms-2"
                    onClick={handleSubmit}
                  >
                    {loading ? (
                      "Editing..."
                    ) : (
                      <>
                        <i class="bi bi-check-circle-fill"></i> บันทึก
                      </>
                    )}
                  </button>
                </>
              )}
            </>
          )}
        </div>
        <div class="card-footer mt-2 text-center">
          <small class="text-muted">
            สร้างเมื่อ :{" "}
            {moment(hirecontract.createdAt).locale("th").format("LLLL")}
          </small>
        </div>
      </div>
    </>
  );
};

export default HirecontractItem;
