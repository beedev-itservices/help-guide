import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import data from "./datafiles/cssdata";
import CssList from "./CssList";

function Css(props) {
    const { goBack } = useHistory();
    const [tips] = useState(data);
    return (
        <div>
            <button onClick={() => goBack()}>Go Back</button>
            <CssList items={tips} />
        </div>
    )
}

export default Css;