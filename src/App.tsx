import React from 'react';
import { Timer } from './components/Timer';


function App() {
  
  return <div style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-evenly"}}>
    <div>
    <Timer inputId={'Input-1'} ></Timer>
    <Timer inputId={'Input-2'}  ></Timer>
    </div>
    <div>
    <Timer inputId={'Input-3'}  ></Timer>
    <Timer inputId={'Input-4'}  ></Timer>
    </div>
  </div>

}

export default App;
