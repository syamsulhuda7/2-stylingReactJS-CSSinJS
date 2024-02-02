import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const Img = styled.div`
  width: 200px;
  height: 200px;
  background-color: #005500;
  border-radius: 10px 10px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  font-weight: bold;
  color: white;
`;

const Capt = styled.div`
  width: 200px;
  height: 130px;
  background-color: #009500;
  border-radius: 0 0 10px 10px;
`;

const Text = styled.p`
  height: 80px;
  padding: 10px;
  font-size: 15px;
  overflow: hidden;
`;

const Divbutton = styled.div`
    margin: 10px 10px 10px 5px;
    height: 30px;
    width: auto;
    display: flex;
    justify-content: end;
`;

const Button = styled.button`
    background-color: whitesmoke;
    border: none;
    font-size: 12px;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
    transition: all.3s ease-in-out;

    &:hover {
        scale: 103%;
    }
`;

class Card extends React.Component {
  render() {
    return (
      <Container>
        <Img>IMAGE</Img>
        <Capt>
          <Text>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Reiciendis, rerum inventore? Ratione incidunt doloribus atque porro
            nulla. Vitae, et. Optio nulla doloribus illum impedit itaque iure,
            dignissimos eaque autem ad?
          </Text>
          <Divbutton>
            <Button>Read more</Button>
          </Divbutton>
        </Capt>
      </Container>
    );
  }
}

export default Card;
