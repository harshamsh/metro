import styled from "styled-components";
import img from "../../assets/home1.jpg";

export const ContainerCard = styled.div`
  margin: 10px;
  perspective: 700;
  display: flex;
`;

export const CardBox = styled.div`
  width: 100%;
  height: 200px;
  transition: all 1.5s ease;
  transform-style: preserve-3d;
  cursor: pointer;
  margin: 5px;

  &: active {
    transform: rotateY(180deg);
  }
  .back {
    transform: rotateY(180deg);
    background: white;
    color: #490841;
  }
  .front {
    color: white;
  }

  .front{
    position: absolute;
    width: 100%;
    height: 200px;
    border-radius: 10px;
    backface-visibility: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 2px 5px gray;
  }
  }
  .back {
    position: absolute;
    width: 100%;
    height: 200px;
    border-radius: 10px;
    backface-visibility: hidden;
  
    align-items: center;
    justify-content: center;
    box-shadow: 0px 2px 5px gray;
  }
  .back {
    padding: 10px;
  }
`;
