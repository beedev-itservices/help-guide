import React from "react";
import { Router } from "@reach/router";
import SignIn from "../auth/SignIn";
import ProfilePage from "./ProfilePage";

function Application() {
  const user = null;
  
  return (
        user ?
        <div className="admin"><ProfilePage /></div>
      :
        <div className="admin-wrapper">
        <Router>
          <SignIn path="/" />
        </Router>
        </div>

  );
}
export default Application;