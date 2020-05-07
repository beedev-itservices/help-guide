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
            <button className="md-button home-button" onClick={routeToHtml}>See HTML Guides</button>
            <button className="md-button home-button" onClick={routeToCss}>See CSS Guides</button>
            <button className="md-button home-button" onClick={routeToJs}>See JS Guides</button>
            <button className="md-button home-button" onClick={routeToReact}>See React Guides</button>
        </div>
    );
}

export default Home;