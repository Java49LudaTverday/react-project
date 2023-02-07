import React, { useEffect } from "react"
import { Alert } from "./Alert"
type InputProps = { 
    type?: string;  
    inputProcess: (value: string) => string;
    placeholder?: string;
    nameButton: string;
}
export const Input: React.FC<InputProps> = ({  inputProcess, placeholder, nameButton }) => {
    let inputElement: HTMLInputElement | null
         useEffect(() => {
        inputElement = document.getElementById(inputId.current) as HTMLInputElement;
   }) 
   const inputId =
   React.useRef(Math.round(Math.random() * 100000000) + '');
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
        <input id={inputId.current} placeholder={placeholder} />
        <button onClick={processGo}>{nameButton}</button>
        {message && <Alert type="error" message={message} />}
    </div>
} 