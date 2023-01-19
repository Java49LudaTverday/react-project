import React, { useEffect } from "react"
import { Alert } from "./Alert"
type InputProps ={
    inputId: string;
    inputProcess: (value: string) => string;
}
export const Input: React.FC<InputProps> = ({inputId, inputProcess}) =>{
    let inputElement:HTMLInputElement|null 
    const [message, setMessage] = React.useState("");
    //setMessage("");
    function processGo():void {
     const messageRet: string = inputProcess(inputElement!.value);
     if (messageRet == ""){
        inputElement!.value = "";
     } else {
        setMessage(messageRet);
        setTimeout(() => {
            setMessage("") ; 
        }, 3000);        
        inputElement!.value = "";
     }
       
    }
    useEffect(()=> {
        inputElement = document.getElementById(inputId) as HTMLInputElement;
    })
    return <div>
        <input id={inputId}/>
        <button onClick={processGo}>GO</button>
        {message && <Alert type="error" message = {message}/>}
    </div>
} 