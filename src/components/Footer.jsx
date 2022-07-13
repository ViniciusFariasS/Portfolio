import React from "react";
import styled from "styled-components";

export default function Footer() {
    return (
        <FOOTER>
            <div className="SocialMedia">
                <span >1</span>
                <span >2</span>
                <span >3</span>
            </div>
            <div>
                <span>TESTE</span>
            </div>
        </FOOTER>
    )
}

const FOOTER = styled.footer`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #5dc6d9;
height: 150px;
width: 100%;
border-top: solid 5px #FFFFFF;
position: absolute;
bottom: 0;
    .SocialMedia{
        span{
            color: #FFFFFF;
            padding: 15px;
        }
        span:hover{
            color: #40adc5;
        }
    }
`