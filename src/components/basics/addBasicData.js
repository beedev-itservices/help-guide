import React, { useState } from "react";
import { useRouteMatch, useHistory } from "react-router-dom";
import axios from "axios";
import { axiosWithAuth } from '../../auth/axiosWithAuth';


const initialTips = {
    name: "",
    num: "",
    info01: "",
  };
  
  const BasicsList = ({ basics, updateTips }) => {
    const match = useRouteMatch();
    const history = useHistory();
    console.log("ml: basicslist: ", basics);
    const [editing, setEditing] = useState(false);
    const [tipToEdit, setTipToEdit] = useState(initialTips);
    const [newTip, setNewTip] = useState({
      name: "",
      num: "",
      info01: "",
      info02: "",
      info03: "",
      info04: "",
    });
  
    const editTip = item => {
      setEditing(true);
      setColorToEdit(item);
    };
  
    const saveEdit = e => {
      e.preventDefault();
      console.log("ml: basicslist: saveEdit: ", ColorToEdit)
      axiosWithAuth()
        .put(`http://localhost:5000/api/basics/${tipToEdit.id}`, ColorToEdit)
        .then(res => {
          console.log("ml: basicslist: saveEdit: res in put", res)
          console.log('ml: basicslist: saveEdit: res.data', res.data);
          axiosWithAuth().get('http://localhost:500/api/basics')
            .the(res => {
                updateTips(res.data)
            })
            .catch(err => console.log('ml: basicslist: saveEdit: err ', err))
            console.log('ml: basicslist: saveEdit: err payload', res.data.payload);
          history.push('/')
        })
        .catch(err => {
          console.log('ml: basicslist: saveEdit: err inside catch', err);
        })
    };
  
    const deleteTip = item => {
      axiosWithAuth()
        .delete(`http://localhost:5000/api/basics/${item.id}`, item)
        .then(res => {
          console.log('ml: basicslist: deletetip: res inside delete', res);
          console.log('ml: basicslist: deletetip: res.data', res.data);
          axiosWithAuth().get('http://localhost:5000/api/basics')
            .then(res => {
              updateTips(res.data)
            })
            .catch(err => console.log("ml: basicslist: deletecolor: catch err", err))
            console.log('ml: basicslist: deletetip: catch payload: ', res.data.payload);
            history.push('/')
        })
        .catch(err => {
          console.log('ml: basicslist: deletetip: err inside catch: ', err);
        })
    };
  
    const addTip = (e) => {
      e.preventDefault();
      console.log('ml: basicslist: addtip: ', newTip)
      axiosWithAuth()
        .post('http://localhost:5000/api/basics', newTip)
        .then(res => {
          axiosWithAuth().get('http://localhost:5000/api/basics')
            .then(res => {
              updateTips(res.data)
            })
            .catch(err => console.log('ml: basicslist: addtip: post err: ', err))
          console.log('ml: basicslist: addtip: post payload: ', res.data.payload);
        })
        .catch(err => {
          console.log('ml: basicslist: addtip: catch err: ', err);
        })
    };
  
    const handleChange = (e) => {
      setNewTip({ ...newTip, [e.target.name]: e.target.value })
    };