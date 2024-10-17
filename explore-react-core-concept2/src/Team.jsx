import { useState } from "react"

 export default function Team(){
  const [team, setTeam] = useState(11);
  const handleAdd = () =>{
   const newTeam = team + 1;
    setTeam (newTeam);
  }
  const handleReduce = () =>{
   const newTeam = team - 1;
    setTeam (newTeam);
  }
    const teamStyle = {
        border: '2px solid purple',
        margin: '20px',
        padding:'20px',
        borderRadius:'10px',


    }

    return (
        <div style={teamStyle}>
            <h3>Team:{team}</h3>
            
            <button onClick={handleAdd}>Add Member</button>
            <button onClick={handleReduce}>Remove Member</button>
     
        </div>
    )
 }