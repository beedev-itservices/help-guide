import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../auth/axiosWithAuth";

const BasicList = () => {
  const [basic, setBasic] = useState([]);
  const [newBasic, setNewBasic] = useState({});

  useEffect(() => {
    axiosWithAuth()
      .get("http://localhost:5000/api/basic")
      .then((res) => {
        console.log(res.data);
        setBasic(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const addBasic = (e) => {
    e.preventDefault();
    console.log(newBasic);
    axiosWithAuth()
      .post("http://localhost:5000/api/basic", newBasic)
      .then((res) => {
        console.log(res.data);
        setBasic(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleFormChange = (e) => {
    setNewBasic({
      ...newBasic,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <form onSubmit={addBasic}>
        <h1>Add Basic Item</h1>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={newBasic.name}
          onChange={handleFormChange}
        />
        <input
          type="text"
          placeholder="Tip #"
          name="num"
          value={newBasic.num}
          onChange={handleFormChange}
        />
        <input
          type="text"
          placeholder="Info"
          name="info01"
          value={newBasic.info01}
          onChange={handleFormChange}
        />
        <button type="submit">Add</button>
      </form>
      <h1>Basic List</h1>
      {basic.length !== 0 ? (
        <div>
          {basic.map((b) => (
            <div key={b.id}>
              <h3>Name: {b.name}</h3>
              <p>Tip #: {b.num}</p>
              <p>Information: {b.info01}</p>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default BasicList;