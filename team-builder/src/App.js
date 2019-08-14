import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import teamInfo from './teamInfo';

function App() {
  const [teamMember, setTeamMember] = useState(teamInfo);

  const newTeamMember = member  => {
               setTeamMember([...teamMember,  member]);
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Team Amy</h1>
       {/* Ad in format information from component */}
      </header>
    </div>
  );
}

export default App;
