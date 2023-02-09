import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import { Layout } from './components/navigators/Layout';
import { Products } from './components/navigators/Products';
import { BreadProducts } from './components/pages/BreadProducts';
import { Customers } from './components/pages/Customers';
import { DairyProducts } from './components/pages/DairyProducts';
import { Home } from './components/pages/Home';
import { Orders } from './components/pages/Orders';


function App() {

  return <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home/>}></Route>
        <Route path='customers' element={<Customers/>}/>
        <Route path='orders' element={<Orders/>}></Route>
        <Route path='products' element={<Products/>}>
          <Route path='dairy' element={<DairyProducts/>}/>
          <Route path='bread' element={<BreadProducts/>}/>
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
}


export default App;



//// version checking  userAdmin///
      // const arrUserName: string[] = state.authenticated.split('-');  //when we use a separator "-"
      // const endUserName = userName.slice(-ADMIN.length, userName.length); //when we use just a word "admin"
      // //if (arrUserName[1] == ADMIN) {
      //   if (endUserName == ADMIN) {
      //   authAdmin = true;
