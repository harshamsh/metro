import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Link } from "react-router-dom";

export default function ServicesCard(props) {
  return (
    <Card sx={{ maxWidth: 345, backgroundColor: "#490841", borderRadius: 6 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color="#fff2c0">
            {props.service}
          </Typography>
          <Typography variant="body2" color="white">
            {props.content}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ justifyContent: "end" }}>
        <Button component={Link} to={"/services"} size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
}
