import React from "react";
import { useHistory } from "react-router-dom";

function JsList(props) {
  const { goBack } = useHistory();
  console.log("ml: jslist.jsx: ", props);
  return (
    <div className="guide-wrapper">
      <div className="guide">
        <div className="guide-header">
          <button onClick={() => goBack()}>Go Back</button>
          <h1>The JS Guides</h1>
        </div>
        <div className="guide-words">
          <h4>
              Below are different tips, tricks, and hints for using or working with JS.
          </h4>
        </div>
      </div>
      <div className="the-items">
        {props.items.map(item => (
          <div className="item-card" key={item.jsid}>
          <h3>{item.jsnum}</h3>
          <h3>{item.jsname}</h3>
          <div className="item-info">
            <p>{item.jsinfo01}</p>
            <p>{item.jsinfo02}</p>
            <p>{item.jsinfo03}</p>
            <p>{item.jsinfo04}</p>
          </div>
      </div>
        ))}
      </div>
    </div>
  );
}

export default JsList;
