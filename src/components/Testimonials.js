import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonial.css";
// import { Avatar } from "@material-ui/core";
// import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import RaisingSun from "../assets/testimonials/raisingSun.png";
import RoyalOak from "../assets/testimonials/RoyalOak.png";
import HansomClub from "../assets/testimonials/HansomClub.png";
import { Avatar } from "@mui/material";

const PreviousBtn = (props) => {
  console.log(props);
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIosIcon style={{ color: "gray", fontSize: "45px" }} />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIosIcon style={{ color: "gray", fontSize: "45px" }} />
    </div>
  );
};
const Testimonials = () => {
  return (
    <div
      className="testimonial"
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: 50,
      }}
    >
      <div style={{ width: "50%", textAlign: "center" }}>
        <h1
          style={{
            marginBottom: 20,
            fontFamily: "Lexend Deca",
            color: "#490841",
          }}
          className="disable-text-selection"
        >
          Testimonials from our Clients
        </h1>
        <Slider prevArrow={<PreviousBtn />} nextArrow={<NextBtn />}>
          <Card
            img={RaisingSun}
            titleName="The Raising Sun"
            comment="With Salus, we have established a long-lasting connection. They have 
            consistently been able to meet our needs on short notice as well as when they were scheduled.
             Every team member has always been nice, kind, and helpful in my experience. I have no qualms with recommending their services."
          />
          <Card
            img={RoyalOak}
            titleName="The Royal Oak"
            comment="I personally thought Salus, one of the first agencies we utilised, was exceedingly professional in all facets of their hiring practises. When we needed to fill a key management job, this agency delivered excellent results. I was pleased by their effectiveness, communication skills, and market expertise in the hotel industry. I heartily recommend them."
          />
          <Card
            img={HansomClub}
            titleName="The Hansom Club"
            comment="Our satisfaction with Salus's service is unwavering. They keep the client properly informed and are highly professional. We particularly respect their thorough screening procedure since it guarantees that we will only interview individuals who are completely qualified. They find such people quickly, and they are always of the calibre we want. Excellent client service and communication."
          />
        </Slider>
      </div>
    </div>
  );
};

const Card = (props) => {
  return (
    <div
      style={{
        overflow: "auto",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        color: "gray",
      }}
    >
      <Avatar
        imgProps={{ style: { borderRadius: "50%" } }}
        src={props.img}
        style={{
          width: 120,
          height: 120,
          border: "1px solid lightgray",
          padding: 7,
          marginBottom: 20,
        }}
      />
      <p>{props.comment}</p>
      <p
        style={{
          fontStyle: "italic",
          marginTop: 25,
          fontSize: 20,
          fontWeight: 600,
          color: "#490841",
        }}
      >
        {props.titleName}
      </p>
      {/* <p>
        Phasecgukvvvvvvvvvvvv gyiolpolpolpolpolpolpolpolpolpolpolpolpolp olutpat
        vel tellus ac, tincidunt fringilla massa. Etiam hendrerit dolor eget
        rutrum
      </p>
      <p style={{ fontStyle: "italic", marginTop: 25 }}>
        <span style={{ fontWeight: 500, color: "green" }}>PAULA WILSON</span> ,
        Meaerh
      </p> */}
    </div>
  );
};

export default Testimonials;
