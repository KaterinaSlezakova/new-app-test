import React, { useState, useEffect } from "react";
import "./Student.css";


export default function Student({ femaleStudent, firstName, lastName, house, initials }) {
 
  const [jabbed, setJabbed] = useState (0)
  const [displayHouse, setDisplayHouse] = useState (false);
  const jabbedClassName = jabbed ? "jabbed" : "";
  const genderClassName = femaleStudent ? "item girls" : "item";
  

  function onClickJabbed (event){
    event.preventDefault();
    setJabbed(event.target.checked);
    setJabbed(jabbed + 1);
  }

    useEffect( function () {
      if (jabbed > 0 && !displayHouse) {
          setTimeout(function () {
          console.log("HELLO");
          setDisplayHouse(true);
          },  3000);
      }
    }, 
  [jabbed, displayHouse])
 
    return (
      <li className={genderClassName + " " + jabbedClassName}>
        <div className="name">
          {jabbed < 2 && <button onClick={onClickJabbed} className="Student">💉 jab</button>}
          <div className="initials">{initials}</div>
          <div>
            {firstName} {lastName}
          </div>
        </div>
        <div>{displayHouse ? house : null}</div>
      </li>
    );
}