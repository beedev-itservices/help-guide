import React from "react";
import { useHistory } from "react-router-dom";

function Home() {
    const history = useHistory();
    console.log("ml: home.jsx: Home: ", history);
    const routeToHtml = event => {
        history.push("/HtmlList");
    };

    return (
        <div className="home-wrapper">
            <button className="md-button home-button" onClick={routeToHtml}>See HTML Guides</button>
        </div>
    );
}

export default Home;