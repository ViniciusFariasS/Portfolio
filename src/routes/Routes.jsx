import React from "react";
import { Route, Routes } from "react-router-dom";
import CreateUser from "../pages/user/CreateUser";
import styled from "styled-components";
import Home from "../pages/Home";
import Login from "../pages/user/Login";
import { PrivateRoute } from "./PrivateRoute";
import AboutMe from "../pages/AboutMe";
import Projects from "../pages/Projects";

export default function RoutesConfig() {
    return (
        <MAIN>
            <Routes>
                <Route exact path="/" element={<PrivateRoute element={Home}/>} />
                <Route exact path="/aboutMe" element={<PrivateRoute element={AboutMe}/>} />
                <Route exact path="/projects" element={<PrivateRoute element={Projects}/>} />                
                <Route exact path="/createUser" element={<CreateUser />} />
                <Route exact path="/login" element={<Login />} />
            </Routes>
        </MAIN>
    )
}

const MAIN = styled.main`
    display: flex;
    flex-direction: column;
    background-color: #f2f2f2;
    height: 100vh;
`