import React from 'react';
import { Input } from './components/Input';
import { Timer } from './components/Timer';


function App() {
  const properties: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    width: "40vw",
    overflow: "auto"
  }
  const [cities, setCities] = React.useState<string[]>([]);
  function creatingCitiesDivs(value: string): string {
    const cities: string[] = value.split("#").slice();  
    let message: string = '';
    if (cities.length % 2 !== 0) {
      message = "enter even number of cities/countries";
      setCities([]);
    } else {
      setCities(cities);
    }
    return message;
  }
  function getCitiesDivs(cities: string[]): JSX.Element[] {
    return cities.map(city => <Timer cityOrCountry={city} ></Timer>)
  }

  return <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-evenly" }}>
    <Input inputProcess={creatingCitiesDivs} type={'text'}
      placeholder={'enter cities/countries separated by #'} styleProps={{ width: "30vw" }} />
    <section style={properties}>
      {getCitiesDivs(cities)}
    </section>
  </div>

}


export default App;
