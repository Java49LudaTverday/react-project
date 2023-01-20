import React from "react";
import timeZones from "../time-zones";
type TimerProps = {
    cityOrCountry: string|null;
    inputId: string;
}
export const Timer: React.FC<TimerProps> = (props) => {
    // const indexProps = timeZones.findIndex(timeZone => {
    //     const JSONtimeZone = JSON.stringify(timeZone);
    //     return JSONtimeZone.includes(""/"+props.cityOrCountry+""/");
    // }
        // Option 2:
    const indexProps = timeZones.findIndex(timeZone => 
        timeZone.countryName === props.cityOrCountry || timeZone.mainCities.reduce((res: string, elem: string) => {
            if(elem === props.cityOrCountry){
             res = elem;
            }
         return res
     }, "") === props.cityOrCountry
        )    
    const timeZone = correctTimeZone(indexProps);
    const timeZoneName = indexProps<0? "Israel" : props.cityOrCountry;
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
        <h3 style={{display: "block", textAlign: "center", fontSize: "2em"}}>Time in  {timeZoneName} </h3>
        <label style={{ display: "block", textAlign: "center", fontSize: "2em" }}>Time {time.toLocaleTimeString(undefined, { timeZone })}</label>
    </div>
} 

function correctTimeZone(index: number): string{
    let timeZone: string;
    if (index < 0) {
        timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    } else {
        timeZone = timeZones[index].name;
    }
    return timeZone;
}
