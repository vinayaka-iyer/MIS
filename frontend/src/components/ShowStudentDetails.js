import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import StudentCard from './StudentCard';

class ShowStudentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:8000/api/students')
      .then((res) => {
        this.setState({
          students: res.data,
        });
      })
      .catch((err) => {
        console.log('Error from ShowStudentList');
      });
  }

  render() {
    const students = this.state.students;
    let studentList;

    if (!students) {
      studentList = 'there is no students record';
    } else {
      studentList = students.map((student, k) => (
        <StudentCard student={student} key={k} />
      ));
    }

    return (
      <div className='ShowStudentList'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <br />
              <h2 className='display-4 text-center'>Students List</h2>
            </div>

            <div className='col-md-11'>
              <Link
                to='/create-book'
                className='btn btn-outline-warning float-right'
              >
                + Add New Student
              </Link>
              <br />
              <br />
              <hr />
            </div>
          </div>

          <div className='list'>{studentList}</div>
        </div>
      </div>
    );
  }
}

export default ShowStudentList;
