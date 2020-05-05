import React from "react";

function HtmlDescription(props) {
  return (
    <div>
      <p className="item-description">{props.item.htmldescription}</p>
    </div>
  );
}

export default HtmlDescription;
