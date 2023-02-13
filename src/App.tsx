import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Box, Typography } from '@mui/material';
import { layoutConfig } from './models/layout-config';
import { Navigator } from './components/navigators/Navigator';
import { Employees } from './components/pages/Employees';
import { Home } from './components/pages/Home';

function App() {

  return  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navigator config={layoutConfig} />}>
        <Route index element={<Home/>}></Route>
        <Route path='employees' element={<Employees/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
// return <Box sx={{width: "50vw", height: "50vh", border: "solid 1px red", 
// backgroundColor:{xs: "red", sm: "green", md:"black"}}}>
//   <Typography sx={{fontSize: {xs:"1.2em", sm:"2em"}, color:{md:"white"}}}>Any text</Typography>
// </Box>
}


export default App;



