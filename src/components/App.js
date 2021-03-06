
import React,{ useState } from 'react';
import './App.css';
import Students from "./Students";


function App() {
  const [displayStudents, setDisplayStudents] = useState (false);
  
  function toggleDisplayStudents(){
    return setDisplayStudents(!displayStudents)
  }


  return (
    <div className="App">
      <div className = "container">
      <button onClick={toggleDisplayStudents}>👉 Display / Hide students 👈</button>
      <ul>
        {displayStudents ? <Students /> : null}
      </ul> 
      </div>
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
 