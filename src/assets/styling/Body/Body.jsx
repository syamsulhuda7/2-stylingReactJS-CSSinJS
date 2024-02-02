import React from "react";
import Carousel from "./carousel";
import Card from "./card";
import styled from "styled-components";

const Cards = styled.div`
    margin: 30px;
    display: flex;
    justify-content: space-around;
`;

class Body extends React.Component {
  render() {
    return (
      <div>
        <Carousel />
        <Cards>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Cards>
      </div>
    );
  }
}

export default Body;
