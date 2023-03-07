import { Box, } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux"
import { LoginData } from "../../models/LoginData";
import { authActions } from "../../redux/authSlice";
import { AuthService } from "../../service/AuthService";
import { LoginForm } from "../forms/LoginForm";

export const Login: React.FC = () => {
    const auth = new AuthService;
    const dispatch = useDispatch();

   function processDataInput (dataUser: LoginData): string {
    let message: string='';
    try {
     auth.login(dataUser);            
     dispatch(authActions.login(dataUser.username));
    } catch (error: any){
     message = error ;
    } 
    return message;
   }
    
    return <Box sx={{display:'flex', flexDirection:'column'}}>
        <LoginForm  dataFormFn={processDataInput }/>
    </Box>
}


{/* <TextField sx={{marginTop:'5vh'}} variant='outlined' label='User name'
        InputProps={{
            startAdornment: (
                <InputAdornment position='start'>
                    <AccountCircle />
                </InputAdornment>
            )
        }}
        onChange ={(event: React.ChangeEvent<HTMLInputElement>) => {
           setUserName(event.target.value);
        }}/>
        <Button onClick={(event): void => {
            dispatch(authActions.login(userName))
        }}>Login</Button> */}