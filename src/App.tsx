import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Input } from './components/Input';
import { Timer } from './components/Timer';
import timeZones from './time-zones';


function App() {
  const [ident, setIdent] = useState({ inputId: "", message: "" });
  function processInput(value: string, id: string): string {
    setIdent(ident => ({ ...ident, inputId: id, message: value }));
    let res: string = '';
    if (timeZones.findIndex(timeZone => JSON.stringify(timeZone, ['countryName', 'mainCities']).includes(value)) < 0) {
      res = "wrong country / city";

    }
    return res;
  }
  return <div>
    <Input type="text" inputId={'input-1'} inputProcess={processInput} placeholder={'enter country/city'} />
    <Timer cityOrCountry={ident.message} inputId={ident.inputId}></Timer>

    <Input type="text" inputId={'input-2'} inputProcess={processInput} placeholder={'enter country/city'} />
    <Timer cityOrCountry={ident.message} inputId={ident.inputId}></Timer>

  </div>

}

export default App;
