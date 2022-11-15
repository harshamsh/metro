import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ServicesCard from "./ServicesCard";
import WaiterImg from "../../assets/services/waiterImg.jpg";
import SecurityImg from "../../assets/services/securityImg.jpg";
import BartenderImg from "../../assets/services/bartenderImg.jpg";
import KitchenImg from "../../assets/services/kitchenImg.jpg";
import RoomServiceImg from "../../assets/services/roomservice.jpg";
import ReceptionistImg from "../../assets/services/receptionist.jpg";
import HousekeepingImg from "../../assets/services/housekeeping.jpg";
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
            serviceName="Waiter"
            image={WaiterImg}
            discription={`Upon arrival, greet visitors and direct them to their table. Take precise orders, and provide suggestions. bringing food and beverages to the table in a timely way. After the lunch, check in with the guests to make sure they enjoyed it and were addressing any issues. Customers should be contacted to verify that any concerns are handled properly. Maintain a spotless appearance in the dining rooms by clearing and replacing tables.`}
          />
        </Grid>
        <Grid sx={{ width: { xs: "90%", md: "30%" } }}>
          <CardFlip
            serviceName="Bartender"
            image={BartenderImg}
            discription={`Show brand and product expertise to provide clients with professional and useful advice. Keep all of your unit's displays up to brand standards. Reach daily and shift-specific spending, waste, and portion management goals consistently. Maintain impeccable aesthetic and cleaning standards across your workspace.`}
          />
        </Grid>
        <Grid sx={{ width: { xs: "90%", md: "30%" } }}>
          <CardFlip
            serviceName="Kitchen Assistant / Porters"
            image={KitchenImg}
            discription={`Assisting the Chef and Assistant Chef in the kitchen with some basic tasks. 
            assisting in making sure that our residents have nice meals every day. assisting with the 
            simple meal preparation and serving for residents. Maintaining order and cleanliness in the kitchen and dining room.`}
          />
        </Grid>
        <Grid sx={{ width: { xs: "90%", md: "30%" } }}>
          <CardFlip
            serviceName="Housekeeping / Room Attendants"
            image={HousekeepingImg}
            discription={`Cleaning must be done, and any safety risks must be reported to the homeowner
             or management in control. They have to perform things like sweep, vacuum, empty trash cans,
              dust bookshelves, wash windows, and mop floors. 
            Housekeepers interact with residents, visitors, and other housekeeping and maintenance personnel.`}
          />
        </Grid>
        <Grid sx={{ width: { xs: "90%", md: "30%" } }}>
          <CardFlip
            serviceName="Receptionsit"
            image={ReceptionistImg}
            discription={`Common responsibilities such as managing deliveries, guests, and the online booking system. 
            Sort and scan mail as needed, then arrange for the management of home and culinary supplies. Responder to 
            calls on the front line. meeting spaces, general upkeep of the spaces, and assistance during meetings. 
            First Aider and Fire Warden. `}
          />
        </Grid>
        <Grid sx={{ width: { xs: "90%", md: "30%" } }}>
          <CardFlip
            serviceName="Room Service"
            image={RoomServiceImg}
            discription={`In-room dining Customers' orders are delivered by servers who work at hotels. 
            These workers are responsible for keeping inventory, accepting orders, 
            executing the manager's chores, being courteous to visitors, picking up trash, and replenishing minibars.`}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
