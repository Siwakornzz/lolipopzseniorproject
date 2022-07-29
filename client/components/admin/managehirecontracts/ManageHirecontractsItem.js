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

const ManageHirecontractsItem = ({hirecontract}) => {
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
    <div
      style={{
        display: "grid",
        gridTemplateColumns:
          "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr",
        width: "100%",
        borderTop: "1px solid grey",
        borderBottom: "1px solid grey",
      }}
    >
      <div style={{ margin: "auto" }}>
        {!edit ? (
          <p>{hirecontract.budget}</p>
        ) : (
          <input
            type="text"
            name="budget"
            value={hirecontractData.budget}
            onChange={handleChange}
          />
        )}
      </div>
      {/* 
      <div style={{ margin: "auto" }}>
        {!edit ? (
          <p>{subcontract.username}</p>
        ) : (
          <input
            type="text"
            name="username"
            value={subcontractData.username}
            onChange={handleChange}
          />
        )}
      </div>

      <div style={{ margin: "auto" }}>
        {!edit ? (
          <p>{subcontract.email}</p>
        ) : (
          <input
            type="email"
            name="email"
            value={subcontractData.email}
            onChange={handleChange}
          />
        )}
      </div>

      <div style={{ margin: "auto" }}>
        {!edit ? (
          <p>{subcontract.yearskill}</p>
        ) : (
          <input
            type="number"
            name="yearskill"
            value={subcontractData.yearskill}
            onChange={handleChange}
          />
        )}
      </div>

      <div style={{ margin: "auto" }}>
        {!edit ? (
          <p>{subcontract.tel}</p>
        ) : (
          <input
            type="tel"
            name="tel"
            value={subcontractData.tel}
            onChange={handleChange}
          />
        )}
      </div>

      <div style={{ margin: "auto" }}>
        {!edit ? (
          <p>{subcontract.natureofwork}</p>
        ) : (
          <input
            type="text"
            name="natureofwork"
            value={subcontractData.natureofwork}
            onChange={handleChange}
          />
        )}
      </div>

      <div style={{ margin: "auto" }}>
        {!edit ? (
          <p>{subcontract.member}</p>
        ) : (
          <input
            type="number"
            name="member"
            value={subcontractData.member}
            onChange={handleChange}
          />
        )}
      </div>

      <div style={{ margin: "auto" }}>
        {!edit ? (
          <p>{subcontract.city}</p>
        ) : (
          <input
            type="text"
            name="city"
            value={subcontractData.city}
            onChange={handleChange}
          />
        )}
      </div>

      <div style={{ margin: "auto" }}>
        {!edit ? (
          <p>{subcontract.lineid}</p>
        ) : (
          <input
            type="text"
            name="lineid"
            value={subcontractData.lineid}
            onChange={handleChange}
          />
        )}
      </div>

      <div style={{ margin: "auto" }}>
        {!edit ? (
          <p>{subcontract.province}</p>
        ) : (
          <input
            type="text"
            name="province"
            value={subcontractData.province}
            onChange={handleChange}
          />
        )}
      </div>

      <div style={{ margin: "auto" }}>
        {!edit ? (
          <p>{subcontract.district}</p>
        ) : (
          <input
            type="text"
            name="district"
            value={subcontractData.district}
            onChange={handleChange}
          />
        )}
      </div>

      <div style={{ margin: "auto" }}>
        {!edit ? (
          <p>{subcontract.subdistrict}</p>
        ) : (
          <input
            type="text"
            name="subdistrict"
            value={subcontractData.subdistrict}
            onChange={handleChange}
          />
        )}
      </div>

      <div style={{ margin: "auto" }}>
        {!edit ? (
          <p>{subcontract.zip}</p>
        ) : (
          <input
            type="text"
            name="zip"
            value={subcontractData.zip}
            onChange={handleChange}
          />
        )}
      </div>

      <div style={{ margin: "auto" }}>
        {!edit ? (
          <p>{subcontract.nameofbank}</p>
        ) : (
          <input
            type="text"
            name="nameofbank"
            value={subcontractData.nameofbank}
            onChange={handleChange}
          />
        )}
      </div>

      <div style={{ margin: "auto" }}>
        {!edit ? (
          <p>{subcontract.accountnumber}</p>
        ) : (
          <input
            type="text"
            name="accountnumber"
            value={subcontractData.accountnumber}
            onChange={handleChange}
          />
        )}
      </div>

      <div style={{ margin: "auto" }}>
        {!edit ? (
          <p>{subcontract.nameofaccount}</p>
        ) : (
          <input
            type="text"
            name="nameofaccount"
            value={subcontractData.nameofaccount}
            onChange={handleChange}
          />
        )}
      </div>

      <div style={{ margin: "auto" }}>
        {!edit ? (
          <p>{subcontract.promptpay}</p>
        ) : (
          <input
            type="text"
            name="promptpay"
            value={subcontractData.promptpay}
            onChange={handleChange}
          />
        )}
      </div> */}

      {/* <div style={{ margin: "auto" }}>
        <p>{moment(subcontract.createdAt).locale("th").format("LLLL")}</p>
      </div> */}
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
              style={{
                cursor: "pointer",
                padding: "5px 10px",
                border: "none",
                background: "orange",
                margin: "10px",
              }}
              onClick={() => setEdit(true)}
            >
              Edit
            </button>
            <button
              style={{
                cursor: "pointer",
                padding: "5px 10px",
                border: "none",
                background: "red",
                color: "white",
              }}
              onClick={handleDelete}
            >
              Delete
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

export default ManageHirecontractsItem;
