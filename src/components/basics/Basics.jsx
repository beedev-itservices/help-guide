import React, { useEffect, useState } from 'react';
// import data from "./basicdata";
import { firestore } from '../../auth/firebase';
import BasicsList from "./BasicsList";


// function Basics(props) {
//     const [tips] = useState(data);
  
//     return (
//         <div>
//             <BasicsList items={tips} />
//         </div>
//     )
// }

const Basics = () => {
    const [tipsList, setTipsList] = useState([]);

    useEffect(() => {
        firestore()
        .get("Basics")
        .then((res) => {
            console.log(res.data);
            setTipsList(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);

    return (
        <div>
            <BasicsList items={tipsList} />
        </div>
    )
};




export default Basics;