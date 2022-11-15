import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import imageSrc from "../assets/home12.jpg";

function About() {
  return (
    <div>
      <Box
        style={{
          display: "flex",
        }}
      >
        <Grid>
          <Typography sx={{ color: { xs: "red", md: "blue" } }}>
            We both work hard and have a love for what we do. We strive to
            instil the same enthusiasm in our candidates since our working
            relationship is mutually beneficial. Whether a candidate has worked
            with us for years or is just beginning to take hesitant steps toward
            their first shift, we will be there to help them every step of the
            way. <br />
            We take great pride in cooperating with each and every one of our
            clients and applicants. We are proud of each and every one of our
            applicants since they are an extension of us and a representative of
            us in the business. We take pride in helping our clients with their
            operations, which can occasionally be difficult. We will always do
            our hardest to help and support both applicants and clients.
          </Typography>
        </Grid>
        {/* <Grid style={{ width: "50%", height: "100vh" }}>
          <img src={imageSrc} alt="BigCo Inc. logo" />
        </Grid> */}
      </Box>
    </div>
  );
}

export default About;
