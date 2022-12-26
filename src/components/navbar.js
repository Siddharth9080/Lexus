import React, {useState} from "react";
import styled from "styled-components";
import navLogo from "../Pictures/navLogo.png"

const navbar = () => {
    
    return(
        <Container>
            <Logo>
                <a href="/">
                    <img src={navLogo}
                    alt="" />
                </a>
            </Logo>
            <Menu>
                <p>Lexus ES300h</p>
                <p>Lexus LS500h</p>
                <p>Lexus LC500h</p>
                <p>Lexus RX450hL</p>
                <p>Lexus LX500d</p>
            </Menu>
        </Container>
    )
}

export default navbar

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    background-color:rgba(255,255,255,0.25);
`

const Logo = styled.div`
    padding-right: 40px;
`

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex:1;

    a{
        font-size: 14px;
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 20px;
        flex-wrap: nowrap;
    }

    @media(max-width: 1020px){
        display: none;
    }
    p{
        margin-left:20px;
        margin-right:20px;
    }
`
