import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import data from "./datafiles/reactdata";
import ReactList from "./ReactList";

function ReactGuide(props) {
    const { goBack } = useHistory();
    const [tips] = useState(data);
    return (
        <div>
            <button onClick={() => goBack()}>Go Back</button>
            <ReactList items={tips} />
        </div>
    )
}

export default ReactGuide;