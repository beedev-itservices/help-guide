import React, { useState } from 'react';
import './css/App.css';
import Home from "./components/Home";
import { Route, Link, Switch } from "react-router-dom";
import data from "./components/datafiles/htmldata";
import HtmlItem from "./components/HtmlItem";
import HtmlList from "./components/HtmlList";

export default function App() {
  const [tips, setTips] = useState(data);
    return (
      <div className="App">
        <nav>
          <div className="title-bar">
            <h2>A Web Developers Guide</h2>
            <h4>Tips, Tricks, and Hints</h4>
            </div>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/html-guide">HTML Guide</Link>
            CSS Guides
            JS Guides
            React Guides
          </div>
        </nav>
        <Switch>
          <Route path="/html-guide/:htmlidemID">
            <HtmlItem htmlitems={tips} />
          </Route>
          <Route path="/html-guide">
            <HtmlList htmlitems={tips} />
          </Route>
          <Route path="/" component={Home} />
        </Switch>
        <div className="Footer">
         Footer Text
        </div>
      </div>
    );
}