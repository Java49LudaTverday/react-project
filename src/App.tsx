import { BrowserRouter, Routes, Route, RouterProps } from 'react-router-dom';
import './App.css';
import { Box, Typography } from '@mui/material';
import { layoutConfig } from './models/layout-config';
import { Navigator } from './components/navigators/Navigator';
import { Employees } from './components/pages/Employees';
import { AddEmployee } from './components/pages/AddEmployee';
import { AgeStatistics } from './components/pages/AgeStatistics';
import { SalaryStatistics } from './components/pages/SalaryStatistics';
import { useDispatch, useSelector } from 'react-redux';
import { Login } from './components/pages/Login';
import { Logout } from './components/pages/Logout';
import { useEffect, useState } from 'react';
import { NavigatorProps, RoutersProps } from './models/NavigatorProps';
import { Generation } from './components/pages/Generation';
import { NavigatorDispatch } from './components/navigators/NavigatorDispatch';
import { company, setEmployees } from './redux/employeesSlice';
import { Employee } from './models/Employee';
import { codeActions } from './redux/codeSlice';
import {Subscription} from 'rxjs';



function App() {
  const auth: string = useSelector<any, string>(state => state.auth.authenticated);
  console.log(auth);
  const [routes, setRoutes] = useState<RoutersProps[]>(layoutConfig.routers);
  const dispatch = useDispatch();
  layoutConfig.routers.forEach((route, index) => {
     //console.log(route.path);
    if (route.path.includes('logout') ) {     
      layoutConfig.routers[index].label = `UserName: ${auth} `;
    }
  })
  useEffect(() => {
    if (!auth) {
      setRoutes(layoutConfig.routers.filter(route => route.path == '/login'))
    } else if (!auth.includes('admin')) {
      setRoutes(layoutConfig.routers.filter(route => route.flAuth));
    } else {
      setRoutes(layoutConfig.routers.filter(route => route.flAdmin));
    }
  }, [auth])

  useEffect(() => { 
  let subscription: Subscription;
    if(auth) {
     // dispatch(employeesAction.getEmployees());
     subscription = company.getAllEmployees().subscribe({
      next: (employees: Employee[]) => {
        dispatch(setEmployees(employees));
       // dispatch(codeActions.setCode("OK"));
      },
      error: (err: any) => {
        dispatch(codeActions.setCode("Unknown Error"))
      }
     }     
     )
     }
     return () =>subscription && subscription.unsubscribe();
  }, [auth])
  
  return <Box>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<NavigatorDispatch routers={routes} />}>
          <Route index element={<Employees />}></Route>
          <Route path='addEmployee' element={<AddEmployee />} />
          <Route path='ageStatistics' element={<AgeStatistics />} />
          <Route path='salaryStatistics' element={<SalaryStatistics />} />
          <Route path='generation' element={<Generation />} />
          <Route path='logout' element={<Logout />} />
          <Route path='login' element={<Login />} />

        </Route>
      </Routes>
    </BrowserRouter>
  </Box>
  // return <Box sx={{width: "50vw", height: "50vh", border: "solid 1px red", 
  // backgroundColor:{xs: "red", sm: "green", md:"black"}}}>
  //   <Typography sx={{fontSize: {xs:"1.2em", sm:"2em"}, color:{md:"white"}}}>Any text</Typography>
  // </Box>
}


export default App;
/*layoutConfig.routers*/


