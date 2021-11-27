import React, { useState, useEffect } from "react";


export default function Student({ femaleStudent, firstName, lastName, house, initials }) {
 
  const [jabbed, setJabbed] = useState (0)
  const [displayHouse, setDisplayHouse] = useState (false);
  const jabbedClassName = jabbed ? "jabbed" : "";
  const genderClassName = femaleStudent ? "item girls" : "item";
  

  function onClickJabbed (event){
    event.preventDefault();
    //const isJabbed = event.target.checked;
    //setJabbed(isJabbed);
    setJabbed(jabbed + 1);
  }
  

    useEffect( function () {
      if (jabbed > 0 && ! displayHouse) {
      setTimeout(function () {
        setDisplayHouse(true);
        },  1000);
      }
  })
 
    return (
      <li className={genderClassName + " " + jabbedClassName}>
        <div className="name">
          {jabbed < 2 && <button onClick={onClickJabbed}>jab</button>}
          <div className="initials">{initials}</div>
          <div>
            {firstName} {lastName}
          </div>
        </div>
        {displayHouse > 0 && <div>{house}</div>}
      </li>
    );
}