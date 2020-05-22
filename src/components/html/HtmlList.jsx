import React from "react";
import { useHistory } from "react-router-dom";

function HtmlList(props) {
  const { goBack } = useHistory();
  console.log("ml: htmllist.jsx: htmllist: ", props);
  return (
    <div className="guide-wrapper">
      <div className="guide">
        <div className="guide-header">
          <button onClick={() => goBack()}>Go Back</button>
          <h1>The HTML Guides</h1>
        </div>
        <div className="guide-words">
          <h4>
              Below are different tips, tricks, and hints for using or working with HTML.
          </h4>
          <p>What is HTML?  This is the backbone of every website.  It tells the browser what it needs to load and see</p>
        </div>
      </div>
      <div className="the-items">
        {props.items.map(item => (
          <div className="item-card" key={item.id}>
              <h3>{item.num}</h3>
              <h3>{item.name}</h3>
              <div className="item-info">
                <p>{item.info01}</p>
                <p>{item.info02}</p>
                <p>{item.info03}</p>
                <p>{item.info04}</p>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HtmlList;
