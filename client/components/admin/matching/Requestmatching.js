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
  const matchings = () => {
    let matchingss = [];
    if (subcontractsData.data.subcontracts.length >= 1) {
      for (let i = 0; i < subcontractsData.data.subcontracts.length; i++) {
        let tmpsubcontract = subcontractsData?.data?.subcontracts[i].skill
          .split(",")
          .map((item) => item.trim());

        let tmphirecontract = data?.hirecontract.detail
          .split(",")
          .map((item) => item.trim());

        for (let j = 0; j < tmpsubcontract.length; j++) {

          if (tmphirecontract[i] === tmpsubcontract[j]) {
            console.log(tmphirecontract[i]);
            console.log(tmpsubcontract[j]);
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
