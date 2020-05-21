import React from "react";
import { useHistory } from "react-router-dom";

function CssList(props) {
  const { goBack } = useHistory();
  console.log("ml: csslist.jsx: csslist: ", props);
  return (
    <div className="guide-wrapper">
      <div className="guide">
        <div className="guide-header">
          <button onClick={() => goBack()}>Go Back</button>
          <h1>The CSS Guides</h1>
        </div>
        <div className="guide-words">
          <h4>
              Below are different tips, tricks, and hints for using or working with CSS.
          </h4>
          <p>What is CSS?  This is used to add the paint to the website... to style it and make it look pleasing.</p>
        </div>
      </div>
      <div className="the-items">
        {props.items.map(item => (
          <div className="item-card" key={item.cssid}>
          <h3>{item.cssnum}</h3>
          <h3>{item.cssname}</h3>
          <div className="item-info">
            <p>{item.cssinfo01}</p>
            <p>{item.cssinfo02}</p>
            <p>{item.cssinfo03}</p>
            <p>{item.cssinfo04}</p>
          </div>
      </div>
        ))}
      </div>
    </div>
  );
}

export default CssList;
