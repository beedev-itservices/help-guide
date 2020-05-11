import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import data from "./datafiles/htmldata";
import JsList from "./JsList";

function Js(props) {
    const { goBack } = useHistory();
    const [tips] = useState(data);
    return (
        <div>
            <button onClick={() => goBack()}>Go Back</button>
            <JsList items={tips} />
        </div>
    )
}

export default Js;