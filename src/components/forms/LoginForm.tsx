import { Alert, Avatar, Box, Button,  Container, createTheme, CssBaseline, IconButton, Link, TextField, ThemeProvider, Typography } from "@mui/material";
import { LockOutlined, Close } from "@mui/icons-material";
import { LoginData } from "../../models/LoginData";
import React, { useRef, useState } from "react";


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
  dataFormFn: (dataUser: LoginData) => string
}

export const LoginForm: React.FC<Props> = ({ dataFormFn }) => {

  const [openAlert, setOpenAlert] = useState(false);
  const messageError = useRef('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const userData: LoginData = {
      username: data.get('userName') as string,
      password: data.get('password') as string
    }
    messageError.current = dataFormFn(userData);
    console.log(messageError.current);
    if (messageError.current) {
      setOpenAlert(true);
      setTimeout(()=> {
        setOpenAlert(false)
      }, 3000)
    } 
    
  };
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
          <Typography component="h1" variant="h5">
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
        </Box>
      </Container>
    </ThemeProvider>
     {openAlert && <Alert severity="error" 
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={() => {
              setOpenAlert(false);
            }}
          >
            <Close fontSize="inherit" />
          </IconButton>
        }
        sx={{ mb: 2 }}
      >
        {messageError.current}
      </Alert>} 
    <Copyright sx={{ mt: 8, mb: 4 }} />
  </Box>

}