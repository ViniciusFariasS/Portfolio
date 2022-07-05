import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const MENU = styled.div`
    nav {
    background-color: #FF2;
    height: 75px;
    display: flex;
    align-items: center;
        ul{
            display: flex;
            list-style: none;
            li{
                margin-left: 10px;
                a{
                    text-decoration: none;
                }
            }
        }
    }


    @media(max-width: 800px){
        nav {
            background-color: #f2f;
            a{
                color:white
            }
        }
    }
`;

export default function Menu() {
    return (
        <MENU>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="#">#</Link>
                    </li>
                </ul>
            </nav>
        </MENU>
    )
}