import React from "react";
import Application from "./Admin";
import UserProvider from "../auth/UserProvider";

function Login() {

  return (
    <UserProvider>
      <Application />
    </UserProvider>
  );
}
export default Login;