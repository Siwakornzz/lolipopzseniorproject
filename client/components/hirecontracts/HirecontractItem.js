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
    <div
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
    </div>
  );
};

export default HirecontractItem;
