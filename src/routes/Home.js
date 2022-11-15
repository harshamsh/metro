import { Button, Card, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Background from "../assets/home1.jpg";
import HomeAbout from "../assets/home3.jpg";
import { Box } from "@mui/system";
import "./Home.css";
import About from "./About";
import SidebySide from "../components/SidebySide";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import Services from "../components/ServicesHome/Services";
import CardFlip from "../components/Card/CardFlip";
import { CardBox } from "../components/Card/Card.style";
function Home() {
  return (
    <div style={{ overflowX: "hidden" }}>
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
          <Box
            sx={{
              fontSize: "60px",
              fontFamily: "Lexend Deca",
              textAlign: "center",
            }}
          >
            Salus Hospitality
          </Box>
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <p
              style={{
                fontSize: "20px",
                textAlign: "center",
                margin: 20,
                marginLeft: 50,
                marginRight: 50,
              }}
            >
              A specialised recruiting firm, Salus Hospitality is committed to
              providing the finest temporary employees to the hospitality
              sector. By collaborating with our customers to deliver exceptional
              service, support, and consultation, our knowledgeable team of
              industry specialists is driven to make a difference and raise
              standards throughout the sector.
              {/* We are hospitality ambassadors, providing simple and consultative
              recruitment solutions to employers and candidates.  */}
            </p>
          </Box>

          <Box>
            <Button
              component={Link}
              to="/company"
              style={{
                margin: 10,
                borderColor: "#540B0D",
                color: "#540B0D",
                backgroundColor: "white",
              }}
            >
              <Typography
                sx={{
                  fontSize: 12,
                  ":hover": { fontSize: 15 },
                }}
              >
                Get Staff
              </Typography>
            </Button>
          </Box>
        </Box>
      </Grid>
      {/* <About /> */}
      <SidebySide
        id="about"
        sideImg={HomeAbout}
        heading={"About Salus"}
        content={` We both work hard and have a love for what we do. We strive to
        instil the same enthusiasm in our candidates since our working
        relationship is mutually beneficial. Whether a candidate has worked
        with us for years or is just beginning to take hesitant steps toward
        their first shift, we will be there to help them every step of the
        way. 
       
        We take great pride in cooperating with each and every one of our
        clients and applicants. We are proud of each and every one of our
        applicants since they are an extension of us and a representative of
        us in the business. We take pride in helping our clients with their
        operations, which can occasionally be difficult. We will always do
        our hardest to help and support both applicants and clients.`}
      />
      <Grid id="services" sx={{ paddingTop: 10 }}>
        <Typography
          sx={{
            textAlign: "center",
            fontFamily: "Lexend Deca",
            color: "#490841",
          }}
        >
          <h1 className="disable-text-selection"> Services</h1>
        </Typography>
        <Services />
      </Grid>
      <Grid id="testimonials" sx={{ paddingTop: 10 }}>
        <Testimonials />
      </Grid>

      <Box
        className="disable-text-selection"
        id="contact"
        sx={{ bgcolor: "#490841", color: "white" }}
      >
        <Footer />
      </Box>
    </div>
  );
}

export default Home;
