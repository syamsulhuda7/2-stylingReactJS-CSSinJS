import React from "react";
import Menu from "./menu";
import Logo from "./logo";
import styled from "styled-components";

const StyleNavbar = styled.div`
    background-color : green;
    padding : 20px;
    display : flex;
    align-items : center;
    justify-content : space-between;
`;

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <StyleNavbar>
          <Logo />
          <Menu />
        </StyleNavbar>
      </div>
    );
  }
}

export default Navbar;
