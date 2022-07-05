
import { createContext, useEffect, useState } from "react";
import { app } from "../services/firebaseConfig";
import React from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Navigate } from 'react-router-dom';


export const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const loadStorageAuth = () => {
            const sessionToken = sessionStorage.getItem("@AuthFirebase:token");
            const sessionUser = JSON.parse(sessionStorage.getItem("@AuthFirebase:user"));
            if (sessionToken && sessionUser) {
                setUser(sessionUser);
            }
        };
        loadStorageAuth();
    }, [])

    useEffect(() => {
        const loadStorageAuth = () => {
            const sessionToken = sessionStorage.getItem("@AuthFirebase:token");
            const sessionUser = JSON.parse(sessionStorage.getItem("@AuthFirebase:user"));
            if (sessionToken && sessionUser) {
                setUser(sessionUser);
            }
        };
        loadStorageAuth();
    }, [])

    const signIn = (email, password) => {     
        setUser("teste");   
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                const token = user.accessToken;
                setUser(user);

                sessionStorage.setItem("@AuthFirebase:token", token);
                sessionStorage.setItem("@AuthFirebase:user", JSON.stringify(user));
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }


    // const signInGoogle = () => {
    //     signInWithPopup(auth, provider)
    //         .then((result) => {
    //             const credential = GoogleAuthProvider.credentialFromResult(result);
    //             const token = credential.accessToken;
    //             const user = result.user;
    //             setUser(user);
    //             sessionStorage.setItem("@AuthFirebase:token", token);
    //             sessionStorage.setItem("@AuthFirebase:user", JSON.stringify(user));
    //         })
    //         .catch((error) => {
    //             const errorCode = error.code;
    //             const errorMessage = error.message;
    //             const email = error.customData.email;
    //             const credential = GoogleAuthProvider.credentialFromError(error);
    //         });
    // };

    // function signOut() {
    //     sessionStorage.clear()
    //     setUser(null);

    //     return window.location.reload();
    // }

    return (//se não tiver usuário retorna falso, se tiver retorna true.
        <AuthContext.Provider
            value={{ signIn, signed: !!user, user }}>
            {children}
        </AuthContext.Provider>
    )
}