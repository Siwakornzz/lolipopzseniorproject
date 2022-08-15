import React, { useContext, useEffect } from "react";
import Link from "next/link";
import { AuthContext } from "../appstate/AuthProvider";

const Nav = () => {
  useEffect(() => {
    // Run code on client-side only : ensure document is here
    if (typeof document !== undefined) {
      // load JS bootstrap dependency
      require("bootstrap/dist/js/bootstrap");
    }
  }, []);

  const { user, signout } = useContext(AuthContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
      <div className="container-fluid">
        <Link href="/">
          <a className="navbar-brand">LOLIPOPZ</a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className=" collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto ">
            {!user && (
              <>
                <Link href="/signin">
                  <li className="nav-item">
                    <a className="nav-link mx-2" style={{ cursor: "pointer" }}>
                      เข้าสู่ระบบ
                    </a>
                  </li>
                </Link>
                <Link href="/signup">
                  <li className="nav-item">
                    <a className="nav-link mx-2" style={{ cursor: "pointer" }}>
                      สมัครสมาชิก
                    </a>
                  </li>
                </Link>
              </>
            )}

            {user && (
              <li className="nav-item dropdown">
                <a
                  className="nav-link mx-2 dropdown-toggle"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="bi bi-person-circle"></i> {user.username}
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  {user && user?.roles === "Admin" && (
                    <>
                      {/* ADMIN */}
                      <div className="dropdown-content">
                        <a style={{ display: "block", cursor: "context-menu" }}>
                          &nbsp; &nbsp;{" "}
                          <i className="bi bi-person-workspace"></i>
                          &nbsp; ADMIN
                        </a>
                      </div>
                      <hr className="dropdown-divider" />

                      <Link href="/admin">
                        <li style={{ cursor: "pointer" }}>
                          <a className="dropdown-item"> DASHBOARD</a>
                        </li>
                      </Link>

                      <Link href="/admin/matching">
                        <li style={{ cursor: "pointer" }}>
                          <a className="dropdown-item"> Matching</a>
                        </li>
                      </Link>

                      <Link href="/admin/managehirecontracts">
                        <li style={{ cursor: "pointer" }}>
                          <a className="dropdown-item"> Managehirecontracts</a>
                        </li>
                      </Link>

                      <Link href="/admin/managesubcontracts">
                        <li style={{ cursor: "pointer" }}>
                          <a className="dropdown-item"> Managesubcontracts</a>
                        </li>
                      </Link>

                      <hr className="dropdown-divider" />
                    </>
                  )}

                  {/* USER */}
                  <div className="dropdown-content">
                    <a style={{ display: "block", cursor: "context-menu" }}>
                      &nbsp; &nbsp; <i className="bi bi-person"></i>
                      &nbsp; USER
                    </a>
                  </div>
                  <hr className="dropdown-divider" />

                  <Link href="/subcontracts">
                    <li style={{ cursor: "pointer" }}>
                      <a className="dropdown-item">Subcontracts</a>
                    </li>
                  </Link>

                  <Link href="/hirecontracts">
                    <li style={{ cursor: "pointer" }}>
                      <a className="dropdown-item">Hirecontracts</a>
                    </li>
                  </Link>

                  <Link href="/managesubcontract">
                    <li style={{ cursor: "pointer" }}>
                      <a className="dropdown-item">ManageSubcontracts</a>
                    </li>
                  </Link>

                  <Link href="/managehirecontract">
                    <li style={{ cursor: "pointer" }}>
                      <a className="dropdown-item">ManageHirecontracts</a>
                    </li>
                  </Link>

                  <hr className="dropdown-divider" />

                  <li style={{ cursor: "pointer" }}>
                    <a
                      className="dropdown-item"
                      style={{ cursor: "pointer" }}
                      onClick={signout}
                    >
                      <i className="bi bi-box-arrow-right"></i> ออกจากระบบ
                    </a>
                  </li>
                </ul>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
  
};


export default Nav;
