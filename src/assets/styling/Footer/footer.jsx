import React from 'react'
import styled from 'styled-components';

const Footerdiv = styled.div `
    display : flex;
    align-items : center;
    justify-content : center;
    height : 40px;
    width : 100%;
    background-color : green;
    bottom : 0;
    color : white;
`;

class Footer extends React.Component {
    render () {
        return (
            <Footerdiv>
                <h3>&copy; Syamsul Huda Harisul Muslimin 2024</h3>
            </Footerdiv>
        )
    }
}

export default Footer;