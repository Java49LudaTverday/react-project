import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Box, Typography } from '@mui/material';
import { layoutConfig } from './models/layout-config';
import { Navigator } from './components/navigators/Navigator';
import { Employees } from './components/pages/Employees';
import { AddEmployee } from './components/pages/AddEmployee';
import { AgeStatistics } from './components/pages/AgeStatistics';
import { SalaryStatistics } from './components/pages/SalaryStatistics';
import { useSelector } from 'react-redux';
import { Login } from './components/pages/Login';
import { Logout } from './components/pages/Logout';


function App() {
  const auth: string = useSelector<any, string>(state => state.auth.authenticated);

  return <Box>
    {!auth && <Login></Login>}
    {auth && <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigator routers={layoutConfig.routers} />}>
          <Route index element={<Employees />}></Route>
          <Route path='addEmployee' element={<AddEmployee />} />
          <Route path='ageStatistics' element={<AgeStatistics />} />
          <Route path='salaryStatistics' element={<SalaryStatistics />} />
          <Route path='logout' element={<Logout/>}/>
        </Route>
      </Routes>
    </BrowserRouter>}
  </Box>
  // return <Box sx={{width: "50vw", height: "50vh", border: "solid 1px red", 
  // backgroundColor:{xs: "red", sm: "green", md:"black"}}}>
  //   <Typography sx={{fontSize: {xs:"1.2em", sm:"2em"}, color:{md:"white"}}}>Any text</Typography>
  // </Box>
}


export default App;



