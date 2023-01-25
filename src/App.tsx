import React from 'react';
import { Input } from './components/Input';
import { Timer } from './components/Timer';


function App() {
  const properties: React.CSSProperties = {
    display: "flex", justifyContent: "space-around", alignItems: "center",
    flexWrap: "wrap", width: "60vw", overflow: "auto"
  }
  const [cities, setCities] = React.useState<string[]>([]);
  function creatingInputCities(value: string): string {
    const cities: string[] = value.split("#");  
    let message: string = '';
    if (cities.length % 2 !== 0) {
      message = "enter even number of cities/countries";
      //setCities([]);
    } else {
      setCities(cities.slice());
    }
    return message;
  }
  function getCitiesDivs(cities: string[]): JSX.Element[] {
    const res: JSX.Element[] = [];
    for(let i = 0; i < cities.length; i+=2) {
      res.push(<div style = {{display: "flex", flexDirection: "row" , 
      justifyContent: "space-around", width: "50vw", marginTop: "4vh"}}>
        <Timer cityOrCountry={cities[i]} />
        <Timer cityOrCountry={cities[i + 1]} />
      </div>)}
      return res;
   // return cities.map(city => <Timer cityOrCountry={city} ></Timer>)
  }

  return <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-evenly" }}>
    <Input inputProcess={creatingInputCities} type={'text'}
      placeholder={'enter cities/countries separated by #'} styleProps={{ width: "30vw" }} />
    <section style={properties}>
      {getCitiesDivs(cities)}
    </section>
  </div>

}


export default App;
