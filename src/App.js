import React, { useState } from 'react';
import './css/App.css';
import Home from "./components/Home";
import { Route, Link, Switch } from "react-router-dom";
import About from './components/About';
import Guides from './components/Guides';
import Html from "./components/html/Html";
import Css from "./components/css/Css";
import Js from "./components/js/Js";
import ReactGuide from "./components/react/ReactGuide";
import Basics from "./components/basics/Basics";
import Advanced from "./components/Advanced";
import Node from "./components/node/Node";
import Java from "./components/java/Java";
import Redux from "./components/redux/Redux";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import FriendsList from "./components/FriendsList";
import * as firebase from "firebase/app";
import "firebase/firestore";


export default function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyD3UZoe1awNs2fvWiZPjIyXPexmy1OTKyM",
    authDomain: "web-dev-help-guide.firebaseapp.com",
    databaseURL: "https://web-dev-help-guide.firebaseio.com",
    projectId: "web-dev-help-guide",
    storageBucket: "web-dev-help-guide.appspot.com",
    messagingSenderId: "453353654781",
    appId: "1:453353654781:web:7e1bf6ceac6a0cc061b194",
    measurementId: "G-PLT6YFFP37"
  };

    return (
      <div className="App">
        <nav>
          <div className="title-bar">
            <h2>A Web Developers Guide</h2>
            <h4>Tips, Tricks, and Hints</h4>
            </div>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/the-guides">Beginner Guides</Link>
            <Link to="/advanced-guides">Advanced Guides</Link>
            <Link to="/login">Admin</Link>
          </div>
        </nav>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/the-guides">
              <Guides />
            </Route>
          <Route path="/advanced-guides">
              <Advanced />
            </Route>
          <Route path="/basics-guide">
            <Basics />
          </Route>
          <Route path="/html-guide">
            <Html />
          </Route>
          <Route path="/css-guide">
            <Css />
           </Route>
           <Route path="/js-guide">
             <Js />
           </Route>
          <Route path="/react-guide">
            <ReactGuide />
          </Route>
          <Route path="/redux-guide">
            <Redux />
          </Route>
          <Route path="/node-guide">
            <Node />
          </Route>
          <Route path="/J=java-guide">
            <Java />
          </Route>
          <Route path="/login" render={(props) => <Login {...props} />} />
          <PrivateRoute path="/protected" component={FriendsList} />
          <Route path="/" component={Home} />
        </Switch>
        <div className="Footer">
        <div className="madeby">
        <img src="https://images.craftsnherbs.com/beelogo.jpg" alt="" />
        <h4>Created by BeeDev IT Services &copy; 2020</h4>
        </div>
        </div>
      </div>
    );
}