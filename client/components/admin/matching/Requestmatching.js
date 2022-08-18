import { Router, useRouter } from "next/router";
import { useMutation } from "@apollo/react-hooks";
import { useQuery } from "@apollo/react-hooks";
import React, { useState } from "react";
import {
  QUERY_HIRECONTRACT,
  QUERY_HIRECONTRACTSWAITING,
  QUERY_SUBCONTRACTS,
} from "../../../apollo/queries";
import Swal from "sweetalert2";
import { ASSIGN_HIRECONTRACT } from "../../../apollo/mutations";

const Requestmatching = () => {
  const route = useRouter();
  const [datamatching, setDatamatching] = useState([]);

  const { data, loading, error } = useQuery(QUERY_HIRECONTRACT, {
    variables: { id: route.query.matchingId },
  });
  const hirecontractId = route.query.matchingId;
  const subcontractsData = useQuery(QUERY_SUBCONTRACTS, {
    onCompleted: (data, loading, error) => {
      if (!data) {
        return Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "No Subcontract Found Try Again Later !",
        });
      }
      if (error) {
        return Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      }
      if (loading) {
        return <p>Loading...</p>;
      }
    },
  });

  // TODO matching Data
  const matchings = async () => {
    var matchingss = [];
    var tmpchecktypeofwork;
    var tmpcheckskill;
    console.log("sub", subcontractsData.data.subcontracts);
    console.log("hire", data.hirecontract);
    // console.log(subcontractsData.data.subcontracts.length)

    if ((await subcontractsData.data.subcontracts.length) >= 1) {
      for (let i = 0; i < subcontractsData.data.subcontracts.length; i++) {
        var subcontractId = subcontractsData.data.subcontracts[i];
        let tmpsubcontractskill =
          subcontractsData?.data?.subcontracts[i].skill.split(",");

        let tmpsubcontractnatureofwork =
          subcontractsData?.data?.subcontracts[i].natureofwork.split(",");

        let tmphirecontracttypeofwork =
          data?.hirecontract.typeofwork.split(",");

        let tmphirecontractcondition = data?.hirecontract.condition.split(",");

        console.log(
          "sub split",
          tmpsubcontractnatureofwork,
          tmphirecontracttypeofwork
        );
        console.log(
          "hire split",
          tmphirecontracttypeofwork,
          tmphirecontractcondition
        );
        // check budget
        if (
          data.hirecontract.budget >=
          subcontractsData.data.subcontracts[i].budget
        ) {
          // check province
          if (
            data.hirecontract.zone ===
            subcontractsData.data.subcontracts[i].province
          ) {
            // check typeofwork
            tmpchecktypeofwork = 0;
            for (let j = 0; j < tmphirecontracttypeofwork.length; j++) {
              for (let k = 0; k < tmpsubcontractnatureofwork.length; k++) {
                if (
                  tmphirecontracttypeofwork[j] === tmpsubcontractnatureofwork[k]
                ) {
                  tmpchecktypeofwork = tmpchecktypeofwork + 1;
                }
              }
              console.log("tmpchecktype", tmpchecktypeofwork);
            }

            // check if subcontractnatureofwork > 0
            tmpcheckskill = 0;
            if (tmpchecktypeofwork >= 1) {
              for (let l = 0; l < tmphirecontractcondition.length; l++) {
                for (let m = 0; m < tmpsubcontractskill.length; m++) {
                  console.log(
                    "tmphirecontractcondition",
                    tmphirecontractcondition
                  );
                  console.log("tmpsubcontractskill", tmpsubcontractskill);
                  if (tmphirecontractcondition[l] === tmpsubcontractskill[m]) {
                    tmpcheckskill = tmpcheckskill + 1;
                  }
                }
              }
             console.log('subcreatorId',subcontractId.subcontractCreatorId.id)
             console.log('hirecreatorId',data.hirecontract.hirecontractCreatorId.id)
              if (tmpcheckskill >= 1) {
                if (subcontractId.subcontractCreatorId.id !== data.hirecontract.hirecontractCreatorId.id)
                {
                  matchingss.push(subcontractId);
                }
              }
            }
            console.log(tmpcheckskill);
          }
        }
      }
      if (matchingss.length <= 0) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "No matching contract found !!!",
        });
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No Subcontract Found Try Again Later !",
      });
    }
    console.log(matchingss);
    setDatamatching(matchingss);
  };
  // console.log(data);
  const handleSelect = async (id) => {
    try {
      await assign({
        variables: {
          id: hirecontractId,
          subcontractAcceptHirecontractId: id,
        },
      }).then(() => Router.push('/admin/matching'));
      
    } catch (error) {
      console.log(error);
    }
  };

  const [assign] = useMutation(ASSIGN_HIRECONTRACT, {
    onCompleted: (data, loading, error) => {
      if (data) {
        Swal.fire({
          icon: "success",
          title: "LOLIPOPZ",
          text: "ASSIGN WORK TO SUBCONTRACTS SUCCESS",
        });
      }
      if (loading) {
        Swal.fire({
          icon: "info",
          title: "LOLIPOPZ",
          text: "ASSIGNING WORK TO SUBCONTRACTS",
        });
      }
      if (error) {
        Swal.fire({
          icon: "error",
          title: "LOLIPOPZ",
          text: "Something Wrogn Try Again Later",
        });
      }
    },
    refetchQueries: [{ query: QUERY_HIRECONTRACTSWAITING }],
  });
  if (error) {
    return <p> Something went wrong</p>;
  }

  if (loading) {
    return <p> Loading...</p>;
  }

  return (
    <div class="mt-5 text-center">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="card ">
              <div class="card-header text-center">
                HIRECONTRACT REQUESTMATCHING
              </div>
              <div class="card-body ">
                <p>
                  {" "}
                  <span style={{ color: "red" }}> ID : </span>{" "}
                  {data?.hirecontract.id}
                </p>
                <p>
                  {" "}
                  <span style={{ color: "red" }}>
                    {" "}
                    รายละเอียดของงาน :{" "}
                  </span>{" "}
                  {data?.hirecontract.detail}
                </p>
                <p>
                  {" "}
                  <span style={{ color: "red" }}> งบประมาณ : </span>
                  {data?.hirecontract.budget} บาท
                </p>
                <button class="btn btn-outline-info" onClick={matchings}>
                  {" "}
                  Matching{" "}
                </button>
              </div>
            </div>
          </div>

          <div class="col-md-6 ">
            <div class="card">
              <div class="card-header"> SUBCONTRACT LIST :)</div>
              <div class="card-body">
                {datamatching?.map((v) => (
                  <>
                    <div class="card mt-1 ">
                      <div class="card-header">SUBCONTRACTNAME : {v.name}</div>
                      <div class="card-body"></div>
                      <p>SUBCONTRACT ID : {v.id} </p>
                      <p> ประสบการณ์ในการทำงาน : {v.yearskill} ปี</p>
                      <p>งบประมาณ : {v.budget} บาท </p>

                      <button
                        class="btn btn-outline-primary w-50 m-auto p-auto  mb-2  "
                        onClick={async () => await handleSelect(v.id)}
                      >
                        {" "}
                        SELECT{" "}
                      </button>
                    </div>
                    <hr />
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Requestmatching;
