import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../auth/firebase';

class App extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('basics');
    this.unsubscribe = null;
    this.state = {
      basics: []
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const basics = [];
    querySnapshot.forEach((doc) => {
      const { title, info } = doc.data();
      basics.push({
        key: doc.id,
        doc, // DocumentSnapshot
        title,
        info
      });
    });
    this.setState({
      basics
   });
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  render() {
    return (
      <div className="basic-list">
        <div className="panel">
          <div className="panel-heading">
            <h3>BASICS LIST</h3>
          </div>
          <div className="panel-body">
            <h4><Link to="/create">Add Tip</Link></h4>
            <table className="table">
              <thead className="table-heading">
                <tr>
                  <th>Title</th>
                  <th>Information</th>
                </tr>
              </thead>
              <tbody className="table-body">
                {this.state.basics.map(tip =>
                  <tr className="table-row">
                    <td>{tip.title}</td>
                    <td><Link to={`/show/${tip.key}`}>{tip.title}</Link></td>
                    <td>{tip.info}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;