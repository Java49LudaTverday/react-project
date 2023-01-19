import React from 'react';
import { Input } from './components/Input';


function App() {
  function processInput(value: string): string {
    let res: string = '';
   if(value.toLowerCase().includes("hello")){
    res = "get tired from HELLO. It`s forbidden word!";

   }
    return res;
  }
  return <Input inputId={'input-1'} inputProcess={ processInput }  />
}

export default App;
