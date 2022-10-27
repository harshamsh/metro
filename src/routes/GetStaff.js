import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import FileUpload from "../components/FileUpload";
import { useState } from "react";
import { storage, db } from "../firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import Header from "../components/Header";
import { addDoc, collection } from "firebase/firestore/lite";
import {
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";

const theme = createTheme();
const names = [
  "Waiter/Waitress",
  "Kitchen Assistant/Porters",
  "Room Service",
  "House Keeping/Attendance",
  "Bar tender/Barbacks",
  "Security",
];
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 400,
    },
  },
};

export default function GetStaff() {
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  let collectionRef = collection(db, "companydetails");
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log("data retreival", data.get("email"), data.get("role"));
    addDoc(collectionRef, {
      jobtype: personName,
      email: data.get("email"),
    }).then(() => {
      alert("successful");
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={3}
          md={6}
          sx={{
            backgroundImage: `linear-gradient(356deg, rgba(77,8,61,1) 0%, rgba(0,0,0,0.4433123591233369) 100%),url(https://source.unsplash.com/random)`,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></Grid>
        <Grid item xs={12} sm={9} md={6} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Submit your details
            </Typography>

            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <Grid item xs={12}>
                <FormControl fullWidth required>
                  <InputLabel id="demo-multiple-checkbox-label">
                    Required services
                  </InputLabel>
                  <Select
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    name="role"
                    value={personName}
                    onChange={handleChange}
                    input={<OutlinedInput label="Required services" />}
                    renderValue={(selected) => selected.join(", ")}
                    MenuProps={MenuProps}
                  >
                    {names.map((name) => (
                      <MenuItem key={name} value={name}>
                        <Checkbox checked={personName.indexOf(name) > -1} />
                        <ListItemText primary={name} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Your Full Name"
                name="name"
                autoComplete="full name"
                autoFocus
              />
              {/* <TextField
                    
                    name="number"
                    label="number"
                    type="number"
                    id="number"
                    autoComplete="phone-number"
                /> */}
              <TextField
                margin="normal"
                required
                fullWidth
                name="number"
                id="number"
                label="Mobile Number"
                inputProps={{
                  inputMode: "numeric",
                }}
              />
              {/* <Grid item xs={12} name="file" requried>

              <input type='file' required />
              </Grid> */}

              {/* <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              /> */}

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              {/* <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid> */}
              {/* <Copyright sx={{ mt: 5 }} /> */}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
