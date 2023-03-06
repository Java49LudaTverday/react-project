import { Alert, Avatar, Box, Button, Collapse, Container, createTheme, CssBaseline, IconButton, Link, TextField, ThemeProvider, Typography } from "@mui/material";
import {LockOutlined, Close } from "@mui/icons-material";
import { LoginData } from "../../models/LoginData";
import React from "react";
import { AuthService } from "../../service/AuthService";

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
    messageAlert: any;
    dataFormFn: (dataUser: {userName: any, password: any}) => void
}

export const LoginForm: React.FC <Props> = ({dataFormFn, messageAlert}) => {

    const [openAlert, setOpenAlert] = React.useState(false);
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const userName = data.get('userName');
        const password = data.get('password');
        dataFormFn({userName: userName, password: password});
        if(messageAlert){
            setOpenAlert(true);
        }
        console.log({
          userName: data.get('userName'),
          password: data.get('password'),
        });
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
              name="user name"
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
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
    <Collapse in={openAlert}>
        <Alert
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
          Close me!
        </Alert>
      </Collapse>
        </Box>
  
}