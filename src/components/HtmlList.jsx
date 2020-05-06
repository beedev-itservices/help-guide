import React from "react";
import { Link, useHistory } from "react-router-dom";

function HtmlList(props) {
  const { push, goBack } = useHistory();
  console.log("ml: htmllist.jsx: htmllist: ", props);
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
        {props.htmlitems.map(htmlitem => (
          <div className="item-card" key={htmlitem.htmlid}>
            <Link to={`/the-guide/${htmlitem.htmlid}/HtmlDescription`}>
              <img
                className="item-list-image"
                src={htmlitem.htmlimageUrl}
                alt={htmlitem.htmlname}
              />
              <p>{htmlitem.htmlname}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HtmlList;
