import React from "react";
import { useHistory } from "react-router-dom";

function Home() {
    const history = useHistory();
    console.log("ml: home.jsx: Home: ", history);
    const routeToHtml = event => {
        history.push("./html-guide");
    };
    const routeToCss = event => { 
        history.push("./css-guide");
    };
    const routeToJs = event => { 
        history.push("./js-guide");
    };
    const routeToReact = event => { 
        history.push("./react-guide");
    };

    return (
        <div className="home-wrapper">
            <div className="home-section">
            <h2>A Web Developers Guide</h2>
            <p>This was created to help Web Developers old and new with different aspects of Web Development.</p>
            <p>Not everything comes easy to everyone.  So having a guide can help along the way.</p>
            <p>The intent of the site is not to be an all inclusive guide but one that is a collaberation of information and will be an ever growing guide.</p>
            </div>
            <div className="home-buttons">
            <button className="md-button home-button" onClick={routeToHtml}>See HTML Guides</button>
            <button className="md-button home-button" onClick={routeToCss}>See CSS Guides</button>
            <button className="md-button home-button" onClick={routeToJs}>See JS Guides</button>
            <button className="md-button home-button" onClick={routeToReact}>See React Guides</button>
            </div>
        </div>
    );
}

export default Home;