import React, { useEffect, useState } from "react";
import Student from "./components/Student";

function fetchStudents() {
  return fetch("http://18.157.77.111/students").then((response) =>
    response.json()
  );
}


export default function Students() {
const [students, setStudents] = useState([]);

useEffect(function (){
fetchStudents().then(json => setStudents(json));
}, []);

  
return (
  <ul>
    {students.map(function (student) {
      const femalStudent = student.gender === "F";
      const initials = `${student.firstName.charAt(0).toUpperCase()}${student.lastName.charAt(0).toUpperCase()}`;
      return (
        <Student
          femalStudent={femalStudent}
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
