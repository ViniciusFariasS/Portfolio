import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { AuthContext } from "../contexts/auth"
import Container from "./Container";
import logo from "../assets/images/VFS.png"

export default function Menu() {
    const { signOut } = useContext(AuthContext);
    return (
        <MENU>
            <nav>
                <Link to="/">
                    <img src={logo} alt="Logo" />
                </Link>
                <Container>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/aboutMe">Sobre mim</Link>
                        </li>
                        <li>
                            <Link to="/projects">Projetos</Link>
                        </li>
                        <li>
                            <Link to="#">Habilidades</Link>
                        </li>
                    </ul>
                </Container>
                <button onClick={signOut}>Sair</button>
            </nav>
        </MENU>
    )
}


const MENU = styled.div`
    nav {
    background-color: #5dc6d9;
    border-bottom: solid 5px #FFFFFF;
    height: 75px;
    display: flex;
    justify-content: space-between;
    align-items: center;
        img{
            width: 80px;
        }
        ul{
            display: flex;
            list-style: none;
            align-items: center;
            li{
                margin-left: 50px;
                a{
                    text-decoration: none;
                    color: #FFFFFF;

                    &:hover{
                        color:#2294b2;
                    }
                }
            }
        }
        button{
            width: 50px;
            height: 30px;
            border: 0;
            border-radius: 5px;
            padding: 5px;            
            background-color: #98f8ff;
            color: #2294b2;
            margin-right: 20px;
            
            &:hover{
                background-color: #7bdfec;
                color: #FFFFFF;
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