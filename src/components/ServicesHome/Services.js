import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ServicesCard from "./ServicesCard";

import { Typography } from "@mui/material";
import CardFlip from "../Card/CardFlip";

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(2),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));

export default function Services() {
  return (
    <Box>
      <Grid
        sx={{
          display: "flex",
          flexWrap: "wrap",
          p: 1,
          m: 1,
          gap: 2,
          borderRadius: 1,
          justifyContent: "center",
        }}
      >
        <Grid sx={{ width: { xs: "90%", md: "30%" } }}>
          <CardFlip
            serviceName="Security"
            discription={`If you are going to use a passage of Lorem Ipsum, you need to be
            sure there isn't anything embarrassing hidden in the middle of text.
            All the Lorem Ipsum generators on the Internet tend to repeat
            predefined chunks as necessary.`}
          />
        </Grid>
        <Grid sx={{ width: { xs: "90%", md: "30%" } }}>
          <CardFlip
            serviceName="Security"
            discription={`If you are going to use a passage of Lorem Ipsum, you need to be
            sure there isn't anything embarrassing hidden in the middle of text.
            All the Lorem Ipsum generators on the Internet tend to repeat
            predefined chunks as necessary.`}
          />
        </Grid>
        <Grid sx={{ width: { xs: "90%", md: "30%" } }}>
          <CardFlip
            serviceName="Security"
            discription={`If you are going to use a passage of Lorem Ipsum, you need to be
            sure there isn't anything embarrassing hidden in the middle of text.
            All the Lorem Ipsum generators on the Internet tend to repeat
            predefined chunks as necessary.`}
          />
        </Grid>
        <Grid sx={{ width: { xs: "90%", md: "30%" } }}>
          <CardFlip
            serviceName="Security"
            discription={`If you are going to use a passage of Lorem Ipsum, you need to be
            sure there isn't anything embarrassing hidden in the middle of text.
            All the Lorem Ipsum generators on the Internet tend to repeat
            predefined chunks as necessary.`}
          />
        </Grid>
        <Grid sx={{ width: { xs: "90%", md: "30%" } }}>
          <CardFlip
            serviceName="Security"
            discription={`If you are going to use a passage of Lorem Ipsum, you need to be
            sure there isn't anything embarrassing hidden in the middle of text.
            All the Lorem Ipsum generators on the Internet tend to repeat
            predefined chunks as necessary.`}
          />
        </Grid>
        <Grid sx={{ width: { xs: "90%", md: "30%" } }}>
          <CardFlip
            serviceName="Security"
            discription={`If you are going to use a passage of Lorem Ipsum, you need to be
            sure there isn't anything embarrassing hidden in the middle of text.
            All the Lorem Ipsum generators on the Internet tend to repeat
            predefined chunks as necessary.`}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
