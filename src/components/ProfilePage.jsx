import React, { useContext } from "react";
import { UserContext } from "../auth/UserProvider";
import {auth} from "../auth/firebase";
import { navigate } from "@reach/router";

const ProfilePage = () => {
  const user = useContext(UserContext);
  const {photoURL, displayName, email} = user;
  console.log(user);
  
  return (
    <div className = "profile-wrapper">
      <div className="profile">
        <h2>{displayName}</h2>
        <h3>{email}</h3>
        <button className="button" onClick = {() => {auth.signOut()}}>Sign out</button>
      </div>
    </div>
  ) 
};
export default ProfilePage;

