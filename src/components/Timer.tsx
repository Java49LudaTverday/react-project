import React from "react";
import timeZones from "../time-zones";
import { Input } from "./Input";
type TimerProps = {
    inputId: string;
}
export const Timer: React.FC<TimerProps> = (props) => {
    const [countryOrCity, setCountryOrCity] = React.useState("Israel");
    function processInput(value: string): string {
        let res: string = '';
        if (findIndexZone(value) < 0) {
            res = "wrong country / city";
        } else {
            setCountryOrCity(value);
        }
        return res;
    }
    const indexProps = findIndexZone(countryOrCity);
    const timeZone = correctTimeZone(indexProps);
    const timeZoneName = indexProps < 0 ? "Israel" : countryOrCity;
    const [time, setTime] = React.useState(new Date());
    function tick() {
        console.log("tick");
        setTime(new Date());
    }
    React.useEffect(() => {
        const interval = setInterval(tick, 1000);
        return () => clearInterval(interval);
    }, [])
console.log(props.inputId);
    return <div style={{ marginTop: "10vh", borderStyle: "solid", width: "20vw", height: "30vh" }}>
        <Input type={"text"} inputId={props.inputId} inputProcess={processInput} placeholder='enter country/city' />
        <h3 style={{ display: "block", textAlign: "center", fontSize: "2em" }}>Time in  {timeZoneName} </h3>
        <label style={{ display: "block", textAlign: "center", fontSize: "2em" }}>Time {time.toLocaleTimeString(undefined, { timeZone })}</label>
    </div>
}

function findIndexZone(zoneName: string): number {
    return timeZones.findIndex(timeZone => {
        return JSON.stringify(timeZone, ['countryName', 'mainCities']).includes("\"" + zoneName + "\"");
    })
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

////////////////////////////////////////////////
function getIdForInput(): string{
    return "input"+ Math.random()*6;
}
function checkId (id: string){
    let res = false;
    let idElement = document.getElementById(id);
    console.log(idElement);
    if(idElement == null){
        res = true;
    }
    return res;
}
// Option 2:
    // const indexProps = timeZones.findIndex(timeZone =>
    //     timeZone.countryName === countryOrCity || timeZone.mainCities.reduce((res: string, elem: string) => {
    //         if (elem === countryOrCity) {
    //             res = elem;
    //         }
    //         return res
    //     }, "") === countryOrCity
    // )

