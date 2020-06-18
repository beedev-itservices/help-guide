import React, { Component } from 'react';
import firebase from '../../auth/firebase';
import { Link } from 'react-router-dom';

class Edit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      key: '',
      title: '',
      info: ''
    };
  }

  componentDidMount() {
    const ref = firebase.firestore().collection('basics').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        const tip = doc.data();
        this.setState({
          key: doc.id,
          title: tip.title,
          info: tip.info
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState({tip:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { title, info } = this.state;

    const updateRef = firebase.firestore().collection('basics').doc(this.state.key);
    updateRef.set({
      title,
      info
    }).then((docRef) => {
      this.setState({
        key: '',
        title: '',
        info: ''
      });
      this.props.history.push("/show/"+this.props.match.params.id)
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              EDIT TIPS
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to={`/show/${this.state.key}`} class="btn btn-primary">Basics List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="title">Title:</label>
                <input type="text" class="form-control" name="title" value={this.state.title} onChange={this.onChange} placeholder="Title" />
              </div>
              <div class="form-group">
                <label for="author">Information:</label>
                <input type="text" class="form-control" name="information" value={this.state.info} onChange={this.onChange} placeholder="Information" />
              </div>
              <button type="submit" class="btn btn-success">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Edit;