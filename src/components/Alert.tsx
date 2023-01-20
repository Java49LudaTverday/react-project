import React from "react";
type AlertProps = {
    type: "warning" | "info" | "error";
    message: string;
}
export const Alert: React.FC <AlertProps> = ({type, message}) => {
    let backGround: "red" | "green" | "yellow";
    switch (type){
        case "error": backGround = "red"; break
        case "warning": backGround = "yellow"; break;
        case "info": backGround = "green"; 
    }
    return <p style ={{backgroundColor: backGround, width:"20vw", marginLeft:"40vw", fontSize:"0.6em"}}>{message}</p>
}