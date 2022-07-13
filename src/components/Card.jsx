import React from "react";
import styled from "styled-components";

export default function Card({ title, content }) {
    return (
        <CARD>
            <div className="title">
                <h3>{title}</h3>
            </div>
            <div className="content">
                <span>{content}</span>
            </div>
        </CARD>
    )
}

const CARD = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 350px;
    align-items: center;
    .title{
        background-color: #40adc5;
        width: 100%;
        text-align: center;
        color:#FFFFFF;
        border-radius: 15px 15px 0 0;
    }
    .content{
        background-color: #98f8ff;
        width: 100%;
        height: 100%;
        border-radius: 0 0 15px 15px;
        color: #40adc5;
            span{
                padding: 15px;
            }
    }
`