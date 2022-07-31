import React from "react";

const test = () => {
  return (
    <>
   <div class="row">
              <div class="col-md-4 mb-4">
                <div class="bg-image hover-overlay shadow-1-strong rounded ripple" data-mdb-ripple-color="light">
                  <img src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" class="img-fluid" />
                  <a href="#!">
                    <div class="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
                  </a>
                </div>
              </div>

              <div class="col-md-8 mb-4">
                <h5>Very long post title</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ratione
                  necessitatibus itaque error alias repellendus nemo reiciendis aperiam quisquam
                  minus ipsam reprehenderit commodi ducimus, in dicta aliquam eveniet dignissimos
                  magni.
                </p>

                <button type="button" class="btn btn-primary">Read</button>
              </div>
            </div>
    </>
  );
};

export default test;
