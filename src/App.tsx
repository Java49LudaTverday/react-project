import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { BreadProducts } from './components/pages/BreadProducts';
import { Customers } from './components/pages/Customers';
import { DairyProducts } from './components/pages/DairyProducts';
import { Home } from './components/pages/Home';
import { Orders } from './components/pages/Orders';
import { Navigator } from './components/navigators/Navigator'
import { layoutConfig } from './models/layout-config';
import { productsConfig } from './models/products-config';

function App() {

  return <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navigator config={layoutConfig} />}>
        <Route index element={<Home/>}></Route>
        <Route path='customers' element={<Customers/>}/>
        <Route path='orders' element={<Orders/>}></Route>
        <Route path='products' element={<Navigator config={productsConfig}/>}>
          <Route path='dairy' element={<DairyProducts/>}/>
          <Route path='bread' element={<BreadProducts/>}/>
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
}


export default App;



