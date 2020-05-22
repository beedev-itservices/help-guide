import React, { useState } from 'react';
import data from "./basicdata";
import BasicsList from "./BasicsList";

function Basics(props) {
    const [tips] = useState(data);
    return (
        <div>
            <BasicsList items={tips} />
        </div>
    )
}

export default Basics;