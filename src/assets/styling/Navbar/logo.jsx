import React from "react";
import styled from "styled-components";

const H1 = styled.h1 `
    color : white;
`;

class Logo extends React.Component {
    render () {
        return (
            <H1>SYAM</H1>
        )
    }
}

export default Logo;