
import React from 'react';
import './App.css';
import Students from "./Students";


function App() {

  return (
    <div className="App">
      <ul>
        <Students />
      </ul>
    </div>
  );
}

export default App;

//const filteredGirls= dataArray.filter(girls => girls.gender === "F");
 // const mappedGirls = filteredGirls.map(girl => <li>{girl.firstName}</li>);
  //const anyFemale = dataArray.some(students => students.gender === "M");
  //const findFemale = dataArray.find(students => students.gender === "F");
  //const findName = dataArray.find (students => students.firstName === "Harry");


//map, sort, find, some, filter

 
   /* <Button text="Ahoj" />
      <Button text="Cus" />
      <Button text="Elo" subText="29.12.1985" />
      <Button text="Hoj" date="date of birth" /> */
 