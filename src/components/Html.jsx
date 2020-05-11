import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import data from "./datafiles/htmldata";
import HtmlList from "./HtmlList";

function Html(props) {
    const { goBack } = useHistory();
    const [tips] = useState(data);
    return (
        <div>
            <button onClick={() => goBack()}>Go Back</button>
            <HtmlList items={tips} />
        </div>
    )
}

export default Html;