import Cookies from "js-cookie";
import Router from "next/router";
import React, { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import Swal from 'sweetalert2'

export const AuthContext = createContext();

const AuthProvider = ({ children, userData }) => {
  const [user, setUser] = useState(userData);

  useEffect(() => {
    const syncLogout = (e) => {
      if (e.key === "signout") {
        // setUser to null :)
        setUser(null);
        Router.push("/");
      }
    };
    window.addEventListener("storage", syncLogout);

    // clear
    return () => {
      /// shorthand for .... use window just call fucntion like window.localstorage = localstorage :)
      window.removeEventListener("storage", syncLogout);
      window.localStorage.removeItem("signout");
    };
  }, []);

  const setAuthUser = (userInfo) => setUser(userInfo);

  const signout = () => {
    Cookies.remove("jwt");
    setUser(null);
    localStorage.setItem("signout", Date.now());

    Swal.fire({
      icon: "success",
      title: "LOLIPOPZ",
      text: "ออกจากระบบสำเร็จ",
    });
    
    Router.push("/");
  };
  return (
    <AuthContext.Provider value={{ user, setAuthUser, signout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
