import React, { useState } from 'react';
import data from "./nodedata";
import NodeList from "./NodeList";

function Node(props) {
    const [tips] = useState(data);
    return (
        <div>
            <NodeList items={tips} />
        </div>
    )
}

export default Node;