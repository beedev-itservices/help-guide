import React, { useState } from 'react';
import data from "./reduxdata";
import ReduxList from "./ReduxList";

function Redux(props) {
    const [tips] = useState(data);
    return (
        <div>
            <ReduxList items={tips} />
        </div>
    )
}

export default Redux;