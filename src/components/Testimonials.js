import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonial.css";
// import { Avatar } from "@material-ui/core";
// import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

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
        <h1 style={{ marginBottom: 20 }}>TESTIMONIALS</h1>
        <Slider prevArrow={<PreviousBtn />} nextArrow={<NextBtn />}>
          <Card
            img="https://www.tutorialrepublic.com/examples/images/clients/1.jpg"
            titleName="PAULA WILSON"
            jobTitle="Media Analyst"
            comment="Phasellus vitae suscipit justo. Mauris pharetra feugiat ante id lacinia.
          Etiam faucibus mauris id tempor egestas. Duis luctus turpis at accumsan
          tincidunt. Phasellus risus risus, volutpat vel tellus ac, tincidunt
          fringilla massa. Etiam hendrerit dolor eget rutrum"
          />
          <Card
            img="https://www.tutorialrepublic.com/examples/images/clients/2.jpg"
            titleName="PAULA WILSON"
            jobTitle="Media Analyst"
            comment="Phasellus vitae suscipit justo. Mauris pharetra feugiat ante id lacinia.
        Etiam faucibus mauris id tempor egestargharhas. Duis luctus turpis at accumsan
        tincidunt. Phasellus risus risus, volutpat vel tellus ac, tincidunt
        fringilla massa. Etiam hendrerit dolartharthor eget rutrum"
          />
          <Card
            img="https://www.tutorialrepublic.com/examples/images/clients/3.jpg"
            titleName="PAULA WILSON"
            jobTitle="Media Analyst"
            comment="Phasellus vitae suscipit justo. Mauris pharetra feugiat ante id lacinia.
        Etiam faucibus mauriwrhger5hgestas. Duis luctus turpis at accumsan
        tincidunt. Phasellus risus risusarthasdddddddddddddddddddddddddddddddddddddddddddddrth, volutpat vel tellus ac, tincidunt
        fringilla massa. Etiam hendrerit dolor eget rutrum"
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
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        color: "gray",
      }}
    >
      {/* <Avatar
        imgProps={{ style: { borderRadius: "50%" } }}
        src={img}
        style={{
          width: 120,
          height: 120,
          border: "1px solid lightgray",
          padding: 7,
          marginBottom: 20,
        }}
      /> */}
      <p>{props.comment}</p>
      <p style={{ fontStyle: "italic", marginTop: 25 }}>
        <span style={{ fontWeight: 500, color: "green" }}>PAULA WILSON</span> ,
        Media Analyst
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