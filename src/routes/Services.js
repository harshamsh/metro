import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Header from "../components/Header";
import Background from "../assets/home1.jpg";

function Services() {
  return (
    <Grid>
      <Header />
      <Grid
        id="home"
        style={{
          backgroundImage: `url(${Background})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100vh",
          margin: "none",
        }}
      >
        <Box
          className="content"
          style={{
            height: "100%",
            backgroundColor: " rgba(0,0,0,.7)",
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Box sx={{ fontSize: "80px", textAlign: "center" }}>
            Salus Hospitality
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Services;
