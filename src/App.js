import React, { useState } from 'react';
import './css/App.css';
import Home from "./components/Home";
import { Route, Link, Switch } from "react-router-dom";
import data from "./components/datafiles/data";
import HtmlList from "./components/HtmlList";
import CssList from "./components/CssList";
import JsList from "./components/JsList";
import ReactList from "./components/ReactList";

export default function App() {
  const [tips] = useState(data);
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
            <Link to="/css-guide">CSS Guide</Link>
            <Link to="/js-guide">JS Guide</Link>
            <Link to="/react-guide">React Guide</Link>
          </div>
        </nav>
        <Switch>
          <Route path="/html-guide">
            <HtmlList items={tips} />
          </Route>
          <Route path="/css-guide">
            <CssList items={tips} />
          </Route>
          <Route path="/js-guide">
            <JsList items={tips} />
          </Route>
          <Route path="/react-guide">
            <ReactList items={tips} />
          </Route>
          <Route path="/" component={Home} />
        </Switch>
        <div className="Footer">
         Footer Text
        </div>
      </div>
    );
}