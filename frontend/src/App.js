import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import CreateStudent from './components/CreateStudent';
import ShowStudentList from './components/ShowStudentList';
import ShowStudentDetails from './components/ShowStudentDetails';
import UpdateStudentInfo from './components/UpdateStudentInfo';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={ShowStudentList} />
          <Route path='/create-student' component={CreateStudent} />
          <Route path='/edit-student/:id' component={UpdateStudentInfo} />
          <Route path='/show-student/:id' component={ShowStudentDetails} />
        </div>
      </Router>
    );
  }
}

export default App;
