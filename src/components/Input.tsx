import React, { useEffect } from "react"
import { Alert } from "./Alert"
type InputProps = { 
    type?: string;  
    inputProcess: (value: string) => string;
    placeholder?: string;
}
export const Input: React.FC<InputProps> = ({ inputProcess, placeholder }) => {
    let inputElement: HTMLInputElement | null
    const [inputId] = React.useState(Math.round(Math.random()*1000000000)+'');
         useEffect(() => {
        inputElement = document.getElementById(inputId) as HTMLInputElement;
   })   
   
    const [message, setMessage] = React.useState("");  
    function processGo(): void {         
        const messageRet: string = inputProcess(inputElement!.value);
        if (messageRet == "") {
            inputElement!.value = "";
        } else {
            setMessage(messageRet);
            setTimeout(() => {
                setMessage("");
            }, 3000);
            inputElement!.value = "";
        }
    }
    return <div style={{ display: "block", textAlign: "center", fontSize: "2em"}}>
        <input id={inputId} placeholder={placeholder} />
        <button onClick={processGo}>GO</button>
        {message && <Alert type="error" message={message} />}
    </div>
} 