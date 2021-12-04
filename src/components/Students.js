import React, { useEffect, useState } from "react";
import Student from "./Student";


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
    <div><font color="white">Loading..</font></div>
  );
  } 
  
return (
  <ul>
    {students.map(function (student) {
      const femaleStudent = student.gender === "F";
      const initials = `${student.firstName.charAt(0).toUpperCase()}${student.lastName.charAt(0).toUpperCase()}`;
      return (
        <div>
        <Student
          femaleStudent={femaleStudent}
          firstName={student.firstName.toUpperCase()}
          lastName={student.lastName.toUpperCase()}
          house={student.house}
          initials={initials}
        />
        </div>
      )
    })}
  </ul>
)
  }
