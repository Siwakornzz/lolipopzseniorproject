import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_HIRECONTRACTSWAITING } from "../../../apollo/queries";
import Link from "next/link";
import Swal from "sweetalert2";

const HirecontractsWaiting = () => {
  const hirecontractswaiting = useQuery(QUERY_HIRECONTRACTSWAITING, {
    onCompleted: (data, loading, error) => {
      if (error) {
        return <p> Something went wrong</p>;
      }

      if (loading) {
        return <p> Loading...</p>;
      }

      if (data.hirecontractswaiting.length <= 0) {
        Swal.fire({
          icon: "info",
          title: "LOLIPOPZ",
          text: "No Data Found Try Again Later or No Hirecontract Waiting to matching !",
        });
      }
    },
  });

  return (
    <div>
      <div className="container">
        <div className="row ">
          <div class="card text-center">
            <div class="card-header">HIRECONTRACT WAITING TO MATCHING</div>
            <div class="card-body">
              <div class="row row-cols-1 row-cols-md-2 g-4">
                {hirecontractswaiting?.data?.hirecontractswaiting.map((v) => (
                  <Link
                    key={v.id}
                    href="/admin/matching/[matchingId]"
                    as={`/admin/matching/${v.id}`}
                  >
                    <div class="col">
                      <div class="card  border-start-1 border border-2 border-end-1 border-top-1 border-bottom-1  border-primary  ms-5 mt-5 shadow " style={{ cursor: "pointer" }}>
                      <img src="https://u7.uidownload.com/vector/583/394/vector-vaporwave-vector-background-illustration-ai-eps-svg.jpg" style={{height:"150px",maxWidth:"100%",width: "100%" ,objectFit: 'cover'}} class="card-img-top embed-responsive-item"  alt="..."/>
                        <div class="card-header">id : {v.id}</div>
                        <div class="card-body"></div>
                        <p> ประเภทของงาน : {v.typeofwork} </p>
                        <p> เงื่อนไขภาษาที่ต้องการ : {v.condition} </p>
                        <p> สถานะ : {v.status} </p>
                      </div>

                      <p> </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HirecontractsWaiting;
