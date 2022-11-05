import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

class UpdateStudentInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      admno: '',
      name: '',
      email: '',
      year: '',
      section: '',
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:8000/api/students/' + this.props.match.params.id)
      .then((res) => {
        this.setState({
          admno: res.data.admno,
          name: res.data.name,
          email: res.data.email,
          year: res.data.year,
          section: res.data.section,
        });
      })
      .catch((err) => {
        console.log('Error from UpdateStudentInfo');
      });
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const data = {
      admno: this.state.admno,
      name: this.state.name,
      email: this.state.email,
      year: this.state.year,
      section: this.state.section,
    };

    axios
      .put(
        'http://localhost:8000/api/students/' + this.props.match.params.id,
        data
      )
      .then((res) => {
        this.props.history.push('/show-student/' + this.props.match.params.id);
      })
      .catch((err) => {
        console.log('Error in UpdateStudentInfo');
      });
  };

  render() {
    return (
      <div className='UpdateStudentInfo'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-8 m-auto'>
              <br />
              <Link to='/' className='btn btn-outline-warning float-left'>
                Show Student List
              </Link>
            </div>
            <div className='col-md-8 m-auto'>
              <h1 className='display-4 text-center'>Edit Student</h1>
              <p className='lead text-center'>Update Student's Info</p>
            </div>
          </div>

          <div className='col-md-8 m-auto'>
            <form noValidate onSubmit={this.onSubmit}>
              <div className='form-group'>
                <label htmlFor='admno'>Adm No</label>
                <input
                  type='number'
                  placeholder='Admission Number'
                  name='admno'
                  className='form-control'
                  value={this.state.admno}
                  onChange={this.onChange}
                />
              </div>
              <br />

              <div className='form-group'>
                <label htmlFor='name'>Name</label>
                <input
                  type='text'
                  placeholder='Name'
                  name='name'
                  className='form-control'
                  value={this.state.name}
                  onChange={this.onChange}
                />
              </div>

              <div className='form-group'>
                <label htmlFor='email'>Email</label>
                <input
                  type='text'
                  placeholder='Email'
                  name='email'
                  className='form-control'
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </div>

              <div className='form-group'>
                <label htmlFor='year'>Year</label>
                <input
                  type='number'
                  placeholder='Year'
                  name='year'
                  className='form-control'
                  value={this.state.year}
                  onChange={this.onChange}
                />
              </div>

              <div className='form-group'>
                <label htmlFor='section'>Section</label>
                <input
                  type='text'
                  placeholder='Section'
                  name='section'
                  className='form-control'
                  value={this.state.section}
                  onChange={this.onChange}
                />
              </div>
              <button
                type='submit'
                className='btn btn-outline-info btn-lg btn-block'
              >
                Update Student
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default UpdateStudentInfo;
