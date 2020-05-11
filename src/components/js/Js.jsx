import React, { useState } from 'react';
import data from "./jsdata";
import JsList from "./JsList";

function Js(props) {
    const [tips] = useState(data);
    return (
        <div>
            <JsList items={tips} />
        </div>
    )
}

export default Js;