import React from "react";

const CategoryItem = ({ categorydata, num }) => {
  return (
    <>
      <div class="card-header text-center">
        ข้อมูลผู้รับเหมาช่วง ID : {num}{" "}
      </div>
      <div class="me-2 ms-2 mt-2 mb-2 ">
        <img
          src="https://thumbs.gfycat.com/AfraidAbleCamel-max-1mb.gif"
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
              type="text"
              class="form-control"
              defaultValue={categorydata.username}
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
              defaultValue={categorydata.member}
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
              defaultValue={categorydata.idcard}
            />
          </div>
        </fieldset>

      </div>
    </>
  );
};

export default CategoryItem;
