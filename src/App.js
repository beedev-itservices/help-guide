import React, { useState } from 'react';
import './css/App.css';
import Home from "./components/Home";
import { Route, Link, Switch } from "react-router-dom";
import About from './components/About';
import Html from "./components/html/Html";
import Css from "./components/css/Css";
import Js from "./components/js/Js";
import ReactGuide from "./components/react/ReactGuide";

export default function App() {
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
            <Link to="/html-guide">HTML Guide</Link>
            <Link to="/css-guide">CSS Guide</Link>
            <Link to="/js-guide">JS Guide</Link>
            <Link to="/react-guide">React Guide</Link>
          </div>
        </nav>
        <Switch>
          <Route path="/about">
            <About />
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