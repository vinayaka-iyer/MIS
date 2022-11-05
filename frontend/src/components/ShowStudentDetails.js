import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

class showStudentDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      student: {},
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:8000/api/students/' + this.props.match.params.id)
      .then((res) => {
        this.setState({
          student: res.data,
        });
      })
      .catch((err) => {
        console.log('Error from ShowStudentDetails');
      });
  }

  onDeleteClick(id) {
    axios
      .delete('http://localhost:8000/api/students/' + id)
      .then((res) => {
        this.props.history.push('/');
      })
      .catch((err) => {
        console.log('Error form ShowStudentDetails_deleteClick');
      });
  }

  render() {
    const student = this.state.student;
    let StudentItem = (
      <div>
        <table className='table table-hover table-dark'>
          <tbody>
            <tr>
              <th scope='row'>1</th>
              <td>Adm No</td>
              <td>{student.admno}</td>
            </tr>
            <tr>
              <th scope='row'>2</th>
              <td>Name</td>
              <td>{student.name}</td>
            </tr>
            <tr>
              <th scope='row'>3</th>
              <td>Email</td>
              <td>{student.email}</td>
            </tr>
            <tr>
              <th scope='row'>4</th>
              <td>Year</td>
              <td>{student.year}</td>
            </tr>
            <tr>
              <th scope='row'>5</th>
              <td>Section</td>
              <td>{student.section}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );

    return (
      <div className='ShowStudentDetails'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-10 m-auto'>
              <br /> <br />
              <Link to='/' className='btn btn-outline-warning float-left'>
                Show Student List
              </Link>
            </div>
            <br />
            <div className='col-md-8 m-auto'>
              <h1 className='display-4 text-center'>Student's Record</h1>
              <p className='lead text-center'>View Student's Info</p>
              <hr /> <br />
            </div>
          </div>
          <div>{StudentItem}</div>

          <div className='row'>
            <div className='col-md-6'>
              <button
                type='button'
                className='btn btn-outline-danger btn-lg btn-block'
                onClick={this.onDeleteClick.bind(this, student._id)}
              >
                Delete Student
              </button>
              <br />
            </div>

            <div className='col-md-6'>
              <Link
                to={`/edit-student/${student._id}`}
                className='btn btn-outline-info btn-lg btn-block'
              >
                Edit Student
              </Link>
              <br />
            </div>
          </div>
          <br />
        </div>
      </div>
    );
  }
}

export default showStudentDetails;
