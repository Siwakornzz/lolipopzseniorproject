import { useQuery } from "@apollo/client";
import React from "react";
import { QUERY_SUBCONTRACTWORDPRESS } from "../../apollo/queries";
import CategoryItem from "./CategoryItem";

const Wordpress = () => {
  const { data } = useQuery(QUERY_SUBCONTRACTWORDPRESS, {
    fetchPolicy: "no-cache",
  });
  console.log(data);
  return (
    <>
      <div className="card">
        <div className="card-header text-center mt-1">
          ข้อมูลผู้รับเหมาช่วง (Wordpress)
        </div>
      </div>

      {data && data.subcontractswordpress.length <= 0 && (
        <div class="text-center mt-5">ไม่พบรายการที่ต้องการโปรดลองใหม่อีกครั้ง</div>
      )}

      <div class="row row-cols-1 row-cols-md-3 g-4  ">
        {data &&
          data.subcontractswordpress.length > 0 &&
          data.subcontractswordpress.map((wordpress, index) => (
            <div class="col">
              <div class="card mx-auto" style={{ width: "30rem" }}>
                <CategoryItem
                  key={wordpress.id}
                  categorydata={wordpress}
                  num={index + 1}
                />
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Wordpress;
