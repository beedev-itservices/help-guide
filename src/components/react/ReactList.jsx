import React from "react";
import { useHistory } from "react-router-dom";

function ReactList(props) {
  const { goBack } = useHistory();
  console.log("ml: reactlist.jsx: ", props);
  return (
    <div className="guide-wrapper">
      <div className="guide">
        <div className="guide-header">
          <button onClick={() => goBack()}>Go Back</button>
          <h1>The React Guides</h1>
        </div>
        <div className="guide-words">
          <h4>
              Below are different tips, tricks, and hints for using or working with React.
          </h4>
        </div>
      </div>
      <div className="the-items">
        {props.items.map(item => (
          <div className="item-card" key={item.reactid}>
          <h3>{item.reactnum}</h3>
          <h3>{item.reactname}</h3>
          <div className="item-info">
            <p>{item.reactinfo01}</p>
            <p>{item.reactinfo02}</p>
            <p>{item.reactinfo03}</p>
            <p>{item.reactinfo04}</p>
          </div>
      </div>
        ))}
      </div>
    </div>
  );
}

export default ReactList;
