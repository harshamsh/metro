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
import Footer from "../components/Footer";
import HeaderOut from "../components/HeaderOut";

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
      companyName: data.get("companyName"),
      employeeName: data.get("employeeName"),
      mobileNumber: data.get("number"),
      companyMessage: data.get("message"),
    }).then(() => {
      alert("successful");
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <HeaderOut />
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={false}
          md={7}
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
        >
          <Grid sx={{ padding: 6 }}>
            <Grid
              sx={{
                fontSize: "80px",
                color: "white",
                marginTop: 10,
                fontFamily: " 'Anton', sans-serif",
              }}
            >
              Be a Part of Our Amazing Team
            </Grid>
            <Grid
              style={{
                display: "flex",
                // justifyContent: "center",
                // alignItems: "center",
                flexDirection: "column",
              }}
            >
              <p
                style={{
                  fontSize: "30px",
                  // textAlign: "center",
                  color: "white",
                  fontFamily: " 'Anton', sans-serif",
                }}
              >
                Work with our diverse range of clients and make way for your
                career
              </p>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={5}
          component={Paper}
          elevation={6}
          square
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar> */}
            <Typography component="h1" variant="h5">
              Let us how we can assist you
            </Typography>
            {/* <Typography fontSize={11}>
              we will get back to you at the earliest
            </Typography> */}

            <Box component="form" W onSubmit={handleSubmit} sx={{ mt: 1 }}>
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
                id="companyName"
                label="Company Name"
                name="companyName"
                autoComplete
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="employeeName"
                label="Your name"
                name="employeeName"
                autoComplete
                autoFocus
              />

              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Company Email Address"
                name="email"
                autoComplete="email"
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
                fullWidth
                name="number"
                id="number"
                label="Mobile Number"
                inputProps={{
                  inputMode: "numeric",
                }}
              />
              <TextField
                margin="normal"
                fullWidth
                name="message"
                id="message"
                label="Message"
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, bgcolor: "#490841" }}
              >
                Submit
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
