import { Alert, Avatar, Box, Button, Collapse, Container, createTheme, CssBaseline, IconButton, Link, TextField, ThemeProvider, Typography } from "@mui/material";
import { LockOutlined, Close } from "@mui/icons-material";
import { LoginData } from "../../models/LoginData";
import React, { useRef, useState } from "react";
import { AuthService } from "../../service/AuthService";
import { CodeType } from "../../models/CodeType";
import GoogleIcon from '@mui/icons-material/Google';

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const theme = createTheme();

type Props = {
  dataFormFn: (dataUser: LoginData) => void;
  code: CodeType;
}

export const LoginForm: React.FC<Props> = ({ dataFormFn, code }) => {

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const userData: LoginData = {
      userName: data.get('userName') as string,
      password: data.get('password') as string
    }
    dataFormFn(userData);
    console.log(data.get('password') as string);

  };
  const handleSingInGoogle = () => {
    const userName: LoginData = {userName: "GOOGLE", password: "GOOGLE"}
    dataFormFn(userName)
  }
  return <Box>
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlined />
          </Avatar>
          <Typography component="h1" variant="h5" >
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="userName"
              label="User name"
              name="userName"
              autoComplete="user-name"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
          <Typography alignItems={"center"} mb={'2vh'}>OR</Typography>
          <Button startIcon={<GoogleIcon />} variant={"outlined"} color={"inherit"} fullWidth onClick={handleSingInGoogle} >
            Google
          </Button>
          </Box>
      </Container>       
    </ThemeProvider >
  { code == 'Credentials Error' && <Alert severity="error" sx={{ mb: 2 }}
  >
    {code}: enter another credentials
  </Alert>}
<Copyright sx={{ mt: 8, mb: 4 }} />
  </Box >


}



