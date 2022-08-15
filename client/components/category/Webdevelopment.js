import { useQuery } from "@apollo/client";
import React from "react";
import { QUERY_SUBCONTRACTSWEBDEVELOPMENT } from "../../apollo/queries";
import CategoryItem from "./CategoryItem";

const Webdevelopment = () => {
  const { data } = useQuery(QUERY_SUBCONTRACTSWEBDEVELOPMENT, {
    fetchPolicy: "no-cache",
  });
  console.log(data);
  return (
    <>
      <div className="card">
        <div className="card-header text-center mt-1">
          ข้อมูลผู้รับเหมาช่วง (WebDevelopment)
        </div>    
      </div>

      <div class="row row-cols-1 row-cols-md-3 g-4  ">
        {data &&
          data.subcontractswebdevelopment.length > 0 &&
          data.subcontractswebdevelopment.map((webdevelopment, index) => (
            <div class="col">
              <div class="card mx-auto" style={{ width: "30rem" }}>
                <CategoryItem
                  key={webdevelopment.id}
                  categorydata={webdevelopment}
                  num={index + 1}
                />
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Webdevelopment;
