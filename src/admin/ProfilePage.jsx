import React, { useContext } from "react";
import { UserContext } from "../auth/UserProvider";
import {auth} from "../auth/firebase";

import { Route, BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import Edit from './components/Edit';
import Create from './components/Create';
import Show from './components/Show';

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
        <div className="edits">
        <Router>
          <div className="the-lists">
            <Route exact path='/admin' component={App} />
            <Route path='/edit/:id' component={Edit} />
            <Route path='/create' component={Create} />
            <Route path='/show/:id' component={Show} />
          </div>
      </Router>,
          
        </div>
    </div>
  ) 
};
export default ProfilePage;

