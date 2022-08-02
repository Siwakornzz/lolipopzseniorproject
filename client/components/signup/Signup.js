import { useMutation } from "@apollo/react-hooks";
import Link from "next/link";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { SIGN_UP } from "../../apollo/mutations";

const Signup = () => {
  const [userInfo, setUserInfo] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
  });

  const [success, setSuccess] = useState(false);
  const [signup, { loading, error }] = useMutation(SIGN_UP, {
    variables: { ...userInfo },

    onCompleted: (data) => {
      if (data) {
        setSuccess(true);
        setUserInfo({
          firstname: "",
          lastname: "",
          username: "",
          email: "",
          password: "",
        });

        Swal.fire({
          icon: "success",
          title: "LOLIPOPZ",
          text: "สร้างบัญชีสำเร็จ",
        });
      }
      if (error) {
        console.log(error);
      }
    },
  });

  // e = element
  const handleChange = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await signup();
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
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
              <div class="row">
                <div class="col-md-6 mb-4">
                  <div class="form-outline">
                    <label class="form-label">First name</label>
                    <input
                      type="text"
                      name="firstname"
                      class="form-control"
                      placeholder="First name"
                      value={userInfo.firstname}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div class="col-md-6 mb-4">
                  <div class="form-outline">
                    <label class="form-label">Last name</label>
                    <input
                      type="text"
                      name="lastname"
                      class="form-control"
                      placeholder="Last name"
                      value={userInfo.lastname}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Username Input */}
              <div class="form-outline mb-4">
                <label class="form-label">Username</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Username"
                  name="username"
                  value={userInfo.username}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* <!-- Email input --> */}
              <div class="form-outline mb-4">
                <label class="form-label">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  placeholder="Email"
                  name="email"
                  value={userInfo.email}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* <!-- Password input --> */}
              <div class="form-outline mb-4">
                <label class="form-label">Password</label>
                <input
                  type="password"
                  class="form-control"
                  placeholder="Password"
                  name="password"
                  minLength={6}
                  value={userInfo.password}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* <!-- Checkbox --> */}
              <div class="form-check d-flex justify-content-left mb-4">
                <input
                  class="form-check-input me-2"
                  type="checkbox"
                  value=""
                  required
                />
                <label class="form-check-label">
                  ฉันได้อ่านและยอมรับ ข้อตกลงและเงื่อนไขการใช้งานของ LOLIPOPZ*
                </label>
              </div>

              <div class="form-check d-flex justify-content-left mb-4">
                <input
                  class="form-check-input me-2"
                  type="checkbox"
                  value=""
                  required
                />
                <label class="form-check-label">
                  ฉันได้อ่านและยอมรับ นโยบายคุ้มครองความเป็นส่วนตัว*
                </label>
              </div>
              {/* <!-- Submit button --> */}
              <button
                type="submit"
                className="btn btn-primary w-100 btn-block"
                disabled={loading}
              >
                Sign Up
              </button>
              <a>
                Already have a account ?
                <Link href="/signin">
                  <span style={{ color: "#0d6efd", cursor: "pointer" }}>
                     SignIn
                  </span>
                </Link>
              </a>
              {error && <p>{error.graphQLErrors[0].message}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
