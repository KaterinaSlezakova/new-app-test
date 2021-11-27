import React from "react";
import { dataArray } from "./data";
import Student from "./components/Student";

export default function Students() {
return (
  <ul>
    {dataArray.map(function (student) {
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
