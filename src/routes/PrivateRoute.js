import React from "react";
import { Navigate } from "react-router-dom";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export const PrivateRoute = ({ element: Element }) => {
    const authToken = sessionStorage.getItem('@AuthFirebase:token')
    return (
        authToken ?
            <>
                <Navbar />
                <Container>
                    <Element />
                </Container>
                <Footer />
            </> : <Navigate to='/login' />
    )
}
