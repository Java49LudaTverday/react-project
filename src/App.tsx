import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Box, Typography } from '@mui/material';
import { layoutConfig } from './models/layout-config';
import { Navigator } from './components/navigators/Navigator';
import { Employees } from './components/pages/Employees';
import { AddEmployee } from './components/pages/AddEmployee';
import { AgeStatistics } from './components/pages/AgeStatistics';
import { SalaryStatistics } from './components/pages/SalaryStatistics';

function App() {

  return  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navigator routers={layoutConfig.routers}  />}>
        <Route index element={<Employees/>}></Route>
        <Route path='addEmployee' element={<AddEmployee/>}/>
        <Route path='ageStatistics' element={<AgeStatistics/>}/>
        <Route path='salaryStatistics' element={<SalaryStatistics/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
// return <Box sx={{width: "50vw", height: "50vh", border: "solid 1px red", 
// backgroundColor:{xs: "red", sm: "green", md:"black"}}}>
//   <Typography sx={{fontSize: {xs:"1.2em", sm:"2em"}, color:{md:"white"}}}>Any text</Typography>
// </Box>
}


export default App;



