import React, { useContext } from "react";
import { Router } from "@reach/router";
import SignIn from "../auth/SignIn";
import ProfilePage from "./ProfilePage";
// import SignUp from "../auth/SignUp";
// import PasswordReset from "../auth/PasswordReset";
import UserProvider  from "../auth/UserProvider";
import { UserContext } from "../auth/UserProvider";


function Application() {
  const user = useContext(UserContext);
  
  return (
        user ?
        <div className="admin"><ProfilePage /></div>
      :
        <div className="admin-wrapper">
        <Router>
          {/* <SignUp path="signUp" /> */}
          <SignIn path="/" />
          {/* <PasswordReset path = "passwordReset" /> */}
        </Router>
        </div>  
  );
}
export default Application;