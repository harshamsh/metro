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
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            to repeat predefined chunks as necessary, making this the first true
            generator on the Internet. It uses a dictionary of over 200 Latin
            words, combined with a handful of model sentence structures, to
            generate Lorem Ipsum which looks reasonable. The generated Lorem
            Ipsum is therefore always free from repetition, injected humour, or
            non-characteristic words etc.
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
