import React from 'react';
import './App.css';
import NurseList from "./components/NurseList";
import PatientList from './components/PatientList';
function App() {
  return (
    <div className="App">
      <h1>Happy Nurses</h1>
      < NurseList />
      <hr/>
      <h1>Happy Patients</h1>
      <PatientList/>
    </div>
  );
}

export default App;
