import { useQuery } from "@apollo/client";
import React from "react";
import Link from "next/link";

import { Me, QUERY_SUBCONTRACTHASASSIGN } from "../../apollo/queries";

const HirecontractHasAssign = () => {
  const me = useQuery(Me, { fetchPolicy: "no-cache" });
  const { data, loading, error } = useQuery(QUERY_SUBCONTRACTHASASSIGN, {
    variables: { id: me.data?.user.id },
  });

  if (error) {
    return <p> Something went wrong</p>;
  }
  if (loading) {
    <p> Loading... Loading</p>;
  }
  return (
    <>
      <style>{`
.profile-card-6 {
max-width: 500px;
max-height: 500px;
background-color: #FFF;
border-radius: 5px;
box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.1);
overflow: hidden;
position: relative;
margin: 10px auto;
cursor: pointer;
}

.profile-card-6 img {
transition: all 0.15s linear;
}

.profile-card-6 .profile-name {
position: absolute;
top: 10px;
left: 10px;
font-size: 25px;
font-weight: bold;
color: #FFF;
padding: 15px 20px;
background: linear-gradient(140deg, rgba(0, 0, 0, 0.4) 50%, rgba(255, 255, 0, 0) 50%);
transition: all 0.15s linear;
}

.profile-card-6 .profile-position {
position: absolute;
color: rgba(255, 255, 255, 0.4);
left: 30px;
top: 100px;
transition: all 0.15s linear;
}

.profile-card-6 .profile-overview {
position: absolute;
bottom: 0px;
left: 0px;
right: 0px;
background: linear-gradient(0deg, rgba(0, 0, 0, 0.4) 50%, rgba(255, 255, 0, 0));
color: #FFF;
padding: 50px 0px 20px 0px;
transition: all 0.15s linear;
}

.profile-card-6 .profile-overview h3 {
font-weight: bold;
}

.profile-card-6 .profile-overview p {
color: rgba(255, 255, 255, 0.7);
}

.profile-card-6:hover img {
filter: brightness(80%);
}

.profile-card-6:hover .profile-name {
padding-left: 25px;
padding-top: 20px;
}

.profile-card-6:hover .profile-position {
left: 40px;
}

.profile-card-6:hover .profile-overview {
padding-bottom: 25px;
}
a,
a:hover,
a:focus {
color: inherit;
}

.card-container {
padding: 100px 0px;
-webkit-perspective: 1000;
perspective: 1000;
}

}`}</style>
      <div class="card ">
        <div class="card-header text-center ">??????????????????????????????????????????????????????????????? :)</div>
      </div>
      <div>
        <div class="card-body">
          <div class="container">
            <div class="row">
              {data &&
                data?.subcontracthasassign?.map((v) =>
                  v.hirecontractWorkId?.map((k) => (
                    <>
                      {k.status === "???????????????????????????????????????????????????????????????????????????????????????????????????" && (
                        <>
                          <Link
                            key={k.id}
                            href="/task/[hirecontracthasAssignId]"
                            as={`/task/${k.id}`}
                          >
                            <div class="col-md-4">
                              <div class="profile-card-6">
                                <img
                                  src="https://pbs.twimg.com/media/FNVBTYlaIAQLQ4I?format=jpg&name=4096x4096"
                                  class="img img-responsive"
                                  style={{
                                    maxWidth: "100%",
                                    height: "15v",
                                    objectFit: "cover",
                                  }}
                                />
                                <div class="profile-name">
                                  ????????????????????? : {k.zone}
                                </div>
                                <div class="profile-position"></div>
                                <div class="profile-overview">
                                  <div class="profile-overview">
                                    <div class="row text-center">
                                      <div class="col-xs-4">
                                        <h5> ???????????????????????????????????????????????? </h5>
                                        <p>{k.duration} ???????????????</p>
                                      </div>
                                      <div class="col-xs-4">
                                        <h5> ?????????????????????????????????????????????????????????????????? </h5>
                                        <p>{k.condition}</p>
                                      </div>
                                      <div class="col-xs-4">
                                        <h4> ?????????????????????????????????</h4>
                                        <p>{k.budget} ?????????</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </>
                      )}
                    </>
                  ))
                )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HirecontractHasAssign;
