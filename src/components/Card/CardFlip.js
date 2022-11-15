import React, { Component, useState } from "react";
import { CardBox, ContainerCard } from "./Card.style";
import SecurityImg from "../../assets/services/securityImg.jpg";
import "./CardFlip.css";
function CardFlip(props) {
  const [isRotated, setIsRotated] = useState(false);

  // const whenClicked = () => {
  //   setIsRotated((rotated) => !rotated);
  // };

  return (
    <ContainerCard>
      <CardBox
        // isRotated={isRotated}
        className={isRotated ? "rotation" : ""}
        onClick={() => setIsRotated(!isRotated)}
      >
        <div
          className="front"
          style={{
            backgroundImage: `linear-gradient(356deg, rgba(77,8,61,1) 0%, rgba(0,0,0,0.4433123591233369) 100%),url(${props.image})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
          }}
        >
          <p className="disable-text-selection ">{props.serviceName}</p>
        </div>
        <div className="back" style={{ overflow: "auto" }}>
          <div>
            <h5 className="disable-text-selection ">{props.serviceName}</h5>
          </div>
          <div className="disable-text-selection " style={{ fontSize: 12 }}>
            {props.discription}
          </div>
        </div>
      </CardBox>
    </ContainerCard>
  );
}

export default CardFlip;
