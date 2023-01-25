import React from "react";
import timeZones from "../time-zones";
import { Input } from "./Input";
type TimerProps = {
    cityOrCountry: string;
}
export const Timer: React.FC<TimerProps> = (props) => {
    const indexProps = findIndexZone(props.cityOrCountry.toLowerCase());
    const [timeZone, setTimeZone] = React.useState(timeZones[indexProps]?.name);
    const timeZoneName = React.useRef(timeZone ? props.cityOrCountry : "Israel");
    function processInput(value: string): string {
        const index: number = findIndexZone(value.toLowerCase());
        let res: string = '';
        if (index < 0) {
            res = "wrong country / city";
        } else {
            setTimeZone(timeZones[index].name);
            timeZoneName.current = value;
        }
        return res;
    }
    const [time, setTime] = React.useState(new Date());
    function tick() {
        console.log("tick");
        setTime(new Date());
    }
    React.useEffect(() => {
        const interval = setInterval(tick, 1000);
        if (indexProps < 0) {
            timeZoneName.current = "Israel";
            setTimeZone("Israel");
        } else {
            setTimeZone(timeZones[indexProps].name);
            timeZoneName.current = indexProps<0 ? "Israel" : props.cityOrCountry;
        }
        return () => clearInterval(interval);
    }, [props])

    return <div style={{ marginTop: "10vh", borderStyle: "solid", width: "30vw" }}>
        <Input type={"text"} inputProcess={processInput} placeholder='enter country/city' />
        <h3 style={{ display: "block", textAlign: "center", fontSize: "1.4em" }}>
            Time in  {timeZoneName.current}
        </h3>
        <label style={{ display: "block", textAlign: "center", fontSize: "1.2em" }}>
            Time {time.toLocaleTimeString(undefined, { timeZone })}
        </label>
    </div>
}

function findIndexZone(zoneName: string): number {
    return timeZones.findIndex(timeZone => {
        return JSON.stringify(timeZone).toLowerCase().includes("\"" + zoneName + "\"");
    })
}



