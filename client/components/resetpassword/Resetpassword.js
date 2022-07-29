import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { useRouter } from "next/router";
import { RESETPASSWORD } from "../../apollo/mutations";
import Swal from "sweetalert2";

const ResetPassword = () => {
  const router = useRouter();

  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const [resetpassword, { loading, error }] = useMutation(RESETPASSWORD, {
    variables: { password, token: router && router.query.resetToken },
    onCompleted: (data) => {
      if (data) {
        setMessage(data.resetpassword.message);
        Swal.fire({
          icon: "success",
          title: "LOLIPOPZ",
          text: data.resetpassword.message,
        });
      }
    },
  });

  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await resetpassword();
    } catch (error) {
      Swal.fire({
        icon: "success",
        title: "LOLIPOPZ",
        text: error.graphQLErrors[0].message,
      });
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
              <p className="text-center"> RESETPASSWORD PAGE</p>
              <label className="form-label" for="form1Example13">
                NewPassword
              </label>
              <input
                type="password"
                name="password"
                placeholder="Your New Password"
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

export default ResetPassword;
