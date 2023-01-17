import React from 'react';
import { Timer } from './components/Timer';


function App() {
  return <div style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-evenly"}}>
    <div>
    <Timer cityOrCountry={'Israel'}></Timer>
    <Timer cityOrCountry={'Russia'}></Timer>
    </div>
    <div>
    <Timer cityOrCountry={'San Diego'}></Timer>
    <Timer cityOrCountry={"Belarus"}></Timer>
    </div>    
  </div>
}

export default App;
