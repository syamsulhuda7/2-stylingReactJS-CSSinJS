import React from "react";
import styled from "styled-components";

const Div = styled.div `
    display : flex;
    align-items : center;
`;

const Ul = styled.ul `
display : flex;
gap : 50px;
font-size : 20px;
`;

const Li = styled.li `
    list-style : none;
    cursor : pointer;
    transition : .2s ease-in-out;

    &:hover {
        color : white;
    }
`;

const Input = styled.input `
    margin-left : 30px;
    padding : 5px;
    border-radius : 5px;
`;

const Button = styled.button `
    margin-left : 5px;
    padding : 5px 10px;
    border-radius : 5px;
    cursor : pointer;
    transition : .2s ease-in-out;

    &:hover {
        scale : 105%;
    }
`;

class Menu extends React.Component {
    render () {
        return (
            <Div>
                <Ul>
                    <Li>Home</Li>
                    <Li>Profile</Li>
                    <Li>Contact</Li>
                </Ul>
                <Input type="text" />
                <Button>Log in</Button>
            </Div>
        )
    }
}

export default Menu;