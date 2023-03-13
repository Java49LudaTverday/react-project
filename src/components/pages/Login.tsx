import { AccountCircle } from "@mui/icons-material";
import { Box, Button, InputAdornment, TextField } from "@mui/material";
import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux"
import { CodeType } from "../../models/CodeType";
import { LoginData } from "../../models/LoginData";
import { authAction } from "../../redux/authSlice";
import { AuthService } from "../../service/AuthService";
import { LoginForm } from "../forms/LoginForm";

export const Login: React.FC = () => {
    //const auth = new AuthService;
    const dispatch = useDispatch<any>();
    const error: CodeType = useSelector<any, CodeType>((state) =>
        state.errorCode.code
    )
    function processDataInput(dataUser: LoginData): void {           
        dispatch(authAction.login(dataUser));
    }


return <Box sx={{ display: 'flex', flexDirection: 'column' }}>
    <LoginForm dataFormFn={processDataInput} code={error} />
</Box>
}



//     <Box sx={{display:'flex', flexDirection:'column'}}>
//         <TextField sx={{marginTop:'5vh'}} variant='outlined' label='User name'
//         InputProps={{
//             startAdornment: (
//                 <InputAdornment position='start'>
//                     <AccountCircle />
//                 </InputAdornment>
//             )
//         }}
//         onChange ={(event: React.ChangeEvent<HTMLInputElement>) => {
//            setUserName(event.target.value);
//         }}/>
//         <Button onClick={(event): void => {
//             dispatch(authActions.login(userName))
//         }}>Login</Button>
//     </Box>
// }