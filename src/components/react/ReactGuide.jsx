import React, { useState } from 'react';
import data from "./reactdata";
import ReactList from "./ReactList";

function ReactGuide(props) {
    const [tips] = useState(data);
    return (
        <div>
            <ReactList items={tips} />
        </div>
    )
}

export default ReactGuide;