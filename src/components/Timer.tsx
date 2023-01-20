import React from "react";
import timeZones from "../time-zones";
import { Input } from "./Input";
type TimerProps = {
    inputId: string;
}
export const Timer: React.FC<TimerProps> = (props) => {
    const [message, setIdent] = React.useState( "Israel" );
    function processInput(value: string, id: string): string {
        setIdent(value);
       id = props.inputId;
        let res: string = '';
        if (timeZones.findIndex(timeZone => JSON.stringify(timeZone, ['countryName', 'mainCities']).includes(value)) < 0) {
            res = "wrong country / city";
        }
        return res;
    }
    
    // const indexProps = timeZones.findIndex(timeZone => {
    //     const JSONtimeZone = JSON.stringify(timeZone);
    //     return JSONtimeZone.includes(""/"+props.cityOrCountry+""/");
    // }
    // Option 2:
    const indexProps = timeZones.findIndex(timeZone =>
        timeZone.countryName === message || timeZone.mainCities.reduce((res: string, elem: string) => {
            if (elem === message) {
                res = elem;
            }
            return res
        }, "") === message
    )
    const timeZone = correctTimeZone(indexProps);
    const timeZoneName = indexProps < 0 ? "Israel" : message;
    const [time, setTime] = React.useState(new Date());
    function tick() {
        console.log("tick");
        setTime(new Date());
    }
    React.useEffect(() => {
        const interval = setInterval(tick, 1000);
        return () => clearInterval(interval);
    }, [])
    return <div>
        <Input type={"text"} inputId={props.inputId} inputProcess={processInput} placeholder='enter country/city' />
        <h3 style={{ display: "block", textAlign: "center", fontSize: "2em" }}>Time in  {timeZoneName} </h3>
        <label style={{ display: "block", textAlign: "center", fontSize: "2em" }}>Time {time.toLocaleTimeString(undefined, { timeZone })}</label>
    </div>
}

function correctTimeZone(index: number): string {
    let timeZone: string;
    if (index < 0) {
        timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    } else {
        timeZone = timeZones[index].name;
    }
    return timeZone;
}
