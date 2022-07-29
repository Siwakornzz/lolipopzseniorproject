import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { REQUESTRESETPASSWORD } from "../../apollo/mutations";
import Swal from "sweetalert2";
import { Router } from "next/router";

const RequestresetPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [requestresetpassword, { loading, error }] = useMutation(
    REQUESTRESETPASSWORD,
    {
      variables: { email },
      onCompleted: (data) => {
        if (data) {
          setMessage(data.requestresetpassword.message);
          Swal.fire({
            icon: "success",
            title: "LOLIPOPZ",
            text: data.requestresetpassword.message,
          });
        }
      },
    }
  );

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await requestresetpassword();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="vh-100 mt-auto">
      <div className="container py-5 h-100">
        <div className="row d-flex align-items-center justify-content-center h-100">
          <div className="col-md-8 col-lg-7 col-xl-6">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="img-fluid"
              alt="Phone image"
            />
          </div>
          <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
            <form onSubmit={handleSubmit}>
              {/* <!-- Email input --> */}

              <div className="form-outline mb-4">
                <p className="text-center"> REQUESTRESETPASSWORD PAGE</p>
                <label className="form-label" for="form1Example13">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={handleChange}
                  required
                  className="form-control form-control-lg"
                />
              </div>

              {/* <!-- Submit button --> */}
              <button
                type="submit"
                className="btn btn-primary w-100 btn-block"
                disabled={loading}
              >
                ResetPassword :)
              </button>
              <div>{message && <p>{message}</p>}</div>
              {error && <p>{error.graphQLErrors[0].message}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequestresetPasswordPage;
