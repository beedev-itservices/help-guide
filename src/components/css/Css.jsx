import React, { useState } from 'react';
import data from "./cssdata";
import CssList from "./CssList";

function Css(props) {
    const [tips] = useState(data);
    return (
        <div>
            <CssList items={tips} />
        </div>
    )
}

export default Css;