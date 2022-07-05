import React from "react";
import { Navigate } from "react-router-dom";
import Menu from "../components/Menu";

export const PrivateRoute = ({ element: Element }) => {
    const authToken = sessionStorage.getItem('@AuthFirebase:token')
    return (
        authToken ?
            <>
                <Menu />
                <Element />
            </> : <Navigate to='/login' />
    )
}
