import React, { useState } from "react";
import "./App.css";
import TeamInfo from "./components/TeamInfo";
import Form from "./components/Form";
import data  from "./data";


function App() {
  const [teamMember, setTeamMember] = useState(data);

  const addTeamMember = member => {
    console.log(member);
     setTeamMember([...teamMember,  member]);
  };
  
  return (
    <div className="App">
      <Form addTeamMember={addTeamMember} />
    <TeamInfo memberList={teamMember} />
    </div>
  );
}

export default App;
