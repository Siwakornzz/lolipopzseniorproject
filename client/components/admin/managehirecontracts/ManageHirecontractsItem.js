import React, { useState } from "react";
import moment from "moment";
import { useMutation } from "@apollo/react-hooks";
import Router from "next/router";
import {
  DELETE_HIRECONTRACT,
  UPDATE_HIRECONTRACT,
} from "../../../apollo/mutations";
import {
  QUERY_HIRECONTRACT,
  QUERY_HIRECONTRACTS,
} from "../../../apollo/queries";

const ManageHirecontractsItem = ({ hirecontract, num }) => {
  console.log("hireconadmin", hirecontract);
  const [edit, setEdit] = useState(false);
  const [hirecontractData, setHirecontractData] = useState(hirecontract);

  const [updateHirecontract, { loading }] = useMutation(UPDATE_HIRECONTRACT, {
    onCompleted: (data) => {
      console.log(data);
      setHirecontractData(data.updateHirecontract);
      setEdit(false);
    },
    refetchQueries: [{ query: QUERY_HIRECONTRACT }],
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
      alert("Nothing Changed !");
      return;
    }
    try {
      e.preventDefault();
      await updateHirecontract({
        variables: {
          ...hirecontractData,
          budget: +hirecontractData.budget,
          duration: +hirecontractData.duration,
        },
      });
      alert("Update Hirecontract Success");
      Router.reload(window.location.pathname);
    } catch (error) {
      console.log(error);
    }
  };

  const [deleteHirecontract] = useMutation(DELETE_HIRECONTRACT, {
    refetchQueries: [{ query: QUERY_HIRECONTRACTS }],
  });
  const handleDelete = async () => {
    try {
      await deleteHirecontract({
        variables: {
          id: hirecontract.id,
        },
      });

      alert("Delete Hirecontract successfully");
      Router.reload(window.location.pathname);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div class="card-header text-center">คำร้องขอที่ : {num}</div>
      <div class="me-2 ms-2 mt-2 mb-2 ">
        <img
          src="https://www.techmediasquare.com/wp-content/uploads/2020/01/Web-Development-Tech-Media-Square.jpeg"
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
              name="typeofwork"
              class="form-control"
              value={hirecontractData.budget}
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
                  value={hirecontract.status}
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
              name="status"
              class="form-control"
              value={hirecontractData.status}
              onChange={handleChange}
            />
          </div>
        )}

        <div class="text-end">
          {!edit ? (
            <>
              <button
                className="btn btn-warning me-1"
                onClick={() => setEdit(true)}
              >
                <i class="bi bi-pencil-square"></i> แก้ไข
              </button>
              <button className="btn btn-danger ms-1" onClick={handleDelete}>
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
              <button class="btn btn-primary me-2 ms-2" onClick={handleSubmit}>
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
        </div>
        <div class="card-footer mt-2 text-center">
          <small class="text-muted">
            ผู้สร้างคำร้อง : {hirecontract.hirecontractCreatorId.username}{" "}
          </small>
          <br />
          <small class="text-muted">
            สร้างเมื่อ :{" "}
            {moment(hirecontract.createdAt).locale("th").format("LLLL")}
          </small>
        </div>
      </div>
    </>
  );
};

export default ManageHirecontractsItem;
