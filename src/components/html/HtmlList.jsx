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
        </div>
      </div>
      <div className="the-items">
        {props.items.map(item => (
          <div className="item-card" key={item.htmlid}>
              <h3>{item.htmlnum}</h3>
              <h3>{item.htmlname}</h3>
              <div className="item-info">
                <p>{item.htmlinfo01}</p>
                <p>{item.htmlinfo02}</p>
                <p>{item.htmlinfo03}</p>
                <p>{item.htmlinfo04}</p>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HtmlList;
