import React, { useState } from "react";
import axios from "axios";
import { firestore } from '../../auth/firebase';
import { useRouteMatch, useHistory } from "react-router-dom";

// function BasicsList(props) {
//   const { goBack } = useHistory();
//   console.log("ml: basicslist.jsx: basicslist: ", props);

// const initialTip = {
//   num: "",
//   name: "",
//   info01: "",
//   info02: "",
//   info03: "",
//   info04: "",
// };
const tips = firestore.collection('Basis');

const BasicsList = ({ tips }) => {
  const match = useRouteMatch();
  const history = useHistory();
  console.log(tips);
  // const [editing, setEditing] = useState(false);
  // const [tipToEdit, setTipToEdit] = useState(initialTip);
  // const [newTip, setNewTip] = useState({
  //   num: "",
  //   name: "",
  //   info01: "",
  //   info02: "",
  //   info03: "",
  //   info04: "",
  // });

  // const editTip = tip => {
  //   setEditing(true);
  //   setTipToEdit(tip);
  // };

  // const saveEdit = e => {
  //   e.preventDefault();
  //   console.log(tipToEdit)
  //   firestore()
  //     .put(`Basics/${document.id}`, tipToEdit)
  //     .then(res => {
  //       console.log(res);
  //       console.log(res.data);
  //       firestore().get('Basics')
  //         .then(res => {
  //           updateTips(res.data)
  //         })
  //         .catch(err => console.log(err))
  //         console.log(res.data.payload);
  //       history.push(`/`)
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     })
  // };

  // const deleteTip = tip => {
  //   firestore()
  //     .delete(`Basics/${document.id}`, tip)
  //     .then(res => {
  //       console.log(res);
  //       console.log(res.data);
  //       firestore().get('Basics')
  //         .then(res => {
  //           updateTips(res.data)
  //         })
  //         .catch(err => console.log(err))
  //         console.log(res.data.payload);
  //         history.push(`/`)
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     })
  // };

  // const addTip = (e) => {
  //   e.preventDefault();
  //   console.log(newTip);
  //   firestore()
  //   .post('Basics', newTip)
  //   .then(res => {
  //     updateTips(res.data)
  //   })
  //   .catch(err => console.log(err))
  //   console.log(res.data.payload);
  //   .catch(err => {
  //     console.log(err);
  //   })
  // };

  // const handleChange = (e) => {
  //   setNewTip({...newTip, [e.target.name]: e.target.value})
  // }


  return (
    <div className="guide-wrapper">
      <div className="guide">
        <div className="guide-header">
          {/* <button onClick={() => goBack()}>Go Back</button> */}
          <h1>The Basics Guides</h1>
        </div>
        <div className="guide-words">
          <h4>
              Below are different tips, tricks, and hints for using or working in Web Development.
          </h4>
        </div>
      </div>
      <div className="the-items">
        {tips.map(Basics => (
          <div className="item-card" key={Basics.id}>
          <h3>{Basics.num}</h3>
          <h3>{Basics.name}</h3>
          <div className="item-info">
            <p>{Basics.info01}</p>
            <p>{Basics.info02}</p>
            <p>{Basics.info03}</p>
            <p>{Basics.info04}</p>
          </div>
      </div>
        ))}
      </div>
    </div>
  );
};

export default BasicsList;
