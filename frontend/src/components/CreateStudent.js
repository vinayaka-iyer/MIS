import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

class CreateStudent extends Component {
  constructor() {
    super();
    this.state = {
      admno: '',
      name: '',
      email: '',
      year: '',
      section: '',
    };
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

    console.log(data);
    axios
      .post('http://localhost:8000/api/students', data)
      .then((res) => {
        this.setState({
          admno: '',
          name: '',
          email: '',
          year: '',
          section: '',
        });
        this.props.history.push('/');
      })
      .catch((err) => {
        console.log('Error in CreateStudent');
      });
  };

  render() {
    return (
      <div className='CreateStudent'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-8 m-auto'>
              <br />
              <Link to='/' className='btn btn-outline-warning float-left'>
                Show Student List
              </Link>
            </div>
            <div className='col-md-8 m-auto'>
              <h1 className='display-4 text-center'>Add Student</h1>
              <p className='lead text-center'>Create new student</p>

              <form noValidate onSubmit={this.onSubmit}>
                <div className='form-group'>
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
                  <input
                    type='text'
                    placeholder='section'
                    name='section'
                    className='form-control'
                    value={this.state.section}
                    onChange={this.onChange}
                  />
                </div>
                <input
                  type='submit'
                  className='btn btn-outline-warning btn-block mt-4'
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateStudent;
