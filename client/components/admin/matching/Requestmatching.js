import { useRouter } from "next/router";
import { useQuery } from "@apollo/react-hooks";
import React from "react";
import {
  QUERY_HIRECONTRACT,
  QUERY_SUBCONTRACTS,
} from "../../../apollo/queries";
import Swal from "sweetalert2";

const Requestmatching = () => {
  const route = useRouter();
  const { data, loading, error } = useQuery(QUERY_HIRECONTRACT, {
    variables: { id: route.query.matchingId },
  });

  const subcontractsData = useQuery(QUERY_SUBCONTRACTS, {
    onCompleted: (loading, error) => {
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
    let matchingss = [];
    var tmpchecktypeofwork;
    var tmpcheckskill;
    console.log("sub", subcontractsData.data.subcontracts);
    console.log("hire", data.hirecontract);
    // console.log(subcontractsData.data.subcontracts.length)

    if ((await subcontractsData.data.subcontracts.length) >= 1) {
      for (let i = 0; i < subcontractsData.data.subcontracts.length; i++) {
        var subcontractId = subcontractsData.data.subcontracts[i].id;
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
              if (tmpcheckskill >= 1) {
                matchingss.push(subcontractId);
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
  };
  // console.log(data);
  if (error) {
    return <p> Something went wrong</p>;
  }

  if (loading) {
    return <p> Loading...</p>;
  }

  return (
    <div>
      <p>{data?.hirecontract.id}</p>
      <p>{data?.hirecontract.detail}</p>
      <button onClick={matchings}> Matching </button>
    </div>
  );
};

export default Requestmatching;
