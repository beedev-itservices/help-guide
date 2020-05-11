import React, { useState } from 'react';
import data from "./htmldata";
import HtmlList from "./HtmlList";

function Html(props) {
    const [tips] = useState(data);
    return (
        <div>
            <HtmlList items={tips} />
        </div>
    )
}

export default Html;