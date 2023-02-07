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

  const auth: string = useSelector<any, string>(state => state.auth.userName);
  const [operand, setOperand] = React.useState(1);
  const [factor, setFactor] = React.useState(10);

  const authAdmin: boolean = isAdmin(auth);  

  return <div style={{ textAlign: "center" }}>
    {auth && <p> User: {auth}</p>}
    {authAdmin && <div>
      <Input placeholder='Enter operand' inputProcess={function (value: string): string {
        setOperand(+value);
        return '';
      }} nameButton={'GO'}></Input>

    </div>}
    {auth && <div style={{ textAlign: "center" }}>
      <Input placeholder='Enter factor' inputProcess={function (value: string): string {
        setFactor(+value);
        return '';
      }} nameButton={'GO'}></Input>
      <CounterUpdater operand={operand}></CounterUpdater>
      <CounterSquare></CounterSquare>
      <CounterMultiply factor={factor}></CounterMultiply>
    </div>}
    {auth && <Logout></Logout>}
    {!auth && <div>
      <Login ></Login>
    </div>}
  </div>
}


export default App;
function isAdmin(userName:string): boolean {
  let authAdmin: boolean = false;
  const ADMIN: string = 'admin';
  if (userName.includes(ADMIN)) {
    authAdmin = true;
  }
  return authAdmin;
}


//// version checking  userAdmin///
      // const arrUserName: string[] = state.authenticated.split('-');  //when we use a separator "-"
      // const endUserName = userName.slice(-ADMIN.length, userName.length); //when we use just a word "admin"
      // //if (arrUserName[1] == ADMIN) {
      //   if (endUserName == ADMIN) {
      //   authAdmin = true;
