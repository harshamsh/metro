import * as React from "react";
import Avatar from "@mui/material/Avatar";
import { Button } from "@mui/material";
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
import { db, storage } from "../firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import Header from "../components/Header";
import { addDoc, collection } from "firebase/firestore/lite";
import HeaderOut from "../components/HeaderOut";

// function Copyright(props) {
//   return (
//     <Typography
//       variant="body2"
//       color="text.secondary"
//       align="center"
//       {...props}
//     >
//       {"Copyright © "}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{" "}
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }

const theme = createTheme();

export default function SignInSide() {
  const [file, setFile] = useState("");
  const [percent, setPercent] = useState(0);

  async function handleChange(event) {
    setFile(event.target.files[0]);
  }
  let collectionRef = collection(db, "candidateDetails");
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
    addDoc(collectionRef, {
      cvName: file.name,
      candidateName: data.get("candidateName"),
      candidateEmail: data.get("email"),
      mobileNumber: data.get("number"),
    }).then(() => {
      alert("successful");
    });

    // File Uploading Code

    if (!file) {
      alert("Please upload your CV");
    }

    const storageRef = ref(storage, `/files/${file.name}`);

    // progress can be paused and resumed. It also exposes progress updates.
    // Receives the storage reference and the file to upload.
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );

        // update progress
        setPercent(percent);
      },
      (err) => console.log(err),
      () => {
        // download url
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          console.log(url);
        });
      }
    );
  };

  // const handleFile = (e) =>{
  //     const file = e.target[0]?.files[0]
  //     try {
  //     const storageRef = ref(storage, `files/${file.name}`);
  //     uploadBytesResumable(storageRef, file).then(alert('upload succsessful'));
  //     } catch (error) {
  //         alert(error)
  //         if (!file) {alert('no file uploaded') };
  //     }

  //   };

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
                fontSize: "70px",
                // textAlign: "center",
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
                  fontSize: "25px",
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
              We're glad you want to join us
            </Typography>
            <Box
              component="form"
              // noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="candidateName"
                label="Your Full Name"
                name="candidateName"
                autoComplete="full name"
                // autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                // autoFocus
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
              <Grid
                requried
                sx={{
                  marginTop: 2,
                  // display: "flex",
                  // // flexDirection: "row",
                  // alignitems: "stretch",
                }}
              >
                <Typography sx={{ textAlign: "center" }}>
                  Upload Your latest CV
                </Typography>
                <Grid
                  requried
                  xs={12}
                  sx={{ textAlign: "center", marginTop: 2 }}
                >
                  <input
                    requried
                    type="file"
                    onChange={handleChange}
                    accept="/file/*"
                  />

                  {/* <Button variant="contained" component="label">
                    Upload File
                    <input onChange={handleChange} type="file" hidden />
                  </Button> */}
                </Grid>
              </Grid>

              {/* <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              /> */}

              <Button
                type="submit"
                fullWidth
                variant="contained"
                style={{ backgroundColor: "#490841" }}
                sx={{ mt: 3, mb: 2 }}
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
