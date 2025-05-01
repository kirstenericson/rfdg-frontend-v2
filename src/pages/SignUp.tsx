import { useAuth } from "../auth/AuthProvider";
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Divider from '@mui/material/Divider';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import MuiCard from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import { useState } from "react";
import { FormHelperText } from '@mui/material';

import "../App.css";
import { InputLabel, Menu, MenuItem } from "@mui/material";
// import ForgotPassword from './components/ForgotPassword';
// import AppTheme from '../shared-theme/AppTheme';
// import ColorModeSelect from '../shared-theme/ColorModeSelect';
// import { GoogleIcon, FacebookIcon, SitemarkIcon } from './components/CustomIcons';

const Card = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: 'auto',
  [theme.breakpoints.up('sm')]: {
    maxWidth: '450px',
  },
  boxShadow:
    'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
  ...theme.applyStyles('dark', {
    boxShadow:
      'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
  }),
}));

const SignInContainer = styled(Stack)(({ theme }) => ({
  height: 'calc((1 - var(--template-frame-height, 0)) * 100dvh)',
  minHeight: '100%',
  padding: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(4),
  },
  '&::before': {
    content: '""',
    display: 'block',
    position: 'absolute',
    zIndex: -1,
    inset: 0,
    backgroundImage:
      'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
    backgroundRepeat: 'no-repeat',
    ...theme.applyStyles('dark', {
      backgroundImage:
        'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
    }),
  },
}));

export default function SignUp(props: { disableCustomTheme?: boolean }) {
  const [usernameError, setUsernameError] = React.useState(false);
  const [usernameErrorMessage, setUsernameErrorMessage] = React.useState('');
  const [emailError, setEmailError] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');
  const [reenterPasswordError, setReenterPasswordError] = React.useState(false);
  const [reenterPasswordErrorMessage, setReenterPasswordErrorMessage] = React.useState('');
  const [divisionError, setDivisionError] = React.useState(false);
  const [divisionErrorMessage, setDivisionErrorMessage] = React.useState('');
  const [firstNameError, setFirstNameError] = React.useState(false);
  const [firstNameErrorMessage, setFirstNameErrorMessage] = React.useState('');
  const [lastNameError, setLastNameError] = React.useState(false);
  const [lastNameErrorMessage, setLastNameErrorMessage] = React.useState(''); 

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [reenterPassword, setReenterPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [division, setDivision] = useState("");
  const { register, error } = useAuth();
  
  const handleDivChange = (event: SelectChangeEvent) => {
    setDivision(event.target.value as string);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateInputs()){
      register(division, email, firstName, lastName, password, reenterPassword, username);
    }
  };

  const validateInputs = () => {
    
    const email = document.getElementById('email') as HTMLInputElement;
    const username = document.getElementById('username') as HTMLInputElement;
    const password = document.getElementById('password') as HTMLInputElement;
    const reenterPassword = document.getElementById('reenterPassword') as HTMLInputElement;
    const firstName = document.getElementById('firstName') as HTMLInputElement;
    const lastName = document.getElementById('lastName') as HTMLInputElement;
    // const division = document.getElementById('division') 
    console.log(division);
    console.log(email.value);
    console.log(firstName.value);
    console.log(lastName.value);
    console.log(username.value);
    console.log(password.value);
    console.log(reenterPassword.value);
    let isValid = true;
    if (!division || division === "") {
      setDivisionError(true);
      setDivisionErrorMessage('Please select a division.');
      isValid = false;
    } else {
      setDivisionError(false);
      setDivisionErrorMessage('');
    }

    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
      setEmailError(true);
      setEmailErrorMessage('Please enter a valid email address.');
      isValid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage('');
    }

    if (!password.value || password.value.length < 8) {
      setPasswordError(true);
      setPasswordErrorMessage('Password must be at least 8 characters long.');
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage('');
    }

    if (!username.value || username.value.length < 4) {
      setUsernameError(true);
      setUsernameErrorMessage('Username must be at least 4 characters long.');
      isValid = false;
    } else {
      setUsernameError(false);
      setUsernameErrorMessage('');
    }

    if (!reenterPassword.value || reenterPassword.value !== password.value) {
      setReenterPasswordError(true);
      setReenterPasswordErrorMessage('Passwords do not match.');
      isValid = false;
    } else {
      setReenterPasswordError(false);
      setReenterPasswordErrorMessage('');
    }

    if (!firstName.value) {
      setFirstNameError(true);
      setFirstNameErrorMessage('Please enter a valid first name.');
      isValid = false;
    } else {
      setFirstNameError(false);
      setFirstNameErrorMessage('');
    }

    if (!lastName.value) {
      setLastNameError(true);
      setLastNameErrorMessage('Please enter a valid last name.');
      isValid = false;
    } else {
      setLastNameError(false);
      setLastNameErrorMessage('');
    }
    return isValid;
  };

  return (
    <>
    <header className="App-background">
      <CssBaseline enableColorScheme />
      <SignInContainer direction="column" justifyContent="space-between">

        <Card variant="outlined">

          <Typography
            component="h1"
            variant="h4"
            sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
          >
            Sign up
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              gap: 2,
            }}
          >
            <FormControl>
              <FormLabel htmlFor="email">Enter your email</FormLabel>
              <TextField
                error={emailError}
                helperText={emailErrorMessage}
                id="email"
                type="email"
                name="email"
                placeholder="youremail@gmail.com"
                autoComplete="email"
                autoFocus
                required
                fullWidth
                variant="outlined"
                color={emailError ? 'error' : 'primary'}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="firstName">Enter your first name</FormLabel>
              <TextField
                required
                error={firstNameError}
                helperText={firstNameErrorMessage}
                id="firstName"
                type="firstName"
                name="firstName"
                placeholder="ex: John"
                autoComplete="firstName"
                autoFocus
                fullWidth
                variant="outlined"
                color={firstNameError ? 'error' : 'primary'}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="lastName">Enter your last name</FormLabel>
              <TextField
                error={lastNameError}
                helperText={lastNameErrorMessage}
                id="lastName"
                type="lastName"
                name="lastName"
                placeholder="ex: Smith"
                autoComplete="lastName"
                autoFocus
                required
                fullWidth
                variant="outlined"
                color={lastNameError ? 'error' : 'primary'}
                onChange={(e) => setLastName(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="division">Enter your division (can be changed later)</FormLabel>
              
              <Select
                error={divisionError}
                //helperText={divisionErrorMessage}
                id="division"
                type="division"
                name="division"
                value = {division}
                required
                fullWidth
                variant="outlined"
                color={divisionError ? 'error' : 'primary'}
                onChange={handleDivChange}
              >
                <MenuItem value="Intermediate">Intermediate</MenuItem>
                <MenuItem value="Advanced">Advanced</MenuItem>
                <MenuItem value="Open">Open</MenuItem>
                <MenuItem value="Women's Amateur">Women's Amateur</MenuItem>
                <MenuItem value="Women's Open">Women's Open</MenuItem>
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="username">Create a username</FormLabel>
              <TextField
                error={usernameError}
                helperText={usernameErrorMessage}
                id="username"
                type="username"
                name="username"
                placeholder="ex: DiscGolfer123"
                autoComplete="username"
                autoFocus
                required
                fullWidth
                variant="outlined"
                color={usernameError ? 'error' : 'primary'}
                onChange={(e) => setUsername(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">Create a password</FormLabel>
              <TextField
                error={passwordError}
                helperText={passwordErrorMessage}
                name="password"
                placeholder="••••••••"
                type="password"
                id="password"
                autoComplete="current-password"
                autoFocus
                required
                fullWidth
                variant="outlined"
                color={passwordError ? 'error' : 'primary'}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="reenterPassword">Re-type password</FormLabel>
              <TextField
                error={reenterPasswordError}
                helperText={reenterPasswordErrorMessage}
                name="reenterPassword"
                placeholder="••••••••"
                type="password"
                id="reenterPassword"
                autoComplete="current-password"
                autoFocus
                required
                fullWidth
                variant="outlined"
                color={reenterPasswordError ? 'error' : 'primary'}
                onChange={(e) => setReenterPassword(e.target.value)}
              />
            </FormControl>
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={validateInputs}
            >
              Sign up
            </Button>
          </Box>
        </Card>
      </SignInContainer>
      </header>
    </>
  );
}