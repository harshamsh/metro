import { Box, Button, Grid, Typography } from "@mui/material";
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
        <div style={{ textAlign: "justify" }}>{props.content}</div>
        <div>
          <div style={{ marginTop: 20 }}>
            <h5>Want to Join Salus?</h5>
          </div>
          <div>
            We can discover a job that works for you, whether you want full-time
            hours or simply a career stopgap. Come to one of our front of house
            onboarding seminars if you're not sure if the hospitality industry
            is right for you. We'll help you develop your abilities and get
            ready for your first shift.
            <br />
            With fantastic shift possibilities and personal perks, we think we
            can provide you more than simply a means to a goal, making your time
            with Salus the best it can be.
          </div>
        </div>
        <Button
          variant="outlined"
          component={Link}
          to="/staff"
          style={{
            margin: 20,

            borderColor: "white",
            color: "white",
          }}
        >
          <Typography
            sx={{
              fontSize: 14,
              ":hover": { fontSize: 17 },
            }}
          >
            Get Hired
          </Typography>
        </Button>
      </Box>
    </Grid>
  );
}

export default SidebySide;
