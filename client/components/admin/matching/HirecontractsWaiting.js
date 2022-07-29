import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_HIRECONTRACTSWAITING } from "../../../apollo/queries";
import Link from "next/link";

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
        alert("No Data Found Try Again Later");
      }
    },
  });

  return (
    <div>
      <div className="row">
        <div className="container">
          {hirecontractswaiting?.data?.hirecontractswaiting.map((v) => (
            <Link
              key={v.id}
              href="/admin/matching/[matchingId]"
              as={`/admin/matching/${v.id}`}
            >
              <div>
                <p> id : {v.id}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HirecontractsWaiting;
