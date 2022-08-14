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

const HirecontractItem = ({ hirecontract }) => {
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
          condition: hirecontractData.condition?.replace(/\s/g, ""),
          typeofwork: hirecontractData.typeofwork?.replace(/\s/g, ""),
        },
      });
      alert("Update Hirecontract Success");
      Router.reload(window.location.pathname);
    } catch (error) {
      console.log(error);
    }
  };

  const [deleteHirecontract] = useMutation(DELETE_HIRECONTRACT, {
    refetchQueries: [{ query: QUERY_HIRECONTRACTS }, { query: Me }],
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
      <div class="card" style={{ width: "30rem" }}>
        <div class="card-header text-center">{hirecontract.detail}</div>
        <div class="me-2 ms-2 mt-2 mb-2 ">
          <img
            src="https://static.wixstatic.com/media/7ac599_ccf8c77aea30480bae375e4adaf2b75d~mv2.jpg/v1/fill/w_625,h_750,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/7ac599_ccf8c77aea30480bae375e4adaf2b75d~mv2.jpg"
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

{/* <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr",
        width: "100%",
        borderTop: "1px solid grey",
        borderBottom: "1px solid grey",
      }}
    >
      <div style={{ margin: "auto" }}>
        <p>{hirecontract.id}</p>
      </div>

      <div style={{ margin: "auto" }}>
        {!edit ? (
          <p>{hirecontractData.detail}</p>
        ) : (
          <input
            type="text"
            name="detail"
            value={hirecontractData.detail}
            onChange={handleChange}
          />
        )}
      </div>
     
      <div style={{ margin: "auto" }}>
        {!edit ? (
          <p>{hirecontractData.condition}</p>
        ) : (
          <input
            type="text"
            name="condition"
            value={hirecontractData.condition}
            onChange={handleChange}
          />
        )}
      </div>

      <div style={{ margin: "auto" }}>
        {!edit ? (
          <p>{hirecontractData.typeofwork}</p>
        ) : (
          <input
            type="text"
            name="typeofwork"
            value={hirecontractData.typeofwork}
            onChange={handleChange}
          />
        )}
      </div>

      <div style={{ margin: "auto" }}>
        {!edit ? (
          <p>{hirecontractData.budget}</p>
        ) : (
          <input
            type="number"
            name="budget"
            value={hirecontractData.budget}
            onChange={handleChange}
          />
        )}
      </div>

      <div style={{ margin: "auto" }}>
        {!edit ? (
          <p>{hirecontractData.status}</p>
        ) : (
          <input
            type="number"
            name="budget"
            value={hirecontractData.status}
            onChange={handleChange}
          />
        )}
      </div>

      <div style={{ margin: "auto" }}>
        <p>{moment(hirecontractData.createdAt).locale("th").format("LLLL")}</p>
      </div>
      <div
        style={{
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {!edit ? (
          <>
            <button
              className="btn btn-warning me-1"
              onClick={() => setEdit(true)}
            >
              <i class="bi bi-pencil-square"></i> Edit
            </button>
            <button
             className="btn btn-danger ms-1"
              onClick={handleDelete}
            >
            <i class="bi bi-trash"></i>  Delete
            </button>
          </>
        ) : (
          <>
            <button
              style={{
                cursor: "pointer",
                padding: "5px 10px",
                border: "none",
                background: "red",
                margin: "10px",
                color: "white",
              }}
              onClick={() => {
                setHirecontractData(hirecontract);
                setEdit(false);
              }}
            >
              Cancel Edit
            </button>
            <button
              style={{
                cursor: "pointer",
                padding: "5px 10px",
                border: "none",
                background: "green",
                color: "white",
              }}
              onClick={handleSubmit}
            >
              {loading ? "Editing..." : "Confirm Edit"}
            </button>
          </>
        )}
      </div>
    </div> */}
          <div class="">
            {!edit ? (
              <>
                <button
                  className="btn btn-warning me-1"
                  onClick={() => setEdit(true)}
                >
                  <i class="bi bi-pencil-square"></i> Edit
                </button>
                <button className="btn btn-danger ms-1" onClick={handleDelete}>
                  <i class="bi bi-trash"></i> Delete
                </button>
              </>
            ) : (
              <>
                <button
                  style={{
                    cursor: "pointer",
                    padding: "5px 10px",
                    border: "none",
                    background: "red",
                    margin: "10px",
                    color: "white",
                  }}
                  onClick={() => {
                    setHirecontractData(hirecontract);
                    setEdit(false);
                  }}
                >
                  Cancel Edit
                </button>
                <button
                  style={{
                    cursor: "pointer",
                    padding: "5px 10px",
                    border: "none",
                    background: "green",
                    color: "white",
                  }}
                  onClick={handleSubmit}
                >
                  {loading ? "Editing..." : "Confirm Edit"}
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default HirecontractItem;
