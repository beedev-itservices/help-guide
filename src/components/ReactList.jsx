import React from "react";
import { useHistory } from "react-router-dom";
import './../css/App.css';

function ReactList(props) {
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
              Below are different tips, tricks, and hints for using or working with HTML.  Click on the picture for more informaion.
          </h4>
        </div>
      </div>
      <div className="the-items">
        {props.items.map(item => (
          <div className="item-card" key={item.reactid}>
              <img
                className="item-list-image"
                src={item.reactimageUrl}
                alt={item.reactname}
              />
              <p>{item.reactname}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReactList;
