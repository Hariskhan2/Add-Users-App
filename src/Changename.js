import React, {useState} from 'react'

function Changename() {
    
    const [Name,setName]=useState("Haris")
    const nameupdate=()=>{
        console.log(Name);
     setName("KHAN")
     if(Name=="KHAN"){
        setName("Haris");
     }
    }
  return (
    <div>
        <h1>{Name}</h1>
        <button onClick={nameupdate}>Update</button>
    </div>
  )
}

export default Changename