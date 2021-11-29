import React, { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import Student from "./Student";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


export default function Students() {
const [students, setStudents] = useState([]);
const [isLoading, setLoading] = useState (false);

useEffect(function (){
  setLoading(true)
  fetch("http://18.157.77.111/students")
    .then(response => response.json())
    .then(json => setStudents(json)); 
                  setLoading(false);

  },[]);

  if (isLoading) {
  return (
    <Loader
      type="Puff"
      color="#b1f4cf"
      height={200}
      width={200}
      timeout={3000} //3 secs
    />
  );
  } 
  
return (
  <ul>
    {students.map(function (student) {
      const femaleStudent = student.gender === "F";
      const initials = `${student.firstName.charAt(0).toUpperCase()}${student.lastName.charAt(0).toUpperCase()}`;
      return (
        <Student
          femaleStudent={femaleStudent}
          firstName={student.firstName.toUpperCase()}
          lastName={student.lastName.toUpperCase()}
          house={student.house}
          initials={initials}
        />
      )
    })}
  </ul>
)
  }
