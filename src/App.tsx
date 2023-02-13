import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Box, Typography } from '@mui/material';
import { BreadProducts } from './components/pages/BreadProducts';
import { Customers } from './components/pages/Customers';
import { DairyProducts } from './components/pages/DairyProducts';
import { Home } from './components/pages/Home';
import { Orders } from './components/pages/Orders';
import { Navigator } from './components/navigators/Navigator'
import { layoutConfig } from './models/layout-config';
import { productsConfig } from './models/products-config';

function App() {

  return  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navigator config={layoutConfig} />}>
        <Route index element={<Home/>}></Route>
        <Route path='customers' element={<Customers/>}/>
        <Route path='orders' element={<Orders/>}></Route>
        {/* <Route path='products' element={<Navigator config={productsConfig}/>}>
          <Route path='dairy' element={<DairyProducts/>}/>
          <Route path='bread' element={<BreadProducts/>}/>
        </Route> */}
      </Route>
    </Routes>
  </BrowserRouter>
// return <Box sx={{width: "50vw", height: "50vh", border: "solid 1px red", 
// backgroundColor:{xs: "red", sm: "green", md:"black"}}}>
//   <Typography sx={{fontSize: {xs:"1.2em", sm:"2em"}, color:{md:"white"}}}>Any text</Typography>
// </Box>
}


export default App;



