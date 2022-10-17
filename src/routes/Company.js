import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import BusinessIcon from '@mui/icons-material/Business';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import  {db}  from '../firebase';
import { addDoc, collection } from 'firebase/firestore/lite'
import MultipleSelectCheckmarks from '../components/Dropdown';
// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const theme = createTheme();

export default function SignUp() {

    const [role, setRole] = React.useState('');

    const handleChange = (event) => {
      setRole(event.target.value);
    };

    let collectionRef = collection(db, "companydetails")
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log(
    "data retreival", data.get('email'),
    data.get('role')
    );
    addDoc(collectionRef,{
        jobtype: role,
        email: data.get('email'),
       
    }).then(()=>{
        alert('successful')
    })
  };

  return (
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
            <BusinessIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Submit details
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>

            {/* <Grid item xs={12} >
                <FormControl fullWidth required>
                <InputLabel id="demo-simple-select-label">Reqired Services</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="role"
                    value={role}
                    name="role"
                    label="Reqired Services"
                    onChange={handleChange}
                >
                    <MenuItem value={'Waiter/Waitress'}>Waiter/Waitress</MenuItem>
                    <MenuItem value={'Kitchen Assistant/Porters'}>Kitchen Assistant/Porters</MenuItem>
                    <MenuItem value={'Room Service'}>Room Service</MenuItem>
                    <MenuItem value={'House Keeping/Attendance'}>House Keeping/Attendance</MenuItem>
                    <MenuItem value={'Bar tender/Barbacks'}>Bar tender/Barbacks</MenuItem>
                    <MenuItem value={'Security'}>Security</MenuItem>
                </Select>
                </FormControl>
            </Grid> */}
            
           
            <MultipleSelectCheckmarks/>
           
           
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Company name"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              {/* <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid> */}
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                {/* <Link to="/staff" variant="body2">
                  looking for a job?
                </Link> */}
              </Grid>
            </Grid>
          </Box>
        </Box>
        
      </Container>
    </ThemeProvider>
  );
}