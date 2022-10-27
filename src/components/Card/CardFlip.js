import React, { Component, useState } from "react";
import { CardBox, ContainerCard } from "./Card.style";
import SecurityImg from "../../assets/services/securityImg.jpg";

function CardFlip(props) {
  return (
    <ContainerCard>
      <CardBox>
        <div
          className="front"
          style={{
            backgroundImage: `linear-gradient(356deg, rgba(77,8,61,1) 0%, rgba(0,0,0,0.4433123591233369) 100%),url(${SecurityImg})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",

            backgroundPosition: "center",
          }}
        >
          {props.serviceName}
        </div>
        <div className="back">{props.discription}</div>
      </CardBox>
    </ContainerCard>
  );
}

export default CardFlip;
