// import * as React from "react";
// import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
// import CssBaseline from "@mui/material/CssBaseline";
// import TextField from "@mui/material/TextField";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
// import ListItemText from "@mui/material/ListItemText";
// import Grid from "@mui/material/Grid";
// import Box from "@mui/material/Box";
// import OutlinedInput from "@mui/material/OutlinedInput";
// import BusinessIcon from "@mui/icons-material/Business";
// import Typography from "@mui/material/Typography";
// import Container from "@mui/material/Container";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { Card, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
// import { db } from "../firebase";
// import { addDoc, collection } from "firebase/firestore/lite";
// import Header from "../components/Header";
// import MultipleSelectCheckmarks from "../components/Dropdown";

// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 250,
//     },
//   },
// };
// const theme = createTheme();
// const names = [
//   "Waiter/Waitress",
//   "Kitchen Assistant",
//   "Room Service",
//   "House Keeping",
//   "Receptionist",
//   "Bartenders",
// ];
// export default function SignUp() {
//   const [personName, setPersonName] = React.useState([]);

//   const handleChange = (event) => {
//     const {
//       target: { value },
//     } = event;
//     setPersonName(
//       // On autofill we get a stringified value.
//       typeof value === "string" ? value.split(",") : value
//     );
//   };

//   let collectionRef = collection(db, "companydetails");
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     console.log("data retreival", data.get("email"), data.get("role"));
//     addDoc(collectionRef, {
//       jobtype: personName,
//       email: data.get("email"),
//       email: data.get("email"),
//       email: data.get("email"),
//     }).then(() => {
//       alert("successful");
//     });
//   };

//   return (
//     <Grid sx={{ bgcolor: "#490841", height: "100vh" }}>
//       <Header />
//       <ThemeProvider theme={theme}>
//         <Card
//           sx={{
//             marginTop: "25px",
//             bgcolor: "white",
//             borderRadius: 3,
//             maxWidth: "450px",
//             mx: "auto",
//             px: 4,
//           }}
//           elevation={5}
//         >
//           <CssBaseline />
//           <Box
//             sx={{
//               marginTop: 2,
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//             }}
//           >
//             <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
//               <BusinessIcon />
//             </Avatar>
//             <Typography component="h1" variant="h5">
//               Submit details
//             </Typography>
//             <Box
//               component="form"
//               noValidate
//               onSubmit={handleSubmit}
//               sx={{ mt: 3 }}
//             >
//               <Grid container spacing={2}>
//                 <Grid item xs={12}>
//                   <FormControl fullWidth required>
//                     <InputLabel id="demo-multiple-checkbox-label">
//                       Required services
//                     </InputLabel>
//                     <Select
//                       labelId="demo-multiple-checkbox-label"
//                       id="demo-multiple-checkbox"
//                       multiple
//                       name="role"
//                       value={personName}
//                       onChange={handleChange}
//                       input={<OutlinedInput label="Required services" />}
//                       renderValue={(selected) => selected.join(", ")}
//                       MenuProps={MenuProps}
//                     >
//                       {names.map((name) => (
//                         <MenuItem key={name} value={name}>
//                           <Checkbox checked={personName.indexOf(name) > -1} />
//                           <ListItemText primary={name} />
//                         </MenuItem>
//                       ))}
//                     </Select>
//                   </FormControl>
//                 </Grid>

//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     autoComplete="given-name"
//                     name="firstName"
//                     required
//                     fullWidth
//                     id="firstName"
//                     label="First Name"
//                     autoFocus
//                   />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     required
//                     fullWidth
//                     id="lastName"
//                     label="Last Name"
//                     name="lastName"
//                     autoComplete="family-name"
//                   />
//                 </Grid>
//                 <Grid item xs={12}>
//                   <TextField
//                     required
//                     fullWidth
//                     id="companyName"
//                     label="Company name"
//                     name="companyName"
//                     autoComplete="Company Name"
//                   />
//                 </Grid>
//                 <Grid item xs={12}>
//                   <TextField
//                     required
//                     fullWidth
//                     id="email"
//                     label="Email Address"
//                     name="email"
//                     autoComplete="email"
//                   />
//                 </Grid>

//                 {/* <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   name="password"
//                   label="Password"
//                   type="password"
//                   id="password"
//                   autoComplete="new-password"
//                 />
//               </Grid> */}
//                 <Grid item xs={12}>
//                   <FormControlLabel
//                     control={
//                       <Checkbox value="allowExtraEmails" color="primary" />
//                     }
//                     label="I want to receive inspiration, marketing promotions and updates via email."
//                   />
//                 </Grid>
//               </Grid>
//               <Button
//                 type="submit"
//                 fullWidth
//                 variant="contained"
//                 sx={{ mt: 3, mb: 2,  }}
//               >
//                 Submit
//               </Button>
//               <Grid container justifyContent="flex-end">
//                 <Grid item>
//                   {/* <Link to="/staff" variant="body2">
//                   looking for a job?
//                 </Link> */}
//                 </Grid>
//               </Grid>
//             </Box>
//           </Box>
//         </Card>
//       </ThemeProvider>
//     </Grid>
//   );
// }
