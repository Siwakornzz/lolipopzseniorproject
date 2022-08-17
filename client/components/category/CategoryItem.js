import React from "react";
import Link from "next/link";

const CategoryItem = ({ categorydata, num }) => {
  return (
    <>
      <div class="card-header text-center">
        ข้อมูลผู้รับเหมาช่วง ID : {num}{" "}
      </div>
      <div class="me-2 ms-2 mt-2 mb-2 ">
        <img
          src="http://www.parzlogic.com/wp-content/uploads/2017/10/web-dev.jpg"
          style={{
            maxWidth: "100%",
            height: "220px",
            objectFit: "cover",
            borderRadius: "5px",
          }}
          class="card-img-top"
          alt={categorydata.id}
        />
      </div>
      <div class="card-body">
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
              defaultValue={categorydata.name}
            />
          </div>
        </fieldset>

        <fieldset disabled>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">
                @
              </span>
            </div>
            <input
              type="email"
              class="form-control"
              defaultValue={categorydata.email}
            />
          </div>
        </fieldset>

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
              defaultValue={categorydata.skill}
            />
          </div>
        </fieldset>

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
              defaultValue={categorydata.natureofwork}
            />
          </div>
        </fieldset>

        <fieldset disabled>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">
                @
              </span>
            </div>
            <input
              type="number"
              class="form-control"
              defaultValue={categorydata.yearskill}
            />
          </div>
        </fieldset>

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
              defaultValue={categorydata.tel}
            />
          </div>
        </fieldset>

        <Link
          key={categorydata.id}
          href="/subcontracts/[subcontractId]"
          as={`/subcontracts/${categorydata.id}`}
        >
          <div class="text-center">
          <button class="btn btn-primary "> <i class="bi bi-eye"></i> ดูข้อมูล </button>
          </div>
        </Link>
      </div>
    </>
  );
};

export default CategoryItem;
