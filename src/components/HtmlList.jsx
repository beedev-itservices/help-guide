import React from "react";
import { Link, useHistory } from "react-router-dom";

function HtmlList(props) {
  const { push, goBack } = useHistory();
  console.log(props);
  return (
    <div className="list-wrapper">
      <div className="guide">
        <div className="guide-header">
          <button onClick={() => goBack()}>Go Back</button>
          <h1>The HTML Guides</h1>
        </div>
        <div className="guide-words">
          <h4>
              Below are different tips, tricks, and hints for using or working with HTML.  Click on the picture for more informaion.
          </h4>
        </div>
      </div>
      <div className="the-items">
        {props.items.map(item => (
          <div className="item-card" key={item.htmlid}>
            <Link to={`/the-guide/${item.html}/HtmlDescription`}>
              <img
                className="item-list-image"
                src={item.htmlimageUrl}
                alt={item.htmlname}
              />
              <p>{item.htmlname}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HtmlList;
