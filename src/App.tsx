import React from 'react';
import { Input } from './components/Input';



function App() {
  const properties: React.CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap'
  }
  const [colors, setColors] = React.useState<string[]>([]);
  function creatingDivs(value: string): string{
    const colors: string[] = value.split('#');
    setColors(colors.slice());
    return ''
  }
  function getDivs (colors:string[]): JSX.Element[]{
    return colors.map(color => <div style={{width:"5vw", height:"5vw", backgroundColor: color}}></div>)
  }
  return <section style={{ display: 'flex', flexDirection: 'column' }} >
    <Input inputId={''} inputProcess={creatingDivs}
      placeholder='enter colors separated by #' style={{width:"50vw"}}/>
    <section style={properties}>
      {getDivs(colors)}
    </section>
  </section>

}

export default App;
