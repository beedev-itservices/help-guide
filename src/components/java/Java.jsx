import React, { useState } from 'react';
import data from "./javadata";
import JavaList from "./JavaList";

function Java(props) {
    const [tips] = useState(data);
    return (
        <div>
            <JavaList items={tips} />
        </div>
    )
}

export default Java;