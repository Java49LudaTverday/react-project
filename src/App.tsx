import React from 'react'
import './App.css'
import { CounterSquare } from './components/CounerSquare';
import { CounterMultiply } from './components/CounterMultiply';
import { CounterUpdater } from './components/CounterUpdater';
import { Login } from './components/Login';
import { Logout } from './components/Logout';
import { useSelector } from 'react-redux';
import { Input } from './components/Input';

function App() {
  const auth: boolean = useSelector<any, boolean>(state => state.auth.authenticated);
  const authAdmin = useSelector<any, boolean>(state => state.auth.authorization);
  const [operand, setOperand] = React.useState(1);
  const [factor, setFactor] = React.useState(10);
  const [userName, setUserName] = React.useState('');
  return <div style={{ textAlign: "center" }}>
    {auth && <p>User: {userName}</p>}
    {authAdmin && <div>
      <Input placeholder='Enter operand' inputProcess={function (value: string): string {
        setOperand(+value);
        return '';
      }}></Input>
      <Input placeholder='Enter factor' inputProcess={function (value: string): string {
        setFactor(+value);
        return '';
      }}></Input>
    </div>}
    {auth && <div style={{ textAlign: "center" }}>
      <CounterUpdater operand={operand}></CounterUpdater>
      <CounterSquare></CounterSquare>
      <CounterMultiply factor={factor}></CounterMultiply>
    </div>}
    {auth && <Logout></Logout>}
    {!auth && <div>
      <Login inputProcess={function (value: string): void {
        setUserName(value);
      }} ></Login>
    </div>}
  </div>
}


export default App;
