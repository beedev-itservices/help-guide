import React from "react";
import { useParams, useRouteMatch, Route, NavLink, Link, useHistory } from "react-router-dom";
import HtmlDescription from "./HtmlDescription";

function HtmlItem(props) {
  const params = useParams();
  const { push, goBack } = useHistory();
  const { path, url } = useRouteMatch();
  console.log("ml: htmlguide.jsx: html: url: ", url);
  const guideItem = props.htmlitems.find(htmlitem => htmlitem.htmlid === Number(params.htmlitemID));
  return (
    <div className="item-wrapper">
      <div className="item-header">
        <div className="image-wrapper">
          <img src={guideItem.htmlimageUrl} alt={guideItem.htmlname} />
        </div>
        <div className="item-title-wrapper">
          <h2>{guideItem.htmlname}</h2>
          <h4>Description:</h4>
          <p>{guideItem.htmldescription}</p>
          <p>{guideItem.htmldescription01}</p>
          <button onClick={() => goBack()}>Back to Guides</button>
        </div>
      </div>
      <nav className="item-sub-nav">
        <NavLink to={`/html-guide/${guideItem.htmlid}/images`}>
          Click for Other Images
        </NavLink>
      </nav>
      <Route path={`/html-guide/:itemID/images`}>
        <img className="altimgs" src={guideItem.htmlimages01} alt="More Images Comming Soon" />
      </Route>
    </div>
  );
}
export default HtmlItem;
