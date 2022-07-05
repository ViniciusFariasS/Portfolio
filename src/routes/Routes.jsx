import React from "react";
import { Route, Routes } from "react-router-dom";
import CreateUser from "../pages/user/CreateUser";
import styled from "styled-components";
import Home from "../pages/Home";
import Login from "../pages/user/Login";
import { Navigate } from "react-router-dom";
import Menu from "../components/Menu";

export const MAIN = styled.main`
    display: flex;
    background-color: #f2f2f2;
    height: 100vh;
`
const PrivateRoute = ({ element: Element }) => {
    const authToken = sessionStorage.getItem('@AuthFirebase:token')
    return (
        authToken ?
            <>
                <Menu />
                <Element />
            </> : <Navigate to='/login' />
    )
}

export default function RoutesConfig() {
    return (
        <MAIN>
            <Routes>
                <Route exact path="/home" element={<PrivateRoute element={Home} />} />
                <Route exact path="/createUser" element={<CreateUser />} />
                <Route exact path="/login" element={<Login />} />
            </Routes>
        </MAIN>
    )
}