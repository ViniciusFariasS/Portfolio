import React, { useState, useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../../contexts/auth";

/*.color1 { #2294b2 };
.color2 { #40adc5 };
.color3 { #5dc6d9 };
.color4 { #7bdfec };
.color5 { #98f8ff };*/

export const LOGIN = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #98f8ff;
`
export const LOGINFORM = styled.form`
    background-color: #2294b2;
    display: flex;
    flex-direction: column;
    padding: 10px;
    border-radius: 10px;
    justify-content: flex-start;
    align-items: center;
    width: 225px;
    height: 300px;
`
export const TITLEFORM = styled.span`
    color:#FFFFFF;
    font-size: 48px;
    margin-top: 25px;
    margin-bottom: 25px;
`

export const INPUT = styled.input`
    padding: 10px;
    border-radius: 5px;
    margin-top: 10px;
    border: none;
`


export const SPAN = styled.span`
    color: #fff;
    margin-top: 10px;
`

export const BUTTON = styled.button`
    width: 50px;
    border: 0;
    border-radius: 5px;
    padding: 5px;
    margin-top: 10px;
    background-color: #98f8ff;
    color: #2294b2;
    
    &:hover{
        background-color: #5dc6d9;
    }
`

export const LINK = styled(Link)`
    margin-top: 20px;
    font-size: 12px;
    color: #FFFFFF;
`

export default function Login() {
    const { signIn, signed } = useContext(AuthContext)

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function loginUser(e) {
        console.log(e)
        await signIn(email, password);
        e.preventDefault();
    }
    if (!signed) {
        return (
            <LOGIN>
                <LOGINFORM>
                    <TITLEFORM>Login</TITLEFORM>
                    <INPUT type="text" placeholder="E-mail" name="Email" onChange={(e) => setEmail(e.target.value)}></INPUT>
                    <INPUT type="password" placeholder="Senha" name="Senha" onChange={(e) => setPassword(e.target.value)}></INPUT>
                    <BUTTON onClick={loginUser}>Entrar</BUTTON>
                    <LINK to="/createUser">Não possui usuário? Cadastre-se</LINK>
                </LOGINFORM>
            </LOGIN>
        )
    } else {
        return <Navigate to="/home" />
    }
}