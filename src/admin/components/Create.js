import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import firebase from '../../auth/firebase';
import { Link } from 'react-router-dom';

class Create extends Component {

  constructor() {
    super();
    this.ref = firebase.firestore().collection('basics');
    this.state = {
      title: '',
      info: ''
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { title, info } = this.state;

    this.ref.add({
      title,
      info
    }).then((docRef) => {
      this.setState({
        title: '',
        info: ''
      });
      this.props.history.push("/admin")
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }

  render() {
    const { title, info } = this.state;
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              ADD TIP
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/admin" class="btn btn-primary">Basics List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="title">Title:</label>
                <input type="text" class="form-control" name="title" value={title} onChange={this.onChange} placeholder="Title" />
              </div>
              <div class="form-group">
                <label for="Information">Information:</label>
                <textarea class="form-control" name="information" onChange={this.onChange} placeholder="Information" cols="80" rows="4">{info}</textarea>
              </div>
              <button type="submit" class="btn btn-success">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;