import { Button, Card, Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Background from "../assets/home1.jpg";
import HomeAbout from "../assets/home3.jpg";
import { Box } from "@mui/system";

import About from "./About";
import SidebySide from "../components/SidebySide";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import Services from "../components/ServicesHome/Services";
import CardFlip from "../components/Card/CardFlip";
import { CardBox } from "../components/Card/Card.style";
function Home() {
  return (
    <div>
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
                fontSize: "30px",
                textAlign: "center",
              }}
            >
              Our landing page template works on all devices, so you only have
              to set it up once,
              <br /> and get beautiful results forever
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
              Get Staff
            </Button>
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
        </Box>
      </Grid>
      {/* <About /> */}
      <SidebySide
        id="about"
        sideImg={HomeAbout}
        heading={"About Salus"}
        content={` There are many variations of passages of Lorem Ipsum available, but
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
        non-characteristic words etc.`}
      />
      <div>
        <Services />
      </div>

      <Testimonials />
      <Box sx={{ bgcolor: "#490841", color: "white" }}>
        <Footer />
      </Box>
    </div>
  );
}

export default Home;
