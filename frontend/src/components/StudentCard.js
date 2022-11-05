import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const StudentCard = (props) => {
  const student = props.student;

  return (
    <div className='card-container'>
      <div className='desc'>
        <h2>
          <Link to={`/show-student/${student._id}`}>{student.name}</Link>
        </h2>
        <h3>Admission No: {student.admno}</h3>
        <h3>
          Year: {student.year} , Section: {student.section}
        </h3>
      </div>
    </div>
  );
};

export default StudentCard;
