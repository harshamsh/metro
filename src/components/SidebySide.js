import { Box, Button, Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function SidebySide(props) {
  return (
    <Grid
      id={props.id}
      sx={{ display: "flex", flexDirection: { md: "row", xs: "column" } }}
    >
      <Box
        flex={1}
        sx={{
          height: { xs: "100vh" },
          maxHeight: { md: "auto" },
          overflow: "hidden",
        }}
      >
        <img
          src={props.sideImg}
          style={{
            width: "100%",
            height: "100vh",
            objectFit: "cover",
          }}
        />
      </Box>
      <Box
        flex={1}
        sx={{
          padding: 4,
          backgroundColor: "#490841",
          color: "white",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        <div style={{ paddingTop: 30 }}>
          <h1>{props.heading}</h1>
        </div>
        <div>{props.content}</div>
        <Button
          variant="outlined"
          component={Link}
          to="/staff"
          style={{
            margin: 10,

            borderColor: "white",
            color: "white",
          }}
        >
          Get Hired
        </Button>
      </Box>
    </Grid>
  );
}

export default SidebySide;
